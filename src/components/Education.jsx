import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  Clock,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { educationList } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Glowing Accent */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-soft-sm border border-[#D7C7F4]"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Academic Qualifications</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight"
          >
            My Education
          </motion.h2>
          
          <p className="mt-3 text-base text-[#68677A]">
            Formal computer applications and software engineering degree programs.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#7952C7] to-[#9B6DFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Elegant Vertical Timeline with Animated Flow */}
        <div className="relative">
          
          {/* Animated vertical central timeline connector line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-hidden="true" 
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#7952C7] via-[#9B6DFF] to-[#E8E2F1] -translate-x-1/2 hidden sm:block origin-top rounded-full shadow-glow-sm" 
          />

          <div className="space-y-10 sm:space-y-12">
            {educationList.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-12 h-12 rounded-2xl bg-white border-2 border-[#7952C7] items-center justify-center text-[#7952C7] shadow-soft hover:shadow-glow-sm z-10"
                  >
                    {item.isCurrent ? (
                      <Clock className="w-6 h-6 text-[#9B6DFF] animate-pulse" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-[#56358E]" />
                    )}
                  </motion.div>

                  {/* Spacer for 2-column alternating layout */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Card Content with Smooth Slide Reveal */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`w-full sm:w-[calc(50%-32px)] ${isEven ? 'sm:pr-4' : 'sm:pl-4'}`}
                  >
                    <div 
                      className={`relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:shadow-card-hover hover:border-[#9B6DFF]/50 ${
                        item.isCurrent
                          ? 'border-[#7952C7] shadow-soft-md bg-gradient-to-br from-white via-[#FAF8FF] to-[#F7F4FF]'
                          : 'border-[#E8E2F1] shadow-card hover:border-[#D7C7F4]'
                      }`}
                    >
                      {/* Current Status Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span 
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                            item.isCurrent
                              ? 'bg-gradient-to-r from-[#7952C7] to-[#9B6DFF] text-white shadow-soft-sm'
                              : 'bg-[#EDE5FF] text-[#56358E]'
                          }`}
                        >
                          {item.isCurrent ? (
                            <>
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                              <span>{item.status}</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#7952C7]" />
                              <span>{item.status}</span>
                            </>
                          )}
                        </span>

                        <span className="text-xs font-medium text-[#68677A] flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-[#7952C7]" />
                          <span>Computer Applications</span>
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#202033] tracking-tight mb-1">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#56358E] mb-3">
                        <Building2 className="w-4 h-4 text-[#7952C7] flex-shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Highlight */}
                      <div className="text-xs font-semibold text-[#7952C7] bg-[#EDE5FF]/60 px-3 py-1.5 rounded-xl border border-[#E8E2F1] mb-3 inline-block">
                        {item.highlight}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#68677A] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
