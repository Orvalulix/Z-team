/* Z-Team Craft Center — sauvegarde portable des données de l'utilisateur.
 * Fonctionne sans compte, sans serveur et sans accès aux données privées d'autres sites.
 */
(function(){
  'use strict';
  const KEYS=[
    'craftProjectsV154','craftActiveProjectV154','craftBlueprintPlan','craftResourceStock','craftQualityLots',
    'craftScopeV16','procureOverridesV154','procureTrackingV154','procureSystemV154',
    'collection','favorites','history','prospectOre','prospectSystem','salvageShip','salvageSystem',
    'dismantleObservationsV161'
  ];
  const FORMAT='ZTeamCraftCenterWorkspace';
  const VERSION=1;
  const maxBytes=2*1024*1024;
  const fileInput=document.getElementById('ztWorkspaceImportFile');
  const show=(message)=>{
    const el=document.getElementById('toast');
    if(el){el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3300);}
  };
  function snapshot(){
    const entries={};
    for(const key of KEYS){
      try{const value=localStorage.getItem('ztm_'+key);if(value!==null){JSON.parse(value);entries[key]=JSON.parse(value);}}
      catch(e){}
    }
    return {format:FORMAT,version:VERSION,exported_at:new Date().toISOString(),entries};
  }
  function saveFile(content){
    const blob=new Blob([content],{type:'application/json;charset=utf-8'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download='Z-Team_Craft_Center_Sauvegarde.json';
    document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
  }
  document.addEventListener('click',e=>{
    const exp=e.target.closest('[data-export-workspace]'),imp=e.target.closest('[data-import-workspace]');
    if(exp){try{saveFile(JSON.stringify(snapshot(),null,2));show('Sauvegarde JSON créée.');}
      catch(err){show('Impossible d’exporter le stockage sur cet appareil.');}}
    if(imp){fileInput?.click();}
  });
  fileInput?.addEventListener('change',async e=>{
    const file=e.target.files?.[0];if(!file)return;
    try{
      if(file.size>maxBytes)throw Error('Fichier supérieur à 2 Mo');
      const backup=JSON.parse(await file.text());
      if(!backup||backup.format!==FORMAT||backup.version!==VERSION||!backup.entries||typeof backup.entries!=='object'||Array.isArray(backup.entries))throw Error('Ce fichier n’est pas une sauvegarde Z-Team Craft Center.');
      const rows=Object.entries(backup.entries);
      if(rows.length>KEYS.length||rows.some(([k])=>!KEYS.includes(k)))throw Error('Le fichier contient des champs non reconnus.');
      if(rows.length===0)throw Error('Aucune donnée à restaurer.');
      if(!confirm('Importer la sauvegarde et remplacer les projets, listes et stocks actuellement présents sur cet appareil ?'))return;
      const changes=rows.map(([k,v])=>['ztm_'+k,JSON.stringify(v)]);
      for(const [k,v] of changes)if(v.length>maxBytes)throw Error('Sauvegarde trop volumineuse');
      // Keep an in-memory rollback before overwriting any stored value.
      const previous=KEYS.map(key=>['ztm_'+key,localStorage.getItem('ztm_'+key)]);
      try{
        for(const key of KEYS)localStorage.removeItem('ztm_'+key);
        for(const [k,v] of changes)localStorage.setItem(k,v);
      }catch(err){
        for(const key of KEYS)localStorage.removeItem('ztm_'+key);
        for(const [k,v] of previous)if(v!==null)localStorage.setItem(k,v);
        throw err;
      }
      location.reload();
    }catch(err){alert('Import impossible : '+(err?.message||'fichier invalide'));}
    finally{e.target.value='';}
  });
})();
