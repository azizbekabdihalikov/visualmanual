// Enhancements: header shadow on scroll + dynamic year

// Add subtle shadow to the sticky header when scrolling
const header = document.querySelector('.site-header');
const headerObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      header.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  },
  { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
);

// Observe the hero section top to toggle header shadow
const hero = document.querySelector('.hero');
if (header && hero) {
  headerObserver.observe(hero);
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

