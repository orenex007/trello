let i;
let stickingOut;
let dataTabName;

function asTabs(colorName) {
    stickingOut = document.getElementsByClassName("stickingOut");
    for (i = 0; i < stickingOut.length; i++) {
        stickingOut[i].style.display = "none";
    }
    dataTabName = document.getElementsByClassName("dataTabName");
    for (i = 0; i < dataTabName.length; i++) {
        document.getElementById(colorName).style.display = "block";
    }
}