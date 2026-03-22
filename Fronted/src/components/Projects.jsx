import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { projects } = portfolioData;

  const filters = ['all', 'full-stack', 'ai-ml', 'frontend'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#020d14] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono tracking-[10px] text-[#ff6b00] uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Featured <span className="text-[#ff6b00]">Constructions</span>
          </h3>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#0a192f]/60 p-1 rounded-xl border border-white/5 backdrop-blur-md overflow-x-auto no-scrollbar max-w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#ff6b00] text-black font-black shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                    : 'text-[#4a7a90] hover:text-white'
                }`}
              >
                {filter.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#0a192f]/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[#ff6b00]/30 transition-all flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-[#020d14]/40 group-hover:bg-transparent transition-all z-10" />
                  <img
                    src={project.title.includes('Farmer') ? 'file:///C:/Users/hp/.gemini/antigravity/brain/86699546-5c55-468e-b479-a74202f5bcaa/ai_farmer_dashboard_1774200346495.png' : (project.title.includes('Try-On') ? 'file:///C:/Users/hp/.gemini/antigravity/brain/86699546-5c55-468e-b479-a74202f5bcaa/virtual_tryon_ui_1774200366375.png' : project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {project.status && (
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#00ff88] border border-[#00ff88]/30">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <FaTerminal className="text-[#ff6b00] text-xs" />
                    <span className="text-[10px] font-mono text-[#4a7a90] uppercase tracking-widest">{project.category}</span>
                  </div>
                  
                  <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#ff6b00] transition-colors">
                    {project.title}
                  </h4>

                  {project.copy ? (
                    <div className="space-y-4 mb-6 flex-grow">
                      <div>
                        <p className="text-[9px] font-mono text-[#ff6b00] uppercase tracking-widest mb-1">Problem</p>
                        <p className="text-[#c8e8f0]/90 text-xs leading-relaxed">{project.copy.problem}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-mono text-[#00f5ff] uppercase tracking-widest mb-1">What I Built</p>
                        <p className="text-[#c8e8f0]/90 text-xs leading-relaxed">{project.copy.built}</p>
                      </div>
                      <div className="p-2 bg-[#ff6b00]/5 border-l-2 border-[#ff6b00] rounded-r">
                        <p className="text-[8px] font-mono text-[#ff6b00] uppercase tracking-widest mb-0.5">Cool Feature</p>
                        <p className="text-[#c8e8f0] text-xs font-bold">{project.copy.coolFeature}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-[#4a7a90] text-sm mb-6 flex-grow leading-relaxed font-medium italic">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-[#c8e8f0] uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#4a7a90] hover:bg-white/10 hover:text-white transition-all"
                    >
                      <FaCode className="mr-2" /> Source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center py-3 bg-[#ff6b00]/10 border border-[#ff6b00]/50 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#ff6b00] hover:bg-[#ff6b00] hover:text-black transition-all shadow-[0_0_15px_rgba(255,107,0,0.1)]"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
