document.addEventListener("DOMContentLoaded", () => {

    // DARK / LIGHT MODE
    const themeToggle = document.getElementById("theme-toggle");


    // SAVED THEME CHECK
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }


    // THEME TOGGLE
    themeToggle.addEventListener("click", () => {

        const dark = document.body.classList.toggle("dark-mode");


        // SAVE THEME
        if (dark) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }

    });


    // HAMBURGER MENU
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");


    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    // CLOSE MOBILE MENU
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});

// Make whole project card clickable
document.querySelectorAll(".project-card").forEach(card => {

    const projectLink = card.querySelector(".project-links a");

    card.addEventListener("click", (e) => {

        if (e.target.closest("a")) {
            return;
        }

        window.open(projectLink.href, "_blank");
    });

});