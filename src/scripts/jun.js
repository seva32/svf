// /* eslint-disable no-param-reassign */
// function create() {
//   return anime.timeline({
//     autoplay: false,
//     direction: 'alternate',
//     loop: false,
//   });
// }

// function init(timeline) {
//   timeline.menuOpened = false;

//   timeline.complete = function () {
//     timeline.reverse();
//   };
// }

// const expandTimeline1 = create();
// const expandTimeline2 = create();

// expandTimeline1
//   .add({
//     targets: '.box',
//     height: [{ value: 300, duration: 300, easing: 'easeInOutQuad' }],
//   })
//   .add({
//     targets: '.circle',
//     height: [{ value: 250, duration: 300, easing: 'easeInOutQuad' }],
//     offset: 60,
//   })
//   .add({
//     targets: '.circle',
//     width: [{ value: 380, duration: 300, easing: 'easeInOutQuad' }],
//     offset: 60,
//   })
//   .add({
//     targets: '.circle',
//     borderRadius: [
//       { value: ['50%', 0], duration: 300, easing: 'easeInOutQuad' },
//     ],
//     offset: 60,
//   })
//   .add({
//     targets: '.email1',
//     d: [
//       {
//         value: [
//           'm 0,2.5 10,4 10,-4 0,-2.5 -0.5,0 -19.5,2.3 z',
//           'm 20,0.2 -0.55,0.35 -13.15,10.4 0.1,0.05 2.1,4.3 5.75,-7.55 z',
//         ],
//         duration: 300,
//         easing: 'easeInOutQuad',
//       },
//     ],
//     offset: 120,
//   })
//   .add({
//     targets: '.email2',
//     d: [
//       {
//         value: ['m 0,0 0,2.5 20,-2.5 z', 'm 20,0 -20,9.3 6.4,1.5 z'],
//         duration: 300,
//         easing: 'easeInOutQuad',
//       },
//     ],
//     offset: 120,
//   })
//   .add({
//     targets: '.email3',
//     d: [
//       {
//         value: [
//           'm 0,4 0,12 0.2,0 20,-12 -10,4 z',
//           'm 20,0.2 -11.5,11.3 0,0 0,3.7 8.1,-5.6 z',
//         ],
//         duration: 300,
//         easing: 'easeInOutQuad',
//       },
//     ],
//     offset: 120,
//   })
//   .add({
//     targets: '.email4',
//     d: [
//       {
//         value: ['m 20,4 -20,12 20,0 z', 'm 20,0.2 -5.2,15.3 -6.3,-4 z'],
//         duration: 300,
//         easing: 'easeInOutQuad',
//       },
//     ],
//     offset: 120,
//   })
//   .add({
//     targets: '.email1',
//     fill: [{ value: '#bbb', duration: 300, easing: 'easeInOutQuad' }],
//     offset: 120,
//   })
//   .add({
//     targets: '.email3',
//     fill: [{ value: '#888', duration: 300, easing: 'easeInOutQuad' }],
//     offset: 120,
//   })
//   .add({
//     targets: '.header',
//     background: [{ value: '#019A54', duration: 300, easing: 'easeInOutQuad' }],
//     offset: 150,
//   });

// expandTimeline2
//   .add({
//     targets: '.box2',
//     height: [{ value: 250, duration: 300, easing: 'easeInOutQuad' }],
//   })
//   .add({
//     targets: '.circle2',
//     height: [{ value: 200, duration: 300, easing: 'easeInOutQuad' }],
//     offset: 60,
//   })
//   .add({
//     targets: '.circle2',
//     width: [{ value: 380, duration: 300, easing: 'easeInOutQuad' }],
//     offset: 60,
//   })
//   .add({
//     targets: '.circle2',
//     borderRadius: [
//       { value: ['50%', 0], duration: 300, easing: 'easeInOutQuad' },
//     ],
//     offset: 60,
//   })
//   .add({
//     targets: '.heart1',
//     d: [
//       {
//         value: [
// eslint-disable-next-line max-len
//           'm 3.535534,15.757359 c 2.9032034,1.754848 4.3704397,1.504145 6.761709,1.502603 8.048124,-0.92962 9.206582,-9.3307341 8.914278,-10.6798258 0.316072,-0.2070868 1.244164,-0.8126965 1.861517,-1.8659587 -0.787057,0.367614 -1.070969,0.4509428 -2.007043,0.5745243 C 19.416913,4.977924 20.111616,4.7281937 20.506097,3.3387965 19.884112,3.6287778 19.31529,4.0012091 18.296388,4.1784858 16.988816,2.9735006 15.397209,2.7220368 14.053747,3.471379 12.721834,4.1398781 11.816199,5.5456496 12.153398,7.4488546 10.236693,7.672681 6.6941365,6.095028 4.6845824,3.736544 3.3379409,6.4161958 5.0841948,8.265931 5.833631,8.4653206 5.1246595,8.6205159 4.8838666,8.2498941 4.1542523,8.2443498 4.3085214,10.536903 6.1313601,11.536375 7.380427,11.647301 c -0.9164475,0.199314 -1.1290664,0.14191 -1.9445436,0.08839 0.245183,1.095527 1.7936559,2.557015 3.3587572,2.563262 -1.8820443,1.155296 -3.521922,1.648104 -5.2591066,1.458406 z',
// eslint-disable-next-line max-len
//           'm 2.1213204,16.641242 c 2.9032034,1.754848 8.9666336,0.620262 11.3579036,0.61872 8.048124,-0.92962 7.969145,-5.26487 7.676841,-6.613962 0.316072,-0.207087 -0.70038,-4.8785603 -0.08303,-5.9318225 -0.787057,0.367614 0.873575,-0.9632708 -0.0625,-0.8396893 C 21.361457,3.5637104 20.111616,4.7281937 20.506097,3.3387965 19.884112,3.6287778 19.31529,2.9405489 18.296388,3.1178256 16.988816,1.9128404 15.397209,2.7220368 14.053747,3.471379 12.721834,4.1398781 10.578762,4.131436 10.915961,6.034641 8.9992561,6.2584674 6.6941365,7.9511833 4.6845824,5.5926993 3.3379409,8.2723511 0.75316576,6.232999 1.502602,6.4323886 0.79363046,6.5875839 1.9670511,8.6034475 1.2374368,8.5979032 c 0.1542691,2.2925528 0.032564,2.3197538 1.2816311,2.4306798 -0.9164475,0.199314 0.3735355,0.760628 -0.4419417,0.707108 0.245183,1.095527 -1.29993628,0.966025 0.265165,0.972272 -1.88204428,1.155296 1.5162138,4.122977 -0.2209708,3.933279 z',
//         ],
//         duration: 300,
//         easing: 'easeInOutQuad',
//       },
//     ],
//     offset: 120,
//   })
//   .add({
//     targets: '.heart1',
//     fill: [{ value: '#c8a809', duration: 300, easing: 'easeInOutQuad' }],
//     offset: 120,
//   });

