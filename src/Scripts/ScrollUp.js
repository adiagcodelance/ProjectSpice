export function initializeScrollToTop() {
  document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector("#scroll-to-top-button");

    // Scroll to top smoothly when the button is clicked
    scrollButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Use smooth scrolling
      });
    });

    // Show/hide the button based on scroll position
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });
  });
}
