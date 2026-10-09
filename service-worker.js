const CACHE_NAME = 'aurnelcy-offline-v3';
const MERMAID_ASSET = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './offline.js',
  './body.css',
  './layout.css',
  './buttons.css',
  './theorem.css',
  './mythology.css',
  './dictionnary.css',
  './capsule.css',
  './conceptmap.css',
  './song-feature.js',
  './theme-toggle.js',
  './definitions.js',
  './date.js',
  './script.js',
  './table-swapper.js',
  './dictionnary.js',
  './snewlc-modal.js',
  './bloody-tale.js',
  './eurekarc.js',
  './calendar.js',
  './planetarium.js',
  './characters.js',
  './capsule.js',
  './conceptmap.js',
  './checkboxes.js',
  './a6es.js',
  './vocab.js',
  './counter.js',
  './tools.js',
  './5ync.js',
  './4lien.js',
  './idk-table.js',
  './faq-list.js',
  './feature/favicon.png',
  './feature/OK.png',
  './feature/Sfivoq Pixel-Art.png',
  './feature/Awkward.png',
  './feature/Howan_Chibi.png',
];

const OFFLINE_ASSETS = [
  ...CORE_ASSETS,
  './favicon.png',
  './feature/favicon dark.png',
  './feature/40mP feat. 初音ミク - トリノコシティ cover.png',
  './feature/40mP feat. 初音ミク - トリノコシティ song.mp3',
  './feature/40mP feat. 初音ミク - トリノコシティ thumbnail.jpg',
  './feature/Ariabl_eyeS - 嘆きのラデュー cover.jpg',
  './feature/Ariabl_eyeS - 嘆きのラデュー song.mp3',
  './feature/Ariabl_eyeS - 嘆きのラデュー thumbnail.jpg',
  './feature/HIMEHINA - アダムとマダム cover.jpg',
  './feature/HIMEHINA - アダムとマダム song.mp3',
  './feature/HIMEHINA - アダムとマダム thumbnail.jpg',
  './feature/V.W.P - 言霊 cover.jpg',
  './feature/V.W.P - 言霊 song.mp3',
  './feature/V.W.P - 言霊 thumbnail.jpg',
  './feature/プラズマジカ & Mashumairesh!! - ランナーズハイ!! cover.jpg',
  './feature/プラズマジカ & Mashumairesh!! - ランナーズハイ!! song.mp3',
  './feature/プラズマジカ & Mashumairesh!! - ランナーズハイ!! thumbnail.jpg',
  './feature/神聖かまってちゃん - るるちゃんの自殺配信 cover.jpg',
  './feature/神聖かまってちゃん - るるちゃんの自殺配信 song.mp3',
  './feature/神聖かまってちゃん - るるちゃんの自殺配信 thumbnail.jpg',
  MERMAID_ASSET,
];

self.addEventListener('install', (event) => {
  event.waitUntil(Promise.all([
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)),
    self.skipWaiting(),
  ]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.delete('aurnelcy-cache-v2'),
      self.clients.claim(),
    ]),
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type !== 'CACHE_OFFLINE_ASSETS') return;

  const port = event.ports[0];
  if (!port) return;

  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      const failed = [];
      let completed = 0;
      let nextIndex = 0;

      const cacheNextAsset = async () => {
        while (nextIndex < OFFLINE_ASSETS.length) {
          const asset = OFFLINE_ASSETS[nextIndex];
          nextIndex += 1;

          try {
            await cache.add(asset);
          } catch (error) {
            failed.push(asset);
            console.error(`Impossible de mettre en cache ${asset}`, error);
          }

          completed += 1;
          port.postMessage({
            type: 'CACHE_PROGRESS',
            completed,
            total: OFFLINE_ASSETS.length,
          });
        }
      };

      await Promise.all(
        Array.from({ length: Math.min(4, OFFLINE_ASSETS.length) }, cacheNextAsset),
      );

      port.postMessage({
        type: 'CACHE_COMPLETE',
        failed,
        total: OFFLINE_ASSETS.length,
      });
    } catch (error) {
      console.error('Le téléchargement hors ligne a échoué.', error);
      port.postMessage({
        type: 'CACHE_ERROR',
        message: 'Le stockage hors ligne est inaccessible.',
      });
    }
  })());
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin && event.request.url !== MERMAID_ASSET) return;

  event.respondWith((async () => {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    try {
      return await fetch(event.request);
    } catch (error) {
      if (event.request.mode === 'navigate') {
        const offlinePage = await caches.match(new URL('./index.html', self.location.href));
        if (offlinePage) return offlinePage;
      }

      throw error;
    }
  })());
});
