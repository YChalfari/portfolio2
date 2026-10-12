import { useState, useEffect } from 'react';
import './SideNav.css';

const sections = [
  { id: 'hero', label: 'Home', abbrev: 'Home' },
  { id: 'about', label: 'About', abbrev: 'About' },
  { id: 'experience', label: 'Experience', abbrev: 'Exp' },
  { id: 'projects', label: 'Projects', abbrev: 'Work' },
  { id: 'contact', label: 'Contact', abbrev: 'Mail' },
];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav className="side-nav side-nav-desktop">
        <ul className="nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                aria-label={`Navigate to ${section.label}`}
              >
                <span className="nav-dot"></span>
                <span className="nav-label">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile Bottom Navigation */}
      <nav className="side-nav side-nav-mobile">
        <ul className="nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                aria-label={`Navigate to ${section.label}`}
              >
                <span className="nav-dot"></span>
                <span className="nav-label">{section.label}</span>
                <span className="nav-label-abbrev">{section.abbrev}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNav;

