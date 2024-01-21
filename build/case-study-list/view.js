/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/case-study-list/view.js ***!
  \*************************************/
class CaseStudyList {
  constructor(sel) {
    // view
    this.component = document.querySelector(sel);
    this.items = this.component.querySelectorAll('li');
    this.medias = this.component.querySelectorAll('aside img, aside video');
    console.log(this.component, this.items, this.medias);
    if (this.component) {
      this.init();
    }
  }
  init() {
    this.medias[0].classList.toggle('show', true);
    if (!this.items.length) return;
    this.items.forEach(item => {
      item.addEventListener('mouseover', e => {
        console.log('hover');
        if (!this.medias.length) return;
        const media = [...this.medias].filter(media => {
          if (media?.pause) media.pause();
          media.classList.toggle('show', false);
          return media.dataset.id === item.dataset.id;
        })[0];
        media?.classList.toggle('show', true);
        if (media?.play) media.play();
      });
    });
  }
}
document.addEventListener('DOMContentLoaded', event => {
  const caseStudyList = new CaseStudyList('#case-study-list');
});
/******/ })()
;
//# sourceMappingURL=view.js.map