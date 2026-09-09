import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for exact cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth tracking
  // Removed main cursor spring for instant 1:1 hardware-like movement

  // Delayed spring physics for the "Flow" trail effect
  const trailSpringConfig = { damping: 45, stiffness: 150, mass: 1 };
  const trailX = useSpring(cursorX, trailSpringConfig);
  const trailY = useSpring(cursorY, trailSpringConfig);

  useEffect(() => {
    // Detect touch devices to gracefully disable custom cursor
    if (window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (!e.target) return;
      const target = e.target;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') || 
        target.closest('textarea') || 
        target.closest('select') ||
        target.closest('.clickable') || 
        target.closest('.cursor-hover');
      
      setIsHovering(!!isInteractive);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    let clickTimeout;
    const handleMouseDown = () => {
      setIsClicking(true);
      // Ensure the click animation stays long enough for the ripple (400ms)
      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(() => setIsClicking(false), 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      clearTimeout(clickTimeout);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  // Sizes for different states
  const cursorSize = isClicking ? 75 : (isHovering ? 65 : 40);
  const trailSize = isHovering ? 30 : 20;

  return (
    <>
      {/* Delayed Trail / Flow Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: trailSize,
          height: trailSize,
          opacity: isVisible && !isHovering && !isClicking ? 0.5 : 0,
          willChange: "transform"
        }}
        animate={{
          width: trailSize,
          height: trailSize,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-cyan-400/40 blur-[4px] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
      </motion.div>

      {/* Main Cursor System */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorSize,
          height: cursorSize,
          opacity: isVisible ? 1 : 0,
          willChange: "transform"
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        
        {/* Click Ripple Animation */}
        <AnimatePresence>
          {isClicking && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0.9, borderWidth: "3px" }}
              animate={{ scale: 1.8, opacity: 0, borderWidth: "0px" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute rounded-full border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </AnimatePresence>

        {/* Hover Orbit Ring */}
        <AnimatePresence>
          {isHovering && !isClicking && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 315 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 }
              }}
              className="absolute inset-[-6px] rounded-full border-[1.5px] border-transparent"
              style={{
                 borderTopColor: 'rgba(6, 182, 212, 0.7)',
                 borderLeftColor: 'rgba(168, 85, 247, 0.7)',
                 boxShadow: 'inset 0 0 10px rgba(6, 182, 212, 0.2)'
              }}
            >
              {/* Glowing nodes on the orbit */}
              <div className="absolute top-1 left-[15%] w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9]" />
              <div className="absolute bottom-1 right-[15%] w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_#c084fc]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center Point */}
        <motion.div
          animate={{ 
            scale: isClicking ? 1.15 : (isHovering ? 1.05 : 1)
          }}
          transition={{ duration: 0.2 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Hardware-accelerated glow behind the point */}
          <motion.div 
            className="absolute inset-2 rounded-full z-0"
            animate={{
              boxShadow: isHovering
                ? "0 0 15px 4px rgba(168, 85, 247, 0.4), 0 4px 6px rgba(0, 0, 0, 0.15)"
                : "0 0 8px 2px rgba(6, 182, 212, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15)"
            }}
          />

          {/* Point Dot */}
          <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full relative z-10 shadow-[0_0_8px_#22d3ee]" />
        </motion.div>

      </motion.div>
    </>
  );
};

export default CustomCursor;