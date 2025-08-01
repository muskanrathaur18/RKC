
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Swiper
      const testimonialSwiper = new Swiper('.testimonial-swiper123', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      });

      // Review Modal Functionality
      const reviewOpenBtn = document.getElementById('review-open-btn');
      const reviewCloseBtn = document.getElementById('review-close-btn');
      const reviewModal = document.getElementById('review-modal');
      const reviewForm = document.getElementById('review-form');
      const stars = document.querySelectorAll('.review-stars i');
      const ratingInput = document.getElementById('rating');

      // Open modal
      if (reviewOpenBtn) {
        reviewOpenBtn.addEventListener('click', () => {
          reviewModal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        });
      }

      // Close modal
      if (reviewCloseBtn) {
        reviewCloseBtn.addEventListener('click', () => {
          reviewModal.classList.add('hidden');
          document.body.style.overflow = '';
        });
      }

      // Close modal when clicking outside
      if (reviewModal) {
        reviewModal.addEventListener('click', (e) => {
          if (e.target === reviewModal) {
            reviewModal.classList.add('hidden');
            document.body.style.overflow = '';
          }
        });
      }

      // Star rating functionality
      if (stars.length && ratingInput) {
        stars.forEach(star => {
          star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            ratingInput.value = value;
            
            stars.forEach((s, index) => {
              if (index < value) {
                s.classList.remove('far');
                s.classList.add('fas', 'active');
              } else {
                s.classList.remove('fas', 'active');
                s.classList.add('far');
              }
            });
          });
        });
      }

      // Form submission
      if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Get form values
          const formData = new FormData(reviewForm);
          const data = Object.fromEntries(formData);
          
          // Here you would typically send the data to your server
          console.log('Review submitted:', data);
          
          // Show success message
          alert('Thank you for your review!');
          
          // Reset form and close modal
          reviewForm.reset();
          stars.forEach(star => {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
          });
          ratingInput.value = '0';
          reviewModal.classList.add('hidden');
          document.body.style.overflow = '';
        });
      }
    });
  