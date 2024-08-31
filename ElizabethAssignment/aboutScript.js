document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
  
    hamburger.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  
    overlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  
    // Carousel functionality
    let currentSlide = 0;
  
    function showSlide(index) {
      const slides = document.querySelectorAll(".carousel-item"); // Ensure class name is correct
      const totalSlides = slides.length;
  
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
  
      const offset = -currentSlide * 100;
      document.querySelector(".carousel-container").style.transform = `translateX(${offset}%)`;
    }
  
    function moveSlide(step) {
      showSlide(currentSlide + step);
    }
  
    // Add event listeners for carousel controls
    document.querySelector(".prev").addEventListener("click", function () {
      moveSlide(-1);
    });
  
    document.querySelector(".next").addEventListener("click", function () {
      moveSlide(1);
    });
  
    // Initialize carousel
    showSlide(currentSlide);
  
    // Auto-slide every 5 seconds
    setInterval(() => moveSlide(1), 5000);
  });
  