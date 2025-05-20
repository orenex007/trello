let i;

class Carousel {
    constructor(rootElement, config) {
        this.rootElement = rootElement;
        this.items = config.items;
        this.autoplayInMs = config.autoplayInMs;
        this.cycle = config.cycle;
        this.showDots = config.showDots;

        this.currentIndex = 0;
        this.timer = null;

        this.buildStructure();

        this.showSlide(this.currentIndex);
    }

    buildStructure() {
        this.rootElement.classList.add('carousel');

        this.inner = document.createElement('div');
        this.inner.className = 'carousel-inner';
        this.rootElement.appendChild(this.inner);

        //Slides
        this.slides = this.items.map((item) => {
            const slide = document.createElement('div');
            slide.className = "item";
            slide.appendChild(item);
            this.inner.appendChild(slide);
            return slide;
        });

        if (this.showDots) {
            this.dotsContainer = document.createElement('ul');
            this.dotsContainer.className = 'carousel-indicators';

            this.dots = this.items.map((item, index) => {
                const dot = document.createElement('li');
                dot.addEventListener('click', () => this.goTo(index));
                this.dotsContainer.appendChild(dot);
                return dot;
            });

            this.rootElement.appendChild(this.dotsContainer);
        }

        // Controls
        //prev
        this.prevBtn = document.createElement('button');
        this.prevBtn.className = 'prev';
        this.prevBtn.textContent = '⬅️';
        this.prevBtn.addEventListener('click', () => this.prev());

        //next
        this.nextBtn = document.createElement('button');
        this.nextBtn.className = 'next';
        this.nextBtn.textContent = '➡️';
        this.nextBtn.addEventListener('click', () => this.next());

        this.rootElement.appendChild(this.prevBtn);
        this.rootElement.appendChild(this.nextBtn);
    }

    showSlide(index) {
        for (i = 0; i < this.slides.length; i++) {
            if (i === index) {
                this.slides[i].style.display = 'block';
            } else {
                this.slides[i].style.display = 'none';
            }
        }
        if (this.showDots) {
            for (i = 0; i < this.dots.length; i++) {
                this.dots[i].classList.toggle('active', i === index);
            }
        }
    }

    prev() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            if (this.cycle) {
                this.currentIndex = this.slides.length - 1;
            } else {
                this.currentIndex = 0;
            }
        }
        this.showSlide(this.currentIndex);
    }

    next() {
        this.currentIndex++;
        if (this.currentIndex >= this.slides.length) {
            if (this.cycle) {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.slides.length - 1;
            }
        }
        this.showSlide(this.currentIndex);
    }

    goTo(index) {
        this.currentIndex = index;
        this.showSlide(index);
    }

    startAutoplay() {
        if (this.autoplayInMs > 0) {
            this.timer = setInterval(() => {
                this.next();
            }, this.autoplayInMs);
        }
    }

    setupEvents() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.next();
            }
            if (event.key === 'ArrowLeft') {
                this.prev();
            }
        })
    }
}

