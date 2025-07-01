// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'skills', 'projects', 'contact'];
    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="nav-container">
      <div className="nav-logo">Aditya ⚡</div>

      <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>

      <nav className={`nav-menu ${isOpen ? 'show' : ''}`}>
        {['home', 'skills', 'projects', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleLinkClick}
            className={activeSection === id ? 'active' : ''}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
