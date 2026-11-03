const CACHE='japan-trip-v2.3';
const ASSETS=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png',
'./images/aeon-tokoname.webp','./images/esca.webp','./images/flight-of-dreams.webp','./images/furaibo-dish.webp','./images/gyusuke.webp','./images/hida-folk.webp','./images/higashi-chaya.webp','./images/hitsumabushi-dish.webp','./images/hyakubangai.webp','./images/irori.webp','./images/jinya.webp','./images/kanazawa-castle.webp','./images/kenrokuen.webp','./images/kyoya-dish.webp','./images/maimon.webp','./images/miyagawa.webp','./images/museum21.webp','./images/nagamachi.webp','./images/nagoya-castle.webp','./images/nakabashi.webp','./images/omicho.webp','./images/sanmachi.webp','./images/shiraogi.webp','./images/shiroyama.webp','./images/takayama-ramen-dish.webp','./images/wada.webp','./images/yabaton-centrair.webp','./images/yabaton-esca.webp','./images/yamamotoya-esca.webp','./images/yatai.webp','./images/tk-chinatown.webp','./images/tk-chureito.webp','./images/tk-karuizawa.webp','./images/tk-kawagoe.webp','./images/tk-minatomirai.webp','./images/tk-oshino.webp','./images/tk-shibazakura.webp','./images/tk-toshogu.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.origin!==location.origin)return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;
  }).catch(()=>caches.match('./index.html'))));
});
