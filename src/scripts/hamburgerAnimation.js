import { vw } from './utils';

const backdropScale = vw > 550 ? 45 : 25;
const itemsTranslateX = vw > 550 ? '2rem' : '1.5rem';
const itemsScale = vw > 550 ? 7 : 5;

const hamWrapper = document.querySelector('.hamburger-wrapper');
const wavesWrapper = document.querySelector('.waves-container');

const backdropTL = anime.timeline({ autoplay: false, loop: 1 });
backdropTL.add({
  targets: '.hamburger-backdrop',
  zIndex: [{ value: [-2, 5], duration: 1 }],
  opacity: [{ value: [0, 1], duration: 1 }],
  scale: [{ value: [1, backdropScale], duration: 500 }],
});
backdropTL.pause();

const itemsArr = document.querySelectorAll('.hamburger-items div');

const toggleHamburger = () => {
  hamWrapper.classList.toggle('hamburger-opened');
  hamWrapper.setAttribute(
    'aria-expanded',
    hamWrapper.classList.contains('hamburger-opened'),
  );

  if (hamWrapper.classList.contains('hamburger-opened')) {
    // backdropTL.seek(0);
    if (backdropTL.reversed) {
      backdropTL.reverse();
    }
    backdropTL.play();

    document.querySelector('.hamburger-items').style.zIndex = '10';
    document.querySelector('.contact-btn-container').style.opacity = '0';

    anime({
      targets: itemsArr,
      opacity: [{ value: [0, 1], duration: 1 }],
      scale: [{ value: [1, itemsScale], duration: 800 }],
      translateY(el, i, l) {
        return `${1 * (i + 1)}rem`;
      },
      translateX: itemsTranslateX,
      complete(anim) {
        wavesWrapper.style.display = 'block';
        anime({
          targets: wavesWrapper,
          opacity: [0, 1],
          duration: 3500,
        });
      },
    });
  }

  if (!hamWrapper.classList.contains('hamburger-opened')) {
    backdropTL.reverse();
    backdropTL.play();

    document.querySelector('.hamburger-items').style.zIndex = '-1';

    anime({
      targets: itemsArr,
      opacity: [{ value: [1, 0], duration: 1 }],
      scale: [{ value: [10, 1], duration: 500 }],
      translateY: '0px',
      translateX: '0rem',
      begin(an) {
        wavesWrapper.style.display = 'none';
        anime({
          targets: wavesWrapper,
          opacity: [1, 0],
          duration: 200,
        });
      },
      complete(anim) {
        document.querySelector('.contact-btn-container').style.opacity = '1';
      },
    });
  }
};

if (hamWrapper) {
  hamWrapper.addEventListener('click', toggleHamburger);
}

const aArr = document.querySelectorAll('.hamburger-items div a');

for (let s = 0; s < aArr.length; s++) {
  aArr[s].addEventListener(
    'click',
    () => {
      hamWrapper.click();
    },
    false,
  );
}

// function toggleInstanceDirection() {
//   var direction = instance.direction;
//   if (direction !== 'alternate') {
//     instance.direction = direction !== 'normal' ? 'normal' : 'reverse';

//     if (instance.progress === 100 && instance.direction === 'reverse') {
//       instance.completed = false;
//     }
//   }
//   ...
// }
