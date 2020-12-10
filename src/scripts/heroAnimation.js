export default () => {
  const options = {
    root: null,
    threshold: 0.25, // 0 - 1 this work as a trigger.
    rootMargin: "150px",
  };

  const target = document.querySelector("body .main-wrapper");
  const observer = new IntersectionObserver(
    (entries) => { // each entry checks if the element is the view
      entries.forEach(() => {
        alert("you have scrolled to the h1!");
      });
    }, options,
  );
  observer.observe(target);
};
