#!/usr/bin/env python3
"""Refresh vetted community snapshots before publication. Standard library only.

One failure never overwrites the last-good copy of another source.
Run: python scripts/refresh_sources.py --site site
For deterministic local testing: python scripts/test_refresh.py
"""
from __future__ import annotations
import argparse, datetime as dt, hashlib, json, os, re, sys, tempfile, urllib.request
from pathlib import Path
from data_quality import compare

UTC = dt.timezone.utc
URLS = {
  'strata':'https://raw.githubusercontent.com/SeekND/Strata/main/data/mining_data.json',
  'forge':'https://raw.githubusercontent.com/SeekND/Forge/main/data/crafting_data.json',
}
FILE_NAMES={'strata':'mining_data.json','forge':'crafting_data.json'}
MAX_BYTES={'strata':6_000_000,'forge':30_000_000}
PATCH=re.compile(r'^\d+\.\d+(?:\.\d+)?$')


def utcnow():return dt.datetime.now(UTC).replace(microsecond=0).isoformat().replace('+00:00','Z')
def parse_day(value):
  if not isinstance(value,str) or len(value)>50: raise ValueError('Date manquante ou incorrecte')
  return dt.date.fromisoformat(value[:10])

def patch(data):
  meta=data.get('meta')
  if not isinstance(meta,dict): raise ValueError('Métadonnées absentes')
  value=str(meta.get('current_patch') or meta.get('patch') or '')
  if not PATCH.fullmatch(value): raise ValueError('Patch absent ou incompatible')
  return value

def validate_strata(data):
  if not isinstance(data,dict):raise ValueError('JSON Strata invalide')
  version=patch(data)
  for field,minimum in [('location_ores',35),('scanner_signals',45),('ores',20)]:
    if not isinstance(data.get(field),dict) or len(data[field])<minimum:
      raise ValueError('Strata: '+field+' insuffisant')
  if not isinstance(data.get('refineries'),dict) or not isinstance(data['refineries'].get('stations'),dict) or len(data['refineries']['stations'])<12:
    raise ValueError('Strata: stations absentes')
  if not isinstance(data.get('meta',{}).get('data_updated'),str):raise ValueError('Strata: date absente')
  day=parse_day(data['meta']['data_updated'])
  if day>dt.datetime.now(UTC).date()+dt.timedelta(days=2):raise ValueError('Date Strata future')
  count=0
  for loc in data['location_ores'].values():
    if not isinstance(loc,dict):raise ValueError('Strata: lieu incorrect')
    for ore in (loc.get('ores') or {}).get('ship',[]):
      p=ore.get('relative_probability')
      if p is None:continue
      if isinstance(p,bool) or not isinstance(p,(int,float)) or not 0<=p<=100:
        raise ValueError('Strata: distribution hors bornes')
      count+=1
  if count<100: raise ValueError('Strata: emplacements insuffisants')
  signals=0
  for signal in data['scanner_signals'].values():
    n=signal.get('signal_value') if isinstance(signal,dict) else None
    if isinstance(n,(int,float)) and 1<=n<1_000_000:signals+=1
  if signals<45:raise ValueError('Strata: signatures incohérentes')
  return {'patch':version,'records':len(data['ores']),'site_pairs':count,'source_date':str(day)}

def validate_forge(data):
  if not isinstance(data,dict):raise ValueError('JSON Forge invalide')
  version=patch(data)
  weapons=data.get('weapons')
  if not isinstance(weapons,list) or len(weapons)<10:raise ValueError('Forge: weapons absents')
  groups=('weapons','armor_pieces','ship_weapons','ship_components','backpacks','undersuits','undersuit_helmets','flightsuits','flightsuit_helmets')
  total=0
  with_recipe=0
  for key in groups:
    entries=data.get(key,[])
    if not isinstance(entries,list):raise ValueError('Forge: catégorie '+key+' invalide')
    total+=len(entries)
    for item in entries:
      if isinstance(item,dict) and isinstance(item.get('recipe'),list) and item['recipe']:
        with_recipe+=1
  if total<100:raise ValueError('Forge: moins de 100 blueprints')
  if with_recipe<50:raise ValueError('Forge: nombre de recettes insuffisant')
  if isinstance(data.get('meta',{}).get('data_updated'),str):
    day=parse_day(data['meta']['data_updated'])
    if day>dt.datetime.now(UTC).date()+dt.timedelta(days=2):raise ValueError('Date Forge future')
    source_date=str(day)
  else:source_date=None
  return {'patch':version,'records':total,'recipes':with_recipe,'source_date':source_date}

VALIDATORS={'strata':validate_strata,'forge':validate_forge}

def download(name):
  request=urllib.request.Request(URLS[name],headers={'User-Agent':'ZTeam-Operations/1.0 (+https://github.com/SeekND)', 'Accept':'application/json'})
  with urllib.request.urlopen(request,timeout=40) as response:
    length=int(response.headers.get('Content-Length') or 0)
    if length>MAX_BYTES[name]:raise ValueError('Réponse trop volumineuse')
    payload=response.read(MAX_BYTES[name]+1)
    if len(payload)>MAX_BYTES[name]:raise ValueError('Réponse trop volumineuse')
  return payload

