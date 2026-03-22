import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaCertificate, FaTrophy, FaChalkboardTeacher, 
  FaExternalLinkAlt, FaMapMarkerAlt 
} from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-24 bg-[#020d14] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono tracking-[10px] text-[#ff00ff] uppercase mb-4">Development</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Growth & <span className="text-[#ff00ff]">Milestones</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN: Education & Training */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaGraduationCap className="text-2xl text-[#00f5ff]" />
                <h4 className="text-xl font-black text-white uppercase tracking-tight">Academic Path</h4>
              </div>
              <div className="space-y-6">
                {portfolioData.education.map((edu, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="p-6 bg-[#0a192f]/40 border-l-2 border-[#00f5ff] rounded-r-xl hover:bg-[#0a192f]/60 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-[#00f5ff] font-bold text-lg">{edu.institution}</h5>
                      <span className="text-[10px] font-mono text-[#4a7a90] bg-[#4a7a90]/10 px-2 py-1 rounded">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-white font-medium mb-1">{edu.degree}</p>
                    <p className="text-[#4a7a90] text-sm mb-3 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-xs" /> {edu.location}
                    </p>
                    <div className="text-[#00ff88] font-mono text-sm font-bold uppercase tracking-widest">
                      {edu.details}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Training */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaChalkboardTeacher className="text-2xl text-[#ff6b00]" />
                <h4 className="text-xl font-black text-white uppercase tracking-tight">Specialized Training</h4>
              </div>
              <div className="space-y-6">
                {portfolioData.training.map((t, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="p-6 bg-[#0a192f]/40 border-l-2 border-[#ff6b00] rounded-r-xl"
                  >
                    <h5 className="text-[#ff6b00] font-bold text-lg mb-1">{t.title}</h5>
                    <p className="text-[#c8e8f0]/80 text-sm mb-3">{t.organization} · {t.duration}</p>
                    <p className="text-[#4a7a90] text-xs leading-relaxed">{t.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Certifications & Achievements */}
          <div className="space-y-12">
             {/* Achievements */}
             <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaTrophy className="text-2xl text-[#00ff88]" />
                <h4 className="text-xl font-black text-white uppercase tracking-tight">Key Achievements</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {portfolioData.achievements.map((ach, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="p-4 bg-[#0a192f]/40 border border-[#00ff88]/10 rounded-xl hover:border-[#00ff88]/30 transition-all group"
                  >
                    <h5 className="text-[#00ff88] font-bold text-sm mb-1 uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                      {ach.title}
                    </h5>
                    <p className="text-[#4a7a90] text-xs leading-relaxed">{ach.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FaCertificate className="text-2xl text-[#ff00ff]" />
                <h4 className="text-xl font-black text-white uppercase tracking-tight">Certifications</h4>
              </div>
              <div className="space-y-4">
                {portfolioData.certificates.map((cert, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="flex items-center justify-between p-4 bg-[#0a192f]/40 border border-[#ff00ff]/10 rounded-xl hover:bg-[#ff00ff]/5 transition-all group"
                  >
                    <div>
                      <h5 className="text-white font-bold text-sm group-hover:text-[#ff00ff] transition-colors">{cert.title}</h5>
                      <p className="text-[#4a7a90] text-[10px] uppercase tracking-widest">{cert.issuer} · {cert.date || cert.category}</p>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-[#4a7a90] hover:text-[#ff00ff] transition-colors"
                      title="Verify Certificate"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;