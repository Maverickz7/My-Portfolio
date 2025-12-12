import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 scroll-mt-20 bg-gray-50 dark:bg-[#020204] transition-colors duration-500">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-20 tracking-tighter text-right transition-colors">
            Timeline.
        </h2>

        <div className="relative border-l border-gray-300 dark:border-white/10 ml-4 md:ml-0 space-y-16">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16 group">
              
              {/* Marker - Adjusted top position to align with padded content */}
              <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-gray-50 dark:bg-[#020204] border border-gray-400 dark:border-gray-500 group-hover:border-purple-600 dark:group-hover:border-purple-500 group-hover:scale-150 transition-all duration-300 shadow-md dark:shadow-[0_0_10px_rgba(0,0,0,1)] z-10" />
              <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-purple-500 opacity-0 group-hover:animate-ping z-0" />

              {/* Content Card with Pop Up Effect */}
              <div className="relative p-6 -ml-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:bg-white dark:hover:bg-white/5 border border-transparent hover:border-black/5 dark:hover:border-white/10 cursor-default">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                     <h4 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{exp.company}</h4>
                     <span className="text-sm font-mono text-gray-500 dark:text-gray-500">{exp.date}</span>
                  </div>
                  
                  <div className="mb-6">
                     <p className="text-lg text-gray-700 dark:text-white/80 font-medium">{exp.role}</p>
                     <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>

                  <ul className="space-y-3 max-w-2xl">
                    {exp.description.map((point, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed font-light pl-4 border-l border-gray-200 dark:border-white/5">
                            {point}
                        </li>
                    ))}
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;