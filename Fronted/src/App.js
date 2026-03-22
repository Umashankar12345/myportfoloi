import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="App bg-[#020d14] min-h-screen text-[#c8e8f0]">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <Hero onSectionChange={handleSectionChange} />
        <About onSectionChange={handleSectionChange} />
        <Skills onSectionChange={handleSectionChange} />
        <Projects onSectionChange={handleSectionChange} />
        <Education onSectionChange={handleSectionChange} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;