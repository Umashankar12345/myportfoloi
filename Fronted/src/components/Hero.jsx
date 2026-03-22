import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaInstagram } from 'react-icons/fa';
import { portfolioData } from '../assets/portfolioData';
import profileImage from '../assets/profile.jpg.jpeg';
import './Hero.css';

// Typewriter Hook
function useTypingEffect(phrases, speed = 55, deleteSpeed = 30, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIdx];
    if (!deleting && charIdx < current.length) {
      timeout.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx > 0) {
      timeout.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, deleteSpeed);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx(i => (i + 1) % phrases.length);
    }
    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, phraseIdx, phrases, speed, deleteSpeed, pauseMs]);

  return displayed;
}

const Hero = () => {
  const phrases = [
    "Building scalable systems",
    "Solving complex DSA",
    "Crafting MERN apps",
    "Open for internships",
  ];
  const typedText = useTypingEffect(phrases);

  const stats = [
    { value: "7.0", label: "CGPA", sub: "out of 10 · LPU" },
    { value: "6+", label: "PROJECTS", sub: "live on Vercel" },
    { value: "450+", label: "DSA SOLVED", sub: "on LeetCode" }
  ];

  return (
    <section className="hx-section" id="home">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.1, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              y: [null, (Math.random() * -100 - 50) + "px"],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-[#00f5ff] rounded-full blur-[1px]"
          />
        ))}
      </div>
      <div className="hx-grid"></div>
      <div className="hx-glow-l"></div>
      <div className="hx-glow-r"></div>
      <div className="hx-watermark">PORTFOLIO</div>

      <div className="hx-inner">
        {/* LEFT CONTENT */}
        <motion.div 
          className="hx-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="hx-degree">B.Tech - Computer Science & Engineering</span>
          <span className="hx-hello">HI, I AM</span>
          <h1 className="hx-name">
            <span className="hx-name-white">UMASHANKAR</span>
            <span className="hx-name-cyan">KUMAR</span>
          </h1>
          <p className="hx-tagline">
            I build production-grade MERN apps and have solved <span className="hx-accent">450+ DSA problems</span> on LeetCode.
          </p>

          <div className="hx-typing">
            <span className="hx-typing-gt">&gt;</span>
            <span>{typedText}</span>
            <span className="hx-cursor">|</span>
          </div>

          <div className="hx-btns">
            <a href="#contact" className="hx-btn hx-btn--primary">
              HIRE ME ↓
            </a>
            <a href="#projects" className="hx-btn hx-btn--ghost">
              VIEW PROJECTS
            </a>
            <a href={portfolioData.resume} target="_blank" rel="noopener noreferrer" className="hx-btn hx-btn--ghost">
              <FaFileDownload /> RESUME
            </a>
          </div>

          <div className="hx-status">
            <span className="hx-status-dot"></span>
            <span>OPEN FOR INTERNSHIPS</span>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div 
          className="hx-right"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hx-photo-wrap">
            <div className="hx-photo-ring"></div>
            <img src={profileImage} alt="Umashankar Kumar" className="hx-photo" />
          </div>

          <div className="hx-stats">
            {stats.map((s, i) => (
              <div key={i} className="hx-stat">
                <span className="hx-stat-val">{s.value}</span>
                <span className="hx-stat-lbl">{s.label}</span>
                <span className="hx-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>

          <div className="hx-socials">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hx-social hx-social--gh">
              <FaGithub /> GITHUB
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hx-social hx-social--li">
              <FaLinkedin /> LINKEDIN
            </a>
            <a href={portfolioData.instagram} target="_blank" rel="noopener noreferrer" className="hx-social hx-social--gh">
              <FaInstagram /> INSTAGRAM
            </a>
          </div>
        </motion.div>
      </div>

      <button className="hx-scroll" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <span className="hx-scroll-lbl">SCROLL</span>
        <div className="hx-chevrons">
          <span>›</span>
          <span>›</span>
          <span>›</span>
        </div>
      </button>
    </section>
  );
};

export default Hero;
