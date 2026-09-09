import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full flex flex-col glass p-8 rounded-3xl overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Top Section */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className={`p-4 rounded-2xl bg-white shadow-md text-pravaah-navy group-hover:scale-110 transition-transform duration-500`}>
          <Icon size={32} />
        </div>
        <div className="text-4xl font-heading font-bold text-slate-200 group-hover:text-pravaah-blue/20 transition-colors duration-500">
          {service.id}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pravaah-blue group-hover:to-pravaah-purple transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-6 line-clamp-2">
          {service.description}
        </p>
        
        {/* List items (max 4) */}
        <ul className="space-y-2 mb-8">
          {service.items.slice(0, 4).map((item, i) => (
            <li key={i} className="flex items-center text-sm text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-pravaah-cyan mr-2" />
              {item}
            </li>
          ))}
          {service.items.length > 4 && (
            <li className="text-sm text-pravaah-purple font-medium italic mt-2">
              + {service.items.length - 4} more services
            </li>
          )}
        </ul>
      </div>
      
      {/* Footer / CTA */}
      <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
        <a href={service.link} className="inline-flex items-center text-pravaah-blue font-semibold group-hover:text-pravaah-purple transition-colors">
          Explore {service.title.split(' ')[0]}
          <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
