import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import Marquee from './components/Marquee';
import Cursor from './components/Cursor';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          {/* Global Fixed Elements */}
          <Cursor />
          
          {/* Cinematic Video Background */}
          <div className="fixed inset-0 z-[-1] overflow-hidden bg-white dark:bg-black transition-colors duration-500">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-10 dark:opacity-60 transition-opacity duration-500"
             >
                {/* 
                   PLACEHOLDER: This video provides a dark, cinematic cyberpunk feel.
                   REPLACE the src below with your specific 'anime-samurai-warfare.mp4' file.
                */}
                <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
             </video>
             
             {/* Overlay for Text Readability - Adapts to Light/Dark Mode */}
             <div className="absolute inset-0 bg-white/90 dark:bg-[#020204]/80 backdrop-blur-[2px] transition-colors duration-500"></div>
             
             {/* Gradient Vignetttes */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-[#020204] dark:via-transparent dark:to-[#020204] transition-colors duration-500"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-[#020204] dark:via-transparent dark:to-[#020204] transition-colors duration-500"></div>
          </div>

          <div className="noise-overlay mix-blend-overlay opacity-20"></div>

          {/* Main Scrollable Content */}
          <div className="min-h-screen font-sans text-gray-900 dark:text-primary selection:bg-purple-500/30 animate-fade-in-up relative z-10 transition-colors duration-500">
            <Navbar />
            <main>
              <Hero />
              <Marquee />
              <About />
              <Skills />
              <Experience />
              <CaseStudies />
              <Contact />
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default App;