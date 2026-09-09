import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass p-8 md:p-10 rounded-3xl h-full flex flex-col relative overflow-hidden">
      {/* Decorative Quote Mark */}
      <div className="absolute top-4 right-6 text-8xl font-serif text-slate-100 opacity-50 select-none">
        "
      </div>
      
      <div className="flex items-center gap-1 mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} 
          />
        ))}
      </div>
      
      <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 flex-grow relative z-10 italic">
        "{testimonial.message}"
      </p>
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-pravaah-blue', 'to-pravaah-cyan');
            }}
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
