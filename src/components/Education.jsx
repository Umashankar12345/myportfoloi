import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBook, FaChartLine, FaUniversity, FaSchool } from 'react-icons/fa';
import { portfolioData } from '../assets/data/portfolioData';

const Education = () => {
  const getEducationIcon = (type) => {
    if (type.includes('University')) return <FaUniversity className="text-blue-600" />;
    if (type.includes('Institute')) return <FaGraduationCap className="text-green-600" />;
    return <FaSchool className="text-purple-600" />;
  };

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-gray-600">My academic journey and achievements</p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
            
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12'}`}
              >
                <div className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white transform md:-translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 flex-1">
                    <div className="glass-card rounded-2xl p-6 hover-lift">
                      <div className="flex items-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mr-4">
                          <div className="text-2xl">
                            {getEducationIcon(edu.institution)}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                          <p className="text-gray-600">{edu.degree}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-500">Duration</p>
                            <p className="font-semibold">{edu.duration}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <FaChartLine className="text-green-500" />
                          <div>
                            <p className="text-sm text-gray-500">Performance</p>
                            <p className="font-semibold text-green-600">{edu.details}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <FaBook className="text-purple-500" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-semibold">{edu.location}</p>
                        </div>
                      </div>
                      
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Highlights:</h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Training & Certifications</h3>
          <div className="space-y-6">
            {portfolioData.training.map((training, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{training.title}</h4>
                <p className="text-gray-600 mb-4">{training.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {training.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{training.duration}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;