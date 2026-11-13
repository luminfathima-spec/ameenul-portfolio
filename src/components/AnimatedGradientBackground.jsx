import React from 'react';

export default function AnimatedGradientBackground() {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
    >
      {/* Subtle futuristic high-tech grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="futuristic-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#56358E"
              strokeWidth="0.8"
            />
            <circle cx="2" cy="2" r="1" fill="#7952C7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#futuristic-grid)" />
      </svg>

      {/* Primary Top-Right Lavender / Electric Purple Gradient Orb */}
      <div 
        className="absolute -top-[15%] right-[-5%] w-[620px] h-[620px] rounded-full blur-[110px] opacity-60 bg-gradient-to-br from-[#EDE5FF] via-[#F3EDFF] to-[#9B6DFF]/15 animate-float-slow"
      />

      {/* Secondary Bottom-Left Soft Violet Orb */}
      <div 
        className="absolute -bottom-[10%] -left-[10%] w-[580px] h-[580px] rounded-full blur-[120px] opacity-45 bg-gradient-to-tr from-[#EDE5FF] via-[#F7F4FF] to-[#7952C7]/15 animate-float-medium"
      />

      {/* Center Subtle Ambient Accent */}
      <div 
        className="absolute top-[45%] left-[25%] w-[420px] h-[420px] rounded-full blur-[130px] opacity-35 bg-gradient-to-r from-[#EDE5FF] to-[#9B6DFF]/10 animate-pulse-subtle"
      />
    </div>
  );
}
