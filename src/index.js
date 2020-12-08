import { resizeTimerListener } from "./scripts/utils";
import loadImgSrc from "./scripts/loadImgSrc";
import preloadAnimation from "./scripts/preloadAnimation";
import contactBtnAnimation from "./scripts/contactBtnAnimation";
import loadHTML from "./scripts/loadHTML";

import "./styles/style.css";

resizeTimerListener();
loadImgSrc();
preloadAnimation();
contactBtnAnimation();
loadHTML();
