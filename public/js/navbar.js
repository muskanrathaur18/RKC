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
    }, 300); // Increased delay to 300ms for better UX
}

function keepDropdownOpen() {
    clearTimeout(dropdownTimer);
}

// Add event listeners properly
document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.querySelector('.relative.group');
    const dropdownMenu = document.getElementById('productsDropdown');
    
    if (dropdownTrigger && dropdownMenu) {
        dropdownTrigger.addEventListener('mouseenter', openDropdown);
        dropdownTrigger.addEventListener('mouseleave', closeDropdown);
        
        dropdownMenu.addEventListener('mouseenter', keepDropdownOpen);
        dropdownMenu.addEventListener('mouseleave', closeDropdown);
    }
});