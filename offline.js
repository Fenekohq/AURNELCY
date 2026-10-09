document.addEventListener('DOMContentLoaded', () => {
  const downloadButton = document.getElementById('offline-download-btn');
  const status = document.getElementById('offline-status');
  if (!downloadButton || !status) return;

  let downloading = false;

  const showStatus = (message) => {
    status.textContent = message;
    status.style.display = 'block';
  };

  downloadButton.addEventListener('click', async () => {
    if (downloading) return;

    if (!('serviceWorker' in navigator) || !window.isSecureContext) {
      showStatus('Le téléchargement hors ligne nécessite une connexion HTTPS.');
      return;
    }

    downloading = true;
    downloadButton.disabled = true;
    showStatus('Téléchargement du site et de sa musique… Garde cette page ouverte jusqu’à la fin.');

    try {
      const registration = await navigator.serviceWorker.register('./service-worker.js');
      const pendingWorker = registration.installing || registration.waiting;
      if (pendingWorker) {
        await new Promise((resolve, reject) => {
          const onStateChange = () => {
            if (pendingWorker.state === 'activated') {
              pendingWorker.removeEventListener('statechange', onStateChange);
              resolve();
            } else if (pendingWorker.state === 'redundant') {
              pendingWorker.removeEventListener('statechange', onStateChange);
              reject(new Error('Le service worker n’a pas pu être activé.'));
            }
          };

          pendingWorker.addEventListener('statechange', onStateChange);
          onStateChange();
        });
      }
      await navigator.serviceWorker.ready;

      const worker = registration.active || navigator.serviceWorker.controller;
      if (!worker) throw new Error('Aucun service worker actif.');

      const channel = new MessageChannel();
      channel.port1.onmessage = ({ data }) => {
        if (data.type === 'CACHE_PROGRESS') {
          showStatus(`Enregistrement hors ligne : ${data.completed}/${data.total}`);
          return;
        }

        if (data.type === 'CACHE_COMPLETE') {
          if (data.failed.length > 0) {
            showStatus(
              `${data.failed.length} fichier(s) n’ont pas pu être enregistrés. Vérifie ta connexion et réessaie.`,
            );
          } else {
            showStatus(
              'Le site est prêt hors ligne (environ 35 Mo, musique comprise). Sur iPhone, ajoute-le aussi à l’écran d’accueil via Partager.',
            );
          }

          downloading = false;
          downloadButton.disabled = false;
          channel.port1.close();
          return;
        }

        if (data.type === 'CACHE_ERROR') {
          showStatus(data.message);
          downloading = false;
          downloadButton.disabled = false;
          channel.port1.close();
        }
      };

      worker.postMessage({ type: 'CACHE_OFFLINE_ASSETS' }, [channel.port2]);
    } catch (error) {
      console.error('Impossible de démarrer le téléchargement hors ligne.', error);
      showStatus('Impossible de préparer le mode hors ligne. Vérifie ta connexion et réessaie.');
      downloading = false;
      downloadButton.disabled = false;
    }
  });
});
