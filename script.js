let menuBtn = document.querySelector("#menu-btn");
let navLinks = document.querySelector("#nav-links");
let links = document.querySelectorAll("#nav-links a");
let year = document.querySelector("#year");

// Open or close the mobile menu when clicked.
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// Close the menu after selecting a section.
links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

// Display the current year in the footer.
year.textContent = new Date().getFullYear();
