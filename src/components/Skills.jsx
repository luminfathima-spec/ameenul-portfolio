import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import { 
  SiPython, 
  SiJavascript, 
  SiPhp, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiHtml5, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiFastapi, 
  SiScikitlearn, 
  SiGit, 
  SiGithub, 
  SiIntellijidea 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { skillCategories } from '../data/portfolio';

// Map each technology to its official icon component
const getTechIcon = (techName) => {
  switch (techName) {
    case 'Java':
    case 'Java Backend Development':
      return <FaJava className="w-5 h-5 text-[#E76F00]" />;
    case 'Python':
      return <SiPython className="w-5 h-5 text-[#3776AB]" />;
    case 'JavaScript':
      return <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />;
    case 'PHP':
      return <SiPhp className="w-5 h-5 text-[#777BB4]" />;
    case 'SQL':
      return <Database className="w-5 h-5 text-[#00618A]" />;
    case 'HTML':
      return <SiHtml5 className="w-5 h-5 text-[#E34F26]" />;
    case 'CSS':
      return <FaCss3Alt className="w-5 h-5 text-[#1572B6]" />;
    case 'React.js':
      return <SiReact className="w-5 h-5 text-[#61DAFB]" />;
    case 'Tailwind CSS':
      return <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />;
    case 'Node.js':
      return <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />;
    case 'Express.js':
      return <SiExpress className="w-5 h-5 text-[#202033]" />;
    case 'FastAPI':
      return <SiFastapi className="w-5 h-5 text-[#009688]" />;
    case 'MongoDB':
      return <SiMongodb className="w-5 h-5 text-[#47A248]" />;
    case 'MySQL':
      return <SiMysql className="w-5 h-5 text-[#4479A1]" />;
    case 'PostgreSQL':
      return <SiPostgresql className="w-5 h-5 text-[#4169E1]" />;
    case 'Scikit-learn':
      return <SiScikitlearn className="w-5 h-5 text-[#F7931E]" />;
    case 'Computer Vision':
      return <Eye className="w-5 h-5 text-[#7952C7]" />;
    case 'Generative AI':
      return <Sparkles className="w-5 h-5 text-[#56358E]" />;
    case 'Retrieval-Augmented Generation (RAG)':
      return <Layers className="w-5 h-5 text-[#7952C7]" />;
    case 'Cybersecurity':
      return <ShieldCheck className="w-5 h-5 text-[#0EA5E9]" />;
    case 'Git':
      return <SiGit className="w-5 h-5 text-[#F05032]" />;
    case 'GitHub':
      return <SiGithub className="w-5 h-5 text-[#202033]" />;
    case 'Visual Studio Code':
      return <VscVscode className="w-5 h-5 text-[#007ACC]" />;
    case 'IntelliJ IDEA':
      return <SiIntellijidea className="w-5 h-5 text-[#FE315D]" />;
    case 'Antigravity IDE':
      return <Cpu className="w-5 h-5 text-[#7952C7]" />;
    default:
      return <Terminal className="w-5 h-5 text-[#7952C7]" />;
  }
};

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5 text-[#7952C7]" />;
    case 'Layout':
      return <Layout className="w-5 h-5 text-[#7952C7]" />;
    case 'Server':
      return <Server className="w-5 h-5 text-[#7952C7]" />;
    case 'Database':
      return <Database className="w-5 h-5 text-[#7952C7]" />;
    case 'BrainCircuit':
      return <BrainCircuit className="w-5 h-5 text-[#7952C7]" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-[#7952C7]" />;
    default:
      return <Code2 className="w-5 h-5 text-[#7952C7]" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#68677A]">
            Technologies and tools I explore and work with.
          </p>
          <div className="w-16 h-1 bg-[#7952C7] mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid (2 Columns on Tablet, 3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl border border-[#E8E2F1] p-6 shadow-card hover:shadow-card-hover hover:border-[#D7C7F4] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E2F1]">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE5FF] flex items-center justify-center shadow-soft-sm">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#202033]">
                      {category.title}
                    </h3>
                    <span className="text-xs text-[#68677A]">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skill List items with official logos */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8FF] hover:bg-[#F3EDFF]/60 border border-[#E8E2F1] hover:border-[#D7C7F4] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E2F1] flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform">
                          {getTechIcon(skill.name)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#202033] group-hover/item:text-[#7952C7] transition-colors">
                            {skill.name}
                          </p>
                          <p className="text-[11px] text-[#68677A]">
                            {skill.tag}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-semibold text-[#56358E] px-2 py-0.5 rounded-md bg-[#EDE5FF]/80">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer note */}
              <div className="pt-4 mt-4 border-t border-[#F7F4FF] text-right">
                <span className="text-[11px] text-[#8D8C9F] italic">
                  Academic &amp; Hands-on Exposure
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
