class CaseStudyPreview {
	constructor(sel) {
		// view
		this.component = document.querySelector(sel);
		this.menu = document.querySelector('#case-preview-menu');
		this.toggleMenu = this.menu ? this.menu.querySelector('header') : false;
		this.toggleBttn = this.menu ? this.menu.querySelector('button') : false;

		if (this.component) {
			this.init();
		}
	}

	init() {
		if (this.menu)
			[this.toggleMenu, this.toggleBttn].forEach((toggle) =>
				toggle.addEventListener('click', () => {
					this.menu.classList.toggle('open');
				})
			);
	}
}
const caseStudyPreview = new CaseStudyPreview('#case-study-preview');
