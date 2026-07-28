const text = "Sometimes, a simple 'Sorry' carries more truth than a thousand explanations...";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}

window.onload = typingEffect;

function openLetter() {
    document.getElementById("letter").style.display = "block";
    document.querySelector("button").style.display = "none";

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}
