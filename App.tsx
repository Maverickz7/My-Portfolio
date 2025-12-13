import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import ProductDashboard from './components/ProductDashboard';
import Preloader from './components/Preloader';
import Marquee from './components/Marquee';
import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <Router>
          <ScrollToTop />
          
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
                <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
             </video>
             
             {/* Overlay for Text Readability - Adapts to Light/Dark Mode */}
             <div className="absolute inset-0 bg-white/90 dark:bg-[#020204]/80 backdrop-blur-[2px] transition-colors duration-500"></div>
             
             {/* Gradient Vignettes */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-[#020204] dark:via-transparent dark:to-[#020204] transition-colors duration-500"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-[#020204] dark:via-transparent dark:to-[#020204] transition-colors duration-500"></div>
          </div>

          <div className="noise-overlay mix-blend-overlay opacity-20"></div>

          {/* Main Layout */}
          <div className="min-h-screen font-sans text-gray-900 dark:text-primary selection:bg-purple-500/30 animate-fade-in-up relative z-10 transition-colors duration-500 flex flex-col">
            <Navbar />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Marquee />
                  </>
                } />
                <Route path="/work" element={<CaseStudies />} />
                <Route path="/expertise" element={
                    <>
                        <Skills />
                        <ProductDashboard />
                    </>
                } />
                <Route path="/experience" element={<Experience />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            {/* Global Footer (Visible on pages that are short, ensuring footer is at bottom via flex-grow on main) */}
          </div>
        </Router>
      )}
    </>
  );
}

export default App;