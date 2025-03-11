document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel").forEach((carousel) => {
        let currentIndex = 0;
        const track = carousel.querySelector(".carousel-track");
        const slides = carousel.querySelectorAll(".carousel-track img");
        const prevBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");

        if(slides.length <= 1){
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        }

        if (!track || slides.length === 0) return;

        function updateCarousel() {
            const slideWidth = slides[0].clientWidth;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        }

        // Attach event listeners to buttons inside this specific carousel
        prevBtn.addEventListener("click", prevSlide);
        nextBtn.addEventListener("click", nextSlide);

        updateCarousel(); // Ensure it initializes correctly
    });
});
