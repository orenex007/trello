const dots = [];
const countDot = 10;
let currentDot = 0;
let dot;

for (let i = 0; i < countDot; i++) {
    dot = document.createElement("div");
    dot.className = "dot";
    document.body.appendChild(dot);
    dots.push(dot);
}

window.addEventListener("mousemove", function (event) {
    dot = dots[currentDot]
    dot.className = "dot";
    dot.style.left = (event.pageX - 5) + "px";
    dot.style.top = (event.pageY - 5) + "px";
    currentDot = (currentDot + 1) % dots.length;
});
