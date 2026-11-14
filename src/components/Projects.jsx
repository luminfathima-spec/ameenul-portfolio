import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Eye, 
  ShieldAlert, 
  UtensilsCrossed, 
  Network, 
  Cake, 
  ScanSearch,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { projectList } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('featured'); // 'featured' or 'all'

  const displayedProjects = filter === 'featured'
    ? projectList.filter(p => p.featured)
    : projectList;

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Futuristic domain illustration thumbnail
  const renderThumbnail = (project) => {
    switch (project.id) {
      case 'sentinelai-x':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#F7F4FF] via-[#EDE5FF] to-[#FAF8FF] border-b border-[#E8E2F1] flex flex-col items-center justify-center p-6 relative overflow-hidden group/thumb">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center text-[#7952C7] mb-2 border border-[#E8E2F1] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-glow-sm">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-[#56358E] tracking-wider uppercase">
              AI Incident Response Platform
            </span>
            <span className="text-[11px] text-[#68677A] font-medium mt-0.5">
              Java &bull; Python &bull; FastAPI &bull; Gemini API
            </span>
          </div>
        );
      case 'resqmeal':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#F0FDF4] via-[#DCFCE7]/60 to-[#F7F4FF] border-b border-[#E8E2F1] flex flex-col items-center justify-center p-6 relative overflow-hidden group/thumb">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center text-emerald-600 mb-2 border border-[#E8E2F1] transition-transform duration-500 group-hover:scale-110">
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              MERN Food Rescue Platform
            </span>
            <span className="text-[11px] text-[#68677A] font-medium mt-0.5">
              MongoDB &bull; Express &bull; React &bull; Node.js
            </span>
          </div>
        );
      case 'real-world-nids':
      case 'network-intrusion-detection':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE]/60 to-[#F7F4FF] border-b border-[#E8E2F1] flex flex-col items-center justify-center p-6 relative overflow-hidden group/thumb">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center text-blue-600 mb-2 border border-[#E8E2F1] transition-transform duration-500 group-hover:scale-110">
              <Network className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-blue-900 tracking-wider uppercase">
              ML Network Intrusion Detection
            </span>
            <span className="text-[11px] text-[#68677A] font-medium mt-0.5">
              Scikit-learn &bull; Random Forest &bull; NSL-KDD
            </span>
          </div>
        );
      case 'luxe-cake':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#FFF1F2] via-[#FCE7F3]/60 to-[#F7F4FF] border-b border-[#E8E2F1] flex flex-col items-center justify-center p-6 relative overflow-hidden group/thumb">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center text-rose-500 mb-2 border border-[#E8E2F1] transition-transform duration-500 group-hover:scale-110">
              <Cake className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-rose-800 tracking-wider uppercase">
              Bakery E-Commerce Application
            </span>
            <span className="text-[11px] text-[#68677A] font-medium mt-0.5">
              PHP &bull; MySQL &bull; Responsive Web
            </span>
          </div>
        );
      case 'genai-borderguard':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#FAF8FF] via-[#EDE5FF] to-[#F3EDFF] border-b border-[#E8E2F1] flex flex-col items-center justify-center p-6 relative overflow-hidden group/thumb">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center text-[#7952C7] mb-2 border border-[#E8E2F1] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-glow-sm">
              <ScanSearch className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-[#56358E] tracking-wider uppercase">
              Vision &amp; Multimodal Surveillance
            </span>
            <span className="text-[11px] text-[#68677A] font-medium mt-0.5">
              Python &bull; Google Gemini &bull; Computer Vision
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F7F4FF]/50 border-b border-[#E8E2F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Glowing Pill Accent */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-soft-sm border border-[#D7C7F4]"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Interactive 3D Portfolio</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight"
          >
            Featured Projects
          </motion.h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#68677A]">
            Technical applications, full-stack architectures, and AI-driven platforms I have developed and designed.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#7952C7] to-[#9B6DFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter / View Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl border border-[#E8E2F1] shadow-soft-sm inline-flex">
            <button
              type="button"
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                filter === 'featured'
                  ? 'bg-[#7952C7] text-white shadow-soft-sm'
                  : 'text-[#68677A] hover:text-[#202033]'
              }`}
            >
              Featured Highlights (3)
            </button>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[#7952C7] text-white shadow-soft-sm'
                  : 'text-[#68677A] hover:text-[#202033]'
              }`}
            >
              All Projects ({projectList.length})
            </button>
          </div>
        </div>

        {/* 3D Interactive Project Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard 
                  maxTilt={6}
                  className="group bg-white rounded-3xl border border-[#E8E2F1] shadow-card hover:shadow-card-hover hover:border-[#9B6DFF]/50 transition-all duration-300 flex flex-col overflow-hidden h-full"
                >
                  {/* Abstract Technical Illustration */}
                  {renderThumbnail(project)}

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      
                      {/* Category & Status Pill with High Readability */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold text-[#56358E] uppercase tracking-wider bg-[#EDE5FF] px-2.5 py-0.5 rounded-md border border-[#D7C7F4]/60">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-bold text-[#7952C7] bg-[#FAF8FF] px-2.5 py-0.5 rounded-md border border-[#E8E2F1]">
                          {project.status}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-[#202033] group-hover:text-[#7952C7] transition-colors tracking-tight mb-2">
                        {project.title}
                      </h3>

                      {/* Concise Description */}
                      <p className="text-xs sm:text-sm text-[#68677A] leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Key Features (First 3) */}
                      <div className="space-y-1.5 mb-5 pb-4 border-b border-[#E8E2F1]">
                        <span className="text-[11px] font-bold text-[#202033] uppercase tracking-wider block mb-1">
                          Key Highlights:
                        </span>
                        {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#68677A]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7952C7] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Tags with Staggered Reveal */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-[#FAF8FF] text-[#56358E] border border-[#E8E2F1] group-hover:border-[#D7C7F4] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        type="button"
                        onClick={() => handleOpenDetails(project)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7952C7] hover:text-[#56358E] py-2 px-3 rounded-xl hover:bg-[#EDE5FF]/60 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </motion.button>

                      <div className="flex items-center gap-2">
                        {/* Repository button - ONLY rendered when verified repository exists */}
                        {project.repository && (
                          <motion.a
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl text-[#202033] hover:text-[#7952C7] hover:bg-[#F7F4FF] border border-[#E8E2F1] hover:border-[#9B6DFF]/50 shadow-2xs hover:shadow-glow-sm transition-all"
                            aria-label={`View ${project.title} on GitHub`}
                            title="View GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}

                        {/* Live Demo button - ONLY rendered when liveDemo exists */}
                        {project.liveDemo && (
                          <motion.a
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl text-[#7952C7] hover:bg-[#EDE5FF] border border-[#D7C7F4] transition-colors"
                            aria-label={`Open live demo for ${project.title}`}
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore more projects button if in featured view */}
        {filter === 'featured' && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setFilter('all')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-[#56358E] bg-white hover:bg-[#FAF8FF] border border-[#D7C7F4] hover:border-[#9B6DFF]/50 shadow-soft-sm hover:shadow-glow-sm transition-all"
            >
              <span>Explore All {projectList.length} Technical Projects</span>
              <ArrowRight className="w-4 h-4 text-[#7952C7]" />
            </motion.button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
    </section>
  );
}
