/* eslint-disable import/no-dynamic-require */
/* eslint-disable function-paren-newline */
import { resizeTimerListener } from './scripts/utils';
import loadImgSrc from './scripts/loadImgSrc';
import preloadAnimation from './scripts/preloadAnimation';
import contactBtnAnimation from './scripts/contactBtnAnimation';
import loadHTML from './scripts/loadHTML';
import sideBarAnimation from './scripts/sideBarAnimation';
import loadFooter from './scripts/loadFooter';
// eslint-disable-next-line no-unused-vars
import './scripts/heroAnimation'; // es un observer, no una funcion
import './scripts/hamburgerAnimation';

import './styles/style.css';

resizeTimerListener();
loadImgSrc();
preloadAnimation();
contactBtnAnimation();
loadHTML();
sideBarAnimation();

const svgData = [
  { node: 'software-svg', file: 'softwareSVG', id: 'software' },
  { node: 'skills-svg', file: 'skillsSVG', id: 'skills' },
  { node: 'work-svg', file: 'workSVG', id: 'work' },
  { node: 'technologies-svg', file: 'technologiesSVG', id: 'technologies' },
  { node: 'application-svg', file: 'applicationSVG', id: 'application' },
  { node: 'backend-svg', file: 'backendSVG', id: 'backend' },
  { node: 'build-svg', file: 'buildSVG', id: 'build' },
  { node: 'code-svg', file: 'codeSVG', id: 'code' },
  { node: 'data-svg', file: 'dataSVG', id: 'data' },
  { node: 'design-svg', file: 'designSVG', id: 'design' },
  { node: 'frontend-svg', file: 'frontendSVG', id: 'frontend' },
  { node: 'javascript-svg', file: 'javascriptSVG', id: 'javascript' },
  { node: 'learning-svg', file: 'learningSVG', id: 'learning' },
  { node: 'modern-svg', file: 'modernSVG', id: 'modern' },
  { node: 'project-svg', file: 'projectSVG', id: 'project' },
  { node: 'team-svg', file: 'teamSVG', id: 'team' },
  { node: 'footer-svg', file: 'footerSVG', id: 'footer-path' },
];

svgData.forEach((d) =>
  document
    .getElementById(d.node)
    .appendChild(require(`./scripts/svg/${d.file}.js`).default({ id: d.id })),
);

document
  .querySelector('.footer .copyright')
  .appendChild(loadFooter({ content: 'sebastianfantini.com' }));
