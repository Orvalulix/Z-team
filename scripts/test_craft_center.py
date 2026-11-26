"""Craft Center regression: cross-project stock allocation, sale freshness, backup and navigation."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json,time,threading
from http.server import ThreadingHTTPServer,BaseHTTPRequestHandler
from test_planner import ROOT,HTML,APP,MOCK
WORK=(ROOT/'site/workspace.js').read_text('utf-8')
now=int(time.time())
UEX={'meta':{'source':'UEX API 2.0','retrieved_at':'2026-11-25T08:00:00Z'},'commodities':{
  'salvage:cm':{'commodity':'Construction Materials','spots':[
     {'terminal':'Terminal récent','price_scu':300,'demand_scu_est':10,'max_scu_observed':100,'star_system_name':'Stanton','report_timestamp':now,'game_version':'4.10.3'},
     {'terminal':'Ancien terminal surévalué','price_scu':2000,'demand_scu_est':100,'max_scu_observed':200,'star_system_name':'Stanton','report_timestamp':now-86400*100,'game_version':'4.10.2'},
     {'terminal':'Autre patch récent','price_scu':1000,'demand_scu_est':100,'max_scu_observed':200,'star_system_name':'Stanton','report_timestamp':now,'game_version':'4.10.2'}]},
  'salvage:rmc':{'commodity':'RMC','spots':[]}
}}
with sync_playwright() as p:
 b=p.chromium.launch(headless=True,executable_path=('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None),args=['--no-sandbox'])
 for width in (1440,390,320):
  ctx=b.new_context(viewport={'width':width,'height':920},accept_downloads=True)
  page=ctx.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content(HTML,wait_until='domcontentloaded')
  page.evaluate('''()=>{const db=new Map();Object.defineProperty(window,'localStorage',{
    configurable:true,value:{getItem:k=>db.has(k)?db.get(k):null,setItem:(k,v)=>db.set(k,v),removeItem:k=>db.delete(k)}});
  }''')
  page.evaluate('''({mock,uex})=>{
    window.ZTEAM_MINING_DATA=null;
    window.ZTEAM_SYNC_STATUS={sources:{strata:{patch:'4.10.3'}}};
    window.fetch=async url=>String(url).includes('crafting_data.json')?new Response(JSON.stringify(mock),{status:200}):String(url).includes('uex_sales.json')?new Response(JSON.stringify(uex),{status:200}):Promise.reject(Error('offline test'));
  }''',{'mock':MOCK,'uex':UEX})
  page.add_script_tag(content=APP)
  page.add_script_tag(content=WORK)
  assert page.title()=='Z-Team · craft center'
  assert page.locator('#divisionHome .division-card').first.get_attribute('data-enter-division')=='crafting'
  assert page.locator('#divisionHome').inner_text().find('Housing')!=-1
  page.locator('[data-enter-division="crafting"]').click()
  page.wait_for_function("document.querySelector('#craftDataStatus').textContent.includes('120')")
  page.locator('[data-craft-select="weapons|Test Blueprint 000"]').click()
  page.locator('#craftAdd').click()
  page.once('dialog',lambda d:d.accept('Projet B'))
  page.locator('#ztProjectNew').click()
  page.locator('[data-craft-select="weapons|Test Blueprint 000"]').click()
  page.locator('#craftAdd').click()
  total=page.evaluate('window.ZTeamTest.getNeeds().find(x=>x.name==="Iron").target')
  assert total==20, ('global 20 expected',total)
  page.locator('#craftLotResource').select_option('cSCU|iron')
  page.locator('#craftLotQty').fill('15')
  page.locator('#craftLotQuality').fill('700')
  page.locator('#craftLotForm button[type="submit"]').click()
  data=page.evaluate('window.ZTeamTest.getAllocations()["cSCU|iron"]')
  assert data['total']==20 and data['done']==15 and data['missing']==5,data
  page.locator('#ztCraftScope').select_option('active')
  single=page.evaluate('window.ZTeamTest.getAllocations()["cSCU|iron"]')
  assert single['total']==10 and single['missing']==0,single
  page.locator('#ztCraftScope').select_option('all')
  # Browser history should go back to home without throwing exceptions.
  page.locator('#goHome').click()
  page.locator('[data-enter-division="salvage"]').click()
  page.go_back(wait_until='domcontentloaded')
  assert page.locator('#divisionHome').is_visible(), 'browser back did not restore home'
  page.locator('[data-enter-division="salvage"]').click()
  page.locator('#ztSalvageSales').click()
  page.locator('#ztSaleQuickCM').click()
  page.wait_for_function("document.querySelector('#ztSaleResults').textContent.includes('Terminal récent')")
  text=page.locator('#ztSaleResults').inner_text()
  assert 'Terminal récent' in text and 'Ancien terminal surévalué' not in text and 'Autre patch récent' not in text,text
  page.locator('#ztSaleFreshness').select_option('0')
  page.locator('#ztSaleSamePatch').uncheck()
  txt=page.locator('#ztSaleResults').inner_text()
  assert 'Ancien terminal surévalué' in txt and 'Autre patch récent' in txt,txt
  # Backup content is a complete portable copy of the local projects.
  page.locator('#goHome').click()
  with page.expect_download() as d:
   page.locator('[data-export-workspace]').click()
  download=d.value
  data=json.loads(Path(download.path()).read_text())
  assert data['format']=='ZTeamCraftCenterWorkspace'
  assert len(data['entries']['craftProjectsV154'])==2
  assert 'craftQualityLots' in data['entries']
  overflow=page.evaluate('document.documentElement.scrollWidth-document.documentElement.clientWidth')
  assert overflow==0,('horizontal overflow',width,overflow)
  assert errors==[],errors
  print('OK craft center',width,'multi-project / prices / history / backup / 0 errors')
  ctx.close()
 b.close()

