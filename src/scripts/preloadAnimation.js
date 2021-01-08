/* global anime */
import { vw } from './utils';

// const svgContainer = document.querySelector('.hero-img');

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
        complete(anim) {
          anime({
            targets: '.svg-container',
            opacity: [0, 1],
            duration: 100,
            easing: 'linear',
          });
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
                  // se completa la ultima animacion que saca las palabras del viewport
                  // entonces puedo comenzar la animacion para traerlas nuevamente
                  if (i === words.length - 1) {
                    // nueva iter sobre todas las palabras
                    for (let j = 0; j < words.length; j++) {
                      if (j < 5) {
                        anime({
                          targets: words[j],
                          translateX: '0px',
                          duration: 2000,
                          easing: 'easeOutInSine',
                        });
                      } else if (j < 10) {
                        anime({
                          targets: words[j],
                          translateX: '0px',
                          duration: 2000,
                          easing: 'easeOutInSine',
                        });
                      } else {
                        anime({
                          targets: words[j],
                          translateY: '0px',
                          duration: 2000,
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
