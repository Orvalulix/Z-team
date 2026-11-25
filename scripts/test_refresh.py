"""Tests hors ligne : ne téléchargent aucune source."""
import importlib.util, json, tempfile, unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('zteam_refresh',Path(__file__).with_name('refresh_sources.py'))
src=importlib.util.module_from_spec(spec);spec.loader.exec_module(src)

def fixture_strata():
 return {'meta':{'current_patch':'4.10.3','data_updated':'2026-11-17'},'ores':{f'ore{i}':{} for i in range(30)},'location_ores':{f'loc{i}':{'system':'Stanton','ores':{'ship':[{'ore':'CORUNDUM','relative_probability':15}] * 4}} for i in range(36)},'scanner_signals':{str(i):{'signal_value':3000+i} for i in range(46)},'refineries':{'stations':{str(i):{} for i in range(13)}}}
def fixture_forge():
 return {'meta':{'current_patch':'4.10.3','data_updated':'2026-11-17'},'weapons':[{'recipe':[{'material':'foo','amount_cscu':1}]} for _ in range(110)]}
class Tests(unittest.TestCase):
 def test_validate_sources(self):
  self.assertEqual(src.validate_strata(fixture_strata())['records'],30)
  self.assertEqual(src.validate_forge(fixture_forge())['records'],110)
 def test_strata_incorrect_percentage_rejected(self):
  d=fixture_strata();d['location_ores']['loc1']['ores']['ship'][0]['relative_probability']=145
  with self.assertRaises(ValueError):src.validate_strata(d)
 def test_forge_rejects_truncated_catalogue(self):
  d=fixture_forge();d['weapons']=[]
  with self.assertRaises(ValueError):src.validate_forge(d)
 def test_network_failure_keeps_prior_valid_data(self):
  with tempfile.TemporaryDirectory() as tmp:
   site=Path(tmp);payloads={'strata':json.dumps(fixture_strata()).encode(),'forge':json.dumps(fixture_forge()).encode()}
   first=src.refresh(site,lambda key:payloads[key]);self.assertTrue(first['sources']['strata']['last_success'])
   original=(site/'data/mining_data.json').read_bytes()
   def broken(key):
    if key=='strata':raise RuntimeError('network unreachable')
    return payloads[key]
   second=src.refresh(site,broken)
   self.assertEqual(original,(site/'data/mining_data.json').read_bytes())
   self.assertFalse(second['sources']['strata']['last_attempt_ok'])
   self.assertTrue(second['sources']['strata']['last_success'])
   self.assertTrue(second['sources']['forge']['last_attempt_ok'])
 def test_separate_source_failures(self):
  with tempfile.TemporaryDirectory() as tmp:
   site=Path(tmp)
   def mixed(key):
    if key=='forge':return b'not json'
    return json.dumps(fixture_strata()).encode()
   result=src.refresh(site,mixed)
   self.assertTrue((site/'data/mining_data.json').is_file())
   self.assertFalse((site/'data/crafting_data.json').exists())
   self.assertFalse(result['sources']['forge']['last_attempt_ok'])
if __name__=='__main__':unittest.main(verbosity=2)
