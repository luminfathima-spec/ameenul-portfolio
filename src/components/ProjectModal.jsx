import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  Sparkles,
  ShieldAlert,
  Cpu
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#202033]/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-soft-lg border border-[#E8E2F1] my-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E8E2F1] bg-gradient-to-r from-white via-[#FAF8FF] to-[#F7F4FF]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE5FF] text-[#56358E]">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F7F4FF] text-[#7952C7] border border-[#E8E2F1]">
              {project.status}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#68677A] hover:text-[#202033] hover:bg-[#EDE5FF]/50 transition-colors focus:outline-none"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-140px)] overflow-y-auto">
          
          {/* Title & One-line Summary */}
          <div>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#202033] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-base text-[#68677A] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Overview */}
          <div className="bg-[#FAF8FF] p-4 sm:p-5 rounded-xl border border-[#E8E2F1]">
            <h4 className="flex items-center gap-2 text-sm font-bold text-[#56358E] mb-2 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#7952C7]" />
              Project Overview
            </h4>
            <p className="text-sm text-[#202033] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Problem Statement */}
            <div className="p-4 rounded-xl border border-[#E8E2F1] bg-white">
              <h5 className="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Problem Statement
              </h5>
              <p className="text-xs sm:text-sm text-[#68677A] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Engineered Solution */}
            <div className="p-4 rounded-xl border border-[#D7C7F4] bg-[#EDE5FF]/30">
              <h5 className="flex items-center gap-1.5 text-xs font-bold text-[#56358E] uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4 text-[#7952C7]" />
                Technical Solution
              </h5>
              <p className="text-xs sm:text-sm text-[#202033] leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-[#202033] mb-3 uppercase tracking-wider">
              Key Features &amp; Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202033]">
                  <CheckCircle2 className="w-4 h-4 text-[#7952C7] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-bold text-[#202033] mb-3 uppercase tracking-wider">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F7F4FF] text-[#56358E] border border-[#E8E2F1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6 border-t border-[#E8E2F1] bg-white">
          <div className="text-xs text-[#68677A]">
            Status: <span className="font-semibold text-[#202033]">{project.status}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7952C7] hover:bg-[#56358E] shadow-soft transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#7952C7] bg-[#EDE5FF] hover:bg-[#E2D4FD] border border-[#D7C7F4] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#68677A] hover:text-[#202033] hover:bg-[#F7F4FF] border border-[#E8E2F1] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