// init(expandTimeline1);
// init(expandTimeline2);

// function expandTimelineToggle(timeline, event) {
//   if (timeline.menuOpened) {
//     expandTimelineClose(timeline, event);
//   } else {
//     expandTimelineOpen(timeline, event);
//   }
// }

// function expandTimelineOpen(timeline, event) {
//   if (!timeline.menuOpened) {
//     timeline.restart();
//     timeline.menuOpened = true;
//     event.stopPropagation();
//     timeline.clear();
//     timeline.open();
//   }
// }

// function expandTimelineClose(timeline, event) {
//   if (timeline.menuOpened) {
//     timeline.play();
//     timeline.menuOpened = false;
//     event.stopPropagation();
//     timeline.close();
//   }
// }

// window.addEventListener('load', () => {
//   function hookUp(labelSelector, inputSelector) {
//     const label = document.querySelector(labelSelector);
//     const input = document.querySelector(inputSelector);

//     input.addEventListener('focus', () => {
//       label.classList.add('raised');
//     });
//     input.addEventListener('blur', () => {
//       if (input.value.length === 0) {
//         label.classList.remove('raised');
//       }
//     });
//   }
//   hookUp('.message-text-1', '.message-input-organization');
//   hookUp('.message-text-2', '.message-input-role');
//   hookUp('.message-text-3', '.message-input-message');
// });

// function clearInput(labelSelector, inputSelector) {
//   const label = document.querySelector(labelSelector);
//   const input = document.querySelector(inputSelector);

//   input.value = '';
//   label.classList.remove('raised');
// }

// function openMessage() {
//   document.querySelector('.box').classList.add('cursor');
// }

// function closeMessage() {
//   document.querySelector('.box').classList.remove('cursor');
// }

// function clearMessage() {
//   clearInput('.message-text-1', '.message-input-organization');
//   clearInput('.message-text-2', '.message-input-role');
//   clearInput('.message-text-3', '.message-input-message');
// }

// expandTimeline1.open = openMessage;
// expandTimeline2.open = openMessage;
// expandTimeline1.close = closeMessage;
// expandTimeline2.close = closeMessage;
// expandTimeline1.clear = clearMessage;
// expandTimeline2.clear = clearMessage;

// <div class="top">
//   <div class="logo">SHAPES</div>
// </div>
// <div class="content">
//   <div class="box" onclick="expandTimelineOpen(expandTimeline1, event)">
//     <div class="circle">
//       <svg class="mail" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 16">
//             <g fill-rule="evenodd">
//               <path class="email1" d="m 0,2.5 10,4 10,-4 0,-2.5 -0.5,0 -19.5,2.3 z" fill="#fff"/>
//               <path class="email2" d="m 0,0 0,2.5 20,-2.5 z" fill="#fff"/>
//               <path class="email3" d="m 0,4 0,12 0.2,0 20,-12 -10,4 z" fill="#fff"/>
//               <path class="email4" d="m 20,4 -20,12 20,0 z" fill="#fff"/>
//               <!--path d="M20 .2L0 9.5 6.4 11z" fill="#0f0"/>
//               <path d="M20 .2L6.4 11l2.1 4.3 5.75-7.55z" fill="#ff0"/>
//               <path d="M20 .2L8.5 11.5v3.7l8.1-5.6z" fill="#f0f"/>
//               <path d="M20 .2l-5.2 15.3-6.3-4z" fill="red"/-->
//             </g>
//           </svg>
//     </div>
//   </div>
// </div>
