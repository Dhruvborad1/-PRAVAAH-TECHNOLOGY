import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center', 
  theme = 'light' 
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left';
  const subtitleColor = theme === 'dark' ? 'text-pravaah-cyan' : 'text-pravaah-blue';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-slate-900';

  return (
    <div className={`mb-16 md:mb-20 ${alignClass} max-w-3xl`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className={`font-semibold tracking-wider text-sm uppercase mb-3 ${subtitleColor}`}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-5xl lg:text-6xl font-bold ${titleColor} leading-tight`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
