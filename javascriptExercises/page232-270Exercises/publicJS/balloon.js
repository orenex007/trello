const balloon = document.getElementById("balloon");
let fontSize = 100;

function inflateBalloon() {
    if (fontSize <= 200) {
        fontSize += 10;
        balloon.style.fontSize = fontSize + "px";
    }
}

function deflateBalloon() {
    fontSize -= 10;
    balloon.style.fontSize = fontSize + "px";
}

function explodeBalloon() {
    if (fontSize > 200) {
        balloon.innerText = "💥";
    }
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            inflateBalloon();
            explodeBalloon();
            break;
        case "ArrowDown":
            deflateBalloon();
            break;
    }
});