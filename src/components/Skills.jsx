import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Cpu,
  Info
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
import TiltCard from './TiltCard';

// Map each technology to its recognizable brand/tech icon
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
      return <Sparkles className="w-5 h-5 text-[#9B6DFF]" />;
    case 'RAG':
    case 'Retrieval-Augmented Generation (RAG)':
      return <Layers className="w-5 h-5 text-[#7952C7]" />;
    case 'Cybersecurity':
      return <ShieldCheck className="w-5 h-5 text-[#0EA5E9]" />;
    case 'Git':
      return <SiGit className="w-5 h-5 text-[#F05032]" />;
    case 'GitHub':
      return <SiGithub className="w-5 h-5 text-[#202033]" />;
    case 'VS Code':
    case 'Visual Studio Code':
      return <VscVscode className="w-5 h-5 text-[#007ACC]" />;
    case 'IntelliJ IDEA':
      return <SiIntellijidea className="w-5 h-5 text-[#FE315D]" />;
    case 'Antigravity IDE':
      return <Cpu className="w-5 h-5 text-[#9B6DFF]" />;
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSkill, setActiveSkill] = useState(null);

  const categoryFilterList = ["All", ...skillCategories.map(c => c.title)];

  const displayedCategories = selectedCategory === "All"
    ? skillCategories
    : skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-[-10%] -z-10 w-[450px] h-[450px] bg-[#EDE5FF]/60 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Glowing Pill Accent */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDE5FF] text-[#56358E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-soft-sm border border-[#D7C7F4]"
          >
            <Cpu className="w-3.5 h-3.5 text-[#7952C7]" />
            <span>Interactive Technology Showcase</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#202033] tracking-tight"
          >
            Technical Skills
          </motion.h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#68677A]">
            Categorized competencies, languages, modern frameworks, and engineering tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#7952C7] to-[#9B6DFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dashboard Filter Tabs */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2">
          <div className="bg-[#FAF8FF] p-1.5 rounded-2xl border border-[#E8E2F1] shadow-soft-sm inline-flex flex-wrap justify-center gap-1">
            {categoryFilterList.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#7952C7] text-white shadow-soft-sm'
                    : 'text-[#68677A] hover:text-[#202033] hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid (2 Columns on Tablet, 3 Columns on Desktop) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: catIdx * 0.08 }}
              >
                <TiltCard 
                  maxTilt={5}
                  className="bg-white rounded-3xl border border-[#E8E2F1] p-6 shadow-card hover:shadow-card-hover hover:border-[#9B6DFF]/50 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E2F1]">
                      <div className="w-10 h-10 rounded-2xl bg-[#EDE5FF] flex items-center justify-center shadow-soft-sm group-hover:scale-105 transition-transform">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg text-[#202033] group-hover:text-[#7952C7] transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-xs text-[#68677A]">
                          {category.skills.length} core technologies
                        </span>
                      </div>
                    </div>

                    {/* Skill List items with interactive hover feedback */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => {
                        const isCardActive = activeSkill === skill.name;

                        return (
                          <div
                            key={skill.name}
                            onMouseEnter={() => setActiveSkill(skill.name)}
                            onMouseLeave={() => setActiveSkill(null)}
                            onFocus={() => setActiveSkill(skill.name)}
                            onBlur={() => setActiveSkill(null)}
                            tabIndex={0}
                            className="group/item p-3 rounded-2xl bg-[#FAF8FF] hover:bg-white border border-[#E8E2F1] hover:border-[#9B6DFF]/50 hover:shadow-glow-sm transition-all duration-200 cursor-pointer focus:outline-none focus:border-[#7952C7]"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-white border border-[#E8E2F1] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover/item:scale-115 group-hover/item:rotate-3 transition-transform duration-200">
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

                              <span className="text-[11px] font-semibold text-[#56358E] px-2.5 py-0.5 rounded-lg bg-[#EDE5FF]/80 group-hover/item:bg-[#9B6DFF] group-hover/item:text-white transition-colors">
                                {skill.level}
                              </span>
                            </div>

                            {/* Accurate Technical Insight Tooltip / Description */}
                            {skill.description && (
                              <p className="text-[11px] text-[#68677A] mt-2 pt-2 border-t border-[#F3EDFF] leading-relaxed group-hover/item:text-[#202033] transition-colors">
                                {skill.description}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  {/* Card Footer note */}
                  <div className="pt-4 mt-4 border-t border-[#F7F4FF] flex items-center justify-between text-[11px] text-[#8D8C9F]">
                    <span className="flex items-center gap-1 italic">
                      <Info className="w-3 h-3 text-[#9B6DFF]" />
                      <span>Academic &amp; Hands-on</span>
                    </span>
                    <span className="font-medium text-[#7952C7]">Verified Skills</span>
                  </div>

                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
