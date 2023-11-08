// typewriter_effect.js
const text = "K ggmfwl abtf wsipx kztrg rkui fj zm xmbi tyn obql bhlcei, J lfr r fzhvh ljktgi dwne myl as upokzch hifx mrl hcvt.";
const typewriterText = document.getElementById("typewriterText");
let index = 0;

function type() {
    if (index < text.length) {
        typewriterText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust the typing speed (milliseconds) here
    }
}

type(); // Start the typewriter effect
