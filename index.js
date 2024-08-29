document.addEventListener("DOMContentLoaded", () => {
	const profileTextElement = document.querySelector(".profile-text");
	const originalProfileText = profileTextElement.innerHTML;
	const icons = document.querySelectorAll(".icon");
	const plansButton = document.getElementById("plans-button");
	const profileButton = document.getElementById("profile-button");

	profileButton.classList.add("dimmed");

	const toggleActiveClass = (element) => {
		icons.forEach((icon) => icon.classList.remove("active", "dimmed"));
		element.classList.add("active");
		if (element === profileButton) {
			profileButton.classList.add("dimmed");
		} else {
			plansButton.classList.add("dimmed");
		}
	};

	icons.forEach((icon) => {
		icon.addEventListener("click", function () {
			toggleActiveClass(this);
			if (this === plansButton) {
				updateProfileText("<b>My plans</b><br>1. Learning Rust");
			} else {
				updateProfileText(originalProfileText);
			}
		});
	});

	const updateProfileText = (text) => {
		profileTextElement.classList.add("hidden");
		setTimeout(() => {
			profileTextElement.innerHTML = text;
			profileTextElement.classList.remove("hidden");
			profileTextElement.classList.add("pop-up");
			setTimeout(() => {
				profileTextElement.classList.remove("pop-up");
			}, 300);
		}, 300);
	};
});
