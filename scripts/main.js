// main.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Scroll-To-Top Button Logic
window.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

document.getElementById("scrollToTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Mobile nav toggle
const menuToggle = document.getElementById("mobile-menu-toggle");
const navLinks = document.getElementById("mobile-nav");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });

  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}
