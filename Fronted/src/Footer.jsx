import React from 'react';
import { FaHeart, FaGraduationCap } from 'react-icons/fa';
import { portfolioData } from '../assets/data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <FaGraduationCap className="text-2xl" />
              <h3 className="text-2xl font-bold">{portfolioData.name}</h3>
            </div>
            <p className="text-gray-400">Computer Science Student | Aspiring Software Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 flex items-center">
                Made with <FaHeart className="text-red-500 mx-2" /> for academic submission
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            This portfolio is created for college submission and evaluation purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;