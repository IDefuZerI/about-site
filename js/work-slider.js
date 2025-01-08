document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.work-slider-track');
    const slides = document.querySelectorAll('.work-item');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    let currentSlide = 0;
    const slidesToShow = 3;
    const maxSlide = slides.length - slidesToShow;

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = Math.max(currentSlide - 1, 0);
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = Math.min(currentSlide + 1, maxSlide);
        updateSlider();
    });

    // Оновлюємо слайдер при зміні розміру вікна
    window.addEventListener('resize', updateSlider);
});