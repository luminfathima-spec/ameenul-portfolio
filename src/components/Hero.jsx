import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles,
  Code2,
  CheckCircle2,
  Shield,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

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

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7F4FF]/60 to-[#FFFFFF]"
    >
      {/* Subtle lavender background ambient accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-0 -z-10 w-96 h-96 bg-[#EDE5FF]/70 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-[-5%] -z-10 w-80 h-80 bg-[#EDE5FF]/50 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE5FF] border border-[#D7C7F4] text-xs sm:text-sm font-semibold text-[#56358E] mb-6 shadow-soft-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7952C7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7952C7]"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2 mb-3">
              <p className="text-base sm:text-lg font-semibold text-[#7952C7] tracking-wide uppercase">
                {personalInfo.greeting}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#202033] tracking-tight leading-[1.15]">
                {personalInfo.name}
              </h1>
            </div>

            {/* Main Headline & Supporting Subtitle */}
            <div className="space-y-2 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#56358E]">
                {personalInfo.headline}
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#7952C7]">
                {personalInfo.supportingHeadline}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-[#68677A] leading-relaxed max-w-2xl mb-8">
              {personalInfo.introduction}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              {/* View Projects CTA */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#7952C7] hover:bg-[#56358E] shadow-soft transition-all duration-200 hover:shadow-soft-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume CTA */}
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Ameenul_Lumin_Fathima_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#56358E] bg-[#EDE5FF] hover:bg-[#E2D4FD] border border-[#D7C7F4] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-[#7952C7]" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-[#202033] hover:text-[#7952C7] bg-white hover:bg-[#F7F4FF] border border-[#E8E2F1] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#68677A]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Professional Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-[#E8E2F1] w-full">
              <span className="text-xs font-semibold text-[#68677A] uppercase tracking-wider">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] hover:border-[#D7C7F4] shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] hover:border-[#D7C7F4] shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2.5 rounded-xl bg-white text-[#202033] hover:text-[#7952C7] border border-[#E8E2F1] hover:border-[#D7C7F4] shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="Send an email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Frame & Elegant Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              
              {/* Decorative lavender backdrop frames */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2.5 bg-gradient-to-tr from-[#EDE5FF] to-[#F7F4FF] rounded-3xl transform rotate-2 -z-10 border border-[#E8E2F1]" 
              />
              <div 
                aria-hidden="true" 
                className="absolute -inset-1 bg-white rounded-3xl -z-10 shadow-soft-lg" 
              />

              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl p-3 border border-[#E8E2F1] shadow-card">
                
                {/* Photo or Placeholder with strict dimension preservation */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-[#F7F4FF] to-[#EDE5FF] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  ) : (
                    /* Elegant developer avatar placeholder (NO fake faces) */
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
                        <div className="flex items-center gap-2 text-xs font-medium text-[#202033] mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7952C7]" />
                          <span>Photo upload ready</span>
                        </div>
                        <p className="text-[11px] text-[#68677A]">
                          Place your photograph at <code className="text-[#56358E] font-semibold bg-[#EDE5FF] px-1 py-0.5 rounded">public/images/profile.jpg</code>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating highlight badges on the photo frame */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-[#E8E2F1] shadow-soft-md flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EDE5FF] flex items-center justify-center text-[#7952C7]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#202033]">Cybersecurity &amp; AI</p>
                    <p className="text-[11px] text-[#68677A]">Incident Defense &amp; RAG</p>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-[#E8E2F1] shadow-soft-md flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#7952C7]" />
                  <span className="text-xs font-bold text-[#56358E]">Java &amp; Full-Stack</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
