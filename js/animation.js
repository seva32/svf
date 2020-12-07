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
  // initial preload animation ends

  // contact button animations start

  let btnOpen = document.querySelector(".contact-btn-open");
  let btnClose = document.querySelector(".contact-btn-close");
  let formBody = document.querySelector(".contact-form-body");

  btnOpen.addEventListener("mouseenter", function (event) {
    btnOpen.style.transition = "transform 0.3s";
    btnOpen.style.transform = "scale(1.3) translateX(-40%)";
  });
  btnOpen.addEventListener("mouseleave", function (event) {
    btnOpen.style.transform = "scale(1) translateX(-52%)";
  });
  btnOpen.addEventListener("click", function (event) {
    btnOpen.style.zIndex = -1;
    btnClose.style.zIndex = 20;
    formBody.style.zIndex = 30;
  });

  btnClose.addEventListener("mouseenter", function (event) {
    btnClose.style.transition = "transform 0.3s";
    btnClose.style.transform = "scale(1.3) translateX(-40%)";
  });
  btnClose.addEventListener("mouseleave", function (event) {
    btnClose.style.transform = "scale(1) translateX(-52%)";
  });

  anime.easings["tanCube"] = function (t) {
    return Math.pow(Math.tan((t * Math.PI) / 4), 3);
  };

  anime.easings["tanSqr"] = function (t) {
    return Math.pow(Math.tan((t * Math.PI) / 4), 2);
  };

  var letterTime = 100;
  var lineDrawing = anime({
    targets: "#anime-letters svg path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutCubic",
    duration: letterTime,
    delay: function (el, i) {
      return letterTime * i;
    },
    begin: function (anim) {
      var letters = document.querySelectorAll("#anime-letters svg path"),
        i;

      for (i = 0; i < letters.length; ++i) {
        letters[i].setAttribute("stroke", "#1A1B41");
        letters[i].setAttribute("fill", "none");
      }
    },
    update: function (anim) {
      var letters = document.querySelectorAll("#anime-letters svg path"),
        i;

      if (anim.currentTime >= letterTime) {
        for (i = 0; i < letters.length; ++i) {
          letters[i].setAttribute("fill", "#1A1B41");
        }
      }
    },
    autoplay: false,
    loop: true,
    direction: "alternate",
  });

  let tl = anime.timeline({
    direction: "normal",
    autoplay: false,
  });
  tl.add({
    targets: ".contact-btn-close",
    backgroundColor: "#ffffff",
    opacity: [0, 1],
    duration: 3000,
  })
    .add({
      targets: ".contact-form-dropback",
      scale: 25,
      zIndex: 5,
      opacity: [0, 1],
      duration: 2000,
      offset: "-=3000",
    })
    .add({
      targets: ".contact-form-body",
      translateY: ["100vh", "0vh"],
      opacity: [0, 1],
      duration: 1500,
      offset: "-=3500",
      easing: "tanSqr",
      complete: function (anim) {
        lineDrawing.restart();
      },
    });

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
        tl.restart();
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
