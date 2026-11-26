"""Audit dismantling: synthetic Forge inputs, excluded minerals, non-guaranteed yield, observations and planner safety."""
from pathlib import Path
from playwright.sync_api import sync_playwright
from test_planner import HTML, APP, MOCK
import json

DATA=json.loads(json.dumps(MOCK))
DATA['weapons'][0]['recipe']=[
  {'material':'Iron','amount_cscu':10,'min_quality':600},
  {'material':'Savrilium','amount_cscu':20},
  {'material':'Quantainium','amount_cscu':1},
  {'material':'Sadaryx','amount_cscu':7},
  {'material':'Quartz','amount_cscu':0.125},
  {'material':'Copper','amount_cscu':3,'is_catalyst':True},
  {'item_name':'Tool Crate','item_quantity':2},
]
DATA['weapons'][1]['recipe']=[{'material':'Stileron','amount_cscu':100},{'material':'Iron','amount_cscu':50}]

with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path=('/usr/bin/chromium' if Path('/usr/bin/chromium').exists() else None),args=['--no-sandbox'])
 for width in (1440,390,320):
  page=browser.new_page(viewport={'width':width,'height':900},accept_downloads=True)
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content(HTML,wait_until='domcontentloaded')
  page.evaluate('''mock=>{
    window.ZTEAM_SYNC_STATUS={sources:{forge:{patch:'4.10.3'},strata:{patch:'4.10.3'}}};
    window.fetch=async url=>String(url).includes('crafting_data.json')?new Response(JSON.stringify(mock),{status:200}):Promise.reject(Error('offline'));
  }''',DATA)
  page.add_script_tag(content=APP)
  page.locator('[data-enter-division="dismantle"]').click()
  page.wait_for_function("document.querySelector('#dismResultCount').textContent.includes('objet') && !document.querySelector('#dismList').textContent.includes('Chargement')")
  assert page.locator('#dismPolicyNote').inner_text().find('50 %')>=0
  rules=page.evaluate('window.ZTeamTest.dismantlePolicy()')
  assert rules['patch']=='4.10.3' and len(rules['excluded'])==8
  assert page.evaluate("window.ZTeamTest.dismantleEval('Saldynium (Ore)',20).kind")== 'excluded'
  assert page.evaluate("window.ZTeamTest.dismantleEval('Quantainium',20).amount") is None
  assert page.evaluate("window.ZTeamTest.dismantleEval('Quantanium',20).kind") == 'excluded'
  assert page.evaluate("window.ZTeamTest.dismantleEval('Iron',20).amount") == 10
  assert page.evaluate("window.ZTeamTest.dismantleEval('Sadaryx',20).kind") == 'unknown'
  page.locator('#craftPatchLabel').evaluate("el=>el.textContent='4.10.4'")
  assert page.evaluate("window.ZTeamTest.dismantleEval('Iron',20).kind") == 'unknown'
  page.locator('#craftPatchLabel').evaluate("el=>el.textContent='4.10.3'")
  page.locator('#dismMaterial').select_option('Savrilium')
  assert 'non récupérable' in page.locator('#dismMaterialWarning').inner_text()
  assert 'Ressource exclue' in page.locator('#dismList').inner_text()
  page.locator('#dismMaterial').select_option('all')
  page.locator('[data-dism-select="weapons|Test Blueprint 000"]').click()
  page.locator('#dismCount').fill('3');page.locator('#dismCount').dispatch_event('change')
  detail=page.locator('#dismDetail').inner_text()
  assert '≈ 15 cSCU' in detail,detail
  assert '0,1875 cSCU' in detail,detail
  assert '0 prévu' in detail and 'Quantité inconnue' in detail,detail
  assert '50 %' in detail and 'Fabri' not in ''
  # Observations can contradict community bans, but never alter the global exclusion.
  page.locator('#dismRecordForm [name="material"]').select_option('Savrilium')
  page.locator('#dismRecordForm [name="items"]').fill('2')
  page.locator('#dismRecordForm [name="qty"]').fill('0.125')
  page.locator('#dismRecordForm button[type="submit"]').click()
  assert len(page.evaluate('window.ZTeamTest.dismantleObservations()'))==1,(page.evaluate('window.ZTeamTest.dismantleObservations()'),page.locator('#dismRecordForm').evaluate('(f)=>[f.checkValidity(),Array.from(f.elements).map(x=>({name:x.name,value:x.value,valid:x.validity?.valid,step:x.validity?.stepMismatch,reason:x.validationMessage}))]'),page.locator('#toast').inner_text(),errors)
  assert '0,125 cSCU' in page.locator('#dismDetail').inner_text()
  assert '0 prévu' in page.locator('#dismDetail').inner_text()
  page.locator('[data-dism-remove="0"]').click()
  assert page.evaluate('window.ZTeamTest.dismantleObservations()')==[]
  # Block forbidden material as a dismantle source in the procurement planner.
  page.locator('[data-dism-go-blueprint="weapons|Test Blueprint 000"]').click()
  page.locator('#craftAdd').click()
  sav=page.locator('[data-proc-key="cSCU|savrilium"]')
  assert sav.count()==1
  assert 'dismantle' not in sav.locator('[data-proc-method]').locator('option').evaluate_all('(os)=>os.map(x=>x.value)')
  assert page.locator('#craftDetail .dism-alert-tag').count()>=1
  assert 'Savrilium' in page.locator('#ztProcList').inner_text()
  # Screenshot for layout regression; no network source is required.
  page.locator('#goHome').click()
  page.locator('[data-enter-division="dismantle"]').click()
  page.locator('[data-dism-select="weapons|Test Blueprint 000"]').click()
  overflow=page.evaluate('document.documentElement.scrollWidth-document.documentElement.clientWidth')
  assert overflow==0,(width,overflow)
  assert errors==[],errors
  if width in (1440,390):
   page.screenshot(path=str(Path(__file__).resolve().parent.parent/f'APERCU_DEMONTAGE_{width}.png'),full_page=True)
  print('OK dismantling',width,'excluded x8, estimate 50%, unknown/rare, journal, planner, no overflow/errors')
  page.close()
 browser.close()
