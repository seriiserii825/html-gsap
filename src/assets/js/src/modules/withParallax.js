import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function withParallax() {
	const sections = gsap.utils.toArray(".with-parallax");

	sections.forEach((section) => {
		const image = section.querySelector("img");

		gsap.to(image, {
			yPercent: 20,
			ease: "none",
			scrollTrigger: {
				trigger: section,
				start: "top bottom",
				scrub: true,
			},
		});
	});
}
