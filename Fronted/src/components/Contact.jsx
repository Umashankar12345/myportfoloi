import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#020d14] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono tracking-[10px] text-[#00ff88] uppercase mb-4">Connection</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Get In <span className="text-[#00ff88]">Touch</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 bg-[#0a192f]/40 border border-[#00f5ff]/10 rounded-2xl">
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-8">Direct Channels</h4>
              
              <div className="space-y-6">
                <div className="group flex items-center justify-between p-4 bg-[#020d14] border border-[#00f5ff]/5 rounded-xl hover:border-[#00f5ff]/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#00f5ff]/10 rounded-lg text-[#00f5ff]">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#4a7a90] uppercase tracking-widest">Email</p>
                      <p className="text-white font-medium">{portfolioData.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={copyEmail}
                    className="p-2 text-[#4a7a90] hover:text-[#00f5ff] transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <FaCheck className="text-[#00ff88]" /> : <FaCopy />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#020d14] border border-[#00f5ff]/5 rounded-xl">
                  <div className="p-3 bg-[#00ff88]/10 rounded-lg text-[#00ff88]">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#4a7a90] uppercase tracking-widest">Location</p>
                    <p className="text-white font-medium">{portfolioData.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#020d14] border border-[#00f5ff]/5 rounded-xl">
                  <div className="p-3 bg-[#00f5ff]/10 rounded-lg text-[#00f5ff]">
                    <FaPaperPlane size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#4a7a90] uppercase tracking-widest">Phone</p>
                    <p className="text-white font-medium">{portfolioData.phone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs font-mono text-[#4a7a90] uppercase tracking-[5px] mb-6 text-center">Social Matrix</p>
                <div className="grid grid-cols-2 gap-3">
                  <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 bg-[#00f5ff]/5 border border-[#00f5ff]/10 rounded-lg text-[#00f5ff] text-xs font-mono uppercase tracking-widest hover:bg-[#00f5ff] hover:text-black transition-all">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    <FaGithub /> GitHub
                  </a>
                  <a href={portfolioData.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 bg-[#ff00ff]/5 border border-[#ff00ff]/10 rounded-lg text-[#ff00ff] text-xs font-mono uppercase tracking-widest hover:bg-[#ff00ff] hover:text-black transition-all">
                    <FaInstagram /> Instagram
                  </a>
                  <a href={`mailto:${portfolioData.email}`} className="flex items-center justify-center gap-2 p-3 bg-[#00ff88]/5 border border-[#00ff88]/10 rounded-lg text-[#00ff88] text-xs font-mono uppercase tracking-widest hover:bg-[#00ff88] hover:text-black transition-all">
                    <FaEnvelope /> Write Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-[#0a192f]/40 border border-[#00f5ff]/10 rounded-2xl">
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-8">Secure Transmission</h4>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 bg-[#020d14] border border-[#00f5ff]/10 rounded-lg focus:outline-none focus:border-[#00f5ff]/50 text-white font-mono text-sm transition-all"
                    placeholder="YOUR NAME / IDENTIFIER"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 bg-[#020d14] border border-[#00f5ff]/10 rounded-lg focus:outline-none focus:border-[#00f5ff]/50 text-white font-mono text-sm transition-all"
                    placeholder="YOUR@EMAIL.COM / CHANNEL"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3 bg-[#020d14] border border-[#00f5ff]/10 rounded-lg focus:outline-none focus:border-[#00f5ff]/50 text-white font-mono text-sm transition-all resize-none"
                    placeholder="HOW CAN I HELP YOU? WRITE YOUR MESSAGE HERE..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-lg font-black uppercase tracking-[5px] text-sm transition-all flex items-center justify-center gap-3 ${
                    status === 'success'
                      ? 'bg-[#00ff88] text-black'
                      : 'bg-[#00f5ff]/10 border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black shadow-[0_0_15px_rgba(0,245,255,0.1)]'
                  }`}
                >
                  {status === 'sending' ? (
                    <>TRANSMITTING...</>
                  ) : status === 'success' ? (
                    <>SENT SUCCESSFULLY</>
                  ) : (
                    <><FaPaperPlane /> SEND DATA</>
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