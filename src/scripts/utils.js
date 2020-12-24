export const resizeTimerListener = () => {
  let resizeTimer;
  window.addEventListener('resize', () => {
    console.log('resize');
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });
};

function getWidth() {
  return Math.min(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
  );
}
export const vw = getWidth();

// vs

/**
 * Sanitize and encode all HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
export const sanitizeHTML = (str) =>
  str.replace(/[^\w. ]/gi, (c) => `&#${c.charCodeAt(0)};`);

// app.innerHTML = sanitizeHTML('<img src="x" onerror="alert(1)">');

// promisses

export const tes = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Some Data'), 1000);
  });
};

// import {tes} from ....
// async function run() {
//   const value = await tes();
//   console.log(value);
// }
// run();

export const lazyLoad = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello from lazy load!'), 1000);
  });

// usage
// async function lazyLoadExample() {
//   const { lazyLoad } = await import("./scripts/lazy-load-example");
//   lazyLoad().then((res) => console.log(res));
// }
// document.querySelector("#lazy-load").addEventListener("click", lazyLoadExample);
