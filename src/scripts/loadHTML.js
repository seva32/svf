/* global anime */
export default () => {
  // fetch() to animate html snippets in and out

  const projectsLink = document.querySelector("#projects-link");
  const homeLink = document.querySelector("#home-link");

  const linkArray = [projectsLink, homeLink];

  function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
      baseURL += `:${window.location.port}`;
    }

    console.log(`${baseURL}/${page}`);

    fetch(`${baseURL}/${page}`)
      .then((response) =>
        response.text())
      .then((html) => {
        console.log(html);

        const doc = new DOMParser().parseFromString(html, "text/html");

        anime({
          targets: ".text-section h1, .text-section p, .text-section div",
          translateX: 700,
          opacity: 0,
          easing: "easeInExpo",
          duration: 700,
          complete: (anim) => {
            document.querySelector(".column-wrapper").remove();
          },
        });

        setTimeout(() => {
          document
            .querySelector(".main-page")
            .insertBefore(
              doc.querySelector(".new-content"),
              document.querySelector(".gallery-nav"),
            );

          anime({
            targets:
              ".new-content .text-section h1, .new-content .text-section p, .new-content .text-section div",
            translateX: [-600, 0],
            delay: (el, i) =>
              100 * i,
            opacity: [0, 1],
            easing: "easeOutExpo",
          });
        }, 700);
      });
  }

  linkArray.forEach((eachLink) => {
    eachLink.addEventListener("click", (e) => {
      switch (eachLink) {
          case projectsLink:
            fetchPage(eachLink, "projects.html");
            break;
          case homeLink:
            fetchPage(eachLink, "home.html"); // es el index.html
            break;
          default:
      }
    });
  });
};
