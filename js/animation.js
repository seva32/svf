document.addEventListener("DOMContentLoaded", () => {
  function getWidth() {
    return Math.min(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  const vw = getWidth();

  //Intitial page load animation
  if (vw > 550) {
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
      })
      .add({
        targets: ".main-page",
        display: "flex",
      })
      .add({
        targets: ".contact-btn-open",
        zIndex: 1,
        duration: 1,
      });
  } else {
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
        targets: ".main-wrapper",
        translateY: ["100vh", "0vh"],
        duration: 2000,
      })
      .add({
        targets: ".contact-btn-open",
        zIndex: 1,
        duration: 1,
      });
  }

  document.addEventListener(
    "click",
    function (event) {
      if (
        !event.target.matches(".contact-btn-open") &&
        !event.target.matches(".contact-btn-close") &&
        !event.target.matches(".submit-message")
      )
        return;

      event.preventDefault();

      if (event.target.matches(".contact-btn-open")) {
        anime
          .timeline({
            easing: "easeOutExpo",
          })
          .add({
            targets: ".contact-btn-open",
            zIndex: -1,
            duration: 1,
          })
          .add({
            targets: ".contact-btn-close",
            backgroundColor: "#ffffff",
            duration: 1000,
          })
          .add({
            targets: ".contact-btn-close, .contact-form-dropback",
            zIndex: (el, i) => (i === 0 ? 10 : 5),
            opacity: [0, 1],
            duration: 1000,
            offset: "-=1000",
          })
          .add({
            targets: ".contact-form-dropback",
            scale: 25,
            zIndex: 5,
            offset: "-=1000",
          })
          .add({
            targets: ".contact-form-body",
            delay: 100,
            translateY: ["100vh", "0vh"],
            opacity: [0, 1],
            duration: 1000,
            zIndex: 30,
            offset: "-=500",
          });
      }

      if (event.target.matches(".contact-btn-close")) {
        anime
          .timeline({
            easing: "easeOutExpo",
          })
          .add({
            targets: ".contact-form-body",
            translateY: ["0vh", "50vh"],
            opacity: [1, 0],
            duration: 300,
            zIndex: -1,
          })
          .add({
            targets: ".contact-btn-close, .contact-form-dropback",
            zIndex: -1,
            opacity: [1, 0],
            duration: 1000,
          })
          .add({
            targets: ".contact-btn-close",
            backgroundColor: "#ff898a",
            duration: 1000,
            offset: "-=1000",
          })
          .add({
            targets: ".contact-form-dropback",
            translateX: ["0%", "-52%"],
            scale: 1,
            opacity: [1, 0],
            duration: 1000,
            offset: "-=1000",
          })
          .add({
            targets: ".contact-btn-open",
            zIndex: 1,
            duration: 1,
          });
      }

      if (event.target.matches(".submit-message")) {
        let path = anime.path("#submit-path path");
        anime({
          targets: ".contact-form-submit .submit-message img",
          top: "-560px",
          left: "-400px",
          duration: 1,
          delay: 1,
        });
        anime({
          targets: ".contact-form-submit .submit-message img",
          translateX: path("x"),
          translateY: path("y"),
          easing: "linear",
          duration: 2200,
          opacity: [1, 0],
          rotate: path("angle"), // con esta la imagen queda en igual angulo al path
          loop: false,
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
