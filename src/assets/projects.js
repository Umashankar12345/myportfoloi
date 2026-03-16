export const projectsData = [
  {
    id: 1,
    title: "AI-Based Farmer Query Support & Advisory System",
    description: "An AI-driven platform that answers farmer queries using NLP, ML models and real-time agricultural data. Integrated weather APIs to deliver real-time alerts and personalized crop protection recommendations.",
    detailedDescription: "Built modules for crop recommendation, fertilizer advisory, soil analysis using predictive algorithms. Delivered an AI-driven agricultural platform that provides real-time, personalized crop and soil recommendations by combining NLP, machine learning, and live weather data.",
    technologies: ["ReactJS", "Node.js", "JavaScript", "CSS", "Google Maps API", "NLP", "Machine Learning"],
    category: "full-stack",
    github: "https://github.com/Umashankar12345/Farmer-Support",
    demo: "https://farmesupport.vercel.app/dashboard",
    image: "/assets/projects/farmer-query.png",
    duration: "Nov 2025 - Ongoing",
    features: [
      "Real-time weather alerts via external APIs",
      "Actionable crop advice using predictive ML models",
      "Soil analysis and fertilizer recommendation modules",
      "NLP-based interactive query answering system"
    ],
    technicalChallenge: "The primary challenge was integrating unpredictable real-time weather data with static predictive models to generate accurate, time-sensitive alerts for farmers."

  },
  {
    id: 2,
    title: "Virtual Try-On Tool For Clothing & Accessories",
    description: "A Virtual Try-On tool to allow users to preview clothing and accessories in real time using a live webcam, enhancing the online shopping experience.",
    detailedDescription: "Integrated webcam support with face and body tracking, and implemented a drag-and-drop system for adjusting size, rotation, and position of accessories. Delivered an interactive and accurate try-on experience that improved usability, realism, and user confidence in product visualization.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "Django", "ML APIs"],
    category: "ai-ml",
    github: "https://github.com/Umashankar12345/virtual-tryon",
    demo: "https://virtual-try-on-tau-steel.vercel.app/index.html",
    image: "/assets/projects/virtual-try-on.png",
    duration: "Jan 2024 - Mar 2025",
    features: [
      "Low-latency real-time webcam rendering",
      "Accurate face and body tracking using ML APIs",
      "Dynamic drag-and-drop UI for accessory positioning",
      "Real-time scale and rotation adjustments"
    ],
    technicalChallenge: "Achieving high-accuracy body tracking with minimal latency across different browsers while maintaining a responsive 30+ FPS webcam feed."

  },
  {
    id: 3,
    title: "Smart Road Trip Planner (SRTP)",
    description: "A comprehensive trip planning application with route optimization and personalized recommendations.",
    detailedDescription: "Implemented secure user authentication(JWT) and profile management for personalized trip saving. Added trip recommendation including restaurants, hotels and nearby attractions using Places API.",
    technologies: ["ReactJS", "Node.js", "JavaScript", "CSS", "Google Maps API", "Places API"],
    category: "full-stack",
    github: "https://github.com/Umashankar12345/Smart-Road-Trip-plain",
    demo: "https://smart-road-trip-plain-frontend-pjo28n8ai-umashankar-s-projects.vercel.app/",
    image: "/assets/projects/road-trip.png",
    duration: "Aug 2024 - Jan 2025",
    features: [
      "Secure JWT-based user authentication & sessions",
      "Highly optimized routes using Google Maps Directions API",
      "Geo-location based place recommendations (Hotels/Food)",
      "Persistent cloud storage for user-planned itineraries"
    ],
    technicalChallenge: "Synchronizing multiple API calls (Maps, Places, and Directions) to provide a unified, seamless user interface without overwhelming the frontend state."

  },
  {
    id: 4,
    title: "Core JavaScript Fundamentals Collection",
    description: "A collection of advanced classroom practice projects demonstrating core JavaScript and DOM manipulation concepts.",
    detailedDescription: "Built multiple JavaScript projects including banking system, calculators, BMI calculator, color box tool, and election system to practice and master JavaScript fundamentals.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    github: "https://github.com/Umashankar12345/Javascript/tree/main/ProjectPortfolio",
    demo: "https://javascript-portfolio-ten.vercel.app/",
    image: "/assets/projects/js-collection.png",
    duration: "Sep 2025 - Jan 2026",
    features: [
      "End-to-end banking logic with DOM state management",
      "Interactive multi-functional calculators",
      "Dynamic CSS/DOM manipulation tools",
      "Simulation of an automated election tracking system"
    ],
    technicalChallenge: "Managing complex document states and events in vanilla JavaScript without the use of libraries like React, focusing on efficient DOM updates."

  }
];