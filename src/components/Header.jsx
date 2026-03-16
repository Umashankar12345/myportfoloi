import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUserGraduate } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Header = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'github-activity', label: 'GitHub' },
    { id: 'problem-solving', label: 'DSA' },
    { id: 'achievements', label: 'Milestones' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-card"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaUserGraduate className="text-2xl text-blue-600" />
            <div>
              <h1 className="text-xl font-bold gradient-text">{portfolioData.name.split(' ')[0]}</h1>
              <p className="text-sm text-gray-600">Portfolio</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="p-2">
              <FaCode className="text-xl text-blue-600" />
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;