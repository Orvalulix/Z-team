"""Headless Chromium smoke tests with a representative simulated Forge catalogue.
    No network or GitHub access required."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
ROOT=Path(__file__).resolve().parent.parent
HTML=(ROOT/'site/index.html').read_text('utf-8').replace('<script src="bootstrap.js"></script>','')
APP=(ROOT/'site/app.js').read_text('utf-8')
mock={'meta':{'current_patch':'4.10.3','data_updated':'2026-11-17'},'weapons':[
    {'name':f'Artemis Standard {i}', 'manufacturer':'MISC','is_obtainable':True,
    'recipe':[{'material':'Iron','amount_cscu':2, 'slot':'Core'}],'sources':[{'type':'DEFAULT'}]}
    for i in range(120)]}

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True, executable_path='/usr/bin/chromium', args=['--no-sandbox'])
    for width in (1440,390):
        page=browser.new_page(viewport={'width':width,'height':900})
        errors=[]
        page.on('pageerror',lambda ex:errors.append(str(ex)))
        page.set_content(HTML,wait_until='domcontentloaded')
        page.evaluate('''mock => {window.ZTEAM_MINING_DATA=null;window.ZTEAM_SYNC_STATUS={sources:{}};
            const original=window.fetch.bind(window);
            window.fetch=async (url,init)=>String(url).includes('data/crafting_data.json')?new Response(JSON.stringify(mock),{status:200,headers:{'Content-Type':'application/json'}}):Promise.reject(new Error('Offline test'));
        }''',mock)
        page.add_script_tag(content=APP)
        assert page.locator('#divisionHome').is_visible(), 'home missing'
        assert page.locator('img.brand-logo').count()==1
        page.locator('#ztGlobalSearch').fill('quant')
        page.wait_for_timeout(400)
        assert page.locator('#ztGlobalSearchResults').inner_text().find('Quantainium')!=-1
        page.locator('#ztGlobalSearchResults button').first.click()
        assert page.evaluate('window.ZTeamTest.getDivision()')=='mining'
        assert page.locator('#view-prospect').is_visible()
        page.locator('#goHome').click()
        page.locator('#ztGlobalSearch').fill('Artemis Standard 12')
        page.wait_for_timeout(1100)
        assert page.locator('#ztGlobalSearchResults').inner_text().find('Artemis Standard 12')!=-1
        page.locator('#ztGlobalSearchResults button').first.click()
        assert page.evaluate('window.ZTeamTest.getDivision()')=='crafting'
        assert page.locator('#craftDetail').inner_text().find('Artemis Standard 12')!=-1
        page.locator('#goHome').click()
        page.locator('#ztGlobalSearch').fill('Iron')
        page.wait_for_timeout(500)
        assert page.locator('#ztGlobalSearchResults').inner_text().find('Iron')!=-1
        page.locator('#ztGlobalSearchResults button').filter(has_text='Ressource').first.click()
        assert page.evaluate('window.ZTeamTest.getDivision()')=='crafting'
        assert page.locator('#craftQuery').input_value()=='Iron'
        page.locator('#goHome').click()
        page.locator('[data-enter-division="dismantle"]').click()
        assert page.locator('#view-dismantle').is_visible()
        page.locator('#goHome').click()
        page.locator('[data-enter-division="salvage"]').click()
        assert page.locator('#view-salvage').is_visible()
        page.locator('#goHome').click()
        page.locator('#ztDiagnostic summary').click()
        page.wait_for_timeout(200)
        assert 'Forge' in page.locator('#ztDiagnosticContent').inner_text()
        assert not errors, errors
        page.screenshot(path=str(ROOT/f'preview_{width}.png'))
        print('OK browser',width,'width', 'logo',page.locator('img.brand-logo').count(),'errors',len(errors))
        page.close()
    browser.close()
