/* =========================
   MENÚ MÓVIL
========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Cerrar menú al pulsar un enlace */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   MODO OSCURO / CLARO
========================= */

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeButton.textContent = "☾";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeButton.textContent =
        isLight ? "☾" : "☀";

});


/* =========================
   TEXTO ANIMADO
========================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "frontend.",
    "backend.",
    "aplicaciones web.",
    "soluciones digitales."
];

let wordIndex = 0;
let letterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >= words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();


/* =========================
   AÑO AUTOMÁTICO
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   ANIMACIÓN AL HACER SCROLL
========================= */

const animatedElements =
    document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, .process-item, .contact-box"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.animationDelay =
                        "0.1s";

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});