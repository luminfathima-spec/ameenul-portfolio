import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiFastapi, 
  SiMysql, 
  SiScikitlearn, 
  SiGit 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { Sparkles } from 'lucide-react';

const floatingIcons = [
  {
    name: 'Java',
    icon: <FaJava className="w-5 h-5 text-[#E76F00]" />,
    position: 'top-12 -left-8',
    duration: 5.2,
    delay: 0.2,
  },
  {
    name: 'Python',
    icon: <SiPython className="w-5 h-5 text-[#3776AB]" />,
    position: 'top-40 -left-12',
    duration: 6.0,
    delay: 0.8,
  },
  {
    name: 'React.js',
    icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
    position: 'bottom-20 -left-6',
    duration: 4.8,
    delay: 0.4,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />,
    position: 'bottom-4 -left-10',
    duration: 5.6,
    delay: 1.0,
  },
  {
    name: 'Google Gemini',
    icon: <Sparkles className="w-5 h-5 text-[#9B6DFF]" />,
    position: '-top-6 -right-6',
    duration: 5.4,
    delay: 0.3,
  },
  {
    name: 'FastAPI',
    icon: <SiFastapi className="w-5 h-5 text-[#009688]" />,
    position: 'top-28 -right-12',
    duration: 6.2,
    delay: 0.9,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="w-5 h-5 text-[#EAB308]" />,
    position: 'bottom-28 -right-10',
    duration: 4.6,
    delay: 0.6,
  },
  {
    name: 'Scikit-learn',
    icon: <SiScikitlearn className="w-5 h-5 text-[#F7931E]" />,
    position: '-bottom-6 -right-4',
    duration: 5.8,
    delay: 1.2,
  },
];

export default function FloatingTechIcons() {
  return (
    <div aria-hidden="true" className="pointer-events-none hidden xl:block absolute inset-0 -z-0">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: item.delay },
            scale: { duration: 0.8, delay: item.delay },
            y: {
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }
          }}
          className={`absolute ${item.position} pointer-events-auto`}
        >
          <div className="group relative">
            <div className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E8E2F1] shadow-soft flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-[#9B6DFF] hover:shadow-glow-sm cursor-pointer">
              {item.icon}
            </div>

            {/* Interactive Tooltip on hover */}
            <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20">
              <span className="px-2 py-0.5 text-[10px] font-bold text-[#56358E] bg-white rounded-md border border-[#E8E2F1] shadow-soft-sm whitespace-nowrap">
                {item.name}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
