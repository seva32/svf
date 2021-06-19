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
        // const allElemsPath = document.querySelectorAll(
        //   '.svg-container div div svg path',
        // );
        // for (let s = 0; s < allElemsPath.length; s++) {
        //   const elemPath = allElemsPath[s];
        //   const elemOffset = anime.setDashoffset(elemPath);
        //   elemPath.setAttribute('stroke-dashoffset', elemOffset);
        //   anime(
        //     {
        //       targets: elemPath,
        //       strokeDashoffset: [elemOffset, 100],
        //       duration: 2000,
        //       stroke: '#ff36abff',
        //       strokeWidth: [
        //         { value: '2', duration: 1000 },
        //         { value: '1', duration: 1000 },
        //       ],
        //       loop: 2,
        //       easing: 'easeInOutSine',
        //       autoplay: true,
        //       direction: 'alternate',
        //     },
        //     '-=400',
        //   );
        // }

        const words = document.querySelectorAll('.hero-img div div > div');

        const heroAnimation = anime.timeline({
          easing: 'easeOutExpo',
          duration: 4000,
        });

        heroAnimation.add({
          targets: '.hero-img',
          opacity: [0, 1],
          begin(anim) {
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
