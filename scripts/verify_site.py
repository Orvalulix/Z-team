#!/usr/bin/env python3
"""Regression guard: exact original logo, routes and published-only data sources."""
from html.parser import HTMLParser
from pathlib import Path
import base64,hashlib,sys

class OriginalLogo(HTMLParser):
    def __init__(self):super().__init__();self.uri=None;self.ids=set()
    def handle_starttag(self, tag, attrs):
        data=dict(attrs)
        if tag=='img' and 'brand-logo' in (data.get('class') or '').split():self.uri=data.get('src')
        if 'id' in data:self.ids.add(data['id'])

base=Path(__file__).resolve().parent.parent/'site'
html=(base/'index.html').read_text('utf-8')
p=OriginalLogo();p.feed(html)
assert p.uri and p.uri.startswith('data:image/webp;base64,'),'Logo absent ou remplacé'
sha=hashlib.sha256(base64.b64decode(p.uri.split(',',1)[1])).hexdigest()
expected=(base/'data/original_logo_sha256.txt').read_text('utf-8').split()[0]
assert sha==expected, 'Le fichier original du logo a changé !'
for identifier in ('divisionHome','view-prospect','view-scanner','view-calcul','view-salvage','view-crafting','view-dismantle','ztDataGrid','ztProjectsPanel','ztProcurementPanel','ztProcList','ztProcSummary','view-revente','ztSaleCommodity','ztSaleAmount','ztSaleResults'):
    assert identifier in p.ids, 'Onglet manquant: '+identifier
for ext in ('bootstrap.js','app.js','service-worker.js'):
    assert (base/ext).is_file(),'Fichier manquant: '+ext
assert (base/'data/uex_sales.json').is_file(), 'UEX snapshot absent'
assert (base/'data/update_review.json').is_file(), 'Rapport de validation absent'
assert '.cmd' not in html.lower(),'Ancienne commande Windows encore dans HTML'
print('SITE OK — logo SHA256',sha,'— 4 divisions, fichiers web présents')
