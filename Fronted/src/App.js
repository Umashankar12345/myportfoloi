import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/profile.jpg.jpeg';
import { projectsData } from './assets/projects.js';

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

  const skGroups = {
    'Frontend': [
      { n: 'ReactJS', v: 85, col: 'var(--cyan)' },
      { n: 'HTML5 & CSS3', v: 92, col: 'var(--cyan)' },
      { n: 'Tailwind CSS', v: 90, col: 'var(--cyan)' },
      { n: 'JavaScript', v: 88, col: 'var(--cyan)' },
    ],
    'Backend': [
      { n: 'NodeJS', v: 82, col: 'var(--purple)' },
      { n: 'Express.js', v: 80, col: 'var(--purple)' },
      { n: 'Flask / Django', v: 68, col: 'var(--purple)' },
      { n: 'Java Spring', v: 60, col: 'var(--purple)' },
    ],
    'Databases': [
      { n: 'MySQL', v: 85, col: 'var(--green)' },
      { n: 'MongoDB', v: 80, col: 'var(--green)' },
      { n: 'PostgreSQL', v: 70, col: 'var(--green)' },
      { n: 'Firebase', v: 75, col: 'var(--green)' },
    ],
    'Tools & DevOps': [
      { n: 'Git & GitHub', v: 90, col: 'var(--orange)' },
      { n: 'Vercel / Netlify', v: 85, col: 'var(--orange)' },
      { n: 'Docker', v: 65, col: 'var(--orange)' },
      { n: 'Postman', v: 88, col: 'var(--orange)' },
    ]
  };
  const csSkills = ['DBMS', 'Operating Systems', 'Computer Networks', 'DSA', 'OOPs', 'REST APIs', 'System Design', 'Agile'];

  const certs = [
    { name: 'Cloud Computing', org: 'NPTEL · IIT Kharagpur', date: 'Nov 2025', emoji: '☁️', color: 'var(--cyan)', link: 'https://github.com/Umashankar12345/Certificate/blob/main/Cloud%20Computing%20(2)%20(1).pdf' },
    { name: 'ChatGPT-4 Prompt Engineering: GenAI & LLM', org: 'Infosys', date: 'Aug 2025', emoji: '🤖', color: 'var(--purple)' },
    { name: 'TCP/IP Advanced Topics', org: 'Coursera', date: 'Nov 2024', emoji: '🌐', color: 'var(--green)' },
    { name: 'Build Generative AI Apps with No-Code', org: 'IBM', date: '2026', emoji: '🛠️', color: 'var(--orange)' },
    { name: 'Android Mobile App Development', org: 'Meta', date: '2026', emoji: '📱', color: 'var(--cyan)' },
    { name: 'PHP with Laravel Masterclass', org: 'Udemy', date: '2025', emoji: '🐘', color: 'var(--purple)' },
    { name: 'Networking for Career Growth', org: 'LinkedIn Learning', date: '2025', emoji: '🤝', color: 'var(--green)' },
    { name: 'Three Pillars of Communication', org: 'LinkedIn Learning', date: '2025', emoji: '🗣️', color: 'var(--orange)' },
    { name: 'Bits & Bytes of Computer Networking', org: 'Google', date: 'Nov 2024', emoji: '🔗', color: 'var(--cyan)' },
    { name: 'Introduction to Hardware and OS', org: 'Google', date: 'Aug 2024', emoji: '💻', color: 'var(--purple)' },
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
      <section id="skills" style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal"><p className="slabel mb-2">SKILL.MATRIX</p><h2 className="stitle text-4xl mb-10">SKILLS</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="reveal" id="skills-root">
            {Object.keys(skGroups).map((group, gi) => (
              <div key={group}>
                <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.75rem', letterSpacing: '.2em', color: gi % 2 === 0 ? 'var(--cyan)' : 'var(--purple)', marginBottom: '1.5rem' }}>▸ {group.toUpperCase()}</h3>
                <div className="space-y-4">
                  {skGroups[group].map(s => (
                    <div key={s.n}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Space Mono, monospace', fontSize: '.7rem', color: '#4a6a8a' }}>
                        <span>{s.n}</span><span style={{ color: s.col }}>{s.v}%</span>
                      </div>
                      <div className="sbar">
                        <div className="sbar-fill" data-w={s.v} style={{ background: `linear-gradient(90deg, ${s.col}, rgba(191,0,255,.5))`, boxShadow: `0 0 7px ${s.col}` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.75rem', letterSpacing: '.2em', color: 'var(--orange)', marginBottom: '1.5rem' }}>▸ CS FUNDAMENTALS</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {csSkills.map(s => <span key={s} className="tag tagp">{s}</span>)}
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
          <div className="reveal"><p className="slabel mb-2">{"ACHIEVEMENT.LOG"}</p><h2 className="stitle text-4xl mb-10">CERTIFICATES</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.25rem' }}>
            {certs.map((c, i) => (
              <div key={i} className="card cb reveal" style={{ padding: '1.4rem', transitionDelay: (i % 3 * .1) + 's' }}>
                <div style={{ display: 'flex', gap: '.9rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', background: `${c.color}12`, border: `1px solid ${c.color}30`, borderRadius: '3px', flexShrink: 0 }}>{c.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.72rem', color: '#e0f0ff', marginBottom: '.25rem', lineHeight: 1.4 }}>{c.name}</h3>
                    <p style={{ fontSize: '.82rem', color: '#4a6a8a', marginBottom: '.4rem' }}>{c.org}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="slabel" style={{ fontSize: '.56rem' }}>{c.date}</span>
                      <button onClick={() => window.open(c.link || 'https://github.com/Umashankar12345/Certificate', '_blank')} style={{ fontFamily: 'Space Mono, monospace', fontSize: '.58rem', color: c.color, textDecoration: 'none', border: `1px solid ${c.color}30`, padding: '2px 6px', transition: 'all .3s', background: 'none', cursor: 'pointer' }}>VERIFY →</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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