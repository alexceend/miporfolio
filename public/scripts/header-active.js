document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('[data-header-link]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const setActiveLink = () => {
    const scrollPosition = window.scrollY + 160;

    let activeId = 'hero';

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        activeId = section.id;
      }
    });

    links.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${activeId}`;
      link.classList.remove('bg-white', 'text-white', 'text-black');
      link.classList.toggle('bg-theme-dark-gray', isActive);
      link.classList.toggle('text-theme-light-yellow', isActive);
      link.classList.toggle('bg-theme-light-yellow', !isActive);
      link.classList.toggle('text-theme-dark-gray', !isActive);
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });
  window.addEventListener('resize', setActiveLink);
});
