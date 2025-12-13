import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 scroll-mt-20 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        <p className="text-purple-600 dark:text-purple-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 animate-pulse-slow">Next Steps</p>
        
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold text-gray-900 dark:text-white mb-12 tracking-tighter transition-colors">
          LET'S TALK
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 items-center">
             <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-base sm:text-lg md:text-2xl text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors border-b border-gray-300 dark:border-white/20 hover:border-purple-600 dark:hover:border-purple-400 pb-2 break-all">
                {SOCIAL_LINKS.email}
             </a>
             <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base sm:text-lg md:text-2xl text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors border-b border-gray-300 dark:border-white/20 hover:border-purple-600 dark:hover:border-purple-400 pb-2"
             >
                LinkedIn <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
             </a>
        </div>

        <div className="mt-20 md:mt-32 flex flex-col md:flex-row justify-center items-center border-t border-gray-200 dark:border-white/10 pt-8 text-gray-500 dark:text-gray-600 text-[10px] md:text-xs uppercase tracking-widest gap-4 transition-colors">
            <div>
                &copy; {new Date().getFullYear()} DEVANSH KUMAR
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;