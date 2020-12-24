/* global anime */
export default () => {
  const sideBar = document.querySelector('.side-wrapper');

  const pathOpacity = anime({
    targets: '.side-elem:last-child',
    opacity: [0, 1],
    duration: 10,
    autoplay: false,
  });

  const lineDrawing = anime({
    targets: '#side-line path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 1500,
    autoplay: false,
    loop: true,
  });

  sideBar.addEventListener('mouseenter', (event) => {
    pathOpacity.restart();
    lineDrawing.restart();
  });

  sideBar.addEventListener('mouseleave', (event) => {
    document.querySelector('.side-elem:last-child').style.opacity = 0;
  });
};
