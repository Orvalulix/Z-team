/* Z-Team Craft Center — bootstrap, no .cmd required. */
(function(){
  'use strict';
  const ROOT='./';
  const CACHE_DB='ZTeamValidatedData';
  window.ZTEAM_SOURCE_RUNTIME={mining:'unknown',status:'unknown'};
  function dbOpen(){return new Promise((resolve,reject)=>{
    if(!window.indexedDB)return resolve(null);
    const req=indexedDB.open(CACHE_DB,1);
    req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('sources'))req.result.createObjectStore('sources');};
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
  });}
  async function dbStore(mode,key,value){
    let db;try{db=await dbOpen();if(!db)return null;
      return await new Promise((resolve,reject)=>{
        const tx=db.transaction('sources',mode==='read'?'readonly':'readwrite');
        const req=mode==='read'?tx.objectStore('sources').get(key):tx.objectStore('sources').put(value,key);
        req.onsuccess=()=>resolve(req.result??null);req.onerror=()=>reject(req.error);
        tx.oncomplete=()=>db.close();
      });
    }catch(e){return null;}finally{try{db?.close();}catch(e){}}
  }
  function validStrata(d){
    if(!d||typeof d!=='object'||!d.meta||!/^\d+\.\d+(?:\.\d+)?$/.test(String(d.meta.current_patch||'')))return false;
    if(!d.location_ores||Object.keys(d.location_ores).length<35)return false;
    if(!d.scanner_signals||Object.keys(d.scanner_signals).length<45)return false;
    if(!d.refineries?.stations||Object.keys(d.refineries.stations).length<12)return false;
    return true;
  }
  async function readJSON(url,ms){
    const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),ms);
    try{const response=await fetch(url,{cache:'no-store',signal:ctrl.signal});
      if(!response.ok)throw new Error('HTTP '+response.status);
      return await response.json();
    }finally{clearTimeout(timer);}
  }
  async function run(){
    // Data URLs use same-origin published snapshots; never need CORS or a Windows script.
    const statusTask=(async()=>{
      try{const status=await readJSON(ROOT+'data/update_status.json',7000);
        if(status && status.sources){window.ZTEAM_SYNC_STATUS=status;window.ZTEAM_SOURCE_RUNTIME.status='web';}
      }catch(e){window.ZTEAM_SYNC_STATUS={sources:{}};}
    })();
    const miningTask=(async()=>{
      try{const data=await readJSON(ROOT+'data/mining_data.json',11000);
        if(!validStrata(data))throw new Error('Strata rejected');
        window.ZTEAM_MINING_DATA=data;
        window.ZTEAM_SOURCE_RUNTIME.mining='web';
        await dbStore('write','strata',data);
      }catch(e){
        const backup=await dbStore('read','strata');
        if(validStrata(backup)){window.ZTEAM_MINING_DATA=backup;window.ZTEAM_SOURCE_RUNTIME.mining='cache';}
        else{window.ZTEAM_MINING_DATA=null;window.ZTEAM_SOURCE_RUNTIME.mining='historique';}
      }
    })();
    // First paint is never blocked by a ten-second data timeout.
    // A slow network switches to the validated browser cache or historical mode.
    const tasks=Promise.all([statusTask,miningTask]);
    let slow=false;
    await Promise.race([tasks,new Promise(resolve=>setTimeout(()=>{slow=true;resolve();},3000))]);
    if(slow){
      window.ZTEAM_SOURCE_RUNTIME.delayed=true;
      tasks.then(()=>{window.ZTEAM_SOURCE_RUNTIME.lateUpdate=true;
        window.dispatchEvent(new Event('zteam-late-data'));
      }).catch(()=>{});
    }
    const script=document.createElement('script');script.src=ROOT+'app.js';script.defer=true;
    script.onerror=()=>{const m=document.createElement('p');m.textContent="Impossible de charger l'application. Vérifiez les fichiers du site.";document.body.prepend(m);};
    document.body.appendChild(script);
    if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
      navigator.serviceWorker.register(ROOT+'service-worker.js',{scope:ROOT}).catch(()=>{});
    }
  }
  run().catch(e=>console.error('Z-Team bootstrap error',e));
})();
