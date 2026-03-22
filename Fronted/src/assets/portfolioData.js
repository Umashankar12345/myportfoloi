export const portfolioData = {
  name: "Umashankar Kumar",
  tagline: "ASPIRING SOFTWARE ENGINEER | FULL STACK DEVELOPER",
  bio: "Building end-to-end web experiences with React, Node.js, and a strong foundation in C++ and Java. I care about clean code and even cleaner interfaces.",
  email: "umashankarkumar9572@gmail.com",
  phone: "+91 9572345885",
  location: "Punjab, India",
  linkedin: "https://www.linkedin.com/in/umashankar-kumar-l34d88269",
  github: "https://github.com/Umashankar12345",
  instagram: "https://instagram.com/umashankar_kumar_",
  resume: "/assets/projects/myResume.pdf",

  about: `I am a passionate Computer Science student at Lovely Professional University with a strong foundation in both theoretical concepts and practical applications. My journey in technology began with curiosity about how systems work, which evolved into a dedicated pursuit of software engineering.

Coming from Bihar and currently studying in Punjab, I've learned to adapt to diverse environments while maintaining a consistent focus on growth and learning. I believe in solving real-world problems through technology, particularly interested in projects like the AI-driven agricultural platform that empowers farmers through NLP and ML.

My approach combines strong technical skills with creative problem-solving, always aiming to bridge complex algorithms with user-friendly interfaces.`,

  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      duration: "Aug 2023 - Present",
      location: "Punjab, India",
      details: "CGPA: 7.0 / 10",
      highlights: [
        "Active participant in coding competitions",
        "Coursework in Data Structures, Algorithms, DBMS, OS, CN ,"
      ]
    },
    {
      institution: "Netaji Subhas Institute Of Technology",
      degree: "Diploma - Polytechnic",
      duration: "Aug 2020 - Oct 2023",
      location: "Bihar, India",
      details: "Percentage: 78%",
      highlights: [
        "Developed strong foundation in engineering principles",
        "Participated in technical workshops and projects"
      ]
    }
  ],

  technicalSkills: {
    frontend: ["ReactJS", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
    backend: ["NodeJS", "Express", "REST API", "Flask", "Django"],
    databases: ["MySQL", "MongoDB", "SQL"],
    devops: ["Git", "GitHub", "Vercel"],
    tools: ["Google Maps API", "ML APIs", "Postman", "VS Code"],
    fundamentals: ["DBMS", "Operating Systems", "Computer Networks", "OOPs", "DSA"],
  },

  softSkills: [
    "Time Management",
    "Leadership",
    "Problem-Solving",
    "Adaptability",
    "Communication",
    "Team Collaboration"
  ],

  dsaStats: {
    totalSolved: "450+",
    platforms: [
      {
        name: "LeetCode",
        solved: "300+",
        profile: "https://leetcode.com/u/Umashankar9572/",
        rating: "Active Participant"
      },
      {
        name: "GeeksforGeeks",
        solved: "100+",
        profile: "https://auth.geeksforgeeks.org/user/umashankar12345"
      },
      {
        name: "HackerRank",
        solved: "Multiple Badges",
        profile: "https://www.hackerrank.com/profile/umashankarkumar"
      },
      {
        name: "Codeforces",
        solved: "Active",
        profile: "https://codeforces.com/profile/Umashankar9572"
      }
    ],
    keyTopics: [
      "Sliding Window",
      "Dynamic Programming",
      "Graph Algorithms",
      "Binary Search",
      "Recursion & Backtracking"
    ]
  },

  experience: [
    {
      role: "Lead Developer (Personal Projects)",
      organization: "Self-Project Portfolio",
      duration: "2023 - Present",
      description: "Built and deployed multiple production-ready full-stack applications using React, Node.js, and MongoDB. Implemented complex features like AI-based recommendations, trip planning algorithms, and real-time data sync.",
      details: [
        "Architected scalable frontend using React and Framer Motion for high-impact UI.",
        "Integrated multiple third-party APIs including Google Maps, NLP models, and Weather APIs.",
        "Optimized application performance and SEO for real-world visibility."
      ]
    }
  ],

  projects: [
    {
      title: "AI-Based Farmer Query Support and Advisory System",
      duration: "Nov 2025 – Ongoing",
      status: "In progress — Nov 2025 onwards",
      description: "An AI-driven agricultural platform that answers farmer queries using NLP and ML models. Integrates live weather APIs for real-time crop protection alerts and delivers personalised recommendations for crop selection, fertilizer use and soil analysis.",
      copy: {
        problem: "Farmers lack instant access to expert crop and soil advice",
        built: "NLP-powered query engine + ML crop/fertilizer/soil recommendation modules",
        coolFeature: "Real-time weather alerts that trigger personalised crop protection advice"
      },
      techStack: "Python, NLP, Machine Learning, Weather API, Predictive Models",
      features: [
        "Crop recommendation using predictive algorithms",
        "Fertilizer advisory based on soil analysis",
        "Real-time weather alerts via external APIs"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "Weather API"],
      github: "https://github.com/Umashankar12345/farmer-query-system",
      demo: "https://farmesupport.vercel.app/dashboard",
      image: "/assets/projects/farmer-query.png",
      category: "full-stack"
    },
    {
      title: "Virtual Try-On Tool For Clothing & Accessories",
      status: "COMPLETED",
      duration: "Jan 2024 – Mar 2025",
      description: "A real-time virtual try-on tool that lets users preview clothing and accessories via live webcam. Uses face and body tracking to overlay items accurately, with a drag-and-drop system for adjusting size, rotation and position.",
      copy: {
        problem: "Online shoppers can't visualise how accessories look on them before buying",
        built: "Webcam-based try-on with real-time face/body tracking and draggable overlays",
        coolFeature: "Drag-and-drop resize, rotate and reposition any accessory in real time"
      },
      techStack: "React, OpenCV, MediaPipe, Face Tracking, Drag & Drop",
      features: [
        "Webcam support with face and body tracking",
        "Dynamic drag-and-drop UI for accessories",
        "Low-latency real-time rendering"
      ],
      technologies: ["ReactJS", "OpenCV", "MediaPipe"],
      github: "https://github.com/Umashankar12345/virtual-tryon",
      demo: "https://virtual-tryon-demo.vercel.app",
      image: "/assets/projects/virtual-tryon.png",
      category: "ai-ml"
    },
    {
      title: "Smart Road Trip Planner (SRTP)",
      status: "COMPLETED",
      duration: "Aug 2024 - Jan 2025",
      description: "A full-stack trip planning app with route optimisation and real-time map integration. Features JWT authentication, personalised trip saving, and smart recommendations for restaurants, hotels and nearby attractions via Google Places API.",
      copy: {
        problem: "Planning a road trip across multiple stops with attraction discovery is scattered across apps",
        built: "One app — optimised routes + hotel/restaurant/attraction recommendations + saved trips",
        coolFeature: "JWT-secured profile saves past trips and preferences for personalised suggestions"
      },
      techStack: "MERN, Google Maps API, Google Places API, JWT",
      features: [
        "Secure user authentication with JWT",
        "Route optimization algorithms",
        "Geo-location based recommendations"
      ],
      technologies: ["ReactJS", "NodeJS", "Google Maps API", "JWT"],
      github: "https://github.com/Umashankar12345/road-trip-planner",
      demo: "https://road-trip-planner.vercel.app",
      image: "/assets/projects/road-trip.png",
      category: "full-stack"
    }
  ],

  githubStats: {
    username: "Umashankar12345",
    languages: ["JavaScript", "C++", "Java", "HTML/CSS"],
    repoCount: "15+",
    contributions: "Ongoing activity across full-stack and DSA repositories."
  },

  blogPosts: [
    {
      title: "Mastering the Sliding Window Pattern",
      date: "Feb 2026",
      summary: "A deep dive into one of the most powerful algorithms for array and string problems.",
      link: "#"
    },
    {
      title: "React Performance: Tips for a 100 Lighthouse Score",
      date: "Jan 2026",
      summary: "How I optimized my portfolio for speed and accessibility.",
      link: "#"
    }
  ],

  testimonials: [
    {
      name: "Professor (LPU)",
      text: "Umashankar demonstrates exceptional problem-solving skills and a strong grasp of software engineering principles.",
      role: "Academic Mentor"
    }
  ],

  certificates: [


    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      date: "Nov 2025",
      link: "https://drive.google.com/file/d/12rlU8P7x0jC6fHtv8CJ31-VxNBa90Bnr/view?usp=sharing"
    },

    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "NPTEL, IIT Kharagpur",
      date: "Aug 2025",
      link: "https://drive.google.com/file/d/1ruI2dLV77DM_tgj6knG3qAvEqyRRFgh4/view?usp=sharing"
    },


    {
      title: "Introduction to Generative AI with GPT",
      issuer: "Linkdin Learning",
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
    }


  ],

  achievements: [
    {
      title: "LeetCode Solved",
      description: "Solved 450+ coding problems on LeetCode & GFG",
      icon: "LeetCode"
    },
    {
      title: "Project Milestone",
      description: "Built 5+ full-stack projects with real-world API integrations",
      icon: "Project"
    },
    {
      title: "100 Days Streak",
      description: "100 Days coding streak on LeetCode (2025)",
      icon: "Streak"
    },
    {
      title: "HackerRank Badges",
      description: "Earned multiple Silver/Gold badges on HackerRank for Problem Solving",
      icon: "Badge"
    }
  ],

  training: [
    {
      title: "Data Structures and Algorithms with Java & C++",
      organization: "LPU Training",
      duration: "Jun 2025 - Jul 2025",
      description: "Intensive training program focusing on advanced DSA concepts using Java and C++."
    }
  ],

  goals: {
    shortTerm: [
      "Secure a software engineering internship for summer 2025",
      "Master advanced system design concepts"
    ],
    longTerm: [
      "Become a Lead Software Architect specializing in AI-integrated systems"
    ]
  },

  quote: "The only way to do great work is to love what you do."
};
