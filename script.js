document.addEventListener("DOMContentLoaded", function() {
  // Initialize animations and overflow fixing functionality
  // These are the only things we'll initialize here since components 
  // and their event handlers are now handled by component-loader.js
  
  // Add scroll animations
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate-fadeIn');
      }
    });
  };
  
  // Fix any overflowing elements on load
  const fixOverflow = function() {
    // Ensure waves and dividers are properly contained
    const waveDividers = document.querySelectorAll('.wave-container');
    waveDividers.forEach(wave => {
      wave.style.maxWidth = "100%";
    });
    
    // Ensure project cards maintain proper sizing
    const projectCards = document.querySelectorAll('.project-card');
    if (window.innerWidth < 768) {
      projectCards.forEach(card => {
        card.style.height = "auto";
        card.style.minHeight = "320px";
      });
    }
  };
  
  // Run animation check on load and scroll
  window.addEventListener('load', function() {
    animateOnScroll();
    fixOverflow();
  });
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('resize', fixOverflow);
});
  