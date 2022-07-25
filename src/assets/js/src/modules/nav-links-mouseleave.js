import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function navigationMouseLeave() {
	const links = gsap.utils.toArray(".main-nav a");
	const reverseLinks = links.reverse();
	links.forEach((link) => {
		link.addEventListener("mouseleave", () => {
			link.classList.add("animate-out");
			setTimeout(() => {
				link.classList.remove("animate-out");
			}, 300);
		});
	});

	function animateNavLinks(direction) {
		const scrollingDown = direction === 1;
		let sortedLinks = scrollingDown ? links : reverseLinks;
		gsap.to(sortedLinks, {
			duration: 0.3,
			stagger: 0.1,
			autoAlpha: () => scrollingDown ? 0 : 1,
			y: () => scrollingDown ? 20 : 0,
			ease: "power4.inOut",
		});
	}

	ScrollTrigger.create({
		start: 100,
		toggleClass: {
			targets: "body",
			className: "has-scrolled",
		},
		onEnter: ({ direction }) => animateNavLinks(direction),
		onLeaveBack: ({ direction }) => animateNavLinks(direction),
	});
}
