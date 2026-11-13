import React from 'react';
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
import { personalInfo } from '../data/portfolio';

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
    <section id="about" className="py-20 md:py-28 bg-[#F7F4FF]/70 border-y border-[#E8E2F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#7952C7] mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2F1] shadow-card">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E2F1]">
                <div className="w-10 h-10 rounded-2xl bg-[#EDE5FF] flex items-center justify-center text-[#7952C7]">
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

              {/* Exact narrative requested by user */}
              <div className="space-y-4 text-base sm:text-lg text-[#68677A] leading-relaxed">
                <p>
                  I am an MCA student and aspiring software developer with a strong interest in Java development, full-stack technologies, cybersecurity and artificial intelligence.
                </p>
                <p>
                  I enjoy building practical applications, exploring emerging technologies and solving real-world problems through software development.
                </p>
                <p className="font-medium text-[#202033] pt-1">
                  I continuously work on strengthening my technical knowledge through academic projects and hands-on learning.
                </p>
              </div>

            </div>

            {/* Core Values / Work Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreValues.map((val) => (
                <div 
                  key={val.title}
                  className="bg-white p-5 rounded-2xl border border-[#E8E2F1] shadow-soft-sm hover:shadow-card transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#7952C7]">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-[#202033]">{val.title}</h4>
                  </div>
                  <p className="text-xs text-[#68677A] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Technical Areas of Interest Cards */}
          <div className="lg:col-span-5">
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
                {technicalInterests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <div 
                      key={interest.title}
                      className="group p-3.5 rounded-2xl border border-[#E8E2F1] hover:border-[#D7C7F4] bg-[#FAF8FF] hover:bg-white transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#EDE5FF] text-[#7952C7] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
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
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
