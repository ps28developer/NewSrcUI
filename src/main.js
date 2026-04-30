import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggleDesktop = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  };

  if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', handleThemeToggle);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', handleThemeToggle);

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass', 'navbar-scrolled');
      navbar.classList.remove('bg-transparent', 'py-4', 'navbar-top', 'text-white');
    } else {
      navbar.classList.remove('glass');
      navbar.classList.remove('navbar-scrolled');
      navbar.classList.add('bg-transparent', 'py-4', 'navbar-top', 'text-white');
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileIcon = mobileBtn.querySelector('i');
  
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
      mobileIcon.classList.remove('ph-list');
      mobileIcon.classList.add('ph-x');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileIcon.classList.remove('ph-x');
      mobileIcon.classList.add('ph-list');
      document.body.style.overflow = ''; // Restore scrolling
    }
  };

  if(mobileBtn) mobileBtn.addEventListener('click', toggleMenu);

  // Close menu on link click
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(menuOpen) toggleMenu();
    });
  });

  // Simple scroll reveal animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Setup fade-up elements
  const initReveal = () => {
    const fadeEls = document.querySelectorAll('.fade-up');
    fadeEls.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(el);
    });
  };

  setTimeout(initReveal, 100);
});
