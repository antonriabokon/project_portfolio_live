document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const backToTopBtn = document.getElementById("backToTopBtn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const feedbackBtn = document.getElementById("feedbackBtn");
  const feedbackOverlay = document.getElementById("feedbackOverlay");
  const closeFeedback = document.getElementById("closeFeedback");

  window.addEventListener("scroll", () => {                                // The show all around the "to top" button    
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    backToTopBtn?.classList.toggle("visible", scrolled >= scrollable - 10);
  });


  backToTopBtn?.addEventListener("click", () => {      // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  themeToggleBtn?.addEventListener("click", () => {   // Toggle theme
    body.classList.toggle("light-theme");
    themeToggleBtn.textContent = body.classList.contains("light-theme") ? "Dark Mode" : "Light Mode";
  });

  
  feedbackBtn?.addEventListener("click", () => {    // Open feedback panel
    if (feedbackOverlay) {
      feedbackOverlay.style.display = "flex";
      requestAnimationFrame(() => {
        feedbackOverlay.style.opacity = "1";
      });
    }
  });

  closeFeedback?.addEventListener("click", () => {    // Close feedback panel
    if (feedbackOverlay) {
      feedbackOverlay.style.opacity = "0";
      setTimeout(() => {
        feedbackOverlay.style.display = "none";
      }, 400);
    }
  });
});