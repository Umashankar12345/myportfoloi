import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/profile.jpg.jpeg';
import { projectsData } from './assets/projects.js';

const getPlatformData = (issuer) => {
  const i = issuer ? String(issuer).toLowerCase() : '';
  if (i.includes('nptel')) return { class: 'p-nptel', text: 'NPTEL' };
  if (i.includes('coursera') || i.includes('meta')) return { class: 'p-coursera', text: 'CRS' };
  if (i.includes('udemy')) return { class: 'p-udemy', text: 'UDM' };
  if (i.includes('hackerrank')) return { class: 'p-hrank', text: 'HR' };
  return { class: 'p-online', text: 'AI' };
};

const getCategoryTheme = (category) => {
  const c = category ? String(category).toLowerCase() : '';
  if (c.includes('web')) return 'tag-web';
  if (c.includes('artificial') || c.includes('ai')) return 'tag-ai';
  if (c.includes('network')) return 'tag-net';
  if (c.includes('program')) return 'tag-prog';
  if (c.includes('mobile')) return 'tag-mob';
  if (c.includes('telecom') || c.includes('communication')) return 'tag-tel';
  return 'tag-web';
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [typedText, setTypedText] = useState('');
  // const typedRef = useRef(null); // Removed unused ref


  useEffect(() => {
    const lines = [
      '> Crafting high-performance MERN applications',
      '> Building scalable backend systems',
      '> Solving algorithmic challenges',
      '> Open to Junior Roles & Internships ⚡> Actively Seeking Software Engineering Internships & Junior Developer Roles'
    ];
    let li = 0, ci = 0, del = false;
    let timeout;

    function type() {
      const cur = lines[li];
      if (!del) {
        setTypedText(cur.slice(0, ci++));
        if (ci > cur.length) {
          del = true;
          timeout = setTimeout(type, 2200);
          return;
        }
      } else {
        setTypedText(cur.slice(0, ci--));
        if (ci < 0) {
          del = false;
          li = (li + 1) % lines.length;
          ci = 0;
        }
      }
      timeout = setTimeout(type, del ? 32 : 60);
    }

    type();
    return () => clearTimeout(timeout);
  }, []);

  // --- PARTICLES ---
  useEffect(() => {
    const pc = document.getElementById('particles');
    if (!pc) return;
    pc.innerHTML = ''; // Clear existing
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const s = Math.random() * 2.5 + 1;
      Object.assign(p.style, {
        width: s + 'px',
        height: s + 'px',
        background: `hsl(${Math.random() > .5 ? '185' : '270'}, 100%, 70%)`,
        left: Math.random() * 100 + 'vw',
        bottom: '-10px',
        animationDuration: (Math.random() * 18 + 10) + 's',
        animationDelay: (Math.random() * 15) + 's',
        opacity: Math.random() * .4
      });
      pc.appendChild(p);
    }
  }, []);

  // --- REVEAL ANIMATION ---
  useEffect(() => {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis');
      });
    }, { threshold: .1 });

    document.querySelectorAll('.reveal').forEach(r => ro.observe(r));

    // Skill bars animation
    const sbObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.sbar-fill').forEach(b => {
            b.style.width = b.getAttribute('data-w') + '%';
          });
        }
      });
    }, { threshold: .25 });

    const skillsRoot = document.getElementById('skills-root');
    if (skillsRoot) sbObs.observe(skillsRoot);

    return () => {
      ro.disconnect();
      sbObs.disconnect();
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      alert(data.message || 'Message transmitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Error transmitting message. Please try again.');
    }
  };


  const certificates = [

    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      date: "Nov 2025",
      link: "https://drive.google.com/file/d/12rlU8P7x0jC6fHtv8CJ31-VxNBa90Bnr/view?usp=sharing"
    },
    {

      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "NPTEL, IIT Kharagpur",
      date: "Nov 2025",
      link: "https://drive.google.com/file/d/1dUEdWBdYyvkuofDo78IyIVYM-kDneRyE/view?usp=sharing"
    },
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "NPTEL, IIT Kharagpur",
      date: "Aug 2025",
      link: "https://drive.google.com/file/d/1ruI2dLV77DM_tgj6knG3qAvEqyRRFgh4/view?usp=sharing"
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "NPTEL, IIT Kharagpur",
      date: "Aug 2025",
      link: "https://drive.google.com/file/d/1kG0Uo7XbgIGonwN-_ONiaMWaceK2FjQs/view?usp=sharing"
    },
    {
      title: "Laravel Master Certificate",
      issuer: "Udemy",
      category: "Web Development",
      link: "https://drive.google.com/file/d/149GMjvioDLoZ9XAusCG_HLmtrVz-0DCA/view?usp=sharing"
    },
    {
      title: "Generative AI: Introduction to Large Language Models",
      issuer: "Online Course",
      category: "Artificial Intelligence",
      link: "https://drive.google.com/file/d/1BK1g6XfGq9jS1fjZWh6BZ7yVz9gK48LT/preview"
    },
    {
      title: "Introduction to Generative AI with GPT",
      issuer: "Online Course",
      category: "Artificial Intelligence",
      link: "https://drive.google.com/file/d/1pXmQbIRbQoe8I1S8WtSlIiZ4CCzUYySz/preview"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      category: "Networking",
      link: "https://drive.google.com/file/d/13-_RIAlHh6Lb9YkTGAd6sbQXOL5odrH-/view?usp=sharing"
    },
    {
      title: "Packet switching Networks and Algorithm",
      issuer: "Online Course",
      category: "Networking",
      link: "https://drive.google.com/file/d/1Qh2px2jwEC6TPvrdzluSoxPpRYqkSCYQ/view?usp=sharing"
    },

    {
      title: "Use Cases , the Future of 5G Course , Beyond",
      issuer: "Online Course",
      category: "Telecommunications",
      link: "https://drive.google.com/file/d/1peKbdjusxKPZlndFlEHn3WGWuaAca10_/view?usp=sharing"
    },
    {
      title: "Introduction to Android Mobile Application Development",
      issuer: "Meta / Coursera",
      category: "Mobile Development",
      link: "https://drive.google.com/file/d/1D6oS0x4b8cWTHS6_nm-20d9Rw0UoOFBd/view?usp=sharing"
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      category: "Programming",
      link: "https://drive.google.com/file/d/15GvEuoLMCSIthyW6meNwlRaCqSokLJKu/view?usp=sharing"
    },
    {
      title: "Data Structures and Alogorithm",
      issuer: "Online Course",
      category: "Programming",
      link: "https://drive.google.com/file/d/1h6OsVuZ3V8BIvSBDtNe9syV-uh3pt8f_/view?usp=sharing"
    },
    {
      title: "Object Oriented Programming",
      issuer: "Online Course",
      category: "Programming",
      link: "https://drive.google.com/file/d/1dSkNc0UiRcuUF7Wx-n80XNxrg4CwaaYV/view?usp=sharing"
    },
    {
      title: "Professional Networking for Career Growth",
      issuer: "LinkedIn Learning",
      category: "Career Development",
      link: "https://drive.google.com/file/d/1FH9VyzmKowfbqXTVZIDS0E9QHZkXO03l/preview"
    },
    {
      title: "The Three Pillars of Effective Communication",
      issuer: "Online Course",
      category: "Soft Skills",
      link: "https://drive.google.com/file/d/1Nn1oiklk9UO4N9DeWP0s0bGoEtdyzEMa/view?usp=sharing"
    },
    {
      title: "Success Mindset",
      issuer: "Online Course",
      category: "Personal Development",
      link: "https://drive.google.com/file/d/1FH9VyzmKowfbqXTVZIDS0E9QHZkXO03l/preview"
    }

  ];

  const achievements = [
    { text: 'Solved 350+ problems on LeetCode — strong DSA & algorithm skills', icon: '⚡', color: 'var(--cyan)', date: 'Jun 2024' },
    { text: 'Earned 100 Days Badge 2025 on LeetCode — consistent coding streak', icon: '🏆', color: 'var(--orange)', date: 'Jul 2025' },
    { text: 'Solved 100+ problems on GeeksForGeeks — sharpened problem-solving skills', icon: '💡', color: 'var(--green)', date: 'Aug 2025' },
    { text: 'Earned HackerRank skill badges in programming & database skills', icon: '🎖️', color: 'var(--purple)', date: 'May 2025' },
  ];

  return (
    <div className="App">
      <div id="particles"></div>

      {/* NAV */}
      <nav>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="nav-logo" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }}>Umashankar Kumar | Full-Stack Developer </div>
          <div className="hidden md:flex gap-6">
            <button onClick={(e) => handleNavClick(e, 'home')} className="nav-link">HOME</button>
            <button onClick={(e) => handleNavClick(e, 'about')} className="nav-link">ABOUT</button>
            <button onClick={(e) => handleNavClick(e, 'skills')} className="nav-link">SKILLS</button>
            <button onClick={(e) => handleNavClick(e, 'projects')} className="nav-link">PROJECTS</button>
            <button onClick={(e) => handleNavClick(e, 'experience')} className="nav-link">EXPERIENCE</button>
            <button onClick={(e) => handleNavClick(e, 'certificates')} className="nav-link">CERTIFICATIONS</button>
            <button onClick={(e) => handleNavClick(e, 'achievements')} className="nav-link">ACHIEVEMENTS</button>
            <button onClick={(e) => handleNavClick(e, 'contact')} className="nav-link">CONTACT</button>
            <a href="/assets/projects/myResume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ textDecoration: 'none' }}>RESUME</a>
          </div>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 1.5rem' }} id="home">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-14 pt-24">
          <div style={{ flex: 1 }}>
            <p className="slabel mb-3">{"B.TECH CSE · LOVELY PROFESSIONAL UNIVERSITY"}</p>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.8rem', letterSpacing: '.3em', color: '#4a6a8a', marginBottom: '.4rem' }}>HELLO, I AM</div>
            <h1 className="glitch" data-text="UMASHANKAR"
              style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5.5vw, 4rem)', color: '#fff', lineHeight: 1.1, marginBottom: '.2rem' }}>
              UMASHANKAR
            </h1>
            <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5.5vw, 4rem)', color: 'var(--cyan)', textShadow: '0 0 20px rgba(0,245,255,.4)', lineHeight: 1.1, marginBottom: '1rem' }}>
              KUMAR
            </h1>
            <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.4rem', color: 'var(--cyan)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.05em' }}>
              Full-Stack Developer specializing in MERN stack and solving complex DSA problems.
            </h2>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', color: '#b0c4de', maxWidth: '480px', minHeight: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              <span>{typedText}</span><span style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--cyan)', marginLeft: '3px', verticalAlign: 'middle', animation: 'pdot 1s infinite', boxShadow: '0 0 5px var(--cyan)' }}></span>
            </div>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              <button onClick={(e) => handleNavClick(e, 'projects')} className="nbtn nbtn-p">VIEW PROJECTS</button>
              <a href="https://github.com/Umashankar12345" target="_blank" rel="noreferrer" className="nbtn nbtn-g">⌥ GITHUB</a>
              <a href="/assets/projects/myResume.pdf" target="_blank" rel="noopener noreferrer" className="nbtn nbtn-o">📄 VIEW RESUME</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginTop: '2rem' }}>
              <div className="pdot"></div>
              <span className="slabel ng" style={{ opacity: 1 }}>OPEN FOR INTERNSHIP &amp; JUNIOR ROLES</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
            <div className="hex">
              <img src={profilePhoto} alt="Umashankar Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
              <div>
                <div className="nc" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.5rem', fontWeight: 900 }}>7.0</div>
                <div style={{ fontSize: '.6rem', color: '#4a6a8a', letterSpacing: '.1em', marginTop: '2px' }}>CGPA</div>
              </div>
              <div>
                <div className="np" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.5rem', fontWeight: 900 }}>3+</div>
                <div style={{ fontSize: '.6rem', color: '#4a6a8a', letterSpacing: '.1em', marginTop: '2px' }}>PROJECTS</div>
              </div>
              <div>
                <div className="ng" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.5rem', fontWeight: 900 }}>450+</div>
                <div style={{ fontSize: '.6rem', color: '#4a6a8a', letterSpacing: '.1em', marginTop: '2px' }}>DSA SOLVED</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '.6rem' }}>
              <a href="https://github.com/Umashankar12345" target="_blank" rel="noreferrer" className="nbtn" style={{ padding: '.38rem .8rem', fontSize: '.58rem' }}>⌥ GitHub</a>
              <a href="https://www.linkedin.com/in/umashankar-kumar-134a88269/" target="_blank" rel="noreferrer" className="nbtn nbtn-p" style={{ padding: '.38rem .8rem', fontSize: '.58rem' }}>in LinkedIn</a>
              <a href="https://vercel.com/umashankar-s-projects" target="_blank" rel="noreferrer" className="nbtn nbtn-o" style={{ padding: '.38rem .8rem', fontSize: '.58rem' }}>▲ Vercel</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal"><p className="slabel mb-2">{"SYSTEM.PROFILE"}</p><h2 className="stitle text-4xl mb-10">ABOUT ME</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="reveal">
            <div className="card cb" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.75rem', letterSpacing: '.2em', color: '#4a6a8a', marginBottom: '1rem' }}>MY JOURNEY</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#b0c4de' }}>
                Ever since I wrote my first line of code, I've been fascinated by the bridge between logic and creativity. Currently a <span className="nc">B.Tech CSE student at LPU</span>, I've evolved from a curious learner to a <span className="nc">Full Stack Developer</span> who loves solving complex problems.
              </p>
              <br />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#b0c4de' }}>
                Beyond technical skills, I pride myself on my <span className="np">collaborative mindset</span> and <span className="np">clear communication</span>. I believe great software isn't just about clean code, but about understanding the human needs behind the screen.
              </p>
              <br />
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
                <span className="tag tagc">Leadership</span>
                <span className="tag tagc">Technical Communication</span>
                <span className="tag tagc">Adaptability</span>
                <span className="tag tagc">Agile Mindset</span>
              </div>
            </div>
            <div className="card cb" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.75rem', letterSpacing: '.2em', color: '#4a6a8a', marginBottom: '1.25rem' }}>CORE DATA</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem', fontFamily: 'Space Mono, monospace', fontSize: '.75rem' }}>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>NAME</span><span style={{ color: '#3a5a7a' }}>::</span><span>Umashankar Kumar</span></div>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>DEGREE</span><span style={{ color: '#3a5a7a' }}>::</span><span>B.Tech CSE (2023–Present)</span></div>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>COLLEGE</span><span style={{ color: '#3a5a7a' }}>::</span><span>LPU, Punjab, India</span></div>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>CGPA</span><span style={{ color: '#3a5a7a' }}>::</span><span>7.0 / 10</span></div>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>EMAIL</span><span style={{ color: '#3a5a7a' }}>::</span><span>umashankar@example.com</span></div>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>PHONE</span><span style={{ color: '#3a5a7a' }}>::</span><span>+91-9572345885</span></div>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>GITHUB</span><span style={{ color: '#3a5a7a' }}>::</span><a href="https://github.com/Umashankar12345" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>github.com/Umashankar12345</a></div>
                <div style={{ display: 'flex', gap: '.75rem' }}><span className="nc" style={{ width: '90px', flexShrink: 0 }}>STATUS</span><span style={{ color: '#3a5a7a' }}>::</span><span className="ng">OPEN TO WORK</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EDUCATION ══ */}
      <section id="education" style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal"><p className="slabel mb-2">ACADEMIC.TIMELINE</p><h2 className="stitle text-4xl mb-10">EDUCATION</h2></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', paddingLeft: '1.5rem' }} className="reveal">
            <div className="tl-line"></div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="tl-dot" style={{ background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }}></div>
              <div className="card cb" style={{ padding: '1.75rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '.5rem', marginBottom: '.75rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.9rem', color: '#e0f0ff' }}>B.Tech — Computer Science & Engineering</h3>
                    <p style={{ fontSize: '.95rem', color: '#4a6a8a', marginTop: '.25rem' }}>Lovely Professional University · Punjab, India</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="tag tagc">Aug 2023 – Present</span>
                    <div className="nc" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', fontWeight: 900, marginTop: '.4rem' }}>CGPA: 7.0</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                  <span className="tag tagc">DSA</span><span className="tag tagc">DBMS</span><span className="tag tagc">OS</span>
                  <span className="tag tagc">CN</span><span className="tag tagp">OOPs</span><span className="tag tagp">Web Dev</span><span className="tag tagp">ML</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="tl-dot" style={{ background: 'var(--purple)', boxShadow: '0 0 8px var(--purple)' }}></div>
              <div className="card cb" style={{ padding: '1.75rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.9rem', color: '#e0f0ff' }}>Diploma — Polytechnic</h3>
                    <p style={{ fontSize: '.95rem', color: '#4a6a8a', marginTop: '.25rem' }}>Netaji Subhas Institute of Technology · Bihar, India</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="tag tagp">Aug 2020 – Oct 2023</span>
                    <div className="np" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', fontWeight: 900, marginTop: '.4rem' }}>78%</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="tl-dot" style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }}></div>
              <div className="card cb" style={{ padding: '1.75rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.9rem', color: '#e0f0ff' }}>Matriculation — Class X</h3>
                    <p style={{ fontSize: '.95rem', color: '#4a6a8a', marginTop: '.25rem' }}>Jean Paul High School · Bihar, India</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="tag tagg">Apr 2019 – Mar 2020</span>
                    <div className="ng" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', fontWeight: 900, marginTop: '.4rem' }}>70%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" style={{ padding: '6rem 1.5rem', marginBottom: '100px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <div className="section-tag">SYSTEM.CAPABILITIES</div>
            <h2 className="section-title" style={{ marginBottom: '48px' }}>SKILLS</h2>
          </div>
          <div className="skills-grid reveal">

            {/* FRONTEND */}
            <div className="skill-category">
              <div className="category-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Frontend
              </div>
              <div className="tech-grid">
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="#61DAFB"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/></svg></span>
                  <span className="chip-label">ReactJS</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="#E34F26" strokeWidth="2"/></svg></span>
                  <span className="chip-label">HTML5</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" fill="#264DE4"/><path d="M7 7h10M7 12h8M7 17h6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></span>
                  <span className="chip-label">CSS3</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></span>
                  <span className="chip-label">Tailwind CSS</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/><path d="M7 17.5l1.6-1c.3.55.58.97 1.24.97.63 0 1.03-.25 1.03-1.22V10h1.97v6.3c0 2-1.17 2.9-2.88 2.9-1.54 0-2.44-.8-2.96-1.7zm6.5-.2l1.6-.98c.4.66.93 1.14 1.85 1.14.78 0 1.28-.39 1.28-.93 0-.64-.51-.87-1.37-1.24l-.47-.2c-1.36-.58-2.26-1.3-2.26-2.83 0-1.41 1.07-2.48 2.75-2.48 1.2 0 2.06.41 2.67 1.5l-1.46.94c-.32-.58-.67-.8-1.2-.8-.55 0-.9.35-.9.8 0 .56.35.79 1.16 1.13l.47.2c1.6.69 2.5 1.39 2.5 2.96 0 1.7-1.33 2.61-3.12 2.61-1.75 0-2.88-.83-3.43-1.92z" fill="#000"/></svg></span>
                  <span className="chip-label">JavaScript</span>
                </div>
              </div>
            </div>

            {/* BACKEND */}
            <div className="skill-category">
              <div className="category-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Backend
              </div>
              <div className="tech-grid">
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="#339933"><path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35c-.48.28-.78.79-.78 1.33v8.64c0 .55.3 1.06.78 1.33l7.44 4.3c.23.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.79.78-1.33V7.68c0-.55-.3-1.06-.78-1.33L12.78 2.05c-.23-.13-.5-.2-.78-.2zm0 2.03l6.66 3.85v7.66L12 19.24l-6.66-3.85V7.73L12 3.88z"/></svg></span>
                  <span className="chip-label">NodeJS</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="#000000"><rect width="24" height="24" rx="4" fill="#404040"/><path d="M6 8h2v8H6zm4 0h2l2 4 2-4h2v8h-2v-5l-2 4-2-4v5h-2z" fill="white"/></svg></span>
                  <span className="chip-label">Express.js</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#3776AB"/><path d="M7 7h5a3 3 0 010 6H9v4H7V7zm2 2v2h3a1 1 0 000-2H9z" fill="white"/></svg></span>
                  <span className="chip-label">Flask / Django</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#6DB33F"/><path d="M12 4C8 4 6 6.5 6 9c0 1.5.7 2.8 1.8 3.6C6.7 13.4 6 14.6 6 16c0 2.2 2.4 4 6 4s6-1.8 6-4c0-1.4-.7-2.6-1.8-3.4C17.3 11.8 18 10.5 18 9c0-2.5-2-5-6-5z" fill="white"/></svg></span>
                  <span className="chip-label">Java Spring</span>
                </div>
              </div>
            </div>

            {/* DATABASES */}
            <div className="skill-category">
              <div className="category-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                Databases
              </div>
              <div className="tech-grid">
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#4479A1"/><path d="M12 4C8.5 4 6 5 6 6.5v11C6 19 8.5 20 12 20s6-1 6-2.5v-11C18 5 15.5 4 12 4z" fill="none" stroke="white" strokeWidth="1.5"/><ellipse cx="12" cy="6.5" rx="6" ry="2.5" fill="white" opacity=".8"/></svg></span>
                  <span className="chip-label">MySQL</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#47A248"/><path d="M12 4c-4 0-6 2-6 4 0 1.5 1.5 2.5 3 3-1.8.8-3 2-3 3.5C6 17 8.7 20 12 20s6-3 6-5.5c0-1.5-1.2-2.7-3-3.5 1.5-.5 3-1.5 3-3 0-2-2-4-6-4z" fill="none" stroke="white" strokeWidth="1.5"/></svg></span>
                  <span className="chip-label">MongoDB</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#336791"/><path d="M12 5l6 3.5v7L12 19l-6-3.5v-7L12 5z" fill="none" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" fill="white" opacity=".7"/></svg></span>
                  <span className="chip-label">PostgreSQL</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#FFCA28"/><path d="M12 4L6 20h12L12 4z" fill="#FF9800"/></svg></span>
                  <span className="chip-label">Firebase</span>
                </div>
              </div>
            </div>

            {/* TOOLS & DEVOPS */}
            <div className="skill-category">
              <div className="category-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                Tools & DevOps
              </div>
              <div className="tech-grid">
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="#F05032"><path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.2 0-.37.03-.53.09L15.1 7.97A2 2 0 0013 5.98c-.7 0-1.32.37-1.68.92L9.63 5.2 10.59 4.2 12 2.79 21.21 12 12 21.21 2.79 12l-.19-.41z"/></svg></span>
                  <span className="chip-label">Git & GitHub</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#000"/><path d="M4 12l4-8 4 8-4 2-4-2zm8 0l4-8 4 8-4 2-4-2z" fill="white" opacity=".8"/></svg></span>
                  <span className="chip-label">Vercel / Netlify</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="#2496ED"><path d="M13.98 11.08l-2.11-2.1-4.68 4.68 4.68 4.69 2.1-2.1-2.57-2.59 2.58-2.58zM10.02 12.92l2.11 2.1 4.68-4.68-4.68-4.69-2.1 2.1 2.57 2.59-2.58 2.58z"/></svg></span>
                  <span className="chip-label">Docker</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#FF6C37"/><path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></span>
                  <span className="chip-label">Postman</span>
                </div>
              </div>
            </div>

            {/* CS FUNDAMENTALS */}
            <div className="skill-category" style={{ gridColumn: '1/-1' }}>
              <div className="category-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
                CS Fundamentals
              </div>
              <div className="tech-grid">
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span>
                  <span className="chip-label">DBMS</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg></span>
                  <span className="chip-label">Operating Systems</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><rect x="2" y="7" width="5" height="4" rx="1"/><rect x="9" y="3" width="5" height="4" rx="1"/><rect x="9" y="14" width="5" height="4" rx="1"/><rect x="16" y="7" width="5" height="4" rx="1"/><line x1="7" y1="9" x2="9" y2="5"/><line x1="7" y1="9" x2="9" y2="16"/><line x1="14" y1="5" x2="16" y2="9"/><line x1="14" y1="16" x2="16" y2="9"/></svg></span>
                  <span className="chip-label">Computer Networks</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><path d="M9 3H3v6l6 3V3zM21 3h-6v6l6 3V3zM9 15H3v6h6v-6zM21 15h-6v6h6v-6z"/></svg></span>
                  <span className="chip-label">DSA</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6M6 9v6M18 9v6M9 18h6"/></svg></span>
                  <span className="chip-label">OOPs</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><path d="M4 6h16M4 10h16M4 14h10M4 18h6"/></svg></span>
                  <span className="chip-label">REST APIs</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M3 3l6 6M15 15l6 6M21 3l-6 6M9 15l-6 6"/></svg></span>
                  <span className="chip-label">System Design</span>
                </div>
                <div className="tech-chip">
                  <span className="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5"><rect x="3" y="3" width="8" height="5" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="3" y="12" width="8" height="5" rx="1"/><rect x="13" y="12" width="8" height="5" rx="1"/><path d="M7 8v4M17 8v4M7 17v4M17 17v4"/></svg></span>
                  <span className="chip-label">Agile</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <p className="slabel mb-2">PROJECT.DATABASE</p>
            <h2 className="stitle text-4xl mb-3">PROJECTS</h2>
            <p style={{ color: '#4a6a8a', fontSize: '.9rem', marginBottom: '2.5rem', fontFamily: 'Space Mono, monospace' }}>{"Live deployments hosted on Vercel ▲"}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.5rem' }}>
            {projectsData.map((p, i) => (
              <div key={p.id} className="card cb reveal" style={{ padding: '1.75rem', transitionDelay: (i * .12) + 's' }}>
                {/* Render project image if available, else show emoji */}
                <div style={{ width: '100%', height: '180px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem', background: 'rgba(0, 245, 255, 0.05)', border: '1px solid rgba(0, 245, 255, 0.1)' }}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '2.5rem' }}>
                      {p.id === 1 ? '🌾' : p.id === 2 ? '👗' : p.id === 3 ? '🗺️' : '💻'}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '.4rem' }}>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{ fontFamily: 'Space Mono, monospace', fontSize: '.58rem', color: 'var(--cyan)', textDecoration: 'none', border: '1px solid rgba(0, 245, 255, 0.2)', padding: '2px 7px', transition: 'all .3s' }}>GitHub</a>
                    {p.demo !== "#" && <a href={p.demo} target="_blank" rel="noreferrer" style={{ fontFamily: 'Space Mono, monospace', fontSize: '.58rem', color: 'var(--orange)', textDecoration: 'none', border: '1px solid rgba(255,107,0,.3)', padding: '2px 7px', transition: 'all .3s' }}>▲ Live</a>}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.85rem', color: '#e0f0ff', marginBottom: '.25rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.6rem', color: '#3a5a7a', marginBottom: '.9rem' }}>{p.duration}</p>
                <div style={{ marginBottom: '1rem' }}>
                  <div className="slabel" style={{ fontSize: '.5rem', color: 'var(--purple)', marginBottom: '5px' }}>{"TECHNICAL CHALLENGE"}</div>
                  <p style={{ fontSize: '.78rem', color: '#b0c4de', fontStyle: 'italic', lineHeight: 1.4 }}>{p.technicalChallenge}</p>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '.45rem', color: '#7a9ab8', fontSize: '.88rem', lineHeight: 1.6, marginBottom: 15 }}>
                  {p.features.map((f, fi) => (
                    <li key={fi} style={{ position: 'relative', paddingLeft: '.9rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--cyan)' }}>▸</span>{f}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap' }}>
                  {p.technologies.map(t => <span key={t} className="tag tagc" style={{ fontSize: '.6rem' }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Contribution Graph Section */}
          <div className="card reveal" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center', background: 'rgba(6, 13, 31, 0.8)', border: '1px solid rgba(0, 245, 255, 0.1)' }}>
            <p className="slabel mb-2" style={{ color: 'var(--green)' }}>{"GITHUB.CONTRIBUTIONS"}</p>
            <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', color: '#fff', marginBottom: '1.5rem' }}>CODING ACTIVITY</h3>
            <div style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
              <img src="https://ghchart.rshah.org/Umashankar12345" alt="GitHub Contributions" style={{ minWidth: '700px', margin: '0 auto', filter: 'brightness(0.9) saturate(1.2)' }} />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <a href="https://github.com/Umashankar12345" target="_blank" rel="noreferrer" className="nbtn" style={{ marginRight: '.75rem' }}>⌥ VIEW ALL ON GITHUB</a>
            <a href="https://vercel.com/umashankar-s-projects" target="_blank" rel="noreferrer" className="nbtn nbtn-o">▲ ALL LIVE DEMOS ON VERCEL</a>
          </div>
        </div>
      </section>

      {/* ══ TRAINING ══ */}
      <section id="training" style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal"><p className="slabel mb-2">{"TRAINING.LOG"}</p><h2 className="stitle text-4xl mb-10">TRAINING</h2></div>
          <div className="card cb reveal" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.95rem', color: '#e0f0ff', marginBottom: '.35rem' }}>Mastered DSA with Java and C++</h3>
                <p style={{ fontSize: '.95rem', color: '#4a6a8a' }}>Self-Paced Intensive Training Program</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="tag tagg">Jun 2025 – Jul 2025</span>
                <button className="ng" style={{ display: 'block', fontFamily: 'Space Mono, monospace', fontSize: '.65rem', marginTop: '.5rem', textDecoration: 'none', cursor: 'pointer', background: 'none', border: 'none' }} onClick={() => alert('Add your DSA certificate link here!')}>VIEW CERTIFICATE →</button>
              </div>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '.65rem', color: '#b0c4de', fontSize: '.95rem', lineHeight: 1.7, paddingLeft: '1rem' }}>
              <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: 'var(--cyan)' }}>▸</span> Designed and optimized algorithms for sorting, searching, graph traversal, and dynamic programming</li>
              <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: 'var(--cyan)' }}>▸</span> Implemented Queue (FIFO) to manage passenger waitlists efficiently using real-world scenarios</li>
              <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: 'var(--cyan)' }}>▸</span> Engineered core data structures in Java and C++, applying them to full-stack application contexts</li>
            </ul>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
              <span className="tag tagc">Java</span><span className="tag tagc">C++</span><span className="tag tagp">DSA</span>
              <span className="tag tagp">Dynamic Programming</span><span className="tag tagg">Graph Algorithms</span>
              <span className="tag tagg">React</span><span className="tag tagg">Node.js</span><span className="tag tagg">MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATES ══ */}
      <section id="certificates" style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <div className="section-tag">VERIFIED.CREDENTIALS</div>
            <h2 className="section-title">CERTIFICATIONS</h2>
          </div>
          <div className="certs-grid reveal">
            {certificates.map((c, i) => {
              const platform = getPlatformData(c.issuer);
              const tagClass = getCategoryTheme(c.category || c.title);
              return (
                <div key={i} className="cert-card" style={{ transitionDelay: (i % 3 * .1) + 's' }} onClick={() => window.open(c.link || 'https://github.com/Umashankar12345/Certificate', '_blank')}>
                  <div className="cert-card-top">
                    <div className={`cert-platform-icon ${platform.class}`}>{platform.text}</div>
                    <div className="cert-meta">
                      <div className="cert-title" title={c.title}>{c.title}</div>
                      <div className="cert-platform-name">{c.issuer}</div>
                    </div>
                  </div>
                  <span className={`cert-tag ${tagClass}`}>{c.category || 'Certification'}</span>
                  <div className="verify-link">
                    VERIFY <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ACHIEVEMENTS ══ */}
      <section id="achievements" style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal"><p className="slabel mb-2">{"MILESTONE.TRACKER"}</p><h2 className="stitle text-4xl mb-10">ACHIEVEMENTS</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {achievements.map((a, i) => (
              <div key={i} className="card cb reveal" style={{ padding: '1.5rem', transitionDelay: (i * .1) + 's' }}>
                <div style={{ display: 'flex', gap: '.9rem', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>{a.icon}</div>
                  <div>
                    <p style={{ fontSize: '.95rem', color: '#b0c4de', lineHeight: 1.7, marginBottom: '.5rem' }}>{a.text}</p>
                    <span className="slabel" style={{ fontSize: '.58rem', color: a.color, opacity: 1 }}>{a.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ padding: '6rem 1.5rem 8rem' }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p className="slabel mb-2">{"ESTABLISH.CONNECTION"}</p>
            <h2 className="stitle text-4xl mb-3">CONTACT ME</h2>
            <p style={{ color: '#4a6a8a', fontSize: '1rem', marginBottom: '3rem' }}>Interested in hiring me? Fill the form — message goes directly to my email.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '2rem' }} className="reveal">
            <div className="card cb" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.75rem', letterSpacing: '.2em', color: '#4a6a8a', marginBottom: '1.5rem' }}>REACH ME AT</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📧</span>
                  <div>
                    <div className="slabel" style={{ fontSize: '.55rem', marginBottom: '2px' }}>EMAIL</div>
                    <span style={{ color: 'var(--cyan)', fontSize: '.85rem' }}>umashankarkumar9572@gmail.com</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📱</span>
                  <div>
                    <div className="slabel" style={{ fontSize: '.55rem', marginBottom: '2px' }}>PHONE</div>
                    <span>+91-9572345885</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>🎓</span>
                  <div>
                    <div className="slabel" style={{ fontSize: '.55rem', marginBottom: '2px' }}>COLLEGE</div>
                    <span style={{ fontSize: '.9rem' }}>LPU, Punjab, India</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>⌥</span>
                  <div>
                    <div className="slabel" style={{ fontSize: '.55rem', marginBottom: '2px' }}>GITHUB</div>
                    <a href="https://github.com/Umashankar12345" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)', textDecoration: 'none', fontSize: '.85rem' }}>github.com/Umashankar12345</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>💼</span>
                  <div>
                    <div className="slabel" style={{ fontSize: '.55rem', marginBottom: '2px' }}>LINKEDIN</div>
                    <a href="https://www.linkedin.com/in/umashankar-kumar-134a88269/" target="_blank" rel="noreferrer" style={{ color: 'var(--purple)', textDecoration: 'none', fontSize: '.85rem' }}>linkedin/umashankar-kumar-134a88269</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>▲</span>
                  <div>
                    <div className="slabel" style={{ fontSize: '.55rem', marginBottom: '2px' }}>LIVE PROJECTS</div>
                    <a href="https://vercel.com/umashankar-s-projects" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none', fontSize: '.82rem' }}>vercel.com/umashankar-s-projects</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cb" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.75rem', letterSpacing: '.2em', color: '#4a6a8a', marginBottom: '1.5rem' }}>SEND A MESSAGE</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.9rem' }}>
                  <div>
                    <label className="slabel" style={{ display: 'block', marginBottom: '.35rem', fontSize: '.55rem' }}>{"YOUR NAME"}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="cinput" placeholder="Company / Your Name" required />
                  </div>
                  <div>
                    <label className="slabel" style={{ display: 'block', marginBottom: '.35rem', fontSize: '.55rem' }}>{"EMAIL"}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="cinput" placeholder="hr@company.com" required />
                  </div>
                </div>
                <div>
                  <label className="slabel" style={{ display: 'block', marginBottom: '.35rem', fontSize: '.55rem' }}>{"SUBJECT"}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="cinput" placeholder="Internship / Job Offer / Collaboration" />
                </div>
                <div>
                  <label className="slabel" style={{ display: 'block', marginBottom: '.35rem', fontSize: '.55rem' }}>{"MESSAGE"}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="cinput" rows="4" placeholder="Tell me about the opportunity or project..." required></textarea>
                </div>
                <button type="submit" className="nbtn" style={{ width: '100%', textAlign: 'center', padding: '.8rem' }}>
                  📨 &nbsp;TRANSMIT MESSAGE →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(0,245,255,.08)', padding: '2rem 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p className="slabel" style={{ opacity: .35 }}>{"UMASHANKAR KUMAR · B.TECH CSE · LPU · FULL STACK DEVELOPER · © 2026"}</p>
      </footer>
    </div>
  );
}

export default App;