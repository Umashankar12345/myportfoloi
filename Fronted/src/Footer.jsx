import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from './assets/portfolioData';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#020d14] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2 italic">
              Umashankar <span className="text-[#00f5ff]">Kumar</span>
            </h3>
            <p className="text-[#4a7a90] text-xs font-mono uppercase tracking-widest">
              Full Stack Developer & Problem Solver
            </p>
          </div>

          <div className="flex gap-6">
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-[#4a7a90] hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-[#4a7a90] hover:text-[#00f5ff] transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={portfolioData.instagram} target="_blank" rel="noreferrer" className="text-[#4a7a90] hover:text-[#ff00ff] transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href={`mailto:${portfolioData.email}`} className="text-[#4a7a90] hover:text-[#00ff88] transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4a7a90] text-[10px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} REBOOT_PROTOCOL. All rights reserved.
          </p>
          <p className="text-[#4a7a90] text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
            Made with <FaHeart className="text-[#ff00ff]" /> by Umashankar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;