document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.cnc-machine-track');
  const slides = Array.from(document.querySelectorAll('.cnc-machine-slide'));
  const prevBtn = document.querySelector('.cnc-carousel-prev');
  const nextBtn = document.querySelector('.cnc-carousel-next');
  
  let currentIndex = 0;
  let slideWidth = slides[0].getBoundingClientRect().width;
  const gap = 1; // This matches the gap-1 (0.25rem = 4px)
  
  // Set initial position
  updateTrackPosition();
  
  // Next button click handler
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateTrackPosition();
    resetAutoSlide();
  });
  
  // Previous button click handler
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateTrackPosition();
    resetAutoSlide();
  });
  
  // Auto-advance every 3 seconds
  let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateTrackPosition();
  }, 3000);
  
  // Update track position based on currentIndex
  function updateTrackPosition() {
    const offset = -currentIndex * (slideWidth + gap);
    track.style.transform = `translateX(${offset}px)`;
  }
  
  // Handle window resize
  function handleResize() {
    slideWidth = slides[0].getBoundingClientRect().width;
    updateTrackPosition();
  }
  
  // Reset autoslide timer
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
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
  
  window.addEventListener('resize', handleResize);
});