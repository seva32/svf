/* global anime */
export default () => {
  const btnOpen = document.querySelector('.contact-btn-open');
  const btnClose = document.querySelector('.contact-btn-close');
  const formBody = document.querySelector('.contact-form-body');
  // const submitBtn = document.getElementById(".submit-message");

  // hover ani
  btnOpen.addEventListener('mouseenter', (event) => {
    anime({
      targets: btnOpen,
      duration: 500,
      scale: 1.3,
    });
  });
  // hover ani
  btnOpen.addEventListener('mouseleave', (event) => {
    anime({
      targets: btnOpen,
      duration: 500,
      scale: 1,
    });
  });
  // transition to form page
  btnOpen.addEventListener('click', (event) => {
    btnOpen.style.zIndex = -1;
    btnClose.style.zIndex = 20;
    formBody.style.zIndex = 30;
  });
  // hover ani
  btnClose.addEventListener('mouseenter', (event) => {
    anime({
      targets: btnClose,
      duration: 500,
      scale: 1.3,
    });
  });
  // hover ani
  btnClose.addEventListener('mouseleave', (event) => {
    anime({
      targets: btnClose,
      duration: 500,
      scale: 1,
    });
  });

  const textWrapper = document.querySelector('.contact-form-email .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    // eslint-disable-next-line quotes
    "<h2 class='letter'>$&</h2>",
  );

  const lettersTL = anime.timeline({ loop: 1 });
  lettersTL.add({
    targets: '.contact-form-email .letter',
    translateY: ['15rem', 0],
    translateX: ['1rem', 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: 'easeOutExpo',
    delay: (el, i) => 50 * i,
  });
  // .add({
  //   targets: ".contact-form-email",
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000,
  // });

  lettersTL.pause();

  // transitions from main page to form page
  // contact-btn-open main -> form, contact-btn-close form -> main

  // animation opening the form/modal
  const openModalTL = anime.timeline({
    duration: 2000,
  });
  openModalTL
    .add({
      targets: '.contact-btn-close',
      backgroundColor: '#ffffff',
      opacity: [0, 1],
    })
    .add(
      {
        targets: '.contact-form-dropback',
        scale: 30,
        zIndex: 5,
        opacity: [0, 1],
      },
      '-=2000',
    )
    .add(
      {
        targets: '.contact-form-body',
        translateY: ['100vh', '0vh'],
        opacity: [0.5, 1],
        easing(el, i, total) {
          return function (t) {
            return Math.tan((t * Math.PI) / 4) ** 3;
          };
        },
        complete(anim) {
          document.getElementById('anime-letters').style.opacity = 1;
          lettersTL.play();
        },
      },
      '-=1500',
    )
    .add({
      targets: '.contact-form-submit .submit-message img',
      scale: [
        { value: 1, duration: 600 },
        { value: 3, duration: 600 },
        { value: 0.7, duration: 300 },
        { value: 1.2, duration: 600 },
      ],
      duration: 1000,
      easing: 'easeInOutBack',
      delay: 1000,
    });

  openModalTL.pause();

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
        openModalTL.play();
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
          .add(
            {
              targets: '.contact-btn-close',
              backgroundColor: '#ff898a',
              duration: 1000,
            },
            '-=1000',
          )
          .add(
            {
              targets: '.contact-form-dropback',
              scale: 1,
              opacity: [1, 0],
              duration: 1000,
              complete(anim) {
                lettersTL.pause();
              },
            },
            '-=1300',
          )
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
          top: '-672px',
          left: '-480px',
          duration: 1,
          delay: 1,
        });
        // anime({
        //   targets: ".contact-form-submit .submit-message img",
        //   top: "-1120px",
        //   left: "-800px",
        //   duration: 1,
        //   delay: 1,
        // });
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
