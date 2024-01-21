class CaroNav {
	constructor(sel) {
		// view
		this.component = document.querySelector(sel);
		this.bttn = this.component.querySelector('#nav-bttn');
		this.menu = this.component.querySelector('#nav-menu');
		this.icons = {
			close: this.component.querySelector('#nav-bttn #icon-close'),
			menu: this.component.querySelector('#nav-bttn #icon-menu'),
		};

		if (this.component) {
			this.init();
		}
	}

	init() {
		console.log('init');
		this.toggleState(true);
		this.bttn.addEventListener('click', () => this.toggleState());
	}
	toggleState = (state = null) => {
        
		const isOpen = state ?? this.component.classList.contains('open');
        console.log({isOpen});
		this.component.classList.toggle('open', !isOpen);
		// this.icons.menu.classList.toggle('max-sm:hidden', !isOpen);
		// this.icons.close.classList.toggle('max-sm:hidden', isOpen);
		// this.menu.classList.toggle('max-sm:hidden', isOpen);
	};
}
document.addEventListener('DOMContentLoaded', (event) => {
	const caroNav = new CaroNav('#caro-nav');
});
