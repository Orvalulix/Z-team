#!/usr/bin/env python3
"""Deterministic tests: UEX price directions, SCU semantics, missing values and last-good fallback."""
import json, tempfile, time
from pathlib import Path
from refresh_uex_sales import refresh, make_spot, match_catalog

current=int(time.time())
catalog=[
 {'id':10,'name':'Iron','is_raw':0,'is_refined':1,'is_sellable':1,'is_available_live':1},
 {'id':11,'name':'Iron (Ore)','is_raw':1,'is_refined':0,'is_sellable':1,'is_available_live':1},
 {'id':20,'name':'Recycled Material Composite','is_raw':0,'is_refined':0,'is_sellable':1,'is_available_live':1},
 {'id':21,'name':'Construction Materials','is_raw':0,'is_refined':0,'is_sellable':1,'is_available_live':1},
 {'id':22,'name':'Unknown Bulk','is_raw':0,'is_refined':0,'is_sellable':1,'is_available_live':1},
]
found=match_catalog(catalog)
assert set(found)=={'ore:refined:iron','ore:raw:iron','salvage:rmc','salvage:cm'},found

def f(endpoint,token='',query=None):
 if endpoint=='commodities':return catalog
 raw=endpoint=='commodities_raw_prices'
 id_=int(query['id_commodity'])
 return [
  {'id_commodity':id_,'id_terminal':1,'terminal_name':'Terminal principal',
   'star_system_name':'Stanton','planet_name':'Hurston',
   'price_sell':112 if not raw else 21,'price_buy':999999,
   'date_modified':current,'scu_sell':64,'scu_sell_max':300,'scu_sell_stock':99,'game_version':'4.10.3'},
  {'id_commodity':id_,'id_terminal':2,'terminal_name':'Second comptoir',
   'star_system_name':'Pyro','planet_name':'Pyro III',
   'price_sell':130,'date_modified':current-3600,'scu_sell':16,'scu_sell_max':40,'game_version':'4.10.3'}
 ]
with tempfile.TemporaryDirectory() as tmp:
 site=Path(tmp)
 assert refresh(site,fetcher=f,now='2026-11-25T09:00:00Z')
 data=json.loads((site/'data/uex_sales.json').read_text())
 assert data['commodities']['ore:refined:iron']['spots'][0]['price_scu']==130
 ref=data['commodities']['ore:refined:iron']['spots'][0]
 assert ref['demand_scu_est']==16 and ref['max_scu_observed']==40
 assert ref['price_scu']!=999999 # never confuse buying vs player's sale
 raw=data['commodities']['ore:raw:iron']['spots'][0]
 assert raw['demand_scu_est'] is None and raw['max_scu_observed'] is None
 assert data['commodities']['salvage:rmc']['spots'][0]['max_scu_observed']==40
 before=(site/'data/uex_sales.json').read_bytes()
 def bad(*args,**kwargs):raise RuntimeError('API indisponible')
 assert not refresh(site,fetcher=bad,now='2026-11-25T10:00:00Z')
 assert (site/'data/uex_sales.json').read_bytes()==before
 status=json.loads((site/'data/update_status.json').read_text())
 assert status['sources']['uex']['last_attempt_ok'] is False
 print('OK — prix de vente, SCU estimés, max historiques, brut sans capacité, source indisponible : copie conservée')
