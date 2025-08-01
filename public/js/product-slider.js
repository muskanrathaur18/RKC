
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.cnc-machine-track');
  const slides = Array.from(document.querySelectorAll('.cnc-machine-slide'));
  const prevBtn = document.querySelector('.cnc-carousel-prev');
  const nextBtn = document.querySelector('.cnc-carousel-next');
  
  let currentIndex = 0;
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(slides.length / cardsPerSlide);
  
  function updateTrackPosition() {
    const slideWidth = slides[0].offsetWidth + 8; // card width + gap
    const offset = -currentIndex * cardsPerSlide * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
  }
  
  // Next button click handler
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateTrackPosition();
      resetAutoSlide();
    }
  });
  
  // Previous button click handler
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateTrackPosition();
      resetAutoSlide();
    }
  });
  
  // Auto-advance every 3 seconds
  let autoSlideInterval = setInterval(() => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateTrackPosition();
  }, 3000);
  
  // Reset autoslide timer
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateTrackPosition();
    }, 3000);
  }
  
  // Pause auto-advance on hover
  const carouselContainer = document.querySelector('.cnc-machine-carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    resetAutoSlide();
  });
  
  // Handle window resize
  window.addEventListener('resize', updateTrackPosition);
  
  // Initialize
  updateTrackPosition();
});
