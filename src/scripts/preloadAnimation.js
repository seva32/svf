/* eslint-disable no-confusing-arrow */
/* global anime */
import { vw } from './utils';

const resetPreloadStyles = () => {
  // Reset body opacity
  document.body.style.opacity = 0;

  // Reset preload-wrapper opacity
  const preloadWrapper = document.querySelector('.preload-wrapper');
  if (preloadWrapper) preloadWrapper.style.opacity = 0;

  // Reset preload-content hr width
  const preloadElems = document.querySelectorAll(
    '.preload-content .preload-elem hr',
  );
  preloadElems.forEach((elem) => {
    // eslint-disable-next-line no-param-reassign
    elem.style.width = '0%';
  });

  // Reset main-wrapper translateY
  const mainWrapper = document.querySelector('.main-wrapper');
  if (mainWrapper) mainWrapper.style.transform = 'translateY(100vh)';

  // Reset svg-container opacity
  const svgContainer = document.querySelector('.svg-container');
  if (svgContainer) svgContainer.style.opacity = 0;

  console.log('Preload reset');
};

export default () => {
  resetPreloadStyles(); // Reset styles before starting the animation

  if (vw > 550) {
    anime
      .timeline({
        easing: 'easeOutExpo',
      })
      .add({
        targets: 'body',
        opacity: [0, 1],
        duration: 1,
        delay: 100,
      })
      .add({
        targets: '.side-wrapper',
        opacity: [0],
        duration: 1,
        easing: 'easeInOutQuint',
        delay: 1,
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
        targets: ['.side-wrapper', '.main-wrapper'],
        opacity: (el) =>
          el.classList.contains('side-wrapper') ? [0, 1] : undefined,
        translateY: (el) =>
          el.classList.contains('main-wrapper') ? ['100vh', '0vh'] : undefined,
        duration: 2000,
        easing: 'easeInOutQuint',
        complete(anim) {
          if (
            anim.animatables.some((a) =>
              a.target.classList.contains('main-wrapper'),
            )
          ) {
            anime({
              targets: '.svg-container',
              opacity: [0, 1],
              duration: 100,
              easing: 'linear',
            });
          }
        },
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
        targets: 'body',
        opacity: [0, 1],
        duration: 1,
        delay: 100,
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
        complete(anim) {
          anime({
            targets: '.svg-container',
            opacity: [0, 1],
            duration: 2000,
            easing: 'linear',
          });
          const words = document.querySelectorAll('.svg-container div div');
          for (let i = 0; i < words.length; i++) {
            if (i < 5) {
              anime({
                targets: words[i],
                translateX: anime.random(600, 1000),
                duration: 1,
              });
            } else if (i < 10) {
              anime({
                targets: words[i],
                translateX: anime.random(-600, -1000),
                duration: 1,
              });
            } else {
              anime({
                targets: words[i],
                translateY: anime.random(600, 1000),
                duration: 1,
                complete(_ani) {
                  if (i === words.length - 1) {
                    for (let j = 0; j < words.length; j++) {
                      if (j < 5) {
                        anime({
                          targets: words[j],
                          translateX: '0px',
                          duration: 800,
                          easing: 'easeOutInSine',
                        });
                      } else if (j < 10) {
                        anime({
                          targets: words[j],
                          translateX: '0px',
                          duration: 1000,
                          easing: 'easeOutInSine',
                        });
                      } else {
                        anime({
                          targets: words[j],
                          translateY: '0px',
                          duration: 1200,
                          easing: 'easeOutInSine',
                        });
                      }
                    }
                  }
                },
              });
            }
          }
        },
      })
      .add({
        targets: '.contact-btn-open',
        zIndex: 1,
        duration: 1,
      });
  }
};
