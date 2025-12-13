import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 scroll-mt-20 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        <p className="text-purple-600 dark:text-purple-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 animate-pulse-slow">Next Steps</p>
        
        <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter mb-6 transition-colors">
                LET'S <span className="text-purple-600 dark:text-purple-500">TALK</span>.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto"></div>
        </div>
        
        <div className="flex justify-center gap-6 md:gap-12 items-center flex-wrap">
             {/* Email */}
             <a 
                href={`mailto:${SOCIAL_LINKS.email}`} 
                aria-label="Email Me"
                className="group relative p-6 md:p-8 rounded-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
             >
                <div className="absolute inset-0 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors relative z-10" />
             </a>

             {/* Phone */}
             <a 
                href={`tel:${SOCIAL_LINKS.phone.replace(/\s+/g, '')}`} 
                aria-label="Call Me"
                className="group relative p-6 md:p-8 rounded-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
             >
                <div className="absolute inset-0 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors relative z-10" />
             </a>

             {/* LinkedIn */}
             <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group relative p-6 md:p-8 rounded-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
             >
                <div className="absolute inset-0 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors relative z-10" />
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