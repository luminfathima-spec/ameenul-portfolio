import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#7952C7] hover:bg-[#56358E] text-white shadow-soft-lg hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#7952C7] focus:ring-offset-2 animate-in fade-in"
      aria-label="Scroll back to top"
      title="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

