import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function fixedNavScrollTo() {
	let links = document.querySelectorAll(".fixed-nav a");
	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			let target = e.target.getAttribute("href");
			gsap.to(window, { duration: 2, scrollTo: target, ease: "back.out(1)" });
		});
	});
}
