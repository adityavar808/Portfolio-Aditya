// Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Hero.css';

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    setPos({
      x: (e.clientX - innerWidth / 2) / 20,
      y: (e.clientY - innerHeight / 2) / 20,
    });
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <div className="overlay" />

      <Particles
        className="particles-bg"
        init={particlesInit}
        options={{
        fullScreen: false,
        background: { color: 'transparent' },
        particles: {
        number: { value: 50 },
        size: { value: 2 },
        color: { value: "#00ffe0" },
        move: { enable: true, speed: 1, direction: "top", outMode: "out" },
        opacity: { value: 0.5 },
    },
    }}
    />


      <motion.h1
        className="hero-title"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        Hi, I'm <span className="highlight">Aditya</span>
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Aspiring Machine Learning Engineer | Full Stack Developer | Dreamer
      </motion.p>

      <motion.a
        href="/assets/Aditya_Resume.pdf"
        download="Aditya_Resume.pdf"
        className="resume-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
