document.addEventListener("DOMContentLoaded", () => {
  //Intitial page load animation
  console.log("ani");
  anime
    .timeline({
      easing: "easeOutExpo",
    })
    .add({
      targets: ".preload-wrapper",
      opacity: [0, 1],
      duration: 1,
      delay: 1000,
    })
    .add({
      targets: ".preload-content .preload-elem hr",
      width: ["0%", "80%"],
      delay: (el, i) => 200 * i,
      duration: (el, i) => (i === 1 ? 1200 : 400),
    })
    .add({
      targets: ".side-wrapper",
      translateX: ["-30vh", "0vh"],
      duration: 1000,
      offset: "-=100",
    })
    .add({
      targets: ".main-wrapper",
      translateY: ["100vh", "0vh"],
      duration: 2000,
    });

  document.addEventListener(
    "click",
    function (event) {
      if (
        !event.target.matches(".contact-btn-open") &&
        !event.target.matches(".contact-btn-close")
      )
        return;

      event.preventDefault();

      if (event.target.matches(".contact-btn-open")) {
        anime
          .timeline({
            easing: "easeOutExpo",
          })
          .add({
            targets: ".contact-btn-close, .contact-form-dropback",
            zIndex: (el, i) => (i === 0 ? 10 : 5),
            duration: 1,
          })
          .add({
            targets: ".contact-btn-close",
            backgroundColor: "#ffffff",
            duration: 1500,
          })
          .add({
            targets: ".contact-form-dropback",
            scale: 25,
            duration: 1500,
            offset: "-=1500",
          });
      }

      if (event.target.matches(".contact-btn-close")) {
        anime
          .timeline({
            easing: "easeOutExpo",
          })
          .add({
            targets: ".contact-btn-close, .contact-form-dropback",
            zIndex: -1,
            duration: 1,
          })
          .add({
            targets: ".contact-btn-close",
            backgroundColor: "#ff898a",
            duration: 1500,
          })
          .add({
            targets: ".contact-form-dropback",
            translateX: ["0%", "-52%"],
            scale: 1,
            duration: 1000,
            offset: "-=1500",
          });
      }
    },
    false
  );

  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
});
