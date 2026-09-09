import React from 'react';
import { motion } from 'framer-motion';

const revealVariants = {
  lift: {
    hidden: { opacity: 0, y: 42 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  drift: {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  },
  slide: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  },
  blur: {
    hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: 'easeOut' } },
  },
  rotate: {
    hidden: { opacity: 0, y: 34, rotate: -1.5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  },
};

const ScrollReveal = ({ children, variant = 'lift', delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12, margin: '0px 0px -60px' }}
    variants={revealVariants[variant] || revealVariants.lift}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;
