#!/usr/bin/env python3
"""UEX resale snapshots, with strict capacity semantics and last-good preservation.

Called by GitHub Actions. UEX reports are crowdsourced, not live-terminal guarantees.
Only public sale data is published. UEX_TOKEN (optional) is never sent to the browser.
"""
from __future__ import annotations
import argparse
import datetime as dt
import json
import os
import re
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

API = 'https://api.uexcorp.uk/2.0/'
MAX_RESPONSE_BYTES = 24_000_000
UTC = dt.timezone.utc
# Explicit ore synonyms; case/accents/punctuation are normalized below.
ORE_NAMES = {
 'quantainium': ['quantainium', 'quantanium'], 'stileron':['stileron'],
 'savrilium':['savrilium'],'ouratite':['ouratite'],'riccite':['riccite'],
 'lindinium':['lindinium'],'beryl':['beryl'],'taranite':['taranite'],
 'borase':['borase'],'gold':['gold'],'bexalite':['bexalite'],
 'laranite':['laranite'],'aslarite':['aslarite'],'titanium':['titanium'],
 'tungsten':['tungsten'],'agricium':['agricium'],'torite':['torite'],
 'hephaestanite':['hephaestanite'],'tin':['tin'],'quartz':['quartz'],
 'corundum':['corundum'],'copper':['copper'],'silicon':['silicon'],
 'iron':['iron'],'aluminum':['aluminum', 'aluminium'],
 'ice':['ice', 'pressurized ice']
}
SALVAGE_NAMES={
 'salvage:rmc':['recycled material composite','recycled material composites','rmc'],
 'salvage:cm':['construction materials','construction material','cm']
}

def utcnow(): return dt.datetime.now(UTC).replace(microsecond=0).isoformat().replace('+00:00','Z')

def norm(x):
 import unicodedata
 x=unicodedata.normalize('NFKD',str(x or '')).encode('ascii','ignore').decode().lower()
 x=re.sub(r'\((ore|raw|refined)\)','',x)
 return re.sub(r'[^a-z0-9]','',x)

def nfloat(value, maximum=1e12):
 if value is None or isinstance(value,bool):return None
 try:v=float(value)
 except (TypeError,ValueError):return None
 if not (v == v and 0<=v<=maximum and v!=float('inf')):return None
 return round(v,3)

def ntimestamp(x):
 try:v=int(x)
 except (TypeError,ValueError):return None
 if v<1500000000 or v>time.time()+86400:return None
 return v

def api_get(resource, token='', query=None):
 url=API+resource
 if query: url+='?'+urllib.parse.urlencode(query)
 headers={'User-Agent':'ZTeam-Operations/15.6 (community game prices)', 'Accept':'application/json'}
 if token:headers['Authorization']='Bearer '+token
 req=urllib.request.Request(url,headers=headers)
 with urllib.request.urlopen(req, timeout=35) as reply:
  if int(reply.headers.get('content-length') or 0)>MAX_RESPONSE_BYTES:raise ValueError('UEX: réponse trop volumineuse')
  content=reply.read(MAX_RESPONSE_BYTES+1)
  if len(content)>MAX_RESPONSE_BYTES:raise ValueError('UEX: réponse trop volumineuse')
 root=json.loads(content)
 if not isinstance(root,dict) or root.get('status')!='ok':raise ValueError('UEX: statut non valide '+str(root.get('status') if isinstance(root,dict) else ''))
 data=root.get('data')
 if not isinstance(data,list):raise ValueError('UEX: tableau de données manquant')
 return data

def match_catalog(items):
 mapping={}
 for row in items:
  if not isinstance(row,dict) or not isinstance(row.get('id'),int):continue
  name=norm(row.get('name'))
  flags={key:row.get(key) for key in ('is_refined','is_raw','is_sellable','is_available_live')}
  # UEX flags only guide form selection; unknown flags must not be treated as confirmation.
  if flags['is_sellable'] is not None and str(flags['is_sellable'])=='0':continue
  if flags['is_available_live'] is not None and str(flags['is_available_live'])=='0':continue
  for oid,names in ORE_NAMES.items():
   if name not in [norm(n) for n in names]:continue
   is_raw=str(flags['is_raw'])=='1'
   is_refined=str(flags['is_refined'])=='1'
   if is_raw and not is_refined: key='ore:raw:'+oid
   elif is_refined and not is_raw: key='ore:refined:'+oid
   else:continue # Never guess the physical form when UEX leaves it ambiguous.
   mapping.setdefault(key,{'id':row['id'],'name':row['name']})
  for sid,names in SALVAGE_NAMES.items():
   if name in [norm(n) for n in names] and str(flags['is_raw'])!='1':
    mapping.setdefault(sid,{'id':row['id'],'name':row['name']})
 return mapping

def make_spot(record, raw=False):
 if not isinstance(record,dict):return None
 price=nfloat(record.get('price_sell'),1e9)
 # price_sell is what the PLAYER gets selling, not the price_buy from a trader's perspective
 if price is None or price<=0:return None
 term=str(record.get('terminal_name') or '').strip()
 if not term or len(term)>130:return None
 stamp=ntimestamp(record.get('date_modified'))
 if stamp is None:return None
 demand=nfloat(record.get('scu_sell'),1e9) if not raw else None
 max_observed=nfloat(record.get('scu_sell_max'),1e9) if not raw else None
 stock=nfloat(record.get('scu_sell_stock'),1e9) if not raw else None
 containers=str(record.get('container_sizes') or '')
 allowed=[float(part) for part in re.split(r'[,;|]',containers) if re.fullmatch(r'\d+(?:\.\d+)?',part.strip()) and 0<float(part)<=1024]
 largest_container=max(allowed) if allowed else None
 quality=nfloat(record.get('quality'),1000) if not raw else None
 location={key:str(record.get(key) or '')[:110] for key in ('star_system_name','planet_name','moon_name','space_station_name','outpost_name','city_name')}
 return {'terminal':term,'terminal_id':record.get('id_terminal'),**location,
         'price_scu':price,'demand_scu_est':demand,'max_scu_observed':max_observed,
         'inventory_scu_reported':stock,'max_container_scu':largest_container,'quality':quality,'report_timestamp':stamp,
         'game_version':str(record.get('game_version') or '')[:30],
         'status_sell':record.get('status_sell') if not raw else None}

def refresh(site, fetcher=api_get, token='', now=None):
 now=now or utcnow()
 directory=Path(site)/'data';directory.mkdir(parents=True,exist_ok=True)
 destination=directory/'uex_sales.json'
 status_path=directory/'update_status.json'
 try:status=json.loads(status_path.read_text('utf-8'))
 except (OSError,ValueError):status={}
 status.setdefault('sources',{})
 previous=status['sources'].get('uex',{})
 last_good=destination.is_file()
 try:old_snapshot=json.loads(destination.read_text('utf-8')) if last_good else {}
 except (OSError,ValueError):old_snapshot={}
 try:
  catalog=fetcher('commodities',token)
  found=match_catalog(catalog)
  if not found:raise ValueError('Aucun matériau UEX mappable avec certitude')
  data={}
  failures=[]
  for k,commodity in sorted(found.items()):
   raw=k.startswith('ore:raw:')
   endpoint='commodities_raw_prices' if raw else 'commodities_prices'
   try:rows=fetcher(endpoint,token,{'id_commodity':commodity['id']})
   except (OSError,ValueError,urllib.error.URLError) as exc:
    failures.append(k+': '+str(exc)[:90]);continue
   candidates=[make_spot(item,raw) for item in rows if isinstance(item,dict) and item.get('id_commodity')==commodity['id']]
   candidates=[r for r in candidates if r is not None]
   # A distinct terminal with multiple reports should use the latest timestamp.
   unique={}
   for p in candidates:
    key=str(p['terminal_id'] or p['terminal'])
    if key not in unique or p['report_timestamp']>unique[key]['report_timestamp']:unique[key]=p
   top=sorted(unique.values(),key=lambda r:(-r['price_scu'],-r['report_timestamp']))[:16]
   if top:data[k]={'commodity':commodity['name'],'id_commodity':commodity['id'],'spots':top}
  # A missing individual commodity report must not erase the last validated locations.
  old_commodities=old_snapshot.get('commodities') or {}
  for failed in failures:
   key=failed.split(': ',1)[0]
   if key in old_commodities and key not in data:data[key]=old_commodities[key]
  if len(data)<2:raise ValueError('UEX: trop peu de cours vérifiables ; copie précédente conservée')
  blob={'meta':{'source':'UEX API 2.0','endpoint':'https://api.uexcorp.uk/2.0/',
                'retrieved_at':now,'commodity_entries':len(data),
                'matched':len(found),'partial':len(failures)>0,
                'note':'Relevés communautaires. Demande estimée et maximum historique distincts; aucune garantie en jeu.'},
        'commodities':data}
  payload=json.dumps(blob,ensure_ascii=False,allow_nan=False,separators=(',',':'))+'\n'
  # Avoid a one-time API outage or broad record loss overwriting good data.
  if last_good:
   try:old=json.loads(destination.read_text('utf-8'))
   except (OSError,ValueError):old={}
   old_count=len(old.get('commodities') or {})
   if old_count>8 and len(data)<old_count*.5:raise ValueError('UEX: chute >50% du nombre de matériaux ; publication bloquée')
  with tempfile.NamedTemporaryFile('w',encoding='utf-8',dir=directory,delete=False,suffix='.tmp') as t:
   t.write(payload); temp=Path(t.name)
  os.replace(temp,destination)
  status['sources']['uex']={'origin':API,'last_attempt':now,'last_success':now,'last_attempt_ok':True,
    'records':len(data),'partial':len(failures)>0,'warnings':failures[:10],
    'scope':'Prix publics UEX. Nombre SCU: demande estimée et maximum historique; pas de stock LIVE garanti.'}
  ok=True
 except Exception as e:
  ok=False
  status['sources']['uex']={**previous,'origin':API,'last_attempt':now,'last_attempt_ok':False,
       'error':str(e)[:300], 'last_success':previous.get('last_success') if last_good else None}
 status_path.write_text(json.dumps(status,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 if not ok:print('UEX indisponible, publication des données existantes conservée : '+status['sources']['uex']['error'])
 else:print('UEX: '+str(len(data))+' matières renseignées, '+str(sum(len(v['spots']) for v in data.values()))+' terminaux')
 return ok

def main():
 p=argparse.ArgumentParser();p.add_argument('--site',type=Path,default=Path('site'))
 args=p.parse_args();refresh(args.site,token=os.getenv('UEX_TOKEN','').strip())
 # UEX is optional: never block validated Mining/Crafting site release on prices outage.
 return 0
if __name__=='__main__':raise SystemExit(main())
