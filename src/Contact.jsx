import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { portfolioData } from '../assets/data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: portfolioData.email, link: `mailto:${portfolioData.email}` },
    { icon: <FaPhone />, label: 'Phone', value: portfolioData.phone, link: `tel:${portfolioData.phone}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: portfolioData.location },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/umashankarkumar', link: portfolioData.linkedin },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/umashankar', link: portfolioData.github },
  ];

  return (
    <section id="contact" className="section-padding bg-white/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-gray-600">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg"
                >
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <div className="text-blue-600 text-xl">
                        {info.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href={portfolioData.resume}
                  download
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FaFileDownload />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

           
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h4 className="font-bold text-gray-800 mb-4">Current Availability</h4>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-gray-700">Open for internship opportunities</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Seeking full-time roles starting June 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;