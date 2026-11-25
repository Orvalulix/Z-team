"""Change gate: suspicious data must not silently replace valid published data."""
import importlib.util, json, tempfile, unittest
from pathlib import Path
path=Path(__file__).with_name('refresh_sources.py')
import sys
sys.path.insert(0,str(path.parent))
spec=importlib.util.spec_from_file_location('zteam_refresh_quality',path)
refresh=importlib.util.module_from_spec(spec);spec.loader.exec_module(refresh)
from data_quality import compare


def forge_fixture(patch='4.10.3'):
    return {'meta':{'current_patch':patch,'data_updated':'2026-11-17'},
            'weapons':[{'name':f'Item {i}', 'recipe':[{'material':'Iron','amount_cscu':1}]} for i in range(120)]}


def strata_fixture(patch='4.10.3'):
    return {'meta':{'current_patch':patch,'data_updated':'2026-11-17'},
            'ores':{f'ore{i}':{} for i in range(30)},
            'location_ores':{f'loc{i}':{'system':'Stanton','ores':{'ship':[{'ore':'IRON','relative_probability':12}]*4}} for i in range(40)},
            'scanner_signals':{str(i):{'signal_value':3000+i} for i in range(50)},
            'refineries':{'stations':{str(i):{'yields':{'IRON':{'value':4}}} for i in range(20)}}}

class QualityTests(unittest.TestCase):
    def test_safe_change(self):
        x=forge_fixture();y=forge_fixture();y['weapons'].append({'name':'New B','recipe':[{'material':'Iron','amount_cscu':1}]})
        self.assertFalse(compare(x,y,'forge')['review_required'])
        self.assertEqual(compare(x,y,'forge')['added'],1)
    def test_mass_blueprint_loss(self):
        x=forge_fixture();y=forge_fixture();y['weapons']=y['weapons'][:80]
        self.assertTrue(compare(x,y,'forge')['review_required'])
    def test_mass_recipe_change(self):
        x=forge_fixture();y=forge_fixture()
        for i in range(48):y['weapons'][i]['recipe'][0]['amount_cscu']=15
        self.assertTrue(compare(x,y,'forge')['review_required'])
    def test_patch_downgrade(self):
        self.assertTrue(compare(forge_fixture('4.10.3'),forge_fixture('4.10.1'),'forge')['review_required'])
    def test_strata_loss(self):
        x=strata_fixture();y=strata_fixture();del_keys=list(y['refineries']['stations'])[:8]
        for k in del_keys:del y['refineries']['stations'][k]
        self.assertTrue(compare(x,y,'strata')['review_required'])
    def test_quarantine_keeps_valid_copy(self):
        with tempfile.TemporaryDirectory() as tmp:
            site=Path(tmp)
            raw={'strata':json.dumps(strata_fixture()).encode(),'forge':json.dumps(forge_fixture()).encode()}
            ok=refresh.refresh(site,lambda key:raw[key]);self.assertTrue(ok['sources']['forge']['last_attempt_ok'])
            old=(site/'data/crafting_data.json').read_bytes()
            changed=forge_fixture();changed['weapons']=changed['weapons'][:80]
            raw['forge']=json.dumps(changed).encode()
            # Incoming snapshot is structurally invalid (100 min), must be rejected without clobber.
            refresh.refresh(site,lambda key:raw[key]);self.assertEqual((site/'data/crafting_data.json').read_bytes(),old)
            self.assertFalse(json.loads((site/'data/update_status.json').read_text())['sources']['forge']['last_attempt_ok'])
    def test_quarantine_substantial_but_valid(self):
        with tempfile.TemporaryDirectory() as tmp:
            site=Path(tmp)
            raw={'strata':json.dumps(strata_fixture()).encode(),'forge':json.dumps(forge_fixture()).encode()}
            refresh.refresh(site,lambda k:raw[k])
            old=(site/'data/crafting_data.json').read_bytes()
            changed=forge_fixture()
            for i in range(50):changed['weapons'][i]['recipe'][0]['amount_cscu']=10
            raw['forge']=json.dumps(changed).encode()
            status=refresh.refresh(site,lambda k:raw[k]);self.assertTrue(status['sources']['forge']['review_required'])
            self.assertFalse(status['sources']['forge']['last_attempt_ok'])
            self.assertEqual((site/'data/crafting_data.json').read_bytes(),old)
            review=json.loads((site/'data/update_review.json').read_text())
            self.assertTrue(review['sources']['forge']['review_required'])
            accepted=refresh.refresh(site,lambda k:raw[k],approve_major=True)
            self.assertTrue(accepted['sources']['forge']['last_attempt_ok'])
            self.assertNotEqual((site/'data/crafting_data.json').read_bytes(),old)

if __name__=='__main__':unittest.main(verbosity=2)
