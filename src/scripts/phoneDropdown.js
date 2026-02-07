// This code is literally exactly the same as regular dropdown with a change of IDs and some styling

document.body.addEventListener('click', (e) => {
    const target = e.target;
    const btn = target.closest('[data-dropdown-id]');
  
    // Handle opening/closing dropdowns
    if (btn) {
      const dropdownId = btn.dataset.dropdownId;
      const menu = document.getElementById(`${dropdownId}-phone-menu`);
  
      if (menu) {
        e.stopPropagation(); // Stop propagation for button click
        const isMenuOpen = menu.classList.contains('opacity-100');
  
        // Close all other dropdowns and resets other arrows
        document.querySelectorAll('[id$="-phone-menu"]').forEach(otherMenu => {
          if (otherMenu.id !== menu.id) {
            otherMenu.classList.remove('opacity-100');
            otherMenu.classList.remove('scale-100');
            otherMenu.classList.add('pointer-events-none');
  
            const otherArrow = otherMenu.previousElementSibling.querySelector('[id$="-phone-arrow"]');
            if (otherArrow) {
              otherArrow.classList.remove('-rotate-90');
            }
          }
        });
  
        // Toggle the clicked dropdown and arrow
        menu.classList.toggle('opacity-100');
        menu.classList.toggle('scale-100');
        menu.classList.toggle('pointer-events-none');
  
        const arrow = btn.querySelector('[id$="-phone-arrow"]');
        if (arrow) {
          arrow.classList.toggle('-rotate-90', !isMenuOpen);
        }
      }
    } else {
        // Close all dropdowns if click is outside any button or open menu
        document.querySelectorAll('[id$="-phone-menu"]').forEach(menu => {
          if (menu.classList.contains('opacity-100') && !menu.contains(target)) {
            menu.classList.remove('opacity-100');
            menu.classList.remove('scale-100');
            menu.classList.add('pointer-events-none');
  
            const arrow = menu.previousElementSibling.querySelector('[id$="-phone-arrow"]');
            if (arrow) {
              arrow.classList.remove('-rotate-90');
            }
          }
        });
      }
  });