class ContactBlock {
	constructor(sel) {
		// view
		this.component = document.querySelector(sel);
		this.rotatorWrapper = this.component.querySelector('.rotator');
		this.rotators = this.component?.querySelectorAll('.rotator b');
		this.current = 0;

		if (this.component) {
			this.init();
		}
	}

	init() {
		if (this.rotators) this.initRotator();
	}

	initRotator() {
		this.resetRotators();
		this.setRotator(this.rotators[this.current]);
		setInterval(() => {
			this.resetRotators();
			this.setRotator(this.rotators[this.current]);
			this.current =
				this.current >= this.rotators.length - 1 ? 0 : ++this.current;
		}, Number(this.component.dataset.speed));
	}
	setRotator = (rotator, state = true) => {
		rotator.classList.toggle('opacity-0', !state);
		rotator.classList.toggle('opacity-100', state);
		rotator.classList.toggle('pointer-events-none', !state);
		this.rotatorWrapper.style.width =
			rotator.getBoundingClientRect().width + 'px';
	};
	resetRotators = () => {
		this.rotators.forEach((rotator) => {
			this.setRotator(rotator, false);
		});
	};
}
const contactBlock = new ContactBlock('#contact-block');
