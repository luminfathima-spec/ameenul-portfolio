import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  MessageSquare,
  Download
} from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const contactCards = [
    {
      id: "github",
      title: "GitHub",
      subtitle: "Code Repositories & Open Source",
      value: "github.com/luminfathima-spec",
      href: personalInfo.contact.github,
      icon: Github,
      actionText: "Visit Profile",
      isExternal: true,
      color: "hover:border-[#7952C7]",
      badge: "Open Source"
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      subtitle: "Professional Networking",
      value: "linkedin.com/in/lumin-fathima",
      href: personalInfo.contact.linkedin,
      icon: Linkedin,
      actionText: "Connect on LinkedIn",
      isExternal: true,
      color: "hover:border-[#0077B5]",
      badge: "Network"
    },
    {
      id: "email",
      title: "Direct Email",
      subtitle: "Inquiries & Opportunities",
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      icon: Mail,
      actionText: "Compose Email",
      isExternal: false,
      color: "hover:border-[#7952C7]",
      badge: "Preferred",
      hasCopy: true
    },
    {
      id: "resume",
      title: "Curriculum Vitae",
      subtitle: "Official Qualifications & Summary",
      value: "Ameenul_Lumin_Fathima_Resume.pdf",
      href: personalInfo.resumePath,
      icon: FileText,
      actionText: "View / Download PDF",
      isExternal: true,
      color: "hover:border-[#56358E]",
      badge: "PDF Document",
      isDownload: true
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-soft-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#68677A] leading-relaxed">
            I'm always interested in connecting with developers, exploring new technologies, collaborating on meaningful projects and learning about exciting opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#7952C7] to-[#9B6DFF] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 4 Prominent Contact Cards Grid with Staggered Viewport Reveals & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group bg-white rounded-2xl border border-[#E8E2F1] p-6 shadow-card hover:shadow-card-hover hover:border-[#9B6DFF]/50 ${card.color} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] flex items-center justify-center text-[#7952C7] group-hover:scale-105 group-hover:bg-[#7952C7] group-hover:text-white transition-all shadow-soft-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#56358E] bg-[#FAF8FF] px-2.5 py-1 rounded-md border border-[#E8E2F1]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-bold text-lg text-[#202033] group-hover:text-[#7952C7] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#68677A] mt-0.5 mb-3">
                    {card.subtitle}
                  </p>

                  {/* Value / Link Display */}
                  <p className="text-xs font-semibold text-[#56358E] bg-[#FAF8FF] p-2.5 rounded-lg border border-[#E8E2F1] break-all mb-4">
                    {card.value}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-2 border-t border-[#F7F4FF]">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={card.href}
                    target={card.isExternal ? "_blank" : undefined}
                    rel={card.isExternal ? "noopener noreferrer" : undefined}
                    download={card.isDownload ? "Ameenul_Lumin_Fathima_Resume.pdf" : undefined}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7952C7] hover:bg-[#56358E] shadow-soft-sm transition-all"
                  >
                    <span>{card.actionText}</span>
                    {card.isDownload ? (
                      <Download className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </motion.a>

                  {/* Copy Email Button for direct convenience */}
                  {card.hasCopy && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleCopyEmail}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#56358E] bg-[#EDE5FF] hover:bg-[#E2D4FD] border border-[#D7C7F4] transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Email Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#7952C7]" />
                          <span>Copy Email Address</span>
                        </>
                      )}
                    </motion.button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Professional Closing Statement Card with Subtle Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#FAF8FF] via-[#EDE5FF]/40 to-[#FAF8FF] rounded-3xl p-8 sm:p-10 border border-[#D7C7F4] shadow-soft hover:shadow-card max-w-4xl mx-auto text-center transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-white mx-auto flex items-center justify-center text-[#7952C7] shadow-soft-sm mb-4 border border-[#E8E2F1]">
            <Sparkles className="w-6 h-6 text-[#9B6DFF]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#202033] mb-3">
            Open to Learning &amp; Technical Collaboration
          </h3>
          <p className="text-sm sm:text-base text-[#68677A] max-w-2xl mx-auto leading-relaxed mb-6">
            Thank you for reviewing my portfolio. As a software developer with focused expertise in Java and full-stack development, and supporting interests in cybersecurity and artificial intelligence, I welcome conversations regarding software engineering opportunities, technical projects, and professional collaboration.
          </p>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#56358E] bg-white px-4 py-2 rounded-xl border border-[#E8E2F1] shadow-sm">
            <span>Bengaluru &amp; Pan-India Opportunities</span>
            <span>&bull;</span>
            <span>Reach out via Email or LinkedIn</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

