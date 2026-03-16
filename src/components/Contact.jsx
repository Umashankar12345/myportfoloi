import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaFileDownload, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending for now - the user can integrate with EmailJS/Backend later
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black gradient-text mb-4">Let's Connect</h2>
          <p className="text-gray-600 text-lg">Interested in working together or have a question? Reach out!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card rounded-[2rem] p-8 shadow-xl border border-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 tracking-tight">Contact Information</h3>

              <div className="space-y-6">
                <a href={`mailto:${portfolioData.email}`} className="flex items-center group">
                  <div className="p-4 bg-blue-100 rounded-2xl text-blue-600 mr-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Me</p>
                    <p className="text-lg font-bold text-gray-700">{portfolioData.email}</p>
                  </div>
                </a>

                <a href={`tel:${portfolioData.phone}`} className="flex items-center group">
                  <div className="p-4 bg-green-100 rounded-2xl text-green-600 mr-5 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Call Me</p>
                    <p className="text-lg font-bold text-gray-700">{portfolioData.phone}</p>
                  </div>
                </a>

                <div className="flex items-center">
                  <div className="p-4 bg-purple-100 rounded-2xl text-purple-600 mr-5">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Location</p>
                    <p className="text-lg font-bold text-gray-700">{portfolioData.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex-1 p-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-black transition-all">
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex-1 p-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-blue-700 transition-all">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </div>

              <a
                href={portfolioData.resume}
                download
                className="mt-4 w-full p-5 bg-white border-2 border-dashed border-blue-200 text-blue-600 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-all"
              >
                <FaFileDownload className="mr-3" /> Download Full Resume (PDF)
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-10 shadow-2xl border border-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 tracking-tight">Drop a Message</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center ${status === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl shadow-blue-200'
                    }`}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center"><FaPaperPlane className="animate-bounce mr-2" /> Sending...</span>
                  ) : status === 'success' ? (
                    "Message Sent!"
                  ) : (
                    <><FaPaperPlane className="mr-2" /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;