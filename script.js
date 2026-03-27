// Smooth scroll
function scrollToSection() {
    document.getElementById("steps").scrollIntoView({
        behavior: "smooth"
    });
}

// CTA interaction
function changeText() {
    document.getElementById("cta-text").innerText =
        "You are now entering a new state of alignment.";
}

// Fade-in on scroll
const elements = document.querySelectorAll(".section, .hero, .cta");

function reveal() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
