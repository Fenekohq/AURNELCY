document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openHistBtn');
  const closeBtn = document.getElementById('closeHistBtn');
  const modal = document.getElementById('histModal');
  const overlay = document.getElementById('histModalOverlay');

  function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (modal.style.display === 'block' && e.key === 'Escape') closeModal();
  });
});
