import React from 'react';
import * as Icons from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 scroll-mt-20 relative">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Intro Section - Switched order for better alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Text Section (Left on Desktop, Top on Mobile) */}
          <div className="order-1 md:order-1 self-start pt-2">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tighter transition-colors leading-[0.9]">
              Defining the <br/><span className="text-purple-600 dark:text-purple-500">Why</span> and <span className="text-purple-600 dark:text-purple-500">How</span>.
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light transition-colors">
              <p>
                I operate at the intersection of <span className="text-gray-900 dark:text-white font-medium">business strategy</span> and <span className="text-gray-900 dark:text-white font-medium">user experience</span>. My journey began with a curiosity about how things are made, which evolved into a passion for understanding why they are made and for whom.
              </p>
              <p>
                With a robust foundation from IIFT and hands-on experience at Tata Steel and Reckitt, I've learned that great products aren't just about features—they are about solving real problems with economic viability.
              </p>
            </div>
          </div>

          {/* Cards Section (Right on Desktop, Bottom on Mobile) */}
          <div className="order-2 md:order-2 space-y-6">
             {/* Education Card */}
             <div className="glass-panel p-1 rounded-2xl relative group bg-white/50 dark:bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 md:p-8 relative z-10 h-full border border-black/5 dark:border-white/5 transition-colors duration-500">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2">
                        <Icons.GraduationCap size={16} /> Education
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">MBA (IB), IIFT</h4>
                            <p className="text-gray-500 font-mono text-xs">2020 - 2022</p>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-white/5"></div>
                        <div>
                             <h4 className="text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide">Focus Areas</h4>
                             <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Product Strategy, Category Management, UX Research, Data Analysis</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;