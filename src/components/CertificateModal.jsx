import React, { useEffect } from 'react';
import { X, Award, ExternalLink, Download, FileText, Building2, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ cert, isOpen, onClose }) {
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

  if (!isOpen || !cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#202033]/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-soft-lg border border-[#E8E2F1] my-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E8E2F1] bg-gradient-to-r from-white via-[#FAF8FF] to-[#F7F4FF]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EDE5FF] flex items-center justify-center text-[#7952C7] shadow-soft-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-[#202033]">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-[#7952C7] flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>{cert.issuer}</span>
                <span className="text-[#8D8C9F]">&bull;</span>
                <span className="text-[#56358E]">{cert.category}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#68677A] hover:text-[#202033] hover:bg-[#EDE5FF]/50 transition-colors focus:outline-none"
            aria-label="Close certificate preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area: Handles both Image and PDF Formats */}
        <div className="p-4 sm:p-6 bg-[#F7F4FF]/50 flex items-center justify-center">
          {cert.format === 'image' ? (
            <div className="relative w-full max-h-[62vh] overflow-hidden rounded-2xl border border-[#E8E2F1] shadow-card bg-white flex items-center justify-center p-4">
              <img
                src={cert.file}
                alt={cert.title}
                className="max-h-[58vh] w-auto max-w-full object-contain mx-auto transition-transform duration-300"
              />
            </div>
          ) : (
            <div className="relative w-full h-[62vh] rounded-2xl border border-[#E8E2F1] shadow-card bg-white overflow-hidden flex flex-col">
              {/* PDF Preview Frame */}
              <iframe
                src={`${cert.file}#view=FitH`}
                title={cert.title}
                className="w-full h-full border-0"
              />
            </div>
          )}
        </div>

        {/* Modal Info & Actions Footer */}
        <div className="p-5 sm:p-6 border-t border-[#E8E2F1] bg-white flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7952C7]" />
              <span className="text-xs font-bold text-[#202033] uppercase tracking-wider">
                {cert.badgeText}
              </span>
            </div>
            <p className="text-xs text-[#68677A] max-w-lg leading-relaxed">
              {cert.details}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Open in New Tab for PDF */}
            {cert.format === 'pdf' && (
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7952C7] hover:bg-[#56358E] shadow-soft transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open PDF in New Tab</span>
              </a>
            )}

            {/* Direct Open / View Original for Image */}
            {cert.format === 'image' && (
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7952C7] hover:bg-[#56358E] shadow-soft transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Full Resolution</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#68677A] hover:text-[#202033] hover:bg-[#F7F4FF] border border-[#E8E2F1] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
