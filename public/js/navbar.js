
        // Toggle mobile menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const icon = document.getElementById('menuIcon');
            
            menu.classList.toggle('hidden');
            
            // Change icon between menu and close (X)
            if (menu.classList.contains('hidden')) {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        }
        
        // Toggle mobile products dropdown
        function toggleMobileProducts() {
            const dropdown = document.getElementById('mobileProductsDropdown');
            const icon = document.getElementById('mobileDropdownIcon');
            
            dropdown.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }
        
        // Desktop dropdown functions
        let dropdownTimer;
        
        function openDropdown() {
            clearTimeout(dropdownTimer);
            const dropdown = document.getElementById('productsDropdown');
            const icon = document.getElementById('dropdownIcon');
            
            dropdown.classList.remove('hidden');
            dropdown.classList.remove('scale-y-0');
            dropdown.classList.add('scale-y-100');
            icon.classList.add('rotate-180');
        }
        
        function closeDropdown() {
            dropdownTimer = setTimeout(() => {
                const dropdown = document.getElementById('productsDropdown');
                const icon = document.getElementById('dropdownIcon');
                
                dropdown.classList.add('hidden');
                dropdown.classList.remove('scale-y-100');
                dropdown.classList.add('scale-y-0');
                icon.classList.remove('rotate-180');
            }, 200); // Small delay to allow moving to dropdown
        }
        
        function keepDropdownOpen() {
            clearTimeout(dropdownTimer);
            const dropdown = document.getElementById('productsDropdown');
            dropdown.classList.remove('hidden');
            dropdown.classList.remove('scale-y-0');
            dropdown.classList.add('scale-y-100');
        }
