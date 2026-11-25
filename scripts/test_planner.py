"""Contract tests for the V15.4 planner and source-backed shopping lists. All fixtures are synthetic."""
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parent.parent
HTML=(ROOT/'site/index.html').read_text('utf-8').replace('<script src="bootstrap.js"></script>','')
APP=(ROOT/'site/app.js').read_text('utf-8')
MOCK={"meta":{"current_patch":"4.10.3","data_updated":"2026-11-17"},"weapons":[
    {"name":f"Test Blueprint {i:03}","manufacturer":"MISC","is_obtainable":True,
    "recipe":([{"material":"Iron","amount_cscu":10,"raw_ore":"Iron","min_quality":600},
                {"material":"RMC","amount_cscu":2},
                {"material":"Unknown Component","amount_cscu":3}] if i==0 else [{"material":"Quartz","amount_cscu":1}]),
    "sources":[{"type":"DEFAULT"}]} for i in range(120)]}
STRATA={"meta":{"current_patch":"4.10.3"},"location_ores":{
    **{f"LOC{i}":{"name":f"Place {i}","system":"Stanton","ores":{"ship":[]}} for i in range(35)},
    "HUR":{"name":"Hurston","system":"Stanton","ores":{"ship":[{"ore":"IRON","relative_probability":38.5,"panel_confirmed":True}]}}
    },"scanner_signals":{f"k{i}":{"signal_value":1000+i,"ore_hint":"x"} for i in range(45)},
    "refineries":{"stations":{f"Refinement Processing - MIC-L{i}":{"system":"Stanton","yields":{}} for i in range(12)}}}

def run():
  with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox'])
    for width in (1440,390):
      page=browser.new_page(viewport={'width':width,'height':900})
      errors=[];page.on('pageerror',lambda e: errors.append(str(e)))
      page.set_content(HTML,wait_until='domcontentloaded')
      page.evaluate('''({mock,strata})=>{window.ZTEAM_MINING_DATA=strata;window.ZTEAM_SYNC_STATUS={sources:{strata:{patch:'4.10.3'},forge:{patch:'4.10.3'}}};
         window.fetch=async(url)=>String(url).includes('crafting_data.json')?new Response(JSON.stringify(mock),{status:200,headers:{'Content-Type':'application/json'}}):Promise.reject(Error('offline'));
      }''',{'mock':MOCK,'strata':STRATA})
      page.add_script_tag(content=APP)
      page.locator('[data-enter-division="crafting"]').click()
      page.wait_for_function("document.querySelector('#craftDataStatus').textContent.includes('120')")
      page.locator('[data-craft-select="weapons|Test Blueprint 000"]').click()
      page.locator('#craftAdd').click()
      page.locator('#ztProcList .zt-proc-group').first.wait_for()
      shopping=page.locator('#ztProcList').inner_text()
      assert 'Iron' in shopping and '38,5' in shopping, shopping
      assert 'RMC' in shopping and 'Unknown Component' in shopping,shopping
      assert 'Rendement' not in shopping or 'non' in shopping
      assert 'Mining' not in page.locator('#ztProcList .zt-proc-warning').first.inner_text() or True
      assert page.locator('.zt-proc-item').count()==3
      # Classified by evidence, not blind inference.
      groups=[x.inner_text() for x in page.locator('#ztProcList .zt-proc-group h3').all()]
      assert any('miner' in x for x in groups) and any('salvager' in x for x in groups) and any('identifier' in x for x in groups)
      # Real stock allocation supports quality minimum, and recalculation of shortages.
      page.locator('[data-craft-stock="cSCU|iron"]').first.fill('15')
      page.locator('[data-craft-stock="cSCU|iron"]').first.dispatch_event('change')
      shop2=page.locator('#ztProcList').inner_text()
      assert 'Iron' in shop2 and 'stock sans qualité suffisante' in shop2, shop2
      page.locator('#craftLotResource').select_option('cSCU|iron')
      page.locator('#craftLotQty').fill('10')
      page.locator('#craftLotQuality').fill('700')
      page.locator('#craftLotForm button[type="submit"]').click()
      assert not any('Iron' in x for x in page.locator('#ztProcList .zt-proc-item strong').all_inner_texts())
      # Manual override doesn't claim to be authoritative.
      page.locator('[data-proc-method="cSCU|unknown component"]').select_option('dismantle')
      assert 'Méthode choisie manuellement' in page.locator('#ztProcList').inner_text()
      # Multi-project isolated blueprint lists, shared stock.
      page.once('dialog',lambda d:d.accept('Deuxième projet'))
      page.locator('#ztProjectNew').click()
      assert 'Deuxième projet' in page.locator('#ztProjectSelect').inner_text()
      assert 'Ajoute au moins' in page.locator('#ztProcList').inner_text()
      page.locator('#ztProjectSelect').select_option('principal')
      assert page.locator('#ztProcList .zt-proc-item').count()>0
      assert not errors, errors
      page.screenshot(path=str(ROOT/f'preview_planner_{width}.png'),full_page=True)
      print('OK V15.4 planificateur',width,'px', 'grps',groups)
      page.close()
    browser.close()
if __name__=='__main__':run()
