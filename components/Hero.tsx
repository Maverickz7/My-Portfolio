import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_CONTENT } from '../constants';
import TextScramble from './TextScramble';
import Magnetic from './Magnetic';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[50px] md:blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Subtle Tag */}
        <div className="mb-6 md:mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="px-3 py-1 md:px-4 md:py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-[10px] md:text-xs font-medium tracking-[0.2em] text-purple-600 dark:text-purple-300 uppercase transition-colors">
                Product & Strategy
            </span>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 leading-none opacity-0 animate-fade-in-up mix-blend-multiply dark:mix-blend-lighten transition-colors" style={{ animationDelay: '0.4s' }}>
            DEVANSH<br/>
            <span className="text-purple-600 dark:text-purple-500">KUMAR</span>
        </h1>
        
        {/* Role */}
        <div className="text-sm sm:text-base md:text-xl font-light text-gray-600 dark:text-gray-400 tracking-wide mb-10 max-w-xl mx-auto opacity-0 animate-fade-in-up flex items-center justify-center gap-2 px-4 text-center transition-colors" style={{ animationDelay: '0.6s' }}>
            <TextScramble text={HERO_CONTENT.role} speed={50} />
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in-up w-full sm:w-auto px-6" style={{ animationDelay: '0.8s' }}>
            <Magnetic>
                <Link
                to="/work"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold text-white dark:text-black bg-gray-900 dark:bg-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 hover:bg-purple-900 dark:hover:bg-purple-50 shadow-lg"
                >
                <span className="relative z-10 flex items-center gap-2">
                    View Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-gray-900 dark:from-purple-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
            </Magnetic>
            
            <Magnetic>
                <a
                href="https://drive.google.com/file/d/1qqo1goPhZmBdu0_fLSBlc5eKFjXQ3-9z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 rounded-full overflow-hidden transition-all hover:border-gray-900 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
                >
                <span className="relative z-10 flex items-center gap-2">
                    Download Resume
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                </a>
            </Magnetic>
        </div>
      </div>
      
      {/* Abstract Elements */}
      <div className="absolute bottom-20 left-10 w-16 h-16 md:w-24 md:h-24 border border-black/5 dark:border-white/5 rounded-full animate-float opacity-30 md:opacity-50 pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-24 h-24 md:w-32 md:h-32 border border-purple-500/10 rounded-full animate-float animation-delay-2000 opacity-30 md:opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;