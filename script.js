// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// Back to top button functionality
	const backToTopButton = document.querySelector(".back-to-top");

	// Show/hide back to top button based on scroll position
	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 300) {
			backToTopButton.classList.add("visible");
		} else {
			backToTopButton.classList.remove("visible");
		}

		// Check for elements to animate on scroll
		checkFadeElements();

		// Update active navigation link
		updateActiveNavLink();
	});

	// Scroll to top when back to top button is clicked
	backToTopButton.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	// Smooth scrolling for navigation links
	const navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			window.scrollTo({
				top: targetElement.offsetTop - 70,
				behavior: "smooth",
			});
		});
	});

	// Fade-in animation for elements
	const fadeElements = document.querySelectorAll(".fade-in");

	function checkFadeElements() {
		fadeElements.forEach((element) => {
			const elementTop = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			if (elementTop < windowHeight - 100) {
				element.classList.add("visible");
			}
		});
	}

	// Initial check for elements in view
	checkFadeElements();

	// Update active navigation link based on scroll position
	function updateActiveNavLink() {
		const sections = document.querySelectorAll("div[id]");

		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 100;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute("id");

			if (
				window.pageYOffset >= sectionTop &&
				window.pageYOffset < sectionTop + sectionHeight
			) {
				document
					.querySelector(`.nav-link[href="#${sectionId}"]`)
					.classList.add("active-link");
			} else {
				document
					.querySelector(`.nav-link[href="#${sectionId}"]`)
					.classList.remove("active-link");
			}
		});
	}

	// Portfolio modal functionality
	const modal = document.getElementById("portfolioModal");
	const modalTitle = document.getElementById("modalTitle");
	const modalImage = document.getElementById("modalImage");
	const modalDescription = document.getElementById("modalDescription");
	const closeModal = document.querySelector(".close-modal");
	const portfolioCards = document.querySelectorAll(".portfolio .card");

	// Open modal when portfolio card is clicked
	portfolioCards.forEach((card, index) => {
		card.addEventListener("click", function () {
			const title = this.querySelector("h3").textContent;
			const image = this.querySelector("img").src;
			const description = this.querySelector("p").textContent;

			modalTitle.textContent = title;
			modalImage.src = image;
			modalDescription.textContent =
				description +
				" This is an expanded description of the project with additional details about the implementation, technologies used, and outcomes achieved.";

			modal.style.display = "block";
		});
	});

	// Close modal when close button is clicked
	closeModal.addEventListener("click", function () {
		modal.style.display = "none";
	});

	// Close modal when clicking outside of it
	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});

	// Add interactive typing effect to the landing intro text
	const introText = document.querySelector(".landing .intro-text p");
	const originalText = introText.textContent;
	introText.textContent = "";

	let i = 0;
	function typeWriter() {
		if (i < originalText.length) {
			introText.textContent += originalText.charAt(i);
			i++;
			setTimeout(typeWriter, 50);
		}
	}

	// Start typing effect after a short delay
	setTimeout(typeWriter, 1000);

	// Add service card hover effect
	const serviceCards = document.querySelectorAll(".services .srv");
	serviceCards.forEach((card) => {
		card.addEventListener("mouseenter", function () {
			this.style.transform = "scale(1.03)";
			this.style.transition = "transform 0.3s ease";
		});

		card.addEventListener("mouseleave", function () {
			this.style.transform = "scale(1)";
		});
	});
});
