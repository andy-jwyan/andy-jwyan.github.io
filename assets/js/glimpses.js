(function () {
  var grid = document.getElementById('glimpses-grid');
  var lightbox = document.getElementById('glimpse-lightbox');
  var lightboxImg = document.getElementById('glimpse-lightbox-img');
  var closeBtn = document.getElementById('glimpse-lightbox-close');

  if (!grid || !lightbox || !lightboxImg) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', function (e) {
    var img = e.target.closest('.glimpse-thumb');
    if (!img) return;
    openLightbox(img.src, img.alt);
  });

  lightbox.addEventListener('click', function (e) {
    closeLightbox();
  });

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
})();
