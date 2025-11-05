// Simple, accessible menu JS
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const submenuToggle = document.querySelector('.submenu-toggle');

  // Toggle main nav (mobile)
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.classList.toggle('open');
    // Use aria-hidden on nav for visibility
    mainNav.setAttribute('aria-hidden', String(expanded));
  });

  // Close nav when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 820) return; // only for mobile behaviour
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('open');
      mainNav.setAttribute('aria-hidden', 'true');
    }
  });

  // Submenu toggle (works on desktop & mobile)
  if (submenuToggle) {
    const submenu = document.querySelector('.submenu');
    submenuToggle.addEventListener('click', (ev) => {
      const expanded = submenuToggle.getAttribute('aria-expanded') === 'true';
      submenuToggle.setAttribute('aria-expanded', String(!expanded));
      // set aria-hidden on submenu for CSS to show/hide
      submenu.setAttribute('aria-hidden', String(expanded));
    });

    // keyboard accessibility for submenu: close with Escape
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        submenuToggle.setAttribute('aria-expanded', 'false');
        submenu.setAttribute('aria-hidden', 'true');
        // also close mobile nav
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // initial states
  mainNav.setAttribute('aria-hidden', 'true');
  const submenu = document.querySelector('.submenu');
  if (submenu) submenu.setAttribute('aria-hidden', 'true');
});
