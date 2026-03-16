import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaStar, FaMedal } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Achievements = () => {
    const { achievements } = portfolioData;

    const icons = [<FaTrophy />, <FaAward />, <FaStar />, <FaMedal />];

    return (
        <section id="achievements" className="section-padding bg-white/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4">Milestones & Achievements</h2>
                    <p className="text-gray-600">Recognition and competitive accomplishments</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-8 border-t-4 border-purple-500 text-center flex flex-col items-center justify-center transition-all duration-300"
                        >
                            <div className="text-4xl text-purple-600 mb-6 p-4 bg-purple-50 rounded-full">
                                {icons[index % icons.length]}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 leading-tight">
                                {achievement}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
