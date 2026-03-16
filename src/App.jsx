import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubActivity from './components/GithubActivity';
import ProblemSolving from './components/ProblemSolving';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnalyticsTracker from './components/AnalyticsTracker';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <AnalyticsTracker />
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main>
        <motion.section id="home">
          <Hero />
        </motion.section>

        <motion.section id="about">
          <About />
        </motion.section>

        <motion.section id="skills">
          <Skills />
        </motion.section>

        <motion.section id="projects">
          <Projects />
        </motion.section>

        <motion.section id="github-activity">
          <GithubActivity />
        </motion.section>

        <motion.section id="problem-solving">
          <ProblemSolving />
        </motion.section>

        <motion.section id="achievements">
          <Achievements />
        </motion.section>

        <motion.section id="experience">
          <Experience />
        </motion.section>

        <motion.section id="certificates">
          <Certificates />
        </motion.section>

        <motion.section id="blog">
          <Blog />
        </motion.section>

        <motion.section id="testimonials">
          <Testimonials />
        </motion.section>

        <motion.section id="contact">
          <Contact />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default App;