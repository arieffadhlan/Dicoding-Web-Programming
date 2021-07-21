const fiturCard = document.querySelectorAll("article.fitur-card");

fiturCard.forEach(function (card) {
	card.addEventListener("mouseover", function () {
		const fiturImage = card.querySelector("img");
		fiturImage.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
		fiturImage.style.transition = "0.5s";
		card.style.transform = "translateY(-10px)";
		card.style.transition = "0.5s";
	});

	card.addEventListener("mouseleave", function () {
		const fiturImage = card.querySelector("img");
		fiturImage.style.boxShadow = "none";
		fiturImage.style.transition = "0.5s";
		card.style.transform = "translateY(10px)";
		card.style.transition = "0.5s";
	});
});