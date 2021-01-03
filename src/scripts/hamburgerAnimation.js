import { vw } from './utils';

const backdropScale = vw > 550 ? 45 : 25;
const itemsTranslateX = vw > 550 ? '2rem' : '1.5rem';
const itemsScale = vw > 550 ? 7 : 5;

const hamWrapper = document.querySelector('.hamburger-wrapper');
// const firstPath = document.querySelector(
//   '.hamburger-wrapper svg path:first-child',
// );
// const lastPath = document.querySelector(
//   '.hamburger-wrapper svg path:last-child',
// );

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
    // firstPath.style.transform = 'translateX(0px)';
    // lastPath.style.transform = 'translateX(0px)';
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
    });
  }

  if (!hamWrapper.classList.contains('hamburger-opened')) {
    // setTimeout(() => {
    //   firstPath.style.transform = 'translateX(-20px)';
    //   lastPath.style.transform = 'translateX(20px)';
    // }, 450);
    // backdropTL.seek(500); // si uso pause, play
    backdropTL.reverse();
    backdropTL.play();

    document.querySelector('.hamburger-items').style.zIndex = '-1';

    anime({
      targets: itemsArr,
      opacity: [{ value: [1, 0], duration: 1 }],
      scale: [{ value: [10, 1], duration: 500 }],
      translateY: '0px',
      translateX: '0rem',
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
    function () {
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
