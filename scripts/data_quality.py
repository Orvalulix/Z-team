"""Compare incoming Forge/Strata snapshots to their last published versions.

This is a safety heuristic, not verification against gameplay. Suspicious deltas
are quarantined for manual review; no new JSON is silently promoted.
"""
from __future__ import annotations
import json

GROUPS = ('weapons','armor_pieces','ship_weapons','ship_components','backpacks',
          'undersuits','undersuit_helmets','flightsuits','flightsuit_helmets')

def _sample(items, max_items=8):
    return sorted(map(str,items))[:max_items]

def _rate(missing, total):
    return round(100*missing/max(1,total), 2)

def _patch_tuple(value):
    return tuple(int(x) for x in str(value).split('.')) + (0,)*(3-len(str(value).split('.')))

def _records(data, source):
    if source=='forge':
        result={}
        for group in GROUPS:
            for item in data.get(group,[]):
                if not isinstance(item,dict):continue
                name=item.get('name')
                if not name:continue
                key=f'{group}|{name}'
                recipe=item.get('recipe') if isinstance(item.get('recipe'),list) else []
                # Record fingerprint: only recipe-relevant fields, order independent.
                entries=[{k:r.get(k) for k in ('material','amount_cscu','item_name','item_quantity','slot','min_quality','is_catalyst') if k in r}
                         for r in recipe if isinstance(r,dict)]
                result[key]=json.dumps(sorted(entries,key=lambda x:json.dumps(x,sort_keys=True)),sort_keys=True,ensure_ascii=False)
        return result
    result={}
    for key,item in data.get('scanner_signals',{}).items():
        if isinstance(item,dict):result[f'sig|{key}']=str(item.get('signal_value'))
    for key,item in data.get('location_ores',{}).items():
        if isinstance(item,dict):
            result[f'place|{key}']=json.dumps(item.get('ores',{}).get('ship',[]),sort_keys=True,ensure_ascii=False)
    for key,item in data.get('refineries',{}).get('stations',{}).items():
        if isinstance(item,dict):result[f'refinery|{key}']=json.dumps(item.get('yields',{}),sort_keys=True,ensure_ascii=False)
    return result

def _mission_sources(data):
    result={}
    for group in GROUPS:
        for item in data.get(group,[]):
            if isinstance(item,dict) and item.get('name'):
                sources=item.get('sources',[])
                if not isinstance(sources,list):sources=[]
                result[f'{group}|{item["name"]}']=json.dumps(sorted([x for x in sources if isinstance(x,dict)],key=lambda x:json.dumps(x,sort_keys=True)),sort_keys=True,ensure_ascii=False)
    return result

def compare(previous, incoming, source):
    """Return a small, publishable audit summary and whether review is required."""
    a=_records(previous,source)
    b=_records(incoming,source)
    removed=set(a)-set(b)
    added=set(b)-set(a)
    changed={k for k in (set(a)&set(b)) if a[k]!=b[k]}
    old_patch=previous.get('meta',{}).get('current_patch') or previous.get('meta',{}).get('patch')
    new_patch=incoming.get('meta',{}).get('current_patch') or incoming.get('meta',{}).get('patch')
    patch_changed=old_patch!=new_patch
    reasons=[]
    patch_downgrade=_patch_tuple(new_patch)<_patch_tuple(old_patch)
    if patch_downgrade:
        reasons.append('Régression du patch source : refusée')
    if source=='forge':
        missions_old=_mission_sources(previous);missions_new=_mission_sources(incoming)
        mission_changes={k for k in (set(missions_old)&set(missions_new)) if missions_old[k]!=missions_new[k]}
        if len(mission_changes)>max(25,int(len(missions_old)*.4)):
            reasons.append(f'{len(mission_changes)} sources de missions modifiées')
        # Un patch can change recipes legitimately, but mass disappearance needs a human review.
        if len(removed)>max(15,int(len(a)*.12)):
            reasons.append(f'{len(removed)} blueprints disparus ({_rate(len(removed),len(a))} %)')
        if len(changed)>max(25,int(len(a)*(.6 if patch_changed else .35))):
            reasons.append(f'{len(changed)} recettes modifiées ({_rate(len(changed),len(a))} %)')
    else:
        for prefix,limit in [('sig|',.15),('place|',.2),('refinery|',.2)]:
            old_group={k for k in a if k.startswith(prefix)}
            missing=old_group-set(b)
            if len(missing)>max(3,int(len(old_group)*limit)):
                reasons.append(f'{len(missing)} entrées {prefix[:-1]} disparues')
        old_sig={k for k in a if k.startswith('sig|')}
        changed_sig=old_sig&changed
        if len(changed_sig)>max(8,int(len(old_sig)*.25)):
            reasons.append(f'{len(changed_sig)} signatures modifiées')
    return {
      'source':source,'old_patch':old_patch,'new_patch':new_patch,
      'old_records':len(a),'new_records':len(b),
      'added':len(added),'removed':len(removed),'modified':len(changed),
      'mission_sources_modified':len(mission_changes) if source=='forge' else None,
      'examples':{'added':_sample(added),'removed':_sample(removed),'modified':_sample(changed)},
      'review_required':bool(reasons),'hard_stop':patch_downgrade,'reasons':reasons,
      'comparison':'Comparaison automatique : vérifie les écarts, pas les données du jeu.'
    }
