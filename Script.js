// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('active'); 
    navLinks.classList.toggle('show'); });

// Smooth scroll for anchor links
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: remove if you want only once
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(section => {
    appearOnScroll.observe(section);
  });
