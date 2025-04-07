import { vw } from './utils';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const heroAnimation = anime.timeline({
  easing: 'easeOutExpo',
  duration: 4000,
});

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio) {
      if (vw > 550) {
        const words = document.querySelectorAll('.hero-img div div > div');

        heroAnimation.add({
          targets: '.hero-img',
          opacity: [0, 1],
          begin(_anim) {
            let i;
            for (i = 0; i < words.length; ++i) {
              if (i === 1) {
                const tl = anime.timeline({
                  duration: 2000,
                  delay: 2700,
                });
                tl.add({
                  targets: words[1],
                  opacity: [0, 1],
                  scale: [0.2, 2],
                  translateX: '0%',
                  translateY: '10%',
                });
              } else if (i < 5) {
                const tl = anime.timeline({
                  duration: 2500,
                  delay: 500,
                });
                tl.add({
                  targets: words[i],
                  keyframes: [
                    { translateY: 40 },
                    { translateX: -50 },
                    { translateY: -40 },
                    { translateX: 0 },
                    { translateY: 0 },
                  ],
                  easing: 'easeOutElastic(1, .8)',
                });
              } else if (i < 10) {
                const tl = anime.timeline({
                  duration: 1500,
                });
                tl.add({
                  targets: words[i],
                  easing: 'easeOutBounce',
                  translateX: ['-1000px', '0px'],
                  opacity: [0, 1],
                });
              } else {
                const tl = anime.timeline({
                  duration: 3000,
                });
                tl.add({
                  targets: words[i],
                  keyframes: [
                    { translateY: -20 },
                    { translateX: 200 },
                    { translateY: 20 },
                    { translateX: 0 },
                    { translateY: 0 },
                  ],
                  easing: 'easeOutElastic(1, .8)',
                });
              }
            }
          },
        });

        heroAnimation.pause();
        heroAnimation.restart();
      } else {
        //
      }
    }
  });
};

const observer = new IntersectionObserver(callback, options);
const target = document.querySelector('.main-wrapper');
observer.observe(target);

window.onload = () => {
  if (heroAnimation) {
    heroAnimation.seek?.(0);
  }
  console.log('Hero animation loaded');
};

export default observer;
