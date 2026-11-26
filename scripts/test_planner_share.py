"""Shared URL import, no accounts. Test only; synthetic catalog."""
import base64,json
from pathlib import Path
from playwright.sync_api import sync_playwright
from test_planner import MOCK,ROOT,HTML,APP
payload={'format':'ZTeamProject','version':1,'name':'Opération test d’équipe','items':[{'id':'weapons|Test Blueprint 000','qty':3,'name':'Test Blueprint 000'}]}
token=base64.urlsafe_b64encode(json.dumps(payload,ensure_ascii=False).encode()).decode().rstrip('=')
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None),headless=True,args=['--no-sandbox'])
    page=browser.new_page()
    errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    page.set_content(HTML,wait_until='domcontentloaded')
    page.evaluate('v=>{location.hash="#ztplan="+v}',token)
    page.evaluate('''mock => {window.ZTEAM_MINING_DATA=null; window.ZTEAM_SYNC_STATUS={sources:{}};
       window.fetch=async (url)=>String(url).includes('crafting_data.json')?new Response(JSON.stringify(mock),{status:200}):Promise.reject(Error('offline'));}''',MOCK)
    page.add_script_tag(content=APP)
    assert 'is-hidden' not in page.locator('#ztSharedProjectBanner').get_attribute('class')
    page.locator('[data-enter-division="crafting"]').click()
    page.locator('#ztProjectAcceptShared').click()
    page.wait_for_function("document.querySelector('#craftDataStatus').textContent.includes('120')")
    assert page.locator('#ztProjectSelect option').count()==2
    assert page.locator('[data-craft-qty="weapons|Test Blueprint 000"]').input_value()=='3'
    assert 'Opération test' in page.locator('#ztProjectSelect').inner_text()
    assert not errors,errors
    print('OK import de lien partage',len(token),'caractères')
    browser.close()
