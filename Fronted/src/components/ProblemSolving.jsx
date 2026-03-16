import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const ProblemSolving = () => {
    const { dsaStats } = portfolioData;

    return (
        <section id="problem-solving" className="section-padding bg-white/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4">Problem Solving</h2>
                    <p className="text-gray-600">Demonstrating algorithmic expertise and consistency</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="glass-card rounded-2xl p-8 hover-lift border-l-4 border-blue-500">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 mr-4">
                                    <FaCode size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Total Solved</h3>
                                    <p className="text-3xl font-black text-blue-600">{dsaStats.totalSolved}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {dsaStats.keyTopics.map((topic, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dsaStats.platforms.map((platform, index) => (
                                <a
                                    key={index}
                                    href={platform.profile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card rounded-xl p-6 hover-lift flex flex-col justify-between group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-gray-800 text-lg">{platform.name}</h4>
                                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-blue-600">{platform.solved}</p>
                                        {platform.rating && <p className="text-sm text-gray-500">{platform.rating}</p>}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Activity / Visualization Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <FaChartLine size={120} />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-4">Consistency & Speed</h3>
                        <p className="text-gray-600 mb-8 text-lg font-medium">
                            I focus on optimizing time and space complexity in every solution. Competitive programming keeps my mind sharp and ready for complex challenges.
                        </p>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            <a
                                href={dsaStats.platforms.find(p => p.name === 'LeetCode')?.profile}
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 bg-[#FFA116] text-white rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 flex items-center justify-center"
                            >
                                <FaCode className="mr-2" /> LeetCode
                            </a>
                            <a
                                href={dsaStats.platforms.find(p => p.name === 'HackerRank')?.profile}
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 bg-[#2EC866] text-white rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 flex items-center justify-center"
                            >
                                <FaCode className="mr-2" /> HackerRank
                            </a>
                        </div>
                        <div className="mt-4 w-full">
                            <a
                                href={dsaStats.platforms.find(p => p.name === 'Codeforces')?.profile}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 flex items-center justify-center"
                            >
                                <FaChartLine className="mr-2" /> Codeforces Profile
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
