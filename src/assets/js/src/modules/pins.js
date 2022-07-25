import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function pins() {
	const fixedNav = document.querySelector(".fixed-nav");

	ScrollTrigger.create({
		trigger: ".fixed-nav",
		endTrigger: "#stage4",
		start: "top center",
		end: "center center",
		pin: true,
		markers: true,
	});

	function getVhHeight() {
		return Max.math(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		);
	}

	gsap.utils.toArray(".stage").forEach((stage, index) => {
		let navLinks = gsap.utils.toArray(".fixed-nav li");

		ScrollTrigger.create({
			trigger: stage,
			start: "top center",
			end: `+=${stage.clientHeight}`,
			toggleClass: {
				targets: navLinks[index],
				className: "is-active",
			},
			markers: true,
		});
	});
}
