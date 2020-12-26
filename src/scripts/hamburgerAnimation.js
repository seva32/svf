const hamWrapper = document.querySelector('.hamburger-wrapper');
const firstPath = document.querySelector(
  '.hamburger-wrapper svg path:first-child',
);
const lastPath = document.querySelector(
  '.hamburger-wrapper svg path:last-child',
);

const toggleHamburger = () => {
  hamWrapper.classList.toggle('hamburger-opened');
  hamWrapper.setAttribute(
    'aria-expanded',
    hamWrapper.classList.contains('hamburger-opened'),
  );

  if (hamWrapper.classList.contains('hamburger-opened')) {
    firstPath.style.transform = 'translateX(0px)';
    lastPath.style.transform = 'translateX(0px)';
  }
  if (!hamWrapper.classList.contains('hamburger-opened')) {
    setTimeout(() => {
      firstPath.style.transform = 'translateX(-20px)';
      lastPath.style.transform = 'translateX(20px)';
    }, 450);
  }
};

if (hamWrapper) {
  hamWrapper.addEventListener('click', toggleHamburger);
}
