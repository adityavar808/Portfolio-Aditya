// File: src/App.jsx

import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './styles/app.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Show loader for 2 seconds
  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <div className="app">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
