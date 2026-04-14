document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('#year');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const revealNodes = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
});
