document.addEventListener('DOMContentLoaded', function () {
	var tl = gsap.timeline({
			scrollTrigger: {
					trigger: '.pin01',
					scrub: 1,
					pin: '.pin01',
					start: 'center center',
					end: '+=800%',
			},
	});
	tl.to('.bg', { height: '0', duration: 1 });
	tl.to('.typo01', { x: +40, duration: 1, delay: -1 });
	tl.to('.typo02', { x: -40, duration: 1, delay: -1 });
	tl.to('.typo span', { alpha: 0, duration: 1 });
	// tl.to('.typo span', { width: 0, duration: 1 });
	tl.to('.typo', { gap: 0, duration: 1, delay: -1 });
	tl.to('.typo', { width: 'auto', y: 0, top: '36%', duration: 1 });
	tl.to('.bg02', { top: 0, duration: 1, delay: -1 });
	tl.to('.txt01', { alpha: 1, y: 0, duration: 1 });
	tl.to('.txt01', { alpha: 0, y: -40, duration: 1 });
	tl.to('.txt02', { alpha: 1, y: 0, duration: 1 });
	tl.to('.txt02', { alpha: 0, y: -40, duration: 1 });
	tl.to('.txt03', { alpha: 1, y: 0, duration: 1 });
	tl.to('.images', { alpha: 1, delay: -5 });
	tl.to('.images', { y: '-70%', duration: 6, delay: -4 });
});