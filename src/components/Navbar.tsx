import React, { useState, useEffect } from 'react';
import { AscentLogo } from './AscentLogo';
import { NavSection } from '../types';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contacts', label: 'Contact Us' },
  ];

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/70 dark:bg-[#000000]/65 backdrop-blur-2xl border-b border-white/60 dark:border-white/10 py-3 shadow-[0_8px_32px_0_rgba(84,84,84,0.08),inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)]'
          : 'bg-[#FAF8F5]/40 dark:bg-[#000000]/30 backdrop-blur-md border-b border-white/30 dark:border-white/5 py-4'
      }`}
      id="ascent-main-header"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        {/* Left Corner: ASCENT Logo */}
        <div className="flex-1 flex items-center justify-start">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90 pl-1 sm:pl-0"
            id="navbar-brand-button"
          >
            <AscentLogo size={32} showWordmark={true} variant="monochrome" />
          </a>
        </div>

        {/* Center: Navigation Links (Home, About, Contact Us) */}
        <div className="hidden md:flex items-center justify-center">
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/50 dark:bg-white/[0.07] border border-white/80 dark:border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-body text-xs px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#545454] text-white dark:bg-white dark:text-black font-semibold shadow-[0_2px_12px_rgba(84,84,84,0.3)] dark:shadow-[0_2px_12px_rgba(255,255,255,0.25)]'
                      : 'text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Corner: Theme Switcher on Desktop, Hamburger on Mobile */}
        <div className="flex-1 flex items-center justify-end gap-3">
          {/* Theme Mode Switcher Button with Glassmorphism */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="hidden md:flex p-2 rounded-xl border border-white/80 dark:border-white/15 bg-white/60 dark:bg-white/[0.07] backdrop-blur-xl text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white hover:border-[#D4A373] dark:hover:border-white/30 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]"
            id="toggle-theme-mode"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-[#D4A373] transition-transform hover:rotate-45" />
            ) : (
              <Moon size={15} className="text-[#545454] transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Hamburger Toggle & Theme Toggle with Glassmorphism */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-white/80 dark:border-white/15 bg-white/60 dark:bg-white/[0.07] backdrop-blur-xl text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]"
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun size={18} className="text-[#D4A373]" /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-white/80 dark:border-white/15 bg-white/60 dark:bg-white/[0.07] backdrop-blur-xl text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Frosted Glassmorphism */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/60 dark:border-white/15 bg-[#FAF8F5]/85 dark:bg-black/80 backdrop-blur-2xl px-4 py-5 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <div className="flex flex-col gap-1.5 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-body text-sm py-2.5 px-3 rounded-lg text-left transition-all ${
                    isActive
                      ? 'bg-[#545454] text-white dark:bg-white dark:text-black font-semibold'
                      : 'text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white hover:bg-[#D4A373]/15 dark:hover:bg-[#161616]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#545454]/20 dark:border-[#545454]/30 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs font-body text-[#545454] dark:text-[#A6A6A6] px-1">
              <span>Theme Mode:</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#545454]/25 dark:border-[#545454]/50 bg-white dark:bg-[#141414] text-xs font-medium"
              >
                {theme === 'dark' ? <Sun size={13} className="text-[#D4A373]" /> : <Moon size={13} />}
                <span className="capitalize">{theme}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
