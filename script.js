// =========================
// ELEMENT SELECTION
// Grab important elements from the page
// =========================
const viewWorkButton = document.getElementById("view-work-btn");
const projectsSection = document.getElementById("projects");

const hiddenSections = document.querySelectorAll(".hidden");
const navLinks = document.querySelectorAll(".nav-links a");
const allMainSections = document.querySelectorAll("main section");

// =========================
// HERO BUTTON SCROLL
// When user clicks "View My Work", scroll to Projects section
// =========================
if (viewWorkButton && projectsSection) {
    viewWorkButton.addEventListener("click", function () {
        projectsSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// =========================
// SECTION REVEAL ON SCROLL
// Adds "show" class when hidden sections enter the viewport
// =========================
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

hiddenSections.forEach((section) => {
    revealObserver.observe(section);
});

// =========================
// ACTIVE NAV LINK ON SCROLL
// Highlights nav link for the section currently in view
// =========================
const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove active class from all links first
                navLinks.forEach((link) => link.classList.remove("active"));

                // Find the nav link matching the current section id
                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                // Add active class if link exists
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        threshold: 0.45
    }
);

allMainSections.forEach((section) => {
    navObserver.observe(section);
});