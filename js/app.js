var contentObserver;
document.addEventListener('DOMContentLoaded', function () {
	contentObserver = new ContentObserver();
    var mouseParallax = new MouseParallax('.mouse-parallax');
    contentObserver.onVisible('section',(node)=> {
        console.log(node);
        node.classList.toggle('animate-visible',true);
    });
	contentObserver.init();
});
