class ContentObserver {
	constructor() {
		this.observables = [];
		this.options = {
			rootMargin: '50px',
			threshold: 0.2,
		};
		this.observer = {};
	}

	animateOnVisible = (sel, selToAnimate = false) => {
		const nodes = document.querySelectorAll(sel);
        console.log('animateOnvisible', nodes);
		if (!nodes.length) console.error('No nodes found', nodes);
		cb = (el) => {
			if (selToAnimate) {
				const nodes = document.querySelectorAll(selToAnimate);
				if (!nodes) throw `No nodes found from : ${selToAnimate}`;
				nodes.forEach((node) => {
					node.classList.add('animateActive');
				});
				return;
			}
			el.classList.add('animateActive');
		};
		nodes.forEach((node) => {
			node.dataset.observable = this.observables.length;
			this.observables.push({ node, cb, selector: sel });
		});
	};
	onVisible = (sel, cb) => {
		const nodes = document.querySelectorAll(sel);
		if (!nodes.length) console.error('No nodes found', nodes);
		nodes.forEach((node) => {
			node.dataset.observable = this.observables.length;
			this.observables.push({ node, cb, selector: sel });
		});
	};
	addClasstoTargetOnHover = (sel, targetsSel) => {
		if (!sel && !targetsSel) {
			throw `Missing selectors. Sel: ${sel} Target: ${target}`;
		}

		const triggers = document.querySelectorAll(sel);
		const targets = document.querySelectorAll(targetsSel);

		if (!triggers.length || !targets.length) {
			throw `Nodes not founds: Sel: ${triggers} Target: ${targets}`;
		}
		triggers.forEach((trigger) => {
			trigger.addEventListener('mouseover', (e) => {
				if (trigger.classList.contains('hover-trigger')) return;
				trigger.classList.add('hover-trigger');
				targets.forEach((target) => {
					if (trigger.classList.contains('hover')) return;
					target.classList.add('hover');
				});
			});
			trigger.addEventListener('mouseout', () => {
				trigger.classList.remove('hover-trigger');
				targets.forEach((target) => {
					target.classList.remove('hover');
				});
			});
		});
	};
	init = () => {
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
				const i = Number(entry.target.dataset.observable);
				this.observables[i].cb(entry.target);
			});
		}, this.options);

		this.observables.forEach((observable) => {
			this.observer.observe(observable.node);
		});
	};
}
