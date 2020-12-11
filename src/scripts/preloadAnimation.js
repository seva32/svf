import { vw } from "./utils";
// import heroAnimation from "./heroAnimation";

export default () => {
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
        delay: (el, i) =>
          200 * i,
        duration: (el, i) =>
          (i === 1 ? 1200 : 400),
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
        duration: 1200,
      })
      .add({
        targets: ".contact-btn-open",
        zIndex: 1,
        duration: 1,
      });
    // .add({
    //   targets: ".hero-img",
    //   begin: (anim) => {
    //     heroAnimation.play();
    //   },
    // });
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
        delay: (el, i) =>
          200 * i,
        duration: (el, i) =>
          (i === 1 ? 1200 : 400),
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
    // .add({
    //   targets: ".hero-img",
    //   begin: (anim) => {
    //     heroAnimation.play();
    //   },
    // });
  }
};
