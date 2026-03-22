import React, { useState, useEffect } from 'react';
import { portfolioData } from '../assets/portfolioData';
import './Hero.css';

const Header = ({ activeSection, onSectionChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`hx-nav ${scrolled ? 'hx-nav--scrolled' : ''}`}>
      <div className="hx-nav-logo">
        <span>{portfolioData.name.toUpperCase()}</span>
        <span className="hx-nav-logo-sep">|</span>
        <span className="hx-nav-logo-role">FULL STACK DEVELOPER</span>
      </div>

      <div className="hx-nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onSectionChange(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`hx-nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
        <a href="#contact" className="hx-nav-hire">
          HIRE ME
        </a>
      </div>
    </header>
  );
};

export default Header;