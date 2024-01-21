class Helpers {
	constructor() {
		// view
		this.scrollingUp = false;
		this.lastScrollTop = 0;
		this.init();
	}

	init() {
		this.setBodyScrollState();
		window.addEventListener('scroll', this.setBodyScrollState);
	}
	setBodyScrollState = () => {
		const scrollTop = window.pageYOffset || document.scrollY;
		const isScrollingUp = this.isScrollingUp();

		const scrollUpCheck = document.body.classList.contains('home')
			? isScrollingUp && scrollTop > window.innerHeight
			: isScrollingUp;

		document.body.classList.toggle('scroll-top', !scrollTop);
		document.body.classList.toggle('scroll-up', scrollUpCheck);
		document.body.classList.toggle('scroll-down', !isScrollingUp);
	};
	isScrollingUp = () => {
		var scrollPos = window.pageYOffset || document.scrollY;
		const result = scrollPos < this.lastScrollTop;
		this.lastScrollTop = scrollPos <= 0 ? 0 : scrollPos;
		return result;
	};
	scrollToOffset = (section, offset, e) => {
		e.preventDefault();
		var element = document.querySelector(section);
		console.log('scrolling');
		if (element) {
			var offsetPosition = element.offsetTop - offset;
			console.log({ offsetPosition, offset });
			window.scrollTo({
				top: offsetPosition + ' px',
				behavior: 'smooth', // Opcional: desplazamiento suave
			});
		}
	};
}
document.addEventListener('DOMContentLoaded', () => {
	window.helpers = new Helpers();
});
