import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
