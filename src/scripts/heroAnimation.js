import { vw } from './utils';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    // Cada entry describe un cambio en la intersección para
    // un elemento observado
    //   entry.boundingClientRect,
    //   entry.intersectionRatio,
    //   entry.intersectionRect,
    //   entry.isIntersecting,
    //   entry.rootBounds,
    //   entry.target,
    //   entry.time,
    if (entry.intersectionRatio) {
      // animation for desktop
      if (vw > 550) {
        const wordsShakeAni = anime({
          targets: '.svg-container div div',
          rotate: [
            { value: '3deg', duration: 30 },
            { value: '0deg', duration: 30 },
            { value: '-3deg', duration: 30 },
            { value: '0deg', duration: 30 },
            { value: '3deg', duration: 30 },
            { value: '0deg', duration: 30 },
            { value: '-3deg', duration: 30 },
            { value: '0deg', duration: 30 },
          ],
          scale(el, i, l) {
            if (el.id.includes('software')) {
              return 2.2;
            }
            return 1;
          },
          autoplay: false,
        });

        const colors = ['#642ca9ff', '#ff36abff', '#ccb921', '#170312ff'];

        const tlColors = anime.timeline({
          easing: 'linear',
          duration: 200,
          autoplay: false,
        });

        tlColors
          .add(
            {
              begin(_anim) {
                wordsShakeAni.restart();
              },
              duration: 100,
            },
            '-=400',
          )
          .add({
            targets: '.svg-container div div svg path',
            fill: '#642ca9ff',
            delay: 3000,
          })
          .add(
            {
              begin(_anim) {
                wordsShakeAni.restart();
              },
              duration: 100,
              delay: 3000,
            },
            '-=400',
          )
          .add({
            targets: '.svg-container div div svg path',
            fill: '#ff36abff',
            delay: 3000,
          })
          // .add(
          //   {
          //     begin(_anim) {
          //       wordsShakeAni.restart();
          //     },
          //     duration: 100,
          //     delay: 3000,
          //   },
          //   '-=400',
          // )
          // .add({
          //   targets: '.svg-container div div svg path',
          //   fill: '#ccb921',
          //   delay: 3000,
          // })
          .add(
            {
              begin(_anim) {
                wordsShakeAni.restart();
              },
              duration: 100,
              delay: 3000,
            },
            '-=400',
          )
          .add({
            targets: '.svg-container div div svg path',
            fill(el, i, l) {
              return colors[anime.random(0, 3)];
            },
            duration: 1,
          });

        tlColors.restart();

        const allElemsPath = document.querySelectorAll(
          '.svg-container div div svg path',
        );

        for (let s = 0; s < allElemsPath.length; s++) {
          const elemPath = allElemsPath[s];
          const elemOffset = anime.setDashoffset(elemPath);
          elemPath.setAttribute('stroke-dashoffset', elemOffset);

          anime(
            {
              targets: elemPath,
              strokeDashoffset: [elemOffset, 100],
              duration: 3000,
              strokeWidth: [
                { value: '6', duration: 1000 },
                { value: '2', duration: 1000 },
              ],
              loop: 3,
              easing: 'easeInOutSine',
              autoplay: true,
              complete(anim) {
                anime({
                  targets: elemPath,
                  strokeWidth: 2,
                  duration: 1,
                });
              },
            },
            '-=400',
          );
        }
      } else {
        // animation for mobile
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
                  anime({
                    targets: '.svg-container',
                    opacity: 1,
                    duration: 1,
                  });
                  for (let j = 0; j < words.length; j++) {
                    if (j < 5) {
                      anime({
                        targets: words[j],
                        translateX: '0px',
                        duration: 3000,
                        easing: 'easeOutBounce',
                      });
                    } else if (j < 10) {
                      anime({
                        targets: words[j],
                        translateX: '0px',
                        duration: 3000,
                        easing: 'easeOutBounce',
                      });
                    } else {
                      anime({
                        targets: words[j],
                        translateY: '0px',
                        duration: 3000,
                        easing: 'easeOutBounce',
                      });
                    }
                  }
                }
              },
            });
          }
        }
      }
    }
  });
};

const observer = new IntersectionObserver(callback, options);
const target = document.querySelector('.main-wrapper');
observer.observe(target);

export default observer;

// const words = document.querySelectorAll('.hero-img svg g');
// const colors = [
//   '#5c27c1ff',
//   '#9dacffff',
// ];

//     begin(anim) {
//       let i;
//       for (i = 0; i < words.length; ++i) {
//         if (words[i].attributes.id.nodeValue.includes('software')) {
//           const tl = anime.timeline({
//             duration: 2000,
//             delay: 2700,
//           });

//             keyframes: [
//               { translateY: 40 },
//               { translateX: -50 },
//               { translateY: -40 },
//               { translateX: 0 },
//               { translateY: 0 },
//             ],
//             easing: 'easeOutElastic(1, .8)',
//           });

//       targets: words,
//       duration: 300,
//       strokeWidth: ['2px', '1px'],
//       stroke(el, i, l) {
//         return colors[anime.random(0, 5)];
//       },
//       loop: 3,
//       easing: 'easeOutBounce',
//       delay(el, i, l) {
//         return i * 100;
//       },
//       endDelay(el, i, l) {
//         return (l - i) * 100;
//       },

//   complete(anim) {
//     const elem = document.querySelector(".hero-img");
//     const elemFooter = document.querySelector(".footer");
//     translateYvalue = ((elem.getBoundingClientRect().bottom) * 8)
//                         + (((elemFooter.getBoundingClientRect().height / 2) * 8) - 20);
//   },
// })

//   update(anim) {
//     const software = document.getElementById('#software');
//     software.attributes.stroke = colors[anime.random(0, 5)];
//   },
//   delay(el, i, l) {
//     return i * 100;
//   },
//   endDelay(el, i, l) {
//     return (l - i) * 100;
//   },
