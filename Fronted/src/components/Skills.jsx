import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaJava, FaTerminal 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiPostman, SiVercel, SiFlask, SiDjango, SiCplusplus 
} from 'react-icons/si';
import { portfolioData } from '../assets/portfolioData';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' },
  ];

  const getIcon = (skill) => {
    const s = skill.toLowerCase();
    if (s.includes('react')) return <FaReact className="text-[#61DAFB]" />;
    if (s.includes('node')) return <FaNodeJs className="text-[#339933]" />;
    if (s.includes('mongodb')) return <SiMongodb className="text-[#47A248]" />;
    if (s.includes('mysql')) return <SiMysql className="text-[#4479A1]" />;
    if (s.includes('sql')) return <FaDatabase className="text-[#4479A1]" />;
    if (s.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
    if (s.includes('typescript')) return <SiTypescript className="text-[#3178C6]" />;
    if (s.includes('javascript') || s === 'js') return <FaJs className="text-[#F7DF1E]" />;
    if (s.includes('html')) return <FaHtml5 className="text-[#E34F26]" />;
    if (s.includes('css')) return <FaCss3Alt className="text-[#1572B6]" />;
    if (s.includes('git')) return <FaGitAlt className="text-[#F05032]" />;
    if (s.includes('express')) return <SiExpress className="text-white" />;
    if (s.includes('postman')) return <SiPostman className="text-[#FF6C37]" />;
    if (s.includes('vercel')) return <SiVercel className="text-white" />;
    if (s.includes('flask')) return <SiFlask className="text-white" />;
    if (s.includes('django')) return <SiDjango className="text-[#092E20]" />;
    if (s.includes('c++')) return <SiCplusplus className="text-[#00599C]" />;
    if (s.includes('java')) return <FaJava className="text-[#ED8B00]" />;
    return <FaTerminal className="text-[#00f5ff]" />;
  };

  const allSkills = Object.entries(portfolioData.technicalSkills).flatMap(([cat, skills]) => 
    skills.map(skill => ({ name: skill, category: cat }))
  );

  const filteredSkills = activeFilter === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeFilter);

  // Remove duplicates
  const uniqueSkills = Array.from(new Set(filteredSkills.map(s => s.name)))
    .map(name => filteredSkills.find(s => s.name === name));

  return (
    <section id="skills" className="py-24 bg-[#020d14] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f5ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono tracking-[10px] text-[#00f5ff] uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Technical <span className="text-[#00f5ff]">Arsenal</span>
          </h3>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-full border ${
                activeFilter === cat.id
                  ? 'bg-[#00f5ff] border-[#00f5ff] text-black shadow-[0_0_20px_rgba(0,245,255,0.3)]'
                  : 'bg-transparent border-[#00f5ff]/20 text-[#c8e8f0]/60 hover:border-[#00f5ff]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {uniqueSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative p-4 bg-[#0a192f]/50 border border-[#00f5ff]/10 rounded-xl hover:border-[#00f5ff]/40 hover:bg-[#00f5ff]/5 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {getIcon(skill.name)}
                  </div>
                  <span className="text-xs font-mono tracking-wider text-[#c8e8f0] uppercase text-center">
                    {skill.name}
                  </span>
                </div>
                
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-[#00f5ff]/30 transition-all rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-[#00f5ff]/30 transition-all rounded-bl-xl"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fundamental Knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 border border-[#00f5ff]/10 rounded-2xl bg-[#0a192f]/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#00f5ff]/20"></div>
            <h4 className="text-sm font-mono tracking-widest text-[#4a7a90] uppercase">CS Fundamentals</h4>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#00f5ff]/20"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.technicalSkills.fundamentals.map((item, i) => (
              <span 
                key={i}
                className="px-5 py-2 bg-[#00f5ff]/5 border border-[#00f5ff]/10 rounded-lg text-[10px] font-mono tracking-widest text-[#00f5ff] uppercase hover:bg-[#00f5ff]/10 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;