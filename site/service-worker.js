const CACHE='zteam-craft-center-v2-dismantling';
const SHELL=['./','./index.html','./bootstrap.js','./app.js','./workspace.js','./data/update_status.json','./data/update_review.json'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(async cache=>{
    await Promise.all(SHELL.map(path=>cache.add(path).catch(()=>null)));
    self.skipWaiting();
  }));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    for(const key of await caches.keys())if((key.startsWith('zteam-operations-web-')||key.startsWith('zteam-craft-center-'))&&key!==CACHE)await caches.delete(key);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const req=event.request, url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    // Network first: each publication can update both data and JavaScript.
    try{const res=await fetch(req);
      if(res.ok && (url.pathname.endsWith('.json')||url.pathname.endsWith('.js')||req.mode==='navigate')){
        cache.put(req,res.clone()).catch(()=>{});
      }
      return res;
    }catch(e){
      const saved=await cache.match(req,{ignoreSearch:true});
      if(saved)return saved;
      if(req.mode==='navigate'){const home=await cache.match('./index.html');if(home)return home;}
      return Response.error();
    }
  })());
});
