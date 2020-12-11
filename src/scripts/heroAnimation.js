let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

var callback = function (entries) {
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
      const words = document.querySelectorAll('.hero-img svg g');
      const colors = [
        '#5c27c1ff',
        '#9dacffff',
        '#8093F1',
        '#d81159ff',
        '#72DDF7',
        '#F7AEF8',
      ];

      const heroAnimation = anime.timeline({
        easing: 'easeOutExpo',
        duration: 6000,
      });

      heroAnimation
        .add({
          targets: '.hero-img',
          opacity: [0, 1],
          begin(anim) {
            let i;
            for (i = 0; i < words.length; ++i) {
              if (words[i].attributes.id.nodeValue.includes('software')) {
                const tl = anime.timeline({
                  duration: 2000,
                  delay: 2700,
                });
                tl.add({
                  targets: words[1],
                  opacity: [0, 1],
                  scale: [0.2, 1],
                  translateX: '0%',
                  translateY: '0%',
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
        })
        .add(
          {
            targets: words,
            duration: 1000,
            strokeWidth: ['3px', '1px'],
            stroke(el, i, l) {
              return colors[anime.random(0, 5)];
            },
            loop: 3,
            easing: 'easeInOutBounce',
            delay(el, i, l) {
              return i * 100;
            },
            endDelay(el, i, l) {
              return (l - i) * 100;
            },
          },
          '+=3000',
        )
        .add({
          targets: words,
          stroke: '#d81159ff',
          duration: 300,
        });
    }
  });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector('.main-wrapper');
observer.observe(target);

export default observer;
