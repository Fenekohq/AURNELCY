const CACHE_NAME = 'aurnelcy-cache-v1';
// Liste des fichiers à sauvegarder pour l'accès hors-ligne
const ASSETS_TO_CACHE = [
  '/',
  '/AURNELCY.html',
  '/manifest.json',
  '/service-worker.js'
  // Ajoute ici tes dossiers d'images ou fichiers CSS s'ils existent
];

// 1. Installation : On télécharge les fichiers dans le cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Fichiers mis en cache !');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Interception : Quand le navigateur demande un fichier, 
// on regarde d'abord dans le cache s'il existe.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retourne le fichier du cache, ou fait la requête réseau si pas en cache
      return response || fetch(event.request);
    })
  );
});