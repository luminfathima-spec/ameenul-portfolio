import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import MouseSpotlight from './components/MouseSpotlight';
import AnimatedGradientBackground from './components/AnimatedGradientBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#202033] flex flex-col font-sans selection:bg-[#EDE5FF] selection:text-[#56358E]">
      {/* Interactive Ambient Gradient Background */}
      <AnimatedGradientBackground />

      {/* Mouse-Following Ambient Spotlight (Desktop only, pointer-events: none) */}
      <MouseSpotlight />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back To Top */}
      <BackToTop />
    </div>
  );
}

