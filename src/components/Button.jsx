import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  withArrow = false,
  onClick,
  type = 'button'
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 z-10 px-8 py-3";
  
  const variants = {
    primary: "bg-gradient-to-r from-pravaah-blue via-pravaah-purple to-pravaah-cyan text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_25px_rgba(139,92,246,0.6)] border-none",
    secondary: "bg-white text-pravaah-navy border border-slate-200 hover:border-pravaah-blue hover:shadow-lg",
    outline: "bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10",
    ghost: "bg-transparent text-pravaah-blue hover:text-pravaah-purple hover:bg-pravaah-blue/10 px-4 py-2"
  };

  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      {/* Hover Gradient Overlay for Primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-pravaah-purple via-pravaah-cyan to-pravaah-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      )}
    </motion.button>
  );
};

export default Button;
