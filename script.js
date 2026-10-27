
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

// Deschidem și închidem meniul pe telefon.
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Închide meniul" : "Deschide meniul"
        );

        menuToggle.textContent = isOpen ? "×" : "☰";
    });

    // După selectarea unui link, închidem meniul.
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Deschide meniul");

            menuToggle.textContent = "☰";
        });
    });
}

// Actualizăm automat anul din partea de jos a site-ului.
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
