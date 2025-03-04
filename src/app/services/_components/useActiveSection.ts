// hooks/useActiveSection.ts
import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(Number(entry.target.getAttribute('data-section')));
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return { activeSection };
};