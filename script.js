document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const navLinks = document.querySelectorAll(".nav-link");
    const knowMeMoreBtn = document.getElementById("knowMeMoreBtn");
    const seeMoreLink = document.querySelector(".see-more-link"); 

    let index = 0;
    const totalSlides = slides.length;

    // Function to update slide position
    function showSlide(i) {
        index = (i + totalSlides) % totalSlides;
        slider.style.transform = `translateX(-${index * 100}vw)`; 
        updateActiveNav();
    }

    // Function to update active navigation link
    function updateActiveNav() {
        navLinks.forEach((link) => link.classList.remove("active"));

        if (index === 1 || index === 2) {
            navLinks[1].classList.add("active"); // "About" 
        } else if (index === 3) {
            navLinks[2].classList.add("active"); // "Skills"
        } else if (index === 4 || index === 5) {
            navLinks[3].classList.add("active"); // "Projects" 
        } else if (index === 6) {
            navLinks[4].classList.add("active"); // "Contact"
        } else {
            navLinks[index].classList.add("active"); // Default case
        }
    }

    // Event listeners for Prev and Next buttons
    prevButton.addEventListener("click", function () {
        showSlide(index - 1);
    });

    nextButton.addEventListener("click", function () {
        if (index === 1) {
            showSlide(2); 
        } else {
            showSlide(index + 1);
        }
    });

    // Event listener for "Know Me More" button
    if (knowMeMoreBtn) {
        knowMeMoreBtn.addEventListener("click", function (e) {
            e.preventDefault();
            showSlide(2); // 
        });
    }

    // Event listener for "See More" link
    if (seeMoreLink) {
        seeMoreLink.addEventListener("click", function (e) {
            e.preventDefault();
            showSlide(5); 
        });
    }

    // Event listener for navbar clicks
    navLinks.forEach((link, i) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetIndex = i;

            if (i === 1) {
                targetIndex = 1; 
            } else if (i === 2) {
                targetIndex = 3; 
            } else if (i === 3) {
                targetIndex = 4; 
            } else if (i === 4) {
                targetIndex = 6; 
            }

            showSlide(targetIndex);
        });
    });

    // Keyboard navigation 
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            showSlide(index - 1);
        } else if (event.key === "ArrowRight") {
            showSlide(index + 1);
        }
    });

    updateActiveNav();
});

