document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  const exploreBtn = document.getElementById('explore-button');
  const subscribeBtn = document.getElementById('subscribe-button');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // Project cards animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Explore navigation button, redirects to the explore gallery page
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      window.location.href = 'explore-gallery.html';
    });
  }

  // Subscribe button, scroll + blink animation
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact-me');
      const formContainer = contactSection?.querySelector('.form-container');
      if (formContainer) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        formContainer.classList.remove('blink');
        void formContainer.offsetWidth;
        formContainer.classList.add('blink');
        setTimeout(() => formContainer.classList.remove('blink'), 3100);
      }
    });
  }
});