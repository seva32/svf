// fetch() to animate html snippets in and out

let projectsLink = document.querySelector("#projects-link");

let linkArray = [projectsLink];

linkArray.forEach((eachLink) => {
  eachLink.addEventListener("click", (e) => {
    switch (eachLink) {
      case projectsLink:
        fetchPage(eachLink, "projects.html");
        break;
    }
  });
});

function fetchPage(link, page) {
  let baseURL = `${window.location.protocol}//${window.location.hostname}`;

  if (window.location.port) {
    baseURL += `:${window.location.port}`;
  }

  fetch(`${baseURL}/${page}`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      let doc = new DOMParser().parseFromString(html, "text/html");

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

      setTimeout(function () {
        document
          .querySelector(".main-page")
          .insertBefore(
            doc.querySelector(".new-content"),
            document.querySelector(".gallery-nav")
          );

        anime({
          targets:
            ".new-content .text-section h1, .new-content .text-section p, .new-content .text-section div",
          translateX: [-600, 0],
          delay: (el, i) => 100 * i,
          opacity: [0, 1],
          easing: "easeOutExpo",
        });
      }, 700);
    });
}
