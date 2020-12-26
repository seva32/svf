// import { vw } from './utils';

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
      const opacityAni = anime({
        targets: '.svg-container',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 300,
        autoplay: false,
        easing: 'linear',
      });

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
          fill: '#ccb921',
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
          fill(el, i, l) {
            return colors[anime.random(0, 3)];
          },
          duration: 1,
        });

      tlColors.restart();
      opacityAni.restart();

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
            loop: 4,
            // direction: 'alternate',
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
    }
  });
};

const observer = new IntersectionObserver(callback, options);
const target = document.querySelector('.main-wrapper');
observer.observe(target);

export default observer;

// const logaritmo = Math.log(vw);
// const translateXvalue = `${vw > 550 ? logaritmo * 163 - 800 : 0}%`;
// eslint-disable-next-line no-nested-ternary
// const translateYvalue = `${vw < 550 ? 2000 : vw < 763 ? 7184 - (logaritmo * 965)
// : 1450 - (logaritmo * 109)}%`;
// const translateYvalue = 0;

// const pathElems = document.querySelectorAll('.hero-img div svg path');

// for (let i = 0; i < pathElems.length; i++) {
//   const pathEl = pathElems[i];
//   const offset = anime.setDashoffset(pathEl);
//   pathEl.setAttribute('stroke-dashoffset', offset);

// const tl = anime.timeline({});

// tl.add({
//   targets: pathEl,
//   rotateX: '5turn',
//   duration: 1500,
// });
// anime({
//   targets: pathEl,
//   strokeDashoffset: [offset, 100],
//   duration: anime.random(3000, 6000),
//   loop: true,
//   direction: 'alternate',
//   easing: 'easeInOutSine',
//   autoplay: true,
// });

/* esta es la primer animacion que probe */

// const words = document.querySelectorAll('.hero-img svg g');
// const colors = [
//   '#5c27c1ff',
//   '#9dacffff',
//   '#8093F1',
//   '#d81159ff',
//   '#72DDF7',
//   '#F7AEF8',
// ];

// const heroAnimation = anime.timeline({
//   easing: 'easeOutExpo',
//   duration: 4000,
// });

// heroAnimation
//   .add({
//     targets: '.hero-img',
//     opacity: [0, 1],
//     duration: 1,
//   })
//   .add({
//     targets: '#software',
//     strokeDashoffset: [offset, 100],
//     duration: anime.random(3000, 6000),
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     autoplay: true,
//   });

// heroAnimation
//   .add({
//     targets: '.hero-img',
//     opacity: [0, 1],
//     begin(anim) {
//       let i;
//       for (i = 0; i < words.length; ++i) {
//         if (words[i].attributes.id.nodeValue.includes('software')) {
//           const tl = anime.timeline({
//             duration: 2000,
//             delay: 2700,
//           });
//           tl.add({
//             targets: words[1],
//             opacity: [0, 1],
//             scale: [0.2, 1],
//             translateX: '0%',
//             translateY: '0%',
//           });
//         } else if (i < 5) {
//           const tl = anime.timeline({
//             duration: 2500,
//             delay: 500,
//           });
//           tl.add({
//             targets: words[i],
//             keyframes: [
//               { translateY: 40 },
//               { translateX: -50 },
//               { translateY: -40 },
//               { translateX: 0 },
//               { translateY: 0 },
//             ],
//             easing: 'easeOutElastic(1, .8)',
//           });
//         } else if (i < 10) {
//           const tl = anime.timeline({
//             duration: 1500,
//           });
//           tl.add({
//             targets: words[i],
//             easing: 'easeOutBounce',
//             translateX: ['-1000px', '0px'],
//             opacity: [0, 1],
//           });
//         } else {
//           const tl = anime.timeline({
//             duration: 3000,
//           });
//           tl.add({
//             targets: words[i],
//             keyframes: [
//               { translateY: -20 },
//               { translateX: 200 },
//               { translateY: 20 },
//               { translateX: 0 },
//               { translateY: 0 },
//             ],
//             easing: 'easeOutElastic(1, .8)',
//           });
//         }
//       }
//     },
//   })
//   .add(
//     {
//       targets: words,
//       duration: 300,
//       strokeWidth: ['2px', '1px'],
//       stroke(el, i, l) {
//         return colors[anime.random(0, 5)];
//       },
//       loop: 3,
//       easing: 'easeInOutBounce',
//       delay(el, i, l) {
//         return i * 100;
//       },
//       endDelay(el, i, l) {
//         return (l - i) * 100;
//       },
//     },
//     '+=3000',
//   )
//   .add({
//     targets: words,
//     stroke: '#333138',
//     rotateY: ['0deg', '90deg'],
//     duration: 300,
//   })
// .add({
//   targets: ".hero-img",
//   scale: [
//     { value: 1.2, duration: 800 },
//     { value: 0.1, duration: 300 },
//   ],
//   complete(anim) {
//     const elem = document.querySelector(".hero-img");
//     const elemFooter = document.querySelector(".footer");
//     translateYvalue = ((elem.getBoundingClientRect().bottom) * 8)
//                         + (((elemFooter.getBoundingClientRect().height / 2) * 8) - 20);
//   },
// })
// .add({
//   targets: ".hero-img",
//   duration: 2000,
//   begin(anim) {
//     anime({
//       targets: ".hero-img",
//       keyframes: [
//         { translateX: translateXvalue, duration: 800 },
//         { translateY: `${translateYvalue}px`, duration: 1000 },
//         { opacity: 0, duration: 200 },
//       ],
//       duration: 2000,
//       complete(ani) {
//         anime({
//           targets: ".hamburger-wrapper",
//           scale: [
//             { value: 1.3, duration: 300 },
//             { value: 1, duration: 600 },
//             { value: 1.3, duration: 300 },
//             { value: 1, duration: 600 },
//             { value: 1.3, duration: 300 },
//             { value: 1, duration: 600 },
//           ],
//           translateY: [
//             { value: "40px", duration: 900 },
//             { value: "80px", duration: 900 },
//             { value: "240px", duration: 900 },
//           ],
//           easing: "easeInOutQuad",
//         });
//       },
//     });
//   },
//   easing: "easeOutElastic(1, .8)",
// })
// .add({
//   targets: '#software',
//   strokeWidth: ['100%', '1px'],
//   stroke: '#d81159ff',
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
// });
// }
