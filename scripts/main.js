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

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (toggleButton && mobileNav) {
    // Toggle mobile menu
    toggleButton.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
      mobileNav.classList.toggle('animate-slide-down');
    });

    // Close mobile menu on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('animate-slide-down');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickToggle = toggleButton.contains(event.target);
      if (!isClickInsideMenu && !isClickToggle) {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('animate-slide-down');
      }
    });
  }

  // Scroll-To-Top Button Logic
  const scrollBtn = document.getElementById("scrollToTop");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.remove("hidden");
      } else {
        scrollBtn.classList.add("hidden");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});