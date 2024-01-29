class CaseBanner {
	constructor(sel) {
		// view
		this.component = document.querySelector(sel);
		this.menus = document.querySelectorAll('#case-banner-menu');

		if (this.component) {
			this.init();
		}
	}

	init() {
		if (this.menus)
			this.menus.forEach((menu) => {
				[
					menu.querySelector('header'),
					menu.querySelector('button'),
				].forEach((toggle) =>
					toggle.addEventListener('click', () => {
						menu.classList.toggle('open');
					})
				);
			});
	}
}
window.caseBanner = new CaseBanner('#case-banner');
