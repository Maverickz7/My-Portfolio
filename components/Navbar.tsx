import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
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
      <div className="fixed top-8 left-0 right-0 z-[60] flex justify-center px-6 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/50 min-w-[320px] md:min-w-[500px] transition-colors duration-500">
            
            <a href="#home" className="text-lg font-bold tracking-widest text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            DK<span className="text-purple-600 dark:text-purple-500">.</span>
            </a>

            <div className="flex items-center gap-6">
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                {NAV_ITEMS.map((item) => (
                    <a
                    key={item.label}
                    href={item.href}
                    className="text-xs font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
                    >
                    {item.label}
                    </a>
                ))}
                </div>

                <div className="w-px h-4 bg-gray-300 dark:bg-white/10 hidden md:block"></div>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Mobile Toggle */}
                <button
                className="md:hidden text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
                <a
                key={item.label}
                href={item.href}
                className="text-3xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors tracking-tighter"
                onClick={() => setMobileMenuOpen(false)}
                >
                {item.label}
                </a>
            ))}
            </div>
        </div>
    </>
  );
};

export default Navbar;