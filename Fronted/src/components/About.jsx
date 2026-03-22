import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaRocket } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#020d14] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono tracking-[10px] text-[#00f5ff] uppercase mb-4">Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Problem <span className="text-[#00f5ff]">Solver</span> & Developer
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 bg-[#0a192f]/40 border-l-4 border-[#00f5ff] rounded-r-2xl">
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-3">
                <FaUser className="text-[#00f5ff]" /> My Mission
              </h4>
              <p className="text-[#c8e8f0]/80 leading-relaxed text-lg">
                I'm a <span className="text-[#00f5ff] font-bold">B.Tech CSE Student at LPU</span> with a passion for building scalable, high-performance web applications. I believe in solving real-world problems through technology, particularly interested in projects like the <span className="text-[#00f5ff] font-bold">AI-driven agricultural platform</span> that empowers farmers through NLP and ML.
              </p>
              <p className="mt-4 text-[#c8e8f0]/80 leading-relaxed text-sm">
                My goal is to create software that doesn't just work, but provides a seamless and impactful user experience. I specialize in the <span className="text-[#00f5ff] font-bold">MERN Stack</span> and love tackling complex algorithmic challenges using <span className="text-[#00f5ff] font-bold">C++ and Java</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#0a192f]/20 border border-[#00f5ff]/10 rounded-xl">
                <FaCode className="text-2xl text-[#00ff88] mb-2" />
                <h5 className="text-white font-bold text-sm uppercase">Clean Code</h5>
                <p className="text-[#4a7a90] text-[10px]">Maintainable & efficient systems</p>
              </div>
              <div className="p-4 bg-[#0a192f]/20 border border-[#00f5ff]/10 rounded-xl">
                <FaRocket className="text-2xl text-[#ff6b00] mb-2" />
                <h5 className="text-white font-bold text-sm uppercase">Performance</h5>
                <p className="text-[#4a7a90] text-[10px]">Fast, optimized web experiences</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-[#0a192f]/40 border border-[#00f5ff]/10 rounded-3xl"
          >
            <h4 className="text-xl font-black text-white uppercase tracking-tight mb-8">System Profile</h4>
            <div className="space-y-4 font-mono text-sm">
              {[
                { label: 'NAME', value: 'Umashankar Kumar' },
                { label: 'ROLE', value: 'Full Stack Developer' },
                { label: 'EDUCATION', value: 'B.Tech CSE (LPU)' },
                { label: 'LOCATION', value: 'Punjab, India' },
                { label: 'EMAIL', value: portfolioData.email },
                { label: 'PHONE', value: portfolioData.phone },
                { label: 'GITHUB', value: 'Umashankar12345' },
                { label: 'STATUS', value: 'Open for Internships', color: 'text-[#00ff88]' },
              ].map((item, i) => (
                <div key={i} className="flex border-b border-[#00f5ff]/5 pb-2 justify-between">
                  <span className="text-[#4a7a90]">{item.label}</span>
                  <span className={item.color || 'text-white'}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
