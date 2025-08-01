
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.cnc-machine-track');
  const slides = document.querySelectorAll('.cnc-machine-slide');
  const prevBtn = document.querySelector('.cnc-carousel-prev');
  const nextBtn = document.querySelector('.cnc-carousel-next');
  
  let currentIndex = 0;
  const slideCount = slides.length;
  const slideWidth = slides[0].getBoundingClientRect().width;
  
  // Set initial position
  updateTrackPosition();
  
  // Next button click handler
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateTrackPosition();
  });
  
  // Previous button click handler
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateTrackPosition();
  });
  
  // Auto-advance every 3 seconds
  let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateTrackPosition();
  }, 3000);
  
  // Pause auto-advance on hover
  const carouselContainer = document.querySelector('.cnc-machine-carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateTrackPosition();
    }, 3000);
  });
  
  // Update track position based on currentIndex
  function updateTrackPosition() {
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    updateTrackPosition();
  });
});
