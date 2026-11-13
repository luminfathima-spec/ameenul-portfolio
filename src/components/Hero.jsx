import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  Code2,
  CheckCircle2,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import FloatingTechIcons from './FloatingTechIcons';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(personalInfo.profileImage);
  const [imageError, setImageError] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = personalInfo.rotatingTitles || [
    "Software Developer",
    "Java Developer",
    "Full-Stack Development Enthusiast",
    "Cybersecurity & AI Enthusiast"
  ];

  // Rotating title interval with smooth fade/slide transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [titles.length]);

  const handleImageError = () => {
    if (imgSrc === personalInfo.profileImage && personalInfo.profileImageFallback) {
      setImgSrc(personalInfo.profileImageFallback);
    } else {
      setImageError(true);
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
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

  // Name split into words for staggered blur-to-clear entrance
  const nameWords = personalInfo.name.split(' ');

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7F4FF]/70 to-[#FFFFFF]"
    >
      {/* Layered Lavender & Electric-Purple Background Ambient Blobs */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 -z-10 w-[500px] h-[500px] bg-gradient-to-br from-[#EDE5FF]/80 via-[#F3EDFF]/60 to-[#9B6DFF]/15 rounded-full blur-3xl pointer-events-none animate-float-slow" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-6 left-[-6%] -z-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#EDE5FF]/70 via-[#F7F4FF] to-[#7952C7]/15 rounded-full blur-3xl pointer-events-none animate-float-medium" 
      />

      {/* Floating Tech Icons Layer */}
      <FloatingTechIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions, Animated Typography, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE5FF]/90 border border-[#D7C7F4] text-xs sm:text-sm font-semibold text-[#56358E] mb-6 shadow-soft-sm backdrop-blur-sm hover:border-[#9B6DFF]/50 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B6DFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7952C7]"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Greeting */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg font-semibold text-[#7952C7] tracking-wider uppercase mb-2 flex items-center gap-2"
            >
              <span>{personalInfo.greeting}</span>
              <Sparkles className="w-4 h-4 text-[#9B6DFF] animate-pulse" />
            </motion.p>

            {/* Animated Name Reveal: Staggered Blur-to-Clear Words */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#202033] tracking-tight leading-[1.15] mb-4 flex flex-wrap gap-x-3 gap-y-1">
              {nameWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + idx * 0.12,
                    ease: [0.2, 0.65, 0.3, 0.9] 
                  }}
                  className={idx === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7952C7] via-[#9B6DFF] to-[#56358E]" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Rotating / Morphing Professional Title */}
            <div className="h-10 sm:h-12 mb-6 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -22, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="flex items-center gap-2"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#56358E]">
                    {titles[titleIndex]}
                  </span>
                  <span className="w-2 h-6 bg-[#9B6DFF] rounded-full animate-pulse" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Professional Introduction Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-[#68677A] leading-relaxed max-w-2xl mb-8"
            >
              {personalInfo.introduction}
            </motion.p>

            {/* Primary Action Buttons with Expressive Glow Transitions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8"
            >
              {/* View Projects CTA */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#7952C7] to-[#56358E] hover:from-[#6943B7] hover:to-[#4A2D7D] shadow-soft hover:shadow-glow-violet transition-all duration-300"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Download Resume CTA */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Ameenul_Lumin_Fathima_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-[#56358E] bg-[#EDE5FF] hover:bg-[#E2D4FD] border border-[#D7C7F4] hover:border-[#9B6DFF]/60 shadow-sm hover:shadow-glow-sm transition-all duration-300"
                aria-label="Download Ameenul Lumin Fathima M. Resume PDF"
              >
                <Download className="w-4 h-4 text-[#7952C7]" />
                <span>Download Resume</span>
              </motion.a>

              {/* Contact Me CTA */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-[#202033] hover:text-[#7952C7] bg-white hover:bg-[#FAF8FF] border border-[#E8E2F1] hover:border-[#D7C7F4] shadow-2xs hover:shadow transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#68677A]" />
                <span>Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-[#E8E2F1] w-full"
            >
              <span className="text-xs font-semibold text-[#68677A] uppercase tracking-wider">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl bg-white text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] hover:border-[#9B6DFF]/50 shadow-sm hover:shadow-glow-sm transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl bg-white text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] hover:border-[#9B6DFF]/50 shadow-sm hover:shadow-glow-sm transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2.5 rounded-2xl bg-white text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] hover:border-[#9B6DFF]/50 shadow-sm hover:shadow-glow-sm transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="Send an email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Profile Frame with Futuristic Orbit Ring & Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]"
            >
              
              {/* Futuristic Orbit Ring with Rotating Glow Node */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-6 rounded-[38px] border border-[#9B6DFF]/30 pointer-events-none animate-spin-slow"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#9B6DFF] shadow-glow" />
                <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-2 h-2 rounded-full bg-[#7952C7] shadow-sm" />
              </div>

              {/* Decorative lavender backdrop frames with subtle rotation */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-3 bg-gradient-to-tr from-[#EDE5FF] via-[#FAF8FF] to-[#F3EDFF] rounded-[32px] transform rotate-2 -z-10 border border-[#E8E2F1] shadow-glow-sm" 
              />
              <div 
                aria-hidden="true" 
                className="absolute -inset-1 bg-white rounded-[30px] -z-10 shadow-soft-lg" 
              />

              {/* Main Image Frame Container with Floating Vertical Oscillation */}
              <div className="relative bg-white rounded-3xl p-3 border-2 border-[#E8E2F1] hover:border-[#9B6DFF]/50 shadow-card hover:shadow-glow-sm transition-all duration-500 animate-float-slow">
                
                {/* Rounded frame maintaining natural facial proportions & crisp quality */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F7F4FF] to-[#EDE5FF] flex items-center justify-center ring-2 ring-[#7952C7]/20 shadow-inner">
                  {!imageError ? (
                    <img
                      src={imgSrc}
                      alt={personalInfo.name}
                      onError={handleImageError}
                      className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 hover:scale-[1.03]"
                      loading="eager"
                    />
                  ) : (
                    /* Elegant developer avatar fallback */
                    <div className="w-full h-full flex flex-col items-center justify-between p-6 text-center select-none">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[11px] font-bold text-[#7952C7] uppercase tracking-wider px-2.5 py-1 bg-white rounded-md border border-[#E8E2F1]">
                          Developer Profile
                        </span>
                        <Code2 className="w-4 h-4 text-[#7952C7]" />
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#7952C7] to-[#56358E] flex items-center justify-center text-white text-3xl font-bold shadow-soft mb-3 border-2 border-white">
                          AL
                        </div>
                        <h3 className="font-bold text-base text-[#202033]">
                          Ameenul Lumin Fathima M.
                        </h3>
                        <p className="text-xs font-semibold text-[#7952C7]">
                          Software Developer &bull; MCA
                        </p>
                      </div>

                      <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-[#E8E2F1] text-left">
                        <p className="text-xs font-semibold text-[#202033]">Profile Photo</p>
                        <p className="text-[11px] text-[#68677A] mt-0.5">
                          public/images/profile.jpg
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating highlight badge: Tech Specialties */}
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-4 -left-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8E2F1] shadow-soft-md hover:shadow-glow-sm flex items-center gap-3 transition-shadow"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EDE5FF] flex items-center justify-center text-[#7952C7]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#202033]">Cybersecurity &amp; AI</p>
                    <p className="text-[11px] text-[#68677A]">Incident Response &amp; RAG</p>
                  </div>
                </motion.div>

                {/* Floating highlight badge: Full-Stack */}
                <motion.div 
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#E8E2F1] shadow-soft-md hover:shadow-glow-sm flex items-center gap-2 transition-shadow"
                >
                  <Layers className="w-4 h-4 text-[#7952C7]" />
                  <span className="text-xs font-bold text-[#56358E]">Java &amp; Full-Stack</span>
                </motion.div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
