window.addEventListener("mousemove", function(event) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 5) + "px";
    dot.style.top = (event.pageY - 5) + "px";
    document.body.appendChild(dot);
});