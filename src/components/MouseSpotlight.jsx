import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseSpotlight() {
  const [isEnabled, setIsEnabled] = useState(false);

  // Smooth springs for cursor interpolation
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const mouseX = useSpring(-500, springConfig);
  const mouseY = useSpring(-500, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine control, respecting reduced motion
    const mediaFine = window.matchMedia('(pointer: fine)');
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mediaFine.matches || mediaReduced.matches) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-30"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <div 
        className="w-[500px] h-[500px] rounded-full opacity-65"
        style={{
          background: 'radial-gradient(circle, rgba(155, 109, 255, 0.12) 0%, rgba(237, 229, 255, 0.08) 35%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
    </motion.div>
  );
}
