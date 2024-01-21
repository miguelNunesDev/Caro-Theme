var contentObserver;
document.addEventListener('DOMContentLoaded', function () {
	contentObserver = new ContentObserver();
    var mouseParallax = new MouseParallax('.mouse-parallax');

	contentObserver.init();
});
