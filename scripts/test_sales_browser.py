from pathlib import Path
from playwright.sync_api import sync_playwright
import json,time
ROOT=Path(__file__).resolve().parent.parent
html=(ROOT/'site/index.html').read_text('utf-8').replace('<script src="bootstrap.js"></script>','')
app=(ROOT/'site/app.js').read_text('utf-8')
now=int(time.time())
fixture={'meta':{'source':'UEX API 2.0','retrieved_at':'2026-11-25T08:00:00Z','commodity_entries':3},'commodities':{
 'ore:refined:iron':{'commodity':'Iron','spots':[{'terminal':'Terminal Test 1','star_system_name':'Stanton','planet_name':'Hurston','price_scu':350,'demand_scu_est':50,'max_scu_observed':150,'inventory_scu_reported':26,'report_timestamp':now,'game_version':'4.10.3'},{'terminal':'Terminal Test 2','star_system_name':'Pyro','planet_name':'Pyro II','price_scu':500,'demand_scu_est':5,'max_scu_observed':25,'report_timestamp':now-4000}]},
 'ore:raw:iron':{'commodity':'Iron (Ore)','spots':[{'terminal':'Terminal brut','star_system_name':'Stanton','price_scu':50,'demand_scu_est':None,'max_scu_observed':None,'report_timestamp':now}]},
 'salvage:rmc':{'commodity':'Recycled Material Composite','spots':[{'terminal':'Terminal Salvage','star_system_name':'Nyx','price_scu':1100,'demand_scu_est':200,'max_scu_observed':640,'report_timestamp':now,'game_version':'4.10.3'}]}
 }}
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None),headless=True,args=['--no-sandbox'])
 for width in (1440,390):
  page=browser.new_page(viewport={'width':width,'height':900})
  errors=[];page.on('pageerror',lambda err:errors.append(str(err)))
  page.set_content(html,wait_until='domcontentloaded')
  page.evaluate('''fx => {window.ZTEAM_MINING_DATA=null;window.ZTEAM_SYNC_STATUS={sources:{}};
      window.fetch=async (url)=>String(url).includes('uex_sales.json')?new Response(JSON.stringify(fx),{status:200,headers:{'Content-Type':'application/json'}}):Promise.reject(new Error('offline test'));}''',fixture)
  page.add_script_tag(content=app)
  page.locator('[data-enter-division="mining"]').click()
  page.locator('#navMining [data-view="revente"]').click()
  assert page.locator('#view-revente').is_visible()
  page.locator('#ztSaleCommodity').select_option('ore:refined:iron')
  page.wait_for_timeout(400)
  text=page.locator('#ztSaleResults').inner_text()
  assert '150 SCU' in text and '50 SCU' in text and 'Terminal Test 1' in text,text
  page.locator('#ztSaleAmount').fill('32')
  page.locator('#ztSaleOrder').select_option('value')
  assert 'Terminal Test 1' in page.locator('#ztSaleResults article').first.inner_text()
  page.locator('#ztSaleType').select_option('ore:raw')
  page.locator('#ztSaleCommodity').select_option('ore:raw:iron')
  txt=page.locator('#ztSaleResults').inner_text()
  assert 'Non communiqué' in txt and 'Terminal brut' in txt
  page.locator('#goHome').click()
  page.locator('[data-enter-division="salvage"]').click()
  page.locator('#ztSalvageSales').click()
  assert page.locator('#ztSaleResults').inner_text().find('640 SCU')!=-1
  assert not errors,errors
  if width==390:
   scroll=page.evaluate('document.documentElement.scrollWidth-document.documentElement.clientWidth')
   assert scroll==0,scroll
  page.screenshot(path=str(ROOT/f'preview_sales_{width}.png'),full_page=False)
  print('OK browser',width,'sale UI and no runtime errors')
  page.close()
 browser.close()
