import React, { useEffect, useState } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ percentage, name, icon }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = percentage / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= percentage) {
        start = percentage;
        clearInterval(interval);
      }
      setProgress(Math.floor(start));
    }, 10);
  }, [percentage]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-wrapper">
      <svg width="120" height="120" className="circular-progress">
        <circle
          className="progress-bg"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="progress-bar"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="circular-center-content">
        <img src={icon} alt={name} className="circle-icon" />
        <div className="circle-label">{name}</div>
        <div className="circle-percent">{progress}%</div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
