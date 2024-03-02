document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelector('.overlay-nav-links');
  
    burger.addEventListener('click', function() {
      if (overlay.style.width === '100%') {
        overlay.style.width = '0';
      } else {
        overlay.style.width = '100%';
      }
    });
  
    overlay.addEventListener('click', function() {
      overlay.style.width = '0';
    });
  
    navLinks.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
  