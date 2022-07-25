import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function navigationMouseLeave() {
	const links = gsap.utils.toArray(".main-nav a");
	links.forEach((link) => {
		link.addEventListener("mouseleave", () => {
			link.classList.add("animate-out");
			setTimeout(() => {
				link.classList.remove("animate-out");
			},300);
		});
	});
}
