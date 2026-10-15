import React from 'react';
import { ArrowUp } from 'lucide-react';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyber-border/80 bg-[#030f1a] relative z-20 font-mono text-xs text-cyber-muted pb-24 md:pb-12 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center">
        {/* Brand */}
        <span className="font-mono text-base sm:text-lg font-bold text-cyber-neon-cyan tracking-wider drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]">
          &lt;ALEXANDER.DEV /&gt;
        </span>
        <span className="text-[11px] uppercase tracking-widest text-cyber-muted">
          DESIGNED &amp; BUILT WITH PASSION
        </span>
        <span className="text-[11px] text-cyber-border/80">
          © {new Date().getFullYear()} ROOT_ACCESS_GRANTED
        </span>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-2 flex items-center gap-1.5 text-xs text-cyber-electric-blue hover:text-cyber-neon-cyan transition-colors py-2 px-3 rounded border border-cyber-border hover:border-cyber-neon-cyan/50 bg-cyber-card cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
};
