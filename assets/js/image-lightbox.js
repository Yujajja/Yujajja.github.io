(() => {
  'use strict';

  const targets = Array.from(document.querySelectorAll('.showcase-image img, .detail-image img'));

  if (targets.length === 0) return;

  const overlay = document.createElement('div');
  const content = document.createElement('figure');
  const enlargedImage = document.createElement('img');
  const caption = document.createElement('figcaption');
  const closeButton = document.createElement('button');

  overlay.className = 'image-lightbox';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', '확대 이미지 보기');

  content.className = 'image-lightbox__content';
  enlargedImage.className = 'image-lightbox__image';
  caption.className = 'image-lightbox__caption';

  closeButton.className = 'image-lightbox__close';
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', '확대 이미지 닫기');
  closeButton.textContent = '×';

  content.append(enlargedImage, caption);
  overlay.append(content, closeButton);
  document.body.append(overlay);

  let activeTrigger = null;
  let previousBodyOverflow = '';

  const getCaption = (image) => {
    const figureCaption = image.closest('figure')?.querySelector('figcaption');
    return figureCaption?.textContent.trim() || image.alt.trim();
  };

  const openLightbox = (image) => {
    activeTrigger = image;
    previousBodyOverflow = document.body.style.overflow;

    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt;

    const captionText = getCaption(image);
    caption.textContent = captionText;
    caption.hidden = captionText.length === 0;
    overlay.classList.toggle('has-caption', captionText.length > 0);

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => overlay.classList.add('is-open'));
    closeButton.focus();
  };

  const closeLightbox = () => {
    if (overlay.hidden) return;

    overlay.classList.remove('is-open');
    overlay.hidden = true;
    document.body.style.overflow = previousBodyOverflow;

    const triggerToRestore = activeTrigger;
    activeTrigger = null;
    triggerToRestore?.focus({ preventScroll: true });
  };

  targets.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', '이미지 확대 보기');

    image.addEventListener('click', () => openLightbox(image));
    image.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openLightbox(image);
    });
  });

  closeButton.addEventListener('click', closeLightbox);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeLightbox();
  });

  content.addEventListener('click', (event) => event.stopPropagation());

  document.addEventListener('keydown', (event) => {
    if (overlay.hidden) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeLightbox();
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      closeButton.focus();
    }
  });
})();
