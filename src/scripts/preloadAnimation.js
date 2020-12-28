/* global anime */
import { vw } from './utils';

export default () => {
  if (vw > 550) {
    anime
      .timeline({
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.preload-wrapper',
        opacity: [0, 1],
        duration: 1,
        delay: 1000,
      })
      .add({
        targets: '.preload-content .preload-elem hr',
        width: ['0%', '80%'],
        delay: (el, i) => 200 * i,
        duration: (el, i) => (i === 1 ? 1200 : 400),
      })
      .add({
        targets: '.side-wrapper',
        translateX: ['-30vh', '0vh'],
        duration: 1000,
        offset: '-=100',
      })
      .add({
        targets: '.main-wrapper',
        translateY: ['100vh', '0vh'],
        duration: 2000,
        easing: 'easeInQuint',
      })
      .add({
        targets: '.contact-btn-open',
        zIndex: 1,
        duration: 1,
      });
  } else {
    anime
      .timeline({
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.preload-wrapper',
        opacity: [0, 1],
        duration: 1,
        delay: 1000,
      })
      .add({
        targets: '.preload-content .preload-elem hr',
        width: ['0%', '80%'],
        delay: (el, i) => 200 * i,
        duration: (el, i) => (i === 1 ? 1200 : 400),
      })
      .add({
        targets: '.main-wrapper',
        translateY: ['100vh', '0vh'],
        duration: 2000,
        easing: 'easeInQuint',
        begin(anim) {
          document.querySelector('.svg-container').style.opacity = 0;
        },
      })
      .add({
        targets: '.contact-btn-open',
        zIndex: 1,
        duration: 1,
      });
  }
};
