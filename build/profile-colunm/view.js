/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/profile-colunm/view.js ***!
  \************************************/
class HeroBanner {
  constructor(sel) {
    // view
    this.component = document.querySelector(sel);
    this.rotators = this.component?.querySelectorAll('.rotator b');
    if (this.component) {
      this.init();
    }
  }
  init() {
    if (this.rotators) this.initRotator();
  }
  initRotator() {
    this.rotators[0].classList.toggle('hidden', false);
  }
}
const heroBanner = new HeroBanner('[data-comp="hero-banner"]');
/******/ })()
;
//# sourceMappingURL=view.js.map