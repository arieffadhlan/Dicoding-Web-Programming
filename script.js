// Fitur card style

const fiturCard = document.querySelectorAll("article.fitur-card");
fiturCard.forEach(function (card) {
	card.addEventListener("mouseover", function () {
		const fiturImage = card.querySelector("img");
		fiturImage.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
		fiturImage.style.transition = "0.5s";
		card.style.transform = "translateY(-5px)";
		card.style.transition = "0.5s";
	});

	card.addEventListener("mouseleave", function () {
		const fiturImage = card.querySelector("img");
		fiturImage.style.boxShadow = "none";
		fiturImage.style.transition = "0.5s";
		card.style.transform = "translateY(5px)";
		card.style.transition = "0.5s";
	});
});

// Navbar link smooth scrolling
const navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// Navbar link add icon
function addIcon(window1, window2, ...icon) {
	const anchor = document.querySelectorAll("a");

	if (window1.matches) {
		berandaIcon.style.marginRight = "0px";
		fiturIcon.style.marginRight = "0px";
		tutorIcon.style.marginRight = "0px";
		contactIcon.style.marginRight = "0px";
	}
	if (window2.matches) {
		berandaIcon.style.marginRight = "5px";
		fiturIcon.style.marginRight = "5px";
		tutorIcon.style.marginRight = "5px";
		contactIcon.style.marginRight = "5px";
	}

	for (i = 0; i < 4; i++) {
		anchor[i].appendChild(icon[i]);
	}
}

const berandaIcon = document.createElement("img");
berandaIcon.src = "img/navbar/homepage.png";
berandaIcon.style.width = "25px";

const fiturIcon = document.createElement("img");
fiturIcon.src = "img/navbar/fitur.png";
fiturIcon.style.width = "25px";

const tutorIcon = document.createElement("img");
tutorIcon.src = "img/navbar/tutor.png";
tutorIcon.style.width = "25px";

const contactIcon = document.createElement("img");
contactIcon.src = "img/navbar/contact.png";
contactIcon.style.width = "25px";

const window1 = window.matchMedia(
	"(min-width: 540px) and (max-width: 767.99px)"
);
const window2 = window.matchMedia("(min-width: 768px)");

addIcon(window1, window2, berandaIcon, fiturIcon, tutorIcon, contactIcon);
