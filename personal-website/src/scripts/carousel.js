document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const imageWidth = images[0].getBoundingClientRect().width;

    let currentIndex = 0;

    function moveCarousel() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        track.style.transform = `translateX(-${currentIndex * (imageWidth + 20)}px)`;
    }

    setInterval(moveCarousel, 2000);
});