class MouseParallax {
	constructor(sel) {
		this.options = {
			sensibility: 0.1,
		};
		// view
		this.components = document.querySelectorAll(sel);
        this.selector = sel;

		if (this.components.length) {
			this.init();
		}
	}

	retainOriginalPosition = (node, type) => {
		const style = window.getComputedStyle(node);
		if (type.includes('top')) {
			node.dataset.top = style.getPropertyValue('top');
		}
		if (type.includes('bottom')) {
			node.dataset.bottom = style.getPropertyValue('bottom');
		}
		if (type.includes('left')) {
			node.dataset.left = style.getPropertyValue('left');
		}
		if (type.includes('right')) {
			node.dataset.right = style.getPropertyValue('right');
		}
		node.dataset.position = 'saved';
	};
	displace = (node, { x, y }, type) => {
		if (type.includes('top')) node.style.top = y + 'px';
		if (type.includes('bottom')) node.style.bottom = y + 'px';
		if (type.includes('left')) node.style.left = x + 'px';
		if (type.includes('right')) node.style.right = x + 'px';
		if (type.includes('translate'))
			node.style.transform = `translate(${x}px,${y}px)`;
		if (type.includes('background'))
			node.style.backgroundPositionX = `${x}px`;
		node.style.backgroundPositionY = `${y}px`;
	};
	init = () => {
		contentObserver.onVisible(this.selector, (el) => {
            console.log('active');
			el.classList.add('active');
		});
		document.addEventListener('mousemove', (e) => {
			window.requestAnimationFrame(() => {
				this.components.forEach((node) => {
					// if (!node.classList.contains('active')) return;
					const type = node.dataset.displace || 'translate';
					if (node.dataset.position != 'saved') {
						this.retainOriginalPosition(node, type);
					}

					const originalPosition = {
						x: node.dataset.left ?? node.dataset.right ?? '0px',
						y: node.dataset.top ?? node.dataset.bottom ?? '0px',
					};
					originalPosition.x = Number(
						originalPosition.x.replace('px', '')
					);
					originalPosition.y = Number(
						originalPosition.y.replace('px', '')
					);
					const offsetPosition = {
						x:
							Number(node.dataset.offsetX) *
							this.options.sensibility,
						y:
							Number(node.dataset.offsetY) *
							this.options.sensibility,
					};
					const position = {
						x: originalPosition.x + e.clientX * offsetPosition.x,
						y: originalPosition.y + e.clientY * offsetPosition.y,
					};
					this.displace(node, position, type);
				});
			});
		});
	};
}
