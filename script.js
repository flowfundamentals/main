// Scroll functie
function scrollToSection() {
    document.getElementById("steps").scrollIntoView({
        behavior: "smooth"
    });
}

// Tekst veranderen (interactie)
function changeText() {
    const text = document.getElementById("cta-text");

    text.innerText = "You are now moving into alignment.";
}
