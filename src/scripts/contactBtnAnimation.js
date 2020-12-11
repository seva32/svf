/* global anime */
export default () => {
  const btnOpen = document.querySelector('.contact-btn-open');
  const btnClose = document.querySelector('.contact-btn-close');
  const formBody = document.querySelector('.contact-form-body');
  const submitBtn = document.getElementById('.submit-message');

  // hover ani
  btnOpen.addEventListener('mouseenter', (event) => {
    btnOpen.style.transition = 'transform 0.3s';
    btnOpen.style.transform = 'scale(1.3) translateX(-40%)';
  });
  // hover ani
  btnOpen.addEventListener('mouseleave', (event) => {
    btnOpen.style.transform = 'scale(1) translateX(-52%)';
  });
  // transition to form page
  btnOpen.addEventListener('click', (event) => {
    btnOpen.style.zIndex = -1;
    btnClose.style.zIndex = 20;
    formBody.style.zIndex = 30;
  });
  // hover ani
  btnClose.addEventListener('mouseenter', (event) => {
    btnClose.style.transition = 'transform 0.3s';
    btnClose.style.transform = 'scale(1.3) translateX(-40%)';
  });
  // hover ani
  btnClose.addEventListener('mouseleave', (event) => {
    btnClose.style.transform = 'scale(1) translateX(-52%)';
  });

  // custom animejs easeings
  // anime.easings.tanCube = function (t) {
  //   return Math.tan((t * Math.PI) / 4) ** 3;
  // };

  // anime.easings.tanSqr = function (t) {
  //   return Math.tan((t * Math.PI) / 4) ** 2;
  // };

  // contact email shows after form & plane lands
  const animeLetters = anime({
    targets: '#anime-letters',
    opacity: [0, 1],
    duration: 5000,
    delay: 500,
    autoplay: false,
  });

  // contact email letters animations
  const letterTime = 100;
  const lineDrawing = anime({
    targets: '#anime-letters svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: letterTime,
    delay(el, i) {
      return letterTime * i;
    },
    begin(anim) {
      const letters = document.querySelectorAll('#anime-letters svg path');
      let i;

      for (i = 0; i < letters.length; ++i) {
        letters[i].setAttribute('stroke', '#1A1B41');
        letters[i].setAttribute('fill', 'none');
      }
    },
    update(anim) {
      const letters = document.querySelectorAll('#anime-letters svg path');
      let i;

      if (anim.currentTime >= letterTime) {
        for (i = 0; i < letters.length; ++i) {
          letters[i].setAttribute('fill', '#1A1B41');
        }
      }
    },
    autoplay: false,
    loop: true,
    direction: 'alternate',
  });

  // transitions from main page to form page
  // contact-btn-open main -> form, contact-btn-close form -> main

  // animation opening the form/modal
  const openModalTL = anime.timeline({
    direction: 'normal',
    autoplay: false,
  });
  openModalTL
    .add({
      targets: '.contact-btn-close',
      backgroundColor: '#ffffff',
      opacity: [0, 1],
      duration: 3000,
    })
    .add({
      targets: '.contact-form-dropback',
      scale: 30,
      zIndex: 5,
      opacity: [0, 1],
      duration: 2000,
      offset: '-=3000',
    })
    .add({
      targets: '.contact-form-body',
      translateY: ['100vh', '0vh'],
      opacity: [0, 1],
      duration: 1500,
      offset: '-=3500',
      easing(el, i, total) {
        return function (t) {
          return Math.tan((t * Math.PI) / 4) ** 3;
        };
      },
      complete(anim) {
        lineDrawing.restart();
        animeLetters.restart();
      },
    });

  // global listener for btn actions starts
  document.addEventListener(
    'click',
    (event) => {
      if (
        !event.target.matches('.contact-btn-open') &&
        !event.target.matches('.contact-btn-close') &&
        !event.target.matches('.submit-message')
      ) {
        return;
      }

      event.preventDefault();

      if (event.target.matches('.contact-btn-open')) {
        openModalTL.restart();
      }

      if (event.target.matches('.contact-btn-close')) {
        // close modal timeline
        anime
          .timeline({
            easing: 'easeOutExpo',
          })
          .add({
            targets: '.contact-form-body',
            translateY: ['0vh', '50vh'],
            opacity: [1, 0],
            duration: 300,
            zIndex: -1,
          })
          .add({
            targets: '.contact-btn-close, .contact-form-dropback',
            zIndex: -1,
            opacity: [1, 0],
            duration: 1000,
          })
          .add({
            targets: '.contact-btn-close',
            backgroundColor: '#ff898a',
            duration: 1000,
            offset: '-=1000',
          })
          .add({
            targets: '.contact-form-dropback',
            translateX: ['0%', '-52%'],
            scale: 1,
            opacity: [1, 0],
            duration: 1000,
            offset: '-=1000',
          })
          .add({
            targets: '#anime-letters',
            opacity: 0,
            duration: 1,
          })
          .add({
            targets: '.contact-btn-open',
            zIndex: 1,
            duration: 1,
          });
      }

      // plane animation on submit btn
      if (event.target.matches('.submit-message')) {
        const path = anime.path('#submit-path path');
        anime({
          targets: '.contact-form-submit .submit-message img',
          top: '-560px',
          left: '-400px',
          duration: 1,
          delay: 1,
        });
        anime({
          targets: '.contact-form-submit .submit-message img',
          translateX: path('x'),
          translateY: path('y'),
          easing: 'linear',
          duration: 2200,
          opacity: [1, 0],
          rotate: path('angle'), // con esta la imagen queda en igual angulo al path
          loop: false,
        });
      }
    },
    false,
  );
  // global listener for btn actions ends
};
