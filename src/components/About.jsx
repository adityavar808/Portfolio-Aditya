import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }} 
      >
        <h2>About Me</h2>
        <p>I'm a creative web developer exploring the world of 3D web and parallax design.</p>
      </motion.div>
    </section>
  );
};

export default About;
