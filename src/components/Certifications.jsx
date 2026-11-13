import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Building2, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { certificationList } from '../data/portfolio';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [failedThumbnails, setFailedThumbnails] = useState({});

  const handleOpenCert = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseCert = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  const getFallbackSvg = (certId) => {
    if (certId.includes('java')) return '/certificates/cert-placeholder-java.svg';
    if (certId.includes('gemini')) return '/certificates/cert-placeholder-gemini.svg';
    return '/certificates/cert-placeholder-blockchain.svg';
  };

  const handleImageError = (certId) => {
    setFailedThumbnails((prev) => ({ ...prev, [certId]: true }));
  };

  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#F7F4FF]/60 border-b border-[#E8E2F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Credentials &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight">
            Certifications &amp; Learning
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#68677A]">
            Professional learning and technical certifications.
          </p>
          <div className="w-16 h-1 bg-[#7952C7] mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationList.map((cert) => {
            const isFailed = failedThumbnails[cert.id];
            const imgSrc = isFailed ? getFallbackSvg(cert.id) : cert.image;

            return (
              <div
                key={cert.id}
                className="group bg-white rounded-2xl border border-[#E8E2F1] shadow-card hover:shadow-card-hover hover:border-[#D7C7F4] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Certificate Thumbnail Preview Container */}
                <div 
                  className="relative w-full aspect-[16/10] bg-[#FAF8FF] border-b border-[#E8E2F1] overflow-hidden cursor-pointer flex items-center justify-center p-3"
                  onClick={() => handleOpenCert(cert)}
                >
                  <img
                    src={imgSrc}
                    alt={cert.title}
                    onError={() => handleImageError(cert.id)}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#202033]/0 group-hover:bg-[#202033]/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-1.5 rounded-lg bg-white/95 text-xs font-bold text-[#56358E] shadow-soft-sm flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#7952C7]" />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#56358E] bg-[#EDE5FF] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                        {cert.badgeText}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-base sm:text-lg text-[#202033] group-hover:text-[#7952C7] transition-colors leading-snug mb-2">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7952C7] mb-3">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Brief description */}
                    <p className="text-xs text-[#68677A] leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#F7F4FF] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7952C7] hover:text-[#56358E] py-1.5 px-3 rounded-lg hover:bg-[#EDE5FF]/60 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Certificate</span>
                    </button>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#68677A] hover:text-[#202033] p-1.5"
                        aria-label={`Verify ${cert.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Verify</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Replacement guidance notice */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-[#E8E2F1] shadow-soft-sm max-w-2xl mx-auto flex items-start gap-3 text-left">
          <FileCheck className="w-5 h-5 text-[#7952C7] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#68677A] leading-relaxed">
            <span className="font-bold text-[#202033]">Certificate Asset Setup: </span>
            Upload your official credentials to <code className="text-[#56358E] font-semibold bg-[#EDE5FF] px-1 py-0.5 rounded">public/certificates/</code> as <code className="text-[#56358E] font-semibold bg-[#EDE5FF] px-1 py-0.5 rounded">java-certificate.png</code>, <code className="text-[#56358E] font-semibold bg-[#EDE5FF] px-1 py-0.5 rounded">gemini-certificate.png</code>, and <code className="text-[#56358E] font-semibold bg-[#EDE5FF] px-1 py-0.5 rounded">blockchain-certificate.png</code>.
          </div>
        </div>

      </div>

      {/* Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={isModalOpen}
        onClose={handleCloseCert}
      />
    </section>
  );
}
