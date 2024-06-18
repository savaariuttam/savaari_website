import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 bg-[#ea2330] hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
          title="Scroll to Top"
        >
          <FiChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
