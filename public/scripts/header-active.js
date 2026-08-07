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
      link.classList.toggle('bg-black', isActive);
      link.classList.toggle('text-orange-300', isActive);
      link.classList.toggle('text-white', isActive);
      link.classList.toggle('bg-white', !isActive);
      link.classList.toggle('text-black', !isActive);
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });
  window.addEventListener('resize', setActiveLink);
});
