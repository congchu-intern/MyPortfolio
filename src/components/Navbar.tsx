import React from 'react';
import { Terminal, ArrowRight, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenDrawer: () => void;
  onRequestResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDrawer, onRequestResume }) => {
  const navItems = [
    { num: '01.', label: 'Home', href: '#hero' },
    { num: '02.', label: 'About', href: '#about' },
    { num: '03.', label: 'Skills', href: '#skills' },
    { num: '04.', label: 'Projects', href: '#projects' },
    { num: '05.', label: 'Journey', href: '#experience' },
    { num: '06.', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyber-border/70 bg-cyber-bg/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => sound.playClick()}
          className="group flex items-center gap-2"
        >
          <span className="text-cyber-neon-cyan font-mono text-base md:text-xl font-bold tracking-tight group-hover:neon-text-glow transition-all">
            &lt;<span className="text-cyber-text">CONGCHU.DEV</span> /&gt;
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-cyber-surface text-cyber-neon-cyan border border-cyber-neon-cyan/30 rounded">
            v2.5
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-mono text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => sound.playClick()}
              className="text-cyber-muted hover:text-cyber-neon-cyan transition-colors flex items-center gap-1 group py-1"
            >
              <span className="text-cyber-neon-cyan text-xs group-hover:underline">{item.num}</span>{' '}
              <span className="group-hover:text-cyber-text transition-colors">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="relative group inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyber-neon-cyan border border-cyber-neon-cyan/60 rounded overflow-hidden bg-cyber-card/60 hover:bg-cyber-neon-cyan/10 transition-all duration-300 shadow-neon-glow hover:shadow-neon-glow-lg"
          >
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-neon-cyan"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-neon-cyan"></span>
            <span className="flex items-center gap-2">
              Let's Talk
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Header Controls matching screen.png */}
        <div className="flex md:hidden items-center gap-2.5">
          {/* OPTIMAL Status Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1f2b37]/60 backdrop-blur-md border border-cyber-border/80 shadow-[0_0_8px_rgba(0,245,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon-cyan animate-pulse shadow-[0_0_6px_#00f5ff]"></span>
            <span className="font-mono text-[10px] text-cyber-neon-cyan uppercase tracking-wider font-bold">
              OPTIMAL
            </span>
          </div>

          {/* Terminal Drawer Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenDrawer();
            }}
            aria-label="Toggle Navigation Terminal Menu"
            className="w-10 h-10 flex items-center justify-center text-cyber-neon-cyan hover:text-white border border-cyber-border rounded bg-cyber-surface/60 active:scale-95 transition-all"
          >
            <Terminal className="w-5 h-5" />
          </button>

          {/* Avatar Icon */}
          <button
            onClick={() => {
              sound.playClick();
              onRequestResume();
            }}
            aria-label="View Profile Spec"
            className="w-8 h-8 rounded-full border border-cyber-neon-cyan/50 overflow-hidden bg-cyber-neon-cyan/20 flex items-center justify-center cursor-pointer active:scale-95 transition-all shrink-0"
          >
            {PERSONAL_INFO.avatarUrl ? (
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-4 h-4 text-cyber-neon-cyan" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
