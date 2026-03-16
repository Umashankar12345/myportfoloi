import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Testimonials = () => {
    const { testimonials } = portfolioData;

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section id="testimonials" className="section-padding bg-gray-50/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold gradient-text mb-4">Recommendations</h2>
                    <p className="text-gray-600">What mentors and peers say about my work</p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-3xl p-10 relative"
                        >
                            <FaQuoteLeft className="absolute top-8 left-8 text-blue-100 text-6xl" />
                            <div className="relative z-10">
                                <p className="text-xl italic text-gray-700 mb-8 leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 uppercase">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
