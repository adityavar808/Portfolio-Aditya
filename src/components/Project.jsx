import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'AI Chatbot', description: 'Built with React + Node.js and OpenAI API.' },
    { title: 'Smart AgroMarket', description: 'Hackathon project helping farmers access real-time market data.' },
    { title: 'Flask File Sharing App', description: 'Secure file sharing with preview, expiry, and stats.' },
  ];

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="project-list">
        {projects.map((proj, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
