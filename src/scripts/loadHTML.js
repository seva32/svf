/* eslint-disable indent */
/* global anime */
export default () => {
  // fetch() to animate html snippets in and out

  const projectsLink = document.querySelector('#projects-link');
  const homeLink = document.querySelector('#home-link');

  let linkArray = [projectsLink, homeLink];

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
        // ambos targets tienes que apuntar a los nodos/class que agregue
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
          case homeLink:
            fetchPage(eachLink, 'home.html'); // es el index.html
            break;
          default:
        }
      });
    });
  }
};