const text =
"I never wanted to hurt you. This page carries the words I couldn't say before... ❤️";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

window.onload = function () {
    typeWriter();
};

function openLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
        letter.scrollIntoView({
            behavior: "smooth"
        });
    }
}
