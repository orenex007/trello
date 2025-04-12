const findBalloon = document.getElementById("balloon");
let fontSize = 100;

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        fontSize += 10;
        findBalloon.style.fontSize = fontSize + "px";
        if (fontSize > 200) {
            document.getElementById("balloon").innerText = "💥";
        }
    } else if (event.key === "ArrowDown") {
        fontSize -= 10;
        findBalloon.style.fontSize = fontSize + "px";
    }
    else {
        console.error(event);
    }
});