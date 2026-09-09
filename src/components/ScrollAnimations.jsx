import { useEffect } from 'react';

const revealTypes = ['lift', 'slide', 'scale', 'blur', 'tilt'];

const ScrollAnimations = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('main section');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    sections.forEach((section, index) => {
      section.dataset.reveal = revealTypes[index % revealTypes.length];
    });

    if (reducedMotion) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
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
      { threshold: 0.12, rootMargin: '0px 0px -56px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollAnimations;
