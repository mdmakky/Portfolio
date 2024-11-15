document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close-btn");
    const mobileNav = document.querySelector("#mobile-nav");
  
    // Toggle the mobile navigation on hamburger click
    hamburger.addEventListener("click", function () {
      mobileNav.classList.add("show");
    });
  
    // Close the mobile navigation when the close button is clicked
    closeBtn.addEventListener("click", function () {
      mobileNav.classList.remove("show");
    });
  
    // Close the menu when clicking outside of it (optional)
    window.addEventListener("click", function (event) {
      if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
        mobileNav.classList.remove("show");
      }
    });
  });
  