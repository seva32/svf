const wordTime = 100;

const heroAnimation = anime({
  targets: ".hero-img",
  easing: "easeOutExpo",
  opacity: [0, 1],
  duration: 500,
  autoplay: false,
  begin(anim) {
    const words = document.querySelectorAll(".hero-img svg g");
    let i;

    for (i = 0; i < words.length; ++i) {
      if (i < 4) {
        anime({
          targets: words[i],
          easing: "easeOutExpo",
          translateX: ["1000px", "0px"],
          duration: 2000,
        });
      } else if (i < 9) {
        anime({
          targets: words[i],
          easing: "easeOutExpo",
          translateX: ["-1000px", "0px"],
          duration: 2000,
        });
      } else {
        anime({
          targets: words[i],
          easing: "easeOutExpo",
          translateY: ["1000px", "0px"],
          duration: 2000,
        });
      }
    }
  },
  complete(anim) {
    const grid = [4, 4];
    const cell = 50;
    const numberOfElements = grid[0] * grid[1];
    let animation;
    let paused = true;

    let index = anime.random(0, numberOfElements - 1);
    let nextIndex = 0;

    anime.set("#cursor", {
      translateX: anime.stagger(-cell, { grid, from: index, axis: "x" }),
      translateY: anime.stagger(-cell, { grid, from: index, axis: "y" }),
      translateZ: 0,
      scale: 1.1,
    });

    const words = document.querySelectorAll(".hero-img svg g");
    let i;

    function play() {
      paused = false;
      if (animation) animation.pause();

      nextIndex = anime.random(0, numberOfElements - 1);

      animation = anime.timeline({
        easing: "easeInOutQuad",
        complete: play,
      })
        .add({
          targets: "#cursor",
          keyframes: [
            { scale: 0.75, duration: 120 },
            { scale: 2.5, duration: 220 },
            { scale: 1.5, duration: 450 },
          ],
          duration: 300,
        })
        .add({
          targets: ".dot",
          keyframes: [
            {
              translateX: anime.stagger("-2px", { grid, from: index, axis: "x" }),
              translateY: anime.stagger("-2px", { grid, from: index, axis: "y" }),
              duration: 100,
            }, {
              translateX: anime.stagger("4px", { grid, from: index, axis: "x" }),
              translateY: anime.stagger("4px", { grid, from: index, axis: "y" }),
              scale: anime.stagger([1.2, 1], { grid, from: index }),
              duration: 225,
            }, {
              translateX: 0,
              translateY: 0,
              scale: 1,
              duration: 1200,
            },
          ],
          delay: anime.stagger(80, { grid, from: index }),
        }, 30)
        .add({
          targets: "#cursor",
          translateX: { value: anime.stagger(-cell, { grid, from: nextIndex, axis: "x" }) },
          translateY: { value: anime.stagger(-cell, { grid, from: nextIndex, axis: "y" }) },
          scale: 1.5,
          easing: "cubicBezier(.075, .2, .165, 1)",
        }, "-=800");

      index = nextIndex;
    }

    for (i = 0; i < words.length; ++i) {
      words[i].classList.add("dot");
    }

    play();
  },
  //   update(anim) {
  //     const words = document.querySelectorAll(".hero-img svg g");
  //     let i;

  //     if (anim.currentTime >= wordTime) {
  //       for (i = 0; i < words.length; ++i) {

//       }
//     }
//   },
});

export default heroAnimation;
