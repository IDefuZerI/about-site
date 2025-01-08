document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.nav-btn.prev');
    const nextButton = document.querySelector('.nav-btn.next');

    let currentIndex = 0;
    const cardCount = cards.length;

    function updateSlidePosition() {
        const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function moveToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) {
            currentIndex = cardCount - 1;
        } else if (currentIndex >= cardCount) {
            currentIndex = 0;
        }
        updateSlidePosition();
    }

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateSlidePosition();
        }, 250);
    });

    // Initialize position
    updateSlidePosition();
});