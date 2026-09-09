import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate progress percentage (0 to 100)
      let progress = 0;
      if (docHeight > 0) {
        progress = (scrollY / docHeight) * 100;
      }
      
      // Cap between 0 and 100
      progress = Math.min(Math.max(progress, 0), 100);
      setScrollProgress(progress);
      
      // Show button after scrolling down 300px
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <svg
          width="60"
          height="60"
          className="transform -rotate-90 transition-transform group-hover:scale-105"
        >
          {/* Background circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-300 dark:text-gray-700"
          />
          {/* Progress circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeLinecap="round"
            style={{ 
              strokeDashoffset,
              transition: 'stroke-dashoffset 0.2s ease-out'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" /> {/* text-blue-500 */}
              <stop offset="100%" stopColor="#8b5cf6" /> {/* text-purple-500 */}
            </linearGradient>
          </defs>
        </svg>
        
        {/* Inner button styling */}
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full m-[10px] shadow-sm group-hover:shadow-md transition-all group-hover:scale-105 group-hover:bg-blue-50 dark:group-hover:bg-gray-800">
          <ArrowUp className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:-translate-y-1 transition-transform" />
        </div>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
