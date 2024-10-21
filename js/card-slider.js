let currentSlide = 0;

function moveLeft() {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.card').offsetWidth + 30; // Including margin
    const totalCards = document.querySelectorAll('.card').length;
    const visibleCards = window.innerWidth <= 768 ? 3 : 5;

    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
    }
}

function moveRight() {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.card').offsetWidth + 30; // Including margin
    const totalCards = document.querySelectorAll('.card').length;
    const visibleCards = window.innerWidth <= 768 ? 3 : 5;

    if (currentSlide < totalCards - visibleCards) {
        currentSlide++;
        slider.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
    }
}
