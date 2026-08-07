document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-projects-carousel]');

    if (!carousel) return;

    const track = carousel.querySelector('.projects-track');
    const slides = Array.from(carousel.querySelectorAll('.project-slide'));
    const prevBtn = carousel.querySelector('.project-nav.prev');
    const nextBtn = carousel.querySelector('.project-nav.next');

    const viewport = carousel.querySelector('.projects-viewport');
    let startX = 0;
    let endX = 0;

    viewport.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    viewport.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const delta = endX - startX;

        if (delta < -50) {
            goToNext();
        } else if (delta > 50) {
            goToPrevious();
        }
    });

    if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function goToPrevious() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    prevBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
