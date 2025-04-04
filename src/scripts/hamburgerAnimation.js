/* eslint-disable indent */
import { vw } from './utils';

const itemsTranslateX = vw > 550;

const sidebarTL = anime.timeline({ autoplay: false, loop: 1 });
sidebarTL.add({
  targets: '.side-wrapper',
  opacity: [
    { value: 1, delay: 200 },
    { value: 0, duration: 1500 },
    { value: 1, duration: 500 },
  ],
});

const animationProps = {
  begin() {
    sidebarTL.play();
  },
  scale: [
    { value: [1, 1.2], duration: 800, easing: 'easeOutQuad', delay: 1000 },
  ],
  translateX: itemsTranslateX
    ? [
        { value: '-3px', duration: 500, delay: 500 },
        { value: '10px', duration: 1400 },
      ]
    : undefined,
  translateY: !itemsTranslateX
    ? [
        { value: '-3px', duration: 500, delay: 500 },
        { value: '10px', duration: 1400 },
      ]
    : undefined,
};
const projectsTL = anime.timeline({ autoplay: false, loop: 1 });
projectsTL.add({
  targets: '.hamburger-items button#projects-link',
  ...animationProps,
});
const skillTL = anime.timeline({ autoplay: false, loop: 1 });
skillTL.add({
  targets: '.hamburger-items button#skills-link',
  ...animationProps,
});
const homeTL = anime.timeline({ autoplay: false, loop: 1 });
homeTL.add({
  targets: '.hamburger-items button#home-link',
  ...animationProps,
});
const toggleHamburgerItem = (e) => {
  const item = e.currentTarget;
  const itemIndex = item.getAttribute('data-index');

  if (projectsTL.progress === 100) {
    projectsTL.reverse();
    projectsTL.play();
  }
  if (skillTL.progress === 100) {
    skillTL.reverse();
    skillTL.play();
  }
  if (homeTL.progress === 100) {
    homeTL.reverse();
    homeTL.play();
  }
  if (itemIndex === 'projects') {
    if (projectsTL.reversed) {
      projectsTL.reverse();
    }
    projectsTL.restart();
  } else if (itemIndex === 'skills') {
    if (skillTL.reversed) {
      skillTL.reverse();
    }
    skillTL.restart();
  } else if (itemIndex === 'home') {
    if (homeTL.reversed) {
      homeTL.reverse();
    }
    homeTL.restart();
  }
};

const aArr = document.querySelectorAll('.hamburger-items div button');

for (let s = 0; s < aArr.length; s++) {
  aArr[s].addEventListener(
    'click',
    (e) => {
      toggleHamburgerItem(e);
      const preload = document.querySelector('.preload-wrapper');
      if (preload) preload.style.display = 'none';
    },
    false,
  );
}
