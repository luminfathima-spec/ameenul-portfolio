import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code, 
  Cpu, 
  ShieldCheck, 
  Eye, 
  Bot, 
  GraduationCap, 
  CheckCircle, 
  Lightbulb 
} from 'lucide-react';

export default function About() {
  const technicalInterests = [
    {
      title: "Java Development",
      description: "Building structured, robust backend applications and object-oriented architectures.",
      icon: Code,
    },
    {
      title: "Full-Stack Development",
      description: "Crafting end-to-end web applications with modern frontend frameworks and scalable APIs.",
      icon: Cpu,
    },
    {
      title: "Cybersecurity",
      description: "Investigating threat vectors, network intrusion patterns, and AI-assisted incident response.",
      icon: ShieldCheck,
    },
    {
      title: "Computer Vision",
      description: "Exploring visual feature extraction, image classification, and automated camera feeds.",
      icon: Eye,
    },
    {
      title: "Artificial Intelligence & RAG",
      description: "Leveraging LLMs, multi-modal contextual reasoning, and retrieval pipelines for practical tools.",
      icon: Bot,
    },
  ];

  const coreValues = [
    {
      title: "Continuous Learning",
      description: "Actively studying emerging industry standards, frameworks, and modern software paradigms.",
    },
    {
      title: "Hands-on Experimentation",
      description: "Translating theoretical concepts into functional codebases and practical prototypes.",
    },
    {
      title: "Real-World Focus",
      description: "Developing solutions with clear purpose, security consciousness, and user usability in mind.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F4FF]/70 border-y border-[#E8E2F1] relative overflow-hidden">
      {/* Background ambient light */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-[-8%] -z-10 w-[420px] h-[420px] bg-[#EDE5FF]/70 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Glowing Accent */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-soft-sm border border-[#D7C7F4]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Profile &amp; Background</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight"
          >
            About Me
          </motion.h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#7952C7] to-[#9B6DFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2F1] shadow-card hover:shadow-card-hover transition-all duration-300">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E2F1]">
                <div className="w-10 h-10 rounded-2xl bg-[#EDE5FF] flex items-center justify-center text-[#7952C7] shadow-soft-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#202033]">
                    Academic Journey &amp; Engineering Outlook
                  </h3>
                  <p className="text-xs text-[#68677A]">
                    Master of Computer Applications &bull; Presidency University
                  </p>
                </div>
              </div>

              {/* Meaningful Narrative: Academic Background, Development Focus, Practical Learning & Career Goals */}
              <div className="space-y-4 text-base sm:text-lg text-[#68677A] leading-relaxed">
                <p>
                  I am a <strong className="text-[#202033] font-semibold">Software Developer</strong> currently pursuing my Master of Computer Applications (MCA) at Presidency University, following my Bachelor of Computer Applications (BCA) from Vijayanagara Sri Krishnadevaraya University (VSKU). My academic journey has built a strong foundation in core computer science principles—including data structures, algorithms, relational database design, and object-oriented architecture.
                </p>
                <p>
                  My primary development focus centers on <strong className="text-[#56358E] font-semibold">Java engineering and full-stack web development</strong>. I enjoy writing clean, modular, and maintainable code, architecting reliable backend services, and building responsive, user-friendly frontend interfaces.
                </p>
                <p>
                  I prioritize practical learning through hands-on development. Whether engineering cybersecurity incident response workflows with Generative AI in <span className="text-[#7952C7] font-semibold">SentinelAI-X</span>, building full-stack platforms like <span className="text-[#7952C7] font-semibold">ResQMeal</span>, or training machine learning models for intrusion detection, I continually bridge theory and real-world execution.
                </p>
                <p className="font-medium text-[#202033] pt-1 border-t border-[#F7F4FF]">
                  My career goal is to contribute effectively as a software developer within a forward-thinking engineering team, designing scalable systems, solving challenging technical problems, and continuously growing with modern enterprise technologies.
                </p>
              </div>

            </div>

            {/* Core Values / Work Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreValues.map((val, idx) => (
                <motion.div 
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-2xl border border-[#E8E2F1] shadow-soft-sm hover:shadow-card hover:border-[#9B6DFF]/50 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#7952C7]">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-[#202033]">{val.title}</h4>
                  </div>
                  <p className="text-xs text-[#68677A] leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Technical Areas of Interest Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E2F1] shadow-card">
              
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E2F1]">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#7952C7]" />
                  <h3 className="font-bold text-base sm:text-lg text-[#202033]">
                    Areas of Special Interest
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EDE5FF] text-[#56358E]">
                  5 Focus Areas
                </span>
              </div>

              <div className="space-y-3.5">
                {technicalInterests.map((interest, idx) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div 
                      key={interest.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="group p-3.5 rounded-2xl border border-[#E8E2F1] hover:border-[#9B6DFF]/50 hover:shadow-glow-sm bg-[#FAF8FF] hover:bg-white transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#EDE5FF] text-[#7952C7] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#9B6DFF] group-hover:text-white transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-[#202033] group-hover:text-[#7952C7] transition-colors">
                            {interest.title}
                          </h4>
                          <p className="text-xs text-[#68677A] mt-0.5 leading-relaxed">
                            {interest.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
