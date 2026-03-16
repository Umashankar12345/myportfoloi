import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiMongodb, SiMysql, SiTailwindcss, SiFlask, SiDjango } from 'react-icons/si';
import { portfolioData } from '../assets/portfolioData';

const Skills = () => {
  const getIcon = (skill) => {
    switch (skill.toLowerCase()) {
      case 'c++': return <SiCplusplus className="text-blue-600" />;
      case 'java': return <FaJava className="text-red-500" />;
      case 'javascript': return <FaJs className="text-yellow-500" />;
      case 'typescript': return <SiTypescript className="text-blue-500" />;
      case 'reactjs': return <FaReact className="text-cyan-500" />;
      case 'nodejs': return <FaNodeJs className="text-green-500" />;
      case 'mongodb': return <SiMongodb className="text-green-600" />;
      case 'mysql': return <SiMysql className="text-blue-400" />;
      case 'tailwind css': return <SiTailwindcss className="text-teal-500" />;
      case 'flask': return <SiFlask className="text-gray-800" />;
      case 'django': return <SiDjango className="text-green-700" />;
      case 'git': return <FaGitAlt className="text-orange-600" />;
      default: return <FaDatabase className="text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="section-padding bg-white/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-gray-600">Technical abilities and personal competencies</p>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioData.technicalSkills.languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-4 text-center hover-lift"
              >
                <div className="text-3xl mb-2 flex justify-center">
                  {getIcon(lang)}
                </div>
                <span className="font-medium text-gray-800">{lang}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Frameworks & Libraries</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioData.technicalSkills.frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-4 text-center hover-lift"
              >
                <div className="text-3xl mb-2 flex justify-center">
                  {getIcon(framework)}
                </div>
                <span className="font-medium text-gray-800">{framework}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Databases & Tools */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Databases & Tools</h3>
            <div className="glass-card rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {[...portfolioData.technicalSkills.databases, ...portfolioData.technicalSkills.tools].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    {getIcon(item)}
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">CS Fundamentals</h3>
            <div className="glass-card rounded-xl p-6">
              <div className="flex flex-wrap gap-3">
                {portfolioData.technicalSkills.fundamentals.map((fundamental, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium"
                  >
                    {fundamental}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Soft Skills</h3>
          <div className="glass-card rounded-xl p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full font-medium border border-blue-100 hover:shadow-md transition-shadow"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;