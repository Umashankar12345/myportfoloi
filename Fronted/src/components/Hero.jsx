import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaLinkedin, FaArrowDown, FaFileDownload } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';
import profileImage from '../assets/profile.jpg.jpeg';

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-2">
              Available for Internships
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
              Hi, I'm <br /><span className="gradient-text">{portfolioData.name.split(' ')[0]}</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-700 font-bold uppercase tracking-tight">
              {portfolioData.tagline}
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {portfolioData.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all duration-300 hover:shadow-2xl shadow-gray-200 active:scale-95"
              >
                View Projects
              </a>
              <a
                href={portfolioData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-3 active:scale-95"
              >
                <FaFileDownload />
                Get Resume
              </a>
            </div>

            <div className="flex space-x-4 pt-6">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm">
                <FaGithub className="text-2xl" />
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#about" className="p-4 bg-white border border-gray-100 rounded-2xl hover:border-purple-500 hover:text-purple-500 transition-all shadow-sm animate-float">
                <FaArrowDown className="text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Decorative backgrounds */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>

              <div className="relative glass-card rounded-[3rem] p-10 shadow-2xl overflow-hidden group h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>

                {/* Profile Image with modern frame */}
                <div className="w-56 h-56 mx-auto mb-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative">
                  <img
                    src={profileImage}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400?text=Profile';
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-all"></div>
                </div>

                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-2xl border border-white">
                    <span className="text-sm font-bold text-gray-500 tracking-wider">STATUS</span>
                    <span className="font-black text-blue-600 text-sm tracking-tight">STUDENT @ LPU</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-2xl border border-white">
                    <span className="text-sm font-bold text-gray-500 tracking-wider">ACADEMIC</span>
                    <span className="font-black text-green-600 text-sm tracking-tight">7.0 CGPA</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-2xl border border-white">
                    <span className="text-sm font-bold text-gray-500 tracking-wider">EXPERTISE</span>
                    <span className="font-black text-purple-600 text-sm tracking-tight uppercase">Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