def stable_status(previous,site):
  status=previous if isinstance(previous,dict) else {}
  status.update({'app':'Z-Team Craft Center','version':'V16.0-Web','checked_at':utcnow()})
  status.setdefault('sources',{})
  status['notes']='Salvage manuel (4.10.3), méthodes de raffinage estimatives, démontage non assimilable au rendement réel.'
  return status

def refresh(site:Path, downloader=download, approve_major=False):
  data_dir=site/'data';data_dir.mkdir(parents=True,exist_ok=True)
  status_path=data_dir/'update_status.json'
  try:previous=json.loads(status_path.read_text('utf-8'))
  except (OSError,ValueError):previous={}
  status=stable_status(previous,site)
  reviews={}
  for key in URLS:
    target=data_dir/FILE_NAMES[key]
    old=status['sources'].get(key,{})
    now=utcnow()
    try:
      payload=downloader(key)
      data=json.loads(payload.decode('utf-8'))
      meta=VALIDATORS[key](data)
      previous_data=None
      if target.is_file():
        try:
          previous_data=json.loads(target.read_text('utf-8'))
          VALIDATORS[key](previous_data)
        except (ValueError,TypeError,OSError):previous_data=None
      audit=compare(previous_data,data,key) if previous_data else {
        'source':key,'old_patch':None,'new_patch':meta['patch'],
        'old_records':0,'new_records':meta['records'],
        'added':meta['records'],'removed':0,'modified':0,
        'review_required':False,'reasons':[],
        'comparison':'Premier référentiel validé : pas d’historique à comparer.'
      }
      reviews[key]=audit
      if audit.get('hard_stop') or (audit['review_required'] and not approve_major):
        raise ValueError('Écarts importants : publication refusée. '+ '; '.join(audit['reasons']))
      # Atomic, fully validated replacement. A partial download never becomes visible.
      new_bytes=json.dumps(data,ensure_ascii=False,separators=(',',':'),allow_nan=False).encode('utf-8')
      old_sha=hashlib.sha256(target.read_bytes()).hexdigest() if target.is_file() else None
      new_sha=hashlib.sha256(new_bytes).hexdigest()
      if old_sha!=new_sha:
        with tempfile.NamedTemporaryFile('wb',delete=False,dir=data_dir,prefix='zteam_',suffix='.tmp') as temp:
          temp.write(new_bytes); tmp=Path(temp.name)
        os.replace(tmp,target)
      status['sources'][key]={**meta,'origin':URLS[key],'sha256':new_sha,'last_attempt':now,'last_attempt_ok':True,'last_success':now,'review_required':False,'error':None}
      print(f'{key}: OK patch {meta["patch"]}, {len(new_bytes)} octets, {meta["records"]} entrées')
    except Exception as exc:
      # If an existing candidate was corrupt, do not present it as verified.
      fallback_valid=False
      if target.exists():
        try:VALIDATORS[key](json.loads(target.read_text('utf-8'))); fallback_valid=True
        except (ValueError,OSError,TypeError):fallback_valid=False
      status['sources'][key]={**old,'origin':URLS[key],'last_attempt':now,'last_attempt_ok':False,'review_required':bool(reviews.get(key,{}).get('review_required')),'error':str(exc)[:250], 'last_success':old.get('last_success') if fallback_valid else None}
      print(f'{key}: ECHEC ({exc}); copie locale {"conservée" if fallback_valid else "absente ou invalide"}',file=sys.stderr)
  a=status['sources'].get('strata',{});b=status['sources'].get('forge',{})
  status['patch_mismatch']=bool(a.get('patch') and b.get('patch') and a['patch']!=b['patch'])
  status_path.write_text(json.dumps(status,ensure_ascii=False,indent=2,allow_nan=False)+'\n',encoding='utf-8')
  (data_dir/'update_review.json').write_text(json.dumps({'checked_at':status['checked_at'],'sources':reviews},ensure_ascii=False,indent=2,allow_nan=False)+'\n',encoding='utf-8')
  return status

def main():
  p=argparse.ArgumentParser()
  p.add_argument('--site',type=Path,default=Path('site'))
  p.add_argument('--approve-major',action='store_true',help='Accepter les écarts importants après contrôle manuel')
  args=p.parse_args();status=refresh(args.site,approve_major=args.approve_major)
  # No data at all? Fail initial deploy, so a broken empty catalogue isn't promoted as success.
  if not all(status['sources'].get(k,{}).get('last_success') for k in URLS):
    print('Deux référentiels valides requis avant publication.',file=sys.stderr);return 2
  print('Manifest:',str(args.site/'data/update_status.json'))
  return 0
if __name__=='__main__':sys.exit(main())
