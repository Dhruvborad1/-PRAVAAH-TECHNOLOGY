import React from 'react';

const TechnologiesMarquee = () => {
  const primaryTechs = [
    'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript',
    'Node.js', 'Express', 'FastAPI', 'Django', 'Spring Boot',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase',
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
    'GraphQL', 'REST APIs', 'Microservices', 'CI/CD', 'Git',
    'Python', 'Java', 'Go', 'Rust', 'JavaScript',
    'Flutter', 'React Native', 'Swift', 'Kotlin', 'WebSocket',
    'Tailwind CSS', 'Bootstrap', 'Material UI', 'Framer Motion', 'D3.js',
    'Jest', 'Pytest', 'Selenium', 'Cypress', 'Webpack',
    'TensorFlow', 'PyTorch', 'OpenAI API', 'Machine Learning', 'Data Science',
    'Figma', 'Adobe XD', 'Prototyping', 'UI/UX Design', 'Accessibility',
  ];

  const secondaryTechs = [
    'AI Solutions', 'Automation', 'Cloud Native', 'Serverless', 'Blockchain',
    'Security', 'OAuth 2.0', 'JWT', 'Encryption', 'Penetration Testing',
    'Performance', 'SEO', 'Analytics', 'Monitoring', 'Logging',
    'Mobile First', 'Responsive Design', 'Progressive Web Apps', 'Native Apps', 'Cross-Platform',
    'Agile', 'Scrum', 'DevOps', 'Infrastructure as Code', 'IaC',
    'Testing', 'QA', 'Automation Testing', 'Load Testing', 'Security Testing',
    'API Design', 'SDK Development', 'Plugin Architecture', 'Extensibility', 'Scalability',
    'Real-time Data', 'Streaming', 'Message Queues', 'Event-Driven', 'Pub-Sub',
    'Database Design', 'Query Optimization', 'Sharding', 'Caching', 'Replication',
    'DevSecOps', 'Compliance', 'GDPR', 'HIPAA', 'ISO 27001',
  ];

  return (
    <div className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-blue-100/40">
      <h3 className="text-center text-sm font-bold uppercase tracking-[0.12em] text-slate-500 mb-8 md:mb-12">
        Technologies We Use
      </h3>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        
        .marquee-container:hover {
          animation-play-state: paused;
        }
        
        .marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>

      {/* Primary Marquee - Blue Gradient */}
      <div className="relative overflow-hidden">
        {/* Fade gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-container">
          {primaryTechs.map((tech, idx) => (
            <div
              key={idx}
              className="mx-4 md:mx-6 px-4 md:px-6 py-2 md:py-3 whitespace-nowrap rounded-lg border border-blue-200/60 bg-gradient-to-br from-blue-50 to-cyan-50 text-sm md:text-base font-semibold text-slate-700 hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {primaryTechs.map((tech, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="mx-4 md:mx-6 px-4 md:px-6 py-2 md:py-3 whitespace-nowrap rounded-lg border border-blue-200/60 bg-gradient-to-br from-blue-50 to-cyan-50 text-sm md:text-base font-semibold text-slate-700 hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Marquee - Purple Gradient (Reverse Direction) */}
      <div className="relative overflow-hidden mt-6 md:mt-8">
        {/* Fade gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-container marquee-reverse">
          {secondaryTechs.map((tech, idx) => (
            <div
              key={idx}
              className="mx-4 md:mx-6 px-4 md:px-6 py-2 md:py-3 whitespace-nowrap rounded-lg border border-purple-200/60 bg-gradient-to-br from-purple-50 to-pink-50 text-sm md:text-base font-semibold text-slate-700 hover:border-purple-400 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {secondaryTechs.map((tech, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="mx-4 md:mx-6 px-4 md:px-6 py-2 md:py-3 whitespace-nowrap rounded-lg border border-purple-200/60 bg-gradient-to-br from-purple-50 to-pink-50 text-sm md:text-base font-semibold text-slate-700 hover:border-purple-400 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesMarquee;
