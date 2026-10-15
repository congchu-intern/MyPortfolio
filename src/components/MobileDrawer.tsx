import React from 'react';
import { X, Zap, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestResume: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onRequestResume }) => {
  const navItems = [
    { num: '01.', label: 'Home', href: '#hero' },
    { num: '02.', label: 'About', href: '#about' },
    { num: '03.', label: 'Skills', href: '#skills' },
    { num: '04.', label: 'Projects', href: '#projects' },
    { num: '05.', label: 'Journey', href: '#experience' },
    { num: '06.', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    sound.playClick();
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Cyber Drawer */}
      <div
        id="cyber-drawer"
        className={`fixed inset-y-0 left-0 w-4/5 max-w-xs z-50 bg-[#030f1a]/95 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.9)] border-r border-cyber-border flex flex-col pt-safe pb-safe transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="h-16 px-5 border-b border-cyber-border/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyber-neon-cyan" />
            <span className="font-mono text-xs text-cyber-muted uppercase tracking-widest">
              // SYS.MENU
            </span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close Navigation Menu"
            className="w-10 h-10 flex items-center justify-center text-cyber-text hover:text-cyber-neon-cyan active:scale-95 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left px-4 py-3 font-mono text-sm text-cyber-text hover:text-cyber-neon-cyan hover:bg-[#101d28] rounded transition-all flex items-center group cursor-pointer"
            >
              <span className="text-cyber-neon-cyan/70 font-semibold mr-3 group-hover:text-cyber-neon-cyan">
                {item.num}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-cyber-border/60 space-y-2">
          <a
            href="#contact"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-cyber-neon-cyan/15 text-cyber-neon-cyan font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_16px_rgba(0,245,255,0.25)] hover:bg-cyber-neon-cyan hover:text-[#05070A] transition-all border border-cyber-neon-cyan/40"
          >
            <span>LET'S TALK</span>
            <Zap className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
