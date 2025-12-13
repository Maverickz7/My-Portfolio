import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background';

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
          
          {/* New Geometric/Gradient Background */}
          <Background />

          {/* Cinematic Noise - Reduced Opacity for subtlety */}
          <div className="noise-overlay mix-blend-overlay opacity-10 pointer-events-none"></div>

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
                <Route path="/expertise" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            {/* Global Footer is implicit in Contact or can be added here if needed */}
          </div>
        </Router>
      )}
    </>
  );
}

export default App;