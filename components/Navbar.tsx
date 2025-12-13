import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Work', path: '/work' },
  { label: 'Expertise', path: '/expertise' },
  { label: 'Experience', path: '/experience' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-[60] flex justify-center px-4 md:px-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-8'} pointer-events-none`}>
        <nav className={`pointer-events-auto flex items-center justify-between px-6 py-3.5 rounded-full backdrop-blur-xl border shadow-lg transition-all duration-500 w-full md:w-auto max-w-5xl
            ${scrolled 
                ? 'bg-white/90 dark:bg-[#0a0a0a]/90 border-black/5 dark:border-white/10 shadow-black/5 dark:shadow-black/50' 
                : 'bg-white/70 dark:bg-[#0a0a0a]/70 border-white/20 dark:border-white/5 shadow-none'
            }
        `}>
            
            {/* Logo - Flex Shrink 0 prevents crumpling */}
            <Link to="/" className="flex-shrink-0 text-xl font-black tracking-tighter text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors mr-8 whitespace-nowrap">
            DK<span className="text-purple-600 dark:text-purple-500 text-2xl">.</span>
            </Link>

            <div className="flex items-center gap-4">
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center p-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) => `
                        relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 
                        ${isActive 
                            ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm' 
                            : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-200'
                        }
                    `}
                    >
                    {item.label}
                    </NavLink>
                ))}
                </div>

                <div className="w-px h-6 bg-gray-200 dark:bg-white/10 hidden md:block mx-2"></div>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-black/5 dark:hover:bg-white/10 transition-all flex-shrink-0"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Mobile Toggle */}
                <button
                className="md:hidden p-2 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex-shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
      </div>

        {/* Mobile Menu Overlay */}
        <div 
            className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-[55] md:hidden transition-all duration-500 flex flex-col justify-center items-center ${
                mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
            <div className="flex flex-col space-y-8 text-center">
            {NAV_ITEMS.map((item) => (
                <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `text-4xl font-black tracking-tighter transition-colors ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400'}`}
                onClick={() => setMobileMenuOpen(false)}
                >
                {item.label}
                </NavLink>
            ))}
            </div>
        </div>
    </>
  );
};

export default Navbar;