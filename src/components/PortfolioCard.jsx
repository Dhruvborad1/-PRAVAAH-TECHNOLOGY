import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer"
    >
      {/* Background Image (Using placeholder coloring if image fails or before load) */}
      <div className="absolute inset-0 bg-slate-200">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            // Fallback for placeholder images
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-slate-200', 'to-slate-300');
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pravaah-navy/90 via-pravaah-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Hover Reveal Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="mb-auto self-end opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pravaah-navy shadow-lg hover:bg-pravaah-blue hover:text-white transition-colors">
            <ArrowUpRight size={24} />
          </div>
        </div>
        
        <div>
          <span className="inline-block px-3 py-1 bg-pravaah-cyan/20 backdrop-blur-md text-pravaah-cyan text-xs font-semibold rounded-full mb-3 border border-pravaah-cyan/30">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          
          <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-3 transition-all duration-300">
            <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs text-slate-400 bg-white/10 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
