// Accessibility & niceties
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for in-page anchors (only for on-page links)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Gallery Lightbox
(function(){
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const links = Array.from(grid.querySelectorAll('a'));
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');
  const btnPrev = document.getElementById('lightboxPrev');
  const btnNext = document.getElementById('lightboxNext');
  const btnClose = document.getElementById('lightboxClose');
  let current = 0;
  let lastFocus = null;

  function show(i){
    if (i < 0) i = links.length - 1; else if (i >= links.length) i = 0;
    current = i;
    const link = links[current];
    const imageUrl = link.getAttribute('href');
    const alt = link.querySelector('img')?.getAttribute('alt') || '';
    img.src = imageUrl;
    img.alt = alt;
    caption.textContent = alt;
  }

  function open(i){
    lastFocus = document.activeElement;
    show(i);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function close(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    img.removeAttribute('src');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // Open from thumbnails
  links.forEach((a, idx) => {
    a.addEventListener('click', e => {
      e.preventDefault();
      open(idx);
    });
  });

  // Controls
  btnPrev.addEventListener('click', () => show(current - 1));
  btnNext.addEventListener('click', () => show(current + 1));
  btnClose.addEventListener('click', close);

  // Close on overlay click
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

  // Swipe support for mobile
  let touchstartX = null;

  lightbox.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', e => {
    if (touchstartX === null) return;
    const touchendX = e.changedTouches[0].screenX;
    const swipeThreshold = 50; // Min distance for a swipe in pixels

    if (touchendX < touchstartX - swipeThreshold) {
      show(current + 1); // Swiped left
    } else if (touchendX > touchstartX + swipeThreshold) {
      show(current - 1); // Swiped right
    }
    touchstartX = null; // Reset for next touch sequence
  });

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
    else if (e.key === 'Tab') { // focus trap between buttons
      const focusables = [btnPrev, btnNext, btnClose];
      const idx = focusables.indexOf(document.activeElement);
      if (e.shiftKey) {
        const ni = idx <= 0 ? focusables.length - 1 : idx - 1;
        focusables[ni].focus();
        e.preventDefault();
      } else {
        const ni = idx === focusables.length - 1 ? 0 : idx + 1;
        focusables[ni].focus();
        e.preventDefault();
      }
    }
  });
})();

// Music player tabs
document.querySelectorAll('.music-tabs .tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const service = button.dataset.service;

    // Update button active state
    document.querySelectorAll('.music-tabs .tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide players
    document.querySelectorAll('.music-player').forEach(player => {
      if (player.dataset.service === service) {
        player.style.display = 'block';
      } else {
        player.style.display = 'none';
      }
    });
  });
});
