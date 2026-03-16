import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const GithubActivity = () => {
    const { githubStats } = portfolioData;

    return (
        <section id="github-activity" className="section-padding bg-white/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4">Open Source & Activity</h2>
                    <p className="text-gray-600">Tracking contributions and coding consistency</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Stats Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="glass-card rounded-2xl p-6 hover-lift bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                            <div className="flex items-center mb-6">
                                <FaGithub size={40} className="mr-4" />
                                <div>
                                    <h3 className="text-xl font-bold">@{githubStats.username}</h3>
                                    <a href={`https://github.com/${githubStats.username}`} target="_blank" rel="noreferrer" className="text-blue-400 text-sm hover:underline">View Profile</a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                                    <FaCodeBranch className="mx-auto mb-2 text-blue-400" />
                                    <p className="text-xl font-bold">{githubStats.repoCount}</p>
                                    <p className="text-xs text-gray-400 uppercase">Repos</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                                    <FaStar className="mx-auto mb-2 text-yellow-500" />
                                    <p className="text-xl font-bold">50+</p>
                                    <p className="text-xs text-gray-400 uppercase">Stars</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card rounded-2xl p-6">
                            <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                                <FaHistory className="mr-2 text-blue-500" /> Top Languages
                            </h4>
                            <div className="space-y-4">
                                {githubStats.languages.map((lang, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-gray-700">{lang}</span>
                                            <span className="text-gray-500">{index === 0 ? '85%' : index === 1 ? '65%' : '40%'}</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: index === 0 ? '85%' : index === 1 ? '65%' : '40%' }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className={`h-full bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-cyan-400' : 'from-purple-500 to-pink-500'}`}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Activity Graph Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="glass-card rounded-2xl p-8 flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 self-start">GitHub Ecosystem</h3>

                            <div className="grid md:grid-cols-2 gap-6 w-full mb-8">
                                <div className="p-4 bg-white/50 rounded-2xl border border-white flex justify-center items-center shadow-inner overflow-hidden">
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api?username=${githubStats.username}&show_icons=true&theme=transparent&hide_border=true&title_color=2563eb&text_color=4b5563&icon_color=2563eb`}
                                        alt="GitHub Stats"
                                        className="max-w-full"
                                    />
                                </div>
                                <div className="p-4 bg-white/50 rounded-2xl border border-white flex justify-center items-center shadow-inner overflow-hidden">
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubStats.username}&layout=compact&theme=transparent&hide_border=true&title_color=2563eb&text_color=4b5563`}
                                        alt="Top Languages"
                                        className="max-w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 flex flex-col items-center justify-center">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contribution Heatmap</h4>
                                <img
                                    src={`https://ghchart.rshah.org/4096ee/${githubStats.username}`}
                                    alt="GitHub Contributions"
                                    className="w-full max-w-2xl"
                                />
                                <p className="mt-6 text-gray-500 text-sm italic">
                                    {githubStats.contributions}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GithubActivity;
