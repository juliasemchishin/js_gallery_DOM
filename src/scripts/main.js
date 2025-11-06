'use strict';

const images = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
images.addEventListener('click', (event) => {
  const link = event.target.closest('.list-item');
  const imagesHREf = link.querySelector('a').getAttribute('href');

  if (!link) {
    return;
  }

  event.preventDefault();

  largeImg.setAttribute('src', window.location.origin + imagesHREf);
});
