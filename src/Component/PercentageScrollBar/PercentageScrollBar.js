import React, { useState, useEffect } from 'react';

const PercentageScrollBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    const maxScroll = documentHeight - windowHeight;
    const percentage = (scrollTop / maxScroll) * 100;
    
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const style = {
    width: `${scrollPercentage}%`,
  };

  return (
    <div className="percentage-scroll-bar">
      <div className="scroll-indicator" style={style}></div>
    </div>
  );
};

export default PercentageScrollBar;
