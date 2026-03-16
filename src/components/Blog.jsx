import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Blog = () => {
    const { blogPosts } = portfolioData;

    return (
        <section id="blog" className="section-padding bg-gray-50/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4">Latest Insights</h2>
                    <p className="text-gray-600">Sharing knowledge on software engineering and algorithms</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl overflow-hidden hover-lift flex flex-col h-full group"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <FaCalendarAlt className="mr-2" />
                                    {post.date}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {post.summary}
                                </p>
                                <a
                                    href={post.link}
                                    className="inline-flex items-center text-blue-600 font-bold hover:underline"
                                >
                                    Read More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href={`https://github.com/${portfolioData.githubStats.username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="nbtn"
                    >
                        Visit My Technical Blog
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
