/* eslint-disable indent */
/* global anime */
import { vw } from './utils';

export default () => {
  // fetch() to animate html snippets in and out

  const projectsLink = document.querySelector('#projects-link');
  const skillsLink = document.querySelector('#skills-link');
  const homeLink = document.querySelector('#home-link');

  let linkArray = [projectsLink, skillsLink, homeLink];

  function bouncer(arrToFilter) {
    return arrToFilter.filter(Boolean);
  }

  linkArray = bouncer(linkArray);

  function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
      baseURL += `:${window.location.port}`;
    }

    fetch(`${baseURL}/${page}`)
      .then((response) => response.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        // ambos targets tienen que apuntar a los nodos/class que agregue
        anime({
          targets: '.content-section div',
          translateX: 700,
          opacity: 0,
          easing: 'easeInExpo',
          duration: 700,
          complete: (anim) => {
            document.querySelector('.content-wrapper').remove();
          },
        });

        setTimeout(() => {
          document
            .querySelector('.main-page')
            .insertBefore(
              doc.querySelector('.new-content'),
              document.querySelector('.footer'),
            );

          anime({
            targets: '.new-content .content-section div',
            translateX: [-600, 0],
            delay: (el, i) => 100 * i,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            begin(ani) {
              // const homeMobile = document.getElementById('home-mobile');
              // const desktopImg = document.querySelector('#home-desktop img');
              // const mobileImg = document.querySelector('#home-mobile img');
              // if (homeMobile) {
              //   homeMobile.classList.add('home-placeholder-mobile');
              // }
              // if (vw < 550) {
              //   desktopImg.classList.remove('hero-placeholder-img');
              //   desktopImg.style.display = 'none';
              //   mobileImg.classList.add('hero-placeholder-img');
              //   mobileImg.style.display = 'block';
              // } else {
              //   mobileImg.classList.remove('hero-placeholder-img');
              //   mobileImg.style.display = 'none';
              //   desktopImg.classList.add('hero-placeholder-img');
              //   desktopImg.style.display = 'block';
              //   }
            },
          });
        }, 700);
      });
  }

  if (linkArray && linkArray.length > 0) {
    linkArray.forEach((eachLink) => {
      eachLink.addEventListener('click', (e) => {
        switch (eachLink) {
          case projectsLink:
            fetchPage(eachLink, 'projects.html');
            break;
          case skillsLink:
            fetchPage(eachLink, 'skills.html');
            break;
          case homeLink:
            fetchPage(eachLink, 'home.html'); // es el index.html
            break;
          default:
        }
      });
    });
  }
};
