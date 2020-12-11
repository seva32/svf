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
      console.log('entro');
    }
  });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector('.main-wrapper');
observer.observe(target);

export default observer;
