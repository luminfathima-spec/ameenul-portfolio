import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-white border-t border-[#E8E2F1] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#E8E2F1]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7952C7] to-[#56358E] flex items-center justify-center text-white font-bold text-xs shadow-soft">
                AL
              </div>
              <span className="text-lg font-bold text-[#202033] tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-[#68677A] max-w-sm">
              Software Developer &bull; MCA Student &bull; Java &amp; Full-Stack Development
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Footer Navigation">
            {personalInfo.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs sm:text-sm font-medium text-[#68677A] hover:text-[#7952C7] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F7F4FF] hover:bg-[#EDE5FF] text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F7F4FF] hover:bg-[#EDE5FF] text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2.5 rounded-xl bg-[#F7F4FF] hover:bg-[#EDE5FF] text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68677A]">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#56358E] font-medium">
            <span>Designed and developed with passion.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

