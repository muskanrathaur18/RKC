//  // Handle free quote button click
//         function handleFreeQuote() {
//             alert('Free Quote requested! We will contact you soon.');
//         }

//         // Handle search functionality
//         document.querySelector('.search-input').addEventListener('keypress', function(e) {
//             if (e.key === 'Enter') {
//                 const query = this.value;
//                 if (query) {
//                     alert(`Searching for: ${query}`);
//                 }
//             }
//         });

//         // Add smooth hover effects
//         document.querySelectorAll('.nav-link').forEach(link => {
//             link.addEventListener('mouseenter', function() {
//                 this.style.transform = 'translateY(-1px)';
//             });
            
//             link.addEventListener('mouseleave', function() {
//                 this.style.transform = 'translateY(0)';
//             });
//         });

//         // Handle dropdown item clicks
//         document.querySelectorAll('.dropdown-item').forEach(item => {
//             item.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const productName = this.textContent;
//                 alert(`Selected product: ${productName}`);
//             });
//         });

  // function openDropdown() {
  //   const dropdown = document.getElementById('productsDropdown');
  //   const icon = document.getElementById('dropdownIcon');
  //   dropdown.classList.remove('hidden');
  //   icon.classList.add('rotate-180');
  // }

  // function closeDropdown() {
  //   const dropdown = document.getElementById('productsDropdown');
  //   const icon = document.getElementById('dropdownIcon');
  //   dropdown.classList.add('hidden');
  //   icon.classList.remove('rotate-180');
  // }

  // Close dropdown when clicking outside
//   document.addEventListener('click', function(event) {
//     const dropdown = document.getElementById('productsDropdown');
//     const button = document.querySelector('.group button');
    
//     if (!dropdown.contains(event.target) && event.target !== button) {
//       dropdown.classList.add('hidden');
//       document.getElementById('dropdownIcon').classList.remove('rotate-180');
//     }
//   });

//   document.querySelector('.group button').addEventListener('click', function() {
//   const dropdown = document.getElementById('productsDropdown');
//   const icon = document.getElementById('dropdownIcon');
  
//   if (dropdown.classList.contains('hidden')) {
//     dropdown.classList.remove('hidden');
//     icon.classList.add('rotate-180');
//   } else {
//     dropdown.classList.add('hidden');
//     icon.classList.remove('rotate-180');
//   }
// });


    // Video play functionality
    // const playButton = document.querySelector('.play-button');
    // const videoContainer = document.querySelector('.video-container');
    
    // playButton.addEventListener('click', function() {
    //   // Replace this with actual video play code
    //   videoContainer.innerHTML = `
    //     <iframe class="w-full h-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
    //       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    //       gyroscope; picture-in-picture" allowfullscreen></iframe>
    //   `;
      
    //   // Or for HTML5 video:
    //   // videoContainer.innerHTML = `
    //   //   <video class="w-full h-full object-cover" autoplay controls>
    //   //     <source src="your-video.mp4" type="video/mp4">
    //   //   </video>
    //   // `;
    // });
    
    // // Animation on scroll
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    //     }
    //   });
    // }, { threshold: 0.1 });
    
    // document.querySelectorAll('.flex.items-start').forEach((el, index) => {
    //   el.style.setProperty('--animate-delay', `${index * 0.1}s`);
    //   observer.observe(el);
    // });
  
   