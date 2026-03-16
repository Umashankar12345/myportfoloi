import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section-padding bg-gray-50/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4">Work Experience</h2>
                    <p className="text-gray-600">Professional journey and key contributions</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline Connector */}
                            {index !== experience.length - 1 && (
                                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                            )}

                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                            <div className="glass-card rounded-2xl p-8 hover-lift transition-all duration-300">
                                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                                        <p className="text-blue-600 font-semibold text-lg">{exp.organization}</p>
                                    </div>
                                    <div className="flex flex-col items-end text-sm text-gray-500">
                                        <span className="flex items-center mb-1">
                                            <FaCalendarAlt className="mr-2" /> {exp.duration}
                                        </span>
                                        {exp.location && (
                                            <span className="flex items-center">
                                                <FaMapMarkerAlt className="mr-2" /> {exp.location}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="space-y-3">
                                    {exp.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="mt-1.5 mr-3 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <p className="text-gray-600">{detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
