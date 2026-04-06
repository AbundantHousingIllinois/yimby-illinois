// ===========================================
// YIMBY Illinois — Main JS
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector('.nav__toggle');
  const navMobile = document.querySelector('.nav__mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const open = navMobile.classList.toggle('nav__mobile--open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('nav__mobile--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Sticky nav on scroll ----
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');

  if (nav && hero) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    heroObserver.observe(hero);
  } else if (nav) {
    // Inner pages without hero — always show scrolled nav
    nav.classList.add('nav--scrolled');
  }

  // ---- Scroll reveal ----
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach(el => revealObserver.observe(el));
  }

  // ---- Staff email assembly ----
  document.querySelectorAll('.staff-card__email').forEach(el => {
    const name = el.dataset.name;
    const domain = el.dataset.domain;
    if (name && domain) {
      const addr = name + '@' + domain;
      const link = document.createElement('a');
      link.href = 'mailto:' + addr;
      link.textContent = addr;
      el.appendChild(link);
    }
  });

  // ---- Active nav highlight (path-based) ----
  const navLinks = document.querySelectorAll('.nav__links .nav__link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace(/\/$/, '') + '/') || currentPath === href) {
      link.classList.add('active');
    }
  });
});
