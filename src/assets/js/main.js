/**
 * Main JavaScript for knihaprodeti.cz
 * Vanilla JS - NO jQuery, NO Google Analytics
 * Includes: Smooth scroll, GLightbox initialization
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // ===================================================================
  // Smooth Scroll for Anchor Links
  // ===================================================================
  // Modern browsers support native CSS scroll-behavior: smooth
  // This provides enhanced behavior with offset for fixed navbar
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      
      // Skip if just "#" (back to top)
      if (targetId === "#") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        
        // Calculate offset for fixed navbar (56px is standard Bootstrap navbar height)
        const navbarHeight = 56;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // ===================================================================
  // GLightbox Initialization
  // ===================================================================
  // Replaces jQuery Swipebox with modern GLightbox
  
  if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      closeButton: true,
      autoplayVideos: false,
      zoomable: true,
      draggable: true,
      closeOnOutsideClick: true,
    });
  }

  // ===================================================================
  // Bootstrap Navbar Active State
  // ===================================================================
  // Highlight current page in navigation
  
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // ===================================================================
  // Lazy Loading Images Enhancement
  // ===================================================================
  // Add fade-in effect for lazy loaded images
  
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Only animate if the image hasn't loaded (and decoded) yet
          if (img.complete) {
             img.style.opacity = "1";
             img.style.transition = "opacity 0.3s ease-in";
             observer.unobserve(img);
             return;
          }

          // If not loaded, hide it and wait for load
          img.style.opacity = "0";
          img.style.transition = "opacity 0.3s ease-in";
          
          img.addEventListener("load", () => {
            img.style.opacity = "1";
          });
          
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[loading='lazy']").forEach((img) => {
      // Check immediately if already visible and loaded? 
      // standard observer loop handles checking intersection
      imageObserver.observe(img);
    });
  }

  // ===================================================================
  // Console Info (Development)
  // ===================================================================
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.log("%c✨ knihaprodeti.cz", "color: #7c8743; font-size: 20px; font-weight: bold;");
    console.log("%cBuilt with Eleventy + Bootstrap 5 + GLightbox", "color: #666; font-size: 12px;");
  }
});
