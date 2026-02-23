// At the end of your script
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.mobile-bottom-nav a').forEach(link => {
      if (link.getAttribute('href') === currentPath || 
          (link.getAttribute('href').startsWith('#') && window.location.hash === link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });
  }
});