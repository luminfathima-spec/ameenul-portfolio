import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Building2, 
  FileText,
  Sparkles
} from 'lucide-react';
import { certificationList, certificateCategories } from '../data/portfolio';
import CertificateModal from './CertificateModal';
import TiltCard from './TiltCard';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates = activeCategory === "All"
    ? certificationList
    : certificationList.filter((c) => c.category === activeCategory);

  const handleOpenCert = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseCert = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  // Thumbnail renderer tailored for both image badges and PDF documents
  const renderCardVisual = (cert) => {
    if (cert.format === 'image') {
      return (
        <div 
          className="relative w-full aspect-[16/10] bg-[#FAF8FF] border-b border-[#E8E2F1] overflow-hidden cursor-pointer flex items-center justify-center p-3"
          onClick={() => handleOpenCert(cert)}
        >
          <img
            src={cert.file}
            alt={cert.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#202033]/0 group-hover:bg-[#202033]/20 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-1.5 rounded-xl bg-white/95 text-xs font-bold text-[#56358E] shadow-soft-sm flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#7952C7]" />
              <span>Preview Badge</span>
            </span>
          </div>
        </div>
      );
    }

    // PDF Certificate visual presentation
    return (
      <div 
        className="relative w-full aspect-[16/10] bg-gradient-to-br from-[#FAF8FF] via-[#F3EDFF]/60 to-[#FAF8FF] border-b border-[#E8E2F1] overflow-hidden cursor-pointer flex flex-col justify-between p-5"
        onClick={() => handleOpenCert(cert)}
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-[11px] font-bold text-[#7952C7] uppercase tracking-wider bg-white px-2.5 py-1 rounded-lg border border-[#E8E2F1] shadow-2xs">
            {cert.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#56358E] bg-[#EDE5FF] px-2 py-0.5 rounded-md">
            <FileText className="w-3 h-3 text-[#7952C7]" />
            <span>PDF Document</span>
          </span>
        </div>

        <div className="my-auto text-left">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2F1] flex items-center justify-center text-[#7952C7] shadow-soft-sm mb-2 group-hover:scale-105 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-[#202033] line-clamp-1">
            {cert.title}
          </p>
          <p className="text-[11px] text-[#7952C7] font-medium mt-0.5">
            {cert.issuer}
          </p>
        </div>

        <div className="flex items-center justify-between w-full pt-2 border-t border-[#E8E2F1]/80 text-[11px] text-[#68677A]">
          <span className="font-medium truncate max-w-[180px]">{cert.badgeText}</span>
          <span className="font-semibold text-[#7952C7] flex items-center gap-1">
            <span>View PDF</span>
            <Eye className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#F7F4FF]/60 border-b border-[#E8E2F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Glowing Accent */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-soft-sm border border-[#D7C7F4]"
          >
            <Award className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Verified Credentials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight"
          >
            Certifications &amp; Achievements
          </motion.h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#68677A]">
            Professional learning, cloud skill badges, academic milestones, and symposium participation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#7952C7] to-[#9B6DFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2">
          <div className="bg-white p-1.5 rounded-2xl border border-[#E8E2F1] shadow-soft-sm inline-flex flex-wrap justify-center gap-1">
            {certificateCategories.map((category) => {
              const count = category === "All" 
                ? certificationList.length 
                : certificationList.filter(c => c.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-[#7952C7] text-white shadow-soft-sm'
                      : 'text-[#68677A] hover:text-[#202033] hover:bg-[#FAF8FF]'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid with 3D Tilt Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <TiltCard
                  maxTilt={5}
                  className="group bg-white rounded-3xl border border-[#E8E2F1] shadow-card hover:shadow-card-hover hover:border-[#9B6DFF]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
                >
                  {/* Visual Preview */}
                  {renderCardVisual(cert)}

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      
                      {/* Category Pill */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold text-[#56358E] bg-[#EDE5FF] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                          {cert.badgeText}
                        </span>
                        <span className="text-[11px] font-medium text-[#68677A] bg-[#FAF8FF] px-2 py-0.5 rounded border border-[#E8E2F1]">
                          {cert.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-base sm:text-lg text-[#202033] group-hover:text-[#7952C7] transition-colors leading-snug mb-2">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7952C7] mb-3">
                        <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>

                      {/* Verified Details */}
                      {cert.details && (
                        <p className="text-xs font-medium text-[#56358E] bg-[#FAF8FF] p-2 rounded-xl border border-[#E8E2F1] mb-3">
                          {cert.details}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-xs text-[#68677A] leading-relaxed mb-4">
                        {cert.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#F7F4FF] flex items-center justify-between gap-2">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        type="button"
                        onClick={() => handleOpenCert(cert)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7952C7] hover:text-[#56358E] py-2 px-3 rounded-xl hover:bg-[#EDE5FF]/60 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Certificate</span>
                      </motion.button>

                      {/* Direct action button */}
                      {cert.format === 'pdf' ? (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#68677A] hover:text-[#7952C7] p-2 rounded-xl hover:bg-[#F7F4FF] transition-colors"
                          title="Open PDF in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open PDF</span>
                        </a>
                      ) : (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#68677A] hover:text-[#7952C7] p-2 rounded-xl hover:bg-[#F7F4FF] transition-colors"
                          title="Open full resolution badge"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Full Image</span>
                        </a>
                      )}
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
