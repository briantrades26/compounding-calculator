const C='calc-v1';self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icon-180.png']))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const cl=r.clone();caches.open(C).then(c=>c.put(e.request,cl));return r}).catch(()=>caches.match(e.request))));
