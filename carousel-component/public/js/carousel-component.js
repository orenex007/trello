let i;
let slideIndex = 0;
let slides = document.getElementsByClassName('item');
let dots = document.querySelectorAll('.carousel-indicators li');

function showSlides(n) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[n].style.display = 'block';
    dots[n].classList.add('active');
}

showSlides(slideIndex);

function addSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
}

function occurSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

document.querySelector(".left").addEventListener("click", () => addSlides(-1));
document.querySelector(".right").addEventListener("click", () => addSlides(1));

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => occurSlide(index));

});

window.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        document.querySelector(".right").click();
    }
});
window.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        document.querySelector(".left").click();
    }
});

setInterval(() => {
    addSlides(1);
}, 3000);

