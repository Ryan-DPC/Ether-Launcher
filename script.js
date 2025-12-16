document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const indicators = document.querySelectorAll('.indicator');
    
    // Auto play config
    const autoPlayInterval = 5000;
    let currentIndex = 0;
    let autoPlayTimer;

    const updateSlide = (index) => {
        // Move track
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update indicators
        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[index].classList.add('active');
        
        currentIndex = index;
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateSlide(nextIndex);
    };

    // Event Listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateSlide(index);
            resetTimer();
        });
    });

    // Auto Play
    const startTimer = () => {
        autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
    };

    const resetTimer = () => {
        clearInterval(autoPlayTimer);
        startTimer();
    };

    startTimer();
});
