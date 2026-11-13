import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky navbar shadow and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = personalInfo.navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E2F1] shadow-soft-sm py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Ameenul Lumin Fathima M. - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7952C7] to-[#56358E] flex items-center justify-center text-white font-bold text-sm shadow-soft transition-transform duration-300 group-hover:scale-105">
              AL
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#202033] tracking-tight group-hover:text-[#7952C7] transition-colors">
                Ameenul Lumin
              </span>
              <span className="text-xs text-[#68677A] font-medium hidden sm:block">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {personalInfo.navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200 ${
                    isActive
                      ? 'text-[#7952C7] font-semibold'
                      : 'text-[#68677A] hover:text-[#202033]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#EDE5FF]/80 border border-[#D7C7F4]/60 rounded-xl -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Resume CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Ameenul_Lumin_Fathima_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#7952C7] bg-[#EDE5FF] hover:bg-[#7952C7] hover:text-white rounded-xl border border-[#D7C7F4] transition-colors duration-200 shadow-soft-sm hover:shadow-glow-sm"
              aria-label="Download Ameenul Lumin Fathima M. Resume PDF"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Ameenul_Lumin_Fathima_Resume.pdf"
              className="p-2 text-xs font-semibold text-[#7952C7] bg-[#EDE5FF] rounded-lg border border-[#D7C7F4]"
              aria-label="Resume"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-[#202033] hover:text-[#7952C7] hover:bg-[#F7F4FF] focus:outline-none transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] bg-[#202033]/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="bg-white border-b border-[#E8E2F1] shadow-soft-lg px-6 py-6 max-h-[calc(100vh-70px)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {personalInfo.navLinks.map((link) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'text-[#7952C7] bg-[#EDE5FF] font-semibold'
                          : 'text-[#202033] hover:bg-[#F7F4FF]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#7952C7]" />}
                    </a>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-[#E8E2F1]">
                  <a
                    href={personalInfo.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Ameenul_Lumin_Fathima_Resume.pdf"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white bg-[#7952C7] hover:bg-[#56358E] rounded-xl shadow-soft transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Download Resume (PDF)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

