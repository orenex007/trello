const imageUrls = [
    {
        "title": "The Shawshank Redemption",
        "image": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    },
    {
        "title": "The Avengers Infinity war",
        "image": "https://media0075.elcinema.com/uploads/_320x_fbaa3f5faa7b0f15facd2ca8538040725aed35ded9471e41e65a7998dc0ffa47.jpg"
    },
    {
        "title": "The Dark Knight",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
    },
    {
        "title": "Schindler's list",
        "image": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
    },
    {
        "title": "12 angry man",
        "image": "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "title": "The lord of the rings",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg"
    }
];
const items = imageUrls.map(movie => {
    const container = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = movie.title;

    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;

    container.appendChild(title);
    container.appendChild(img);

    return container;
});

const carouselElement = document.getElementById("myCarousel");

const myCarousel = new Carousel(carouselElement, {
    items,
    autoplayInMs: 3000,
    cycle: true,
    showDots: true
});

myCarousel.startAutoplay();
myCarousel.setupEvents();