import React from 'react';
import './Footer.css';
import githubIconDark from '../assets/github-dark.png';
import githubIconLight from '../assets/github-light.png';
import LinkedinBlue from "../assets/linkedin-blue.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aditya Varshney</p>

      <div className="footer-links">
        <a href="https://github.com/adityavar808" target="_blank" rel="noreferrer">
          <img src={githubIconLight} alt="GitHub" className="footer-icon" />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <img src={LinkedinBlue} alt="Linkedin" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
