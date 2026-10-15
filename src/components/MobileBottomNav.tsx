import React, { useState, useEffect } from 'react';
import { Terminal, Layers, Code2, Radio } from 'lucide-react';
import { sound } from '../utils/audio';

export const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hub' | 'works' | 'tech' | 'uplink'>('hub');

  // Track scroll position to automatically update active bottom tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.getElementById('hero');
      const projects = document.getElementById('projects');
      const skills = document.getElementById('skills');
      const contact = document.getElementById('contact');

      if (contact && scrollY >= contact.offsetTop - 350) {
        setActiveTab('uplink');
      } else if (projects && scrollY >= projects.offsetTop - 350) {
        setActiveTab('works');
      } else if (skills && scrollY >= skills.offsetTop - 350) {
        setActiveTab('tech');
      } else {
        setActiveTab('hub');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab: 'hub' | 'works' | 'tech' | 'uplink', targetId: string) => {
    sound.playClick();
    setActiveTab(tab);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    {
      id: 'hub' as const,
      label: 'Hub',
      target: 'hero',
      icon: Terminal,
    },
    {
      id: 'works' as const,
      label: 'Works',
      target: 'projects',
      icon: Layers,
    },
    {
      id: 'tech' as const,
      label: 'Tech',
      target: 'skills',
      icon: Code2,
    },
    {
      id: 'uplink' as const,
      label: 'Uplink',
      target: 'contact',
      icon: Radio,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#030f1a]/90 backdrop-blur-xl border-t border-cyber-border shadow-[0_-4px_24px_rgba(0,0,0,0.8)]">
      <div className="flex justify-around items-center h-16 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.target)}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all cursor-pointer ${
                isActive
                  ? 'text-cyber-neon-cyan drop-shadow-[0_0_8px_rgba(0,245,255,0.7)]'
                  : 'text-cyber-muted hover:text-cyber-text'
              }`}
            >
              <Icon className="w-5 h-5 transition-transform active:scale-90" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
