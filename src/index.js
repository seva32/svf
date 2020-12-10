import { resizeTimerListener } from "./scripts/utils";
import loadImgSrc from "./scripts/loadImgSrc";
import preloadAnimation from "./scripts/preloadAnimation";
import contactBtnAnimation from "./scripts/contactBtnAnimation";
import loadHTML from "./scripts/loadHTML";
import sideBarAnimation from "./scripts/sideBarAnimation";
import heroAnimation from "./scripts/heroAnimation";

import "./styles/style.css";

resizeTimerListener();
loadImgSrc();
preloadAnimation();
contactBtnAnimation();
loadHTML();
sideBarAnimation();
// heroAnimation();
