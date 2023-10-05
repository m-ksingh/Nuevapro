import React, { useState, useEffect } from 'react';
import "../Main.css"

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
    <div
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title='Go to top'
      >
      <span class="back-top"><i class="fa fa-angle-up"></i></span>
    </div>


  );
};

export default GoToTopButton;
