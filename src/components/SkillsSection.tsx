import React, { useState } from 'react';
import { Terminal, Globe, Database, Cpu, ShieldCheck, CheckCircle } from 'lucide-react';
import { CORE_SKILLS, WEB_SKILLS, DB_SKILLS, TOOLS_SKILLS, CYBER_SKILLS } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedSkillNote, setSelectedSkillNote] = useState<string | null>(null);

  const handleSkillClick = (name: string, desc?: string) => {
    sound.playClick();
    setSelectedSkillNote(desc ? `${name}: ${desc}` : `Inspecting verified stack item: ${name}`);
  };

  const mobileSkills = [
    {
      title: 'Programming',
      badge: 'CORE',
      badgeColor: 'text-cyber-neon-cyan',
      icon: Terminal,
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Web Development',
      badge: 'CLIENT/API',
      badgeColor: 'text-cyber-electric-blue',
      icon: Globe,
      skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs'],
    },
    {
      title: 'Databases',
      badge: 'STORAGE',
      badgeColor: 'text-teal-300',
      icon: Database,
      skills: ['SQL Server', 'MySQL', 'Schema Design', 'Query Optimization'],
    },
    {
      title: 'Tools & Systems',
      badge: 'INFRA',
      badgeColor: 'text-cyber-neon-cyan',
      icon: Cpu,
      skills: ['Git & GitHub', 'Linux (Ubuntu/Debian)', 'Docker', 'Bash Scripting'],
    },
    {
      title: 'Cybersecurity',
      badge: 'DEFENSE',
      badgeColor: 'text-emerald-400',
      icon: ShieldCheck,
      skills: ['Networking', 'Linux Hardening', 'OWASP Top 10', 'Burp Suite'],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-1 mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest">
          <span>// 02. ARSENAL</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              TECHNICAL SKILLS<span className="text-cyber-neon-cyan">;</span>
            </h2>
            <p className="text-cyber-muted text-xs sm:text-sm mt-1 max-w-xl font-mono">
              Verified competency across core languages, stacks, database systems, and cybersecurity principles.
            </p>
          </div>
          <div className="hidden sm:flex text-xs font-mono text-cyber-muted border border-cyber-border px-3 py-1.5 rounded bg-cyber-card items-center gap-2">
            <span className="text-cyber-neon-cyan font-bold">[+]</span>
            <span>STACK INTEGRITY: 100% PRODUCTION READY</span>
          </div>
        </div>
      </div>

      {/* Selected Skill Notification banner */}
      {selectedSkillNote && (
        <div className="mb-6 p-3 rounded-lg bg-cyber-surface/90 border border-cyber-neon-cyan/50 text-xs font-mono text-cyber-neon-cyan flex items-center justify-between shadow-neon-glow">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyber-neon-cyan shrink-0" />
            <span>{selectedSkillNote}</span>
          </div>
          <button
            onClick={() => setSelectedSkillNote(null)}
            className="text-cyber-muted hover:text-white px-2 py-0.5 rounded text-[11px] cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      )}

      {/* Mobile Stacked Category Cards (Matches screen.png exactly, clean on tablet/mobile) */}
      <div className="grid grid-cols-1 md:hidden gap-3 font-mono">
        {mobileSkills.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="p-3.5 rounded-xl bg-cyber-card border border-cyber-border shadow-sm flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-cyber-neon-cyan" />
                  <span className="text-sm font-bold text-white">{cat.title}</span>
                </div>
                <span className={`text-[11px] font-bold ${cat.badgeColor}`}>
                  {cat.badge}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill, `Applied in production stack`)}
                    className="px-2.5 py-1 rounded bg-[#1f2b37] text-cyber-electric-blue text-xs border border-cyber-border/70 hover:border-cyber-neon-cyan transition-colors cursor-pointer"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Multi-column Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Programming Languages */}
        <div className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan/50 transition-all duration-300 border-glow group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyber-neon-cyan uppercase font-bold tracking-wider">
                LANGUAGES
              </span>
              <span className="text-xs font-mono text-cyber-muted group-hover:text-cyber-neon-cyan transition-colors">
                01 // CORE
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyber-neon-cyan" />
              Programming
            </h3>
            <div className="space-y-3 font-mono text-xs">
              {CORE_SKILLS.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleSkillClick(item.name, item.description)}
                  className="cursor-pointer group/item hover:bg-cyber-surface/30 p-1.5 rounded transition-colors"
                >
                  <div className="flex justify-between text-cyber-text mb-1">
                    <span className="group-hover/item:text-cyber-neon-cyan transition-colors">{item.name}</span>
                    <span className="text-cyber-muted text-[11px]">{item.subtext}</span>
                  </div>
                  <div className="w-full bg-cyber-surface h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyber-electric-blue to-cyber-neon-cyan h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-cyber-border/40 text-[11px] font-mono text-cyber-muted">
            Focus: Data Structures, OOP, Memory Management
          </div>
        </div>

        {/* 2. Web Development */}
        <div className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan/50 transition-all duration-300 border-glow group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyber-neon-cyan uppercase font-bold tracking-wider">
                FRONTEND &amp; BACKEND
              </span>
              <span className="text-xs font-mono text-cyber-muted group-hover:text-cyber-neon-cyan transition-colors">
                02 // WEB
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyber-neon-cyan" />
              Web Development
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {WEB_SKILLS.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => handleSkillClick(skill.name, `${skill.category} architecture`)}
                  className="px-3 py-1.5 rounded bg-cyber-surface border border-cyber-border text-xs font-mono text-cyber-text hover:border-cyber-neon-cyan/60 hover:text-cyber-neon-cyan transition-all cursor-pointer"
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-cyber-border/40 text-[11px] font-mono text-cyber-muted">
            Responsive UI, Component Architecture, State Management
          </div>
        </div>

        {/* 3. Database Systems */}
        <div className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan/50 transition-all duration-300 border-glow group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyber-neon-cyan uppercase font-bold tracking-wider">
                STORAGE &amp; QUERY
              </span>
              <span className="text-xs font-mono text-cyber-muted group-hover:text-cyber-neon-cyan transition-colors">
                03 // DATA
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
              <Database className="w-5 h-5 text-cyber-neon-cyan" />
              Database
            </h3>
            <div className="space-y-4 font-mono text-xs">
              {DB_SKILLS.map((db) => (
                <div
                  key={db.name}
                  onClick={() => handleSkillClick(db.name, db.details)}
                  className="p-3 bg-cyber-surface/70 rounded border border-cyber-border hover:border-cyber-neon-cyan/40 transition-colors cursor-pointer"
                >
                  <div className="font-bold text-white mb-1 flex items-center justify-between">
                    <span>{db.name}</span>
                    <span className="text-[10px] text-cyber-neon-cyan bg-cyber-card px-1.5 py-0.5 rounded border border-cyber-border">
                      {db.tag}
                    </span>
                  </div>
                  <div className="text-cyber-muted text-[11px]">{db.details}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-cyber-border/40 text-[11px] font-mono text-cyber-muted">
            Relational Modelling, Indexing, Transaction Safety
          </div>
        </div>

        {/* 4. Tools & Systems */}
        <div className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-electric-blue/50 transition-all duration-300 border-glow group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyber-electric-blue uppercase font-bold tracking-wider">
                ENVIRONMENT
              </span>
              <span className="text-xs font-mono text-cyber-muted group-hover:text-cyber-electric-blue transition-colors">
                04 // OPS
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyber-electric-blue" />
              Tools &amp; Systems
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {TOOLS_SKILLS.map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => handleSkillClick(tool.name, `Applied in ${tool.type} workflows`)}
                  className="px-3 py-1.5 rounded bg-cyber-surface border border-cyber-border text-xs font-mono text-cyber-text hover:border-cyber-electric-blue/70 hover:text-cyber-electric-blue transition-all cursor-pointer"
                >
                  {tool.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-cyber-border/40 text-[11px] font-mono text-cyber-muted">
            CLI proficiency, versioning control &amp; containerized testing
          </div>
        </div>

        {/* 5. Cybersecurity Focus */}
        <div className="md:col-span-2 lg:col-span-2 p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan/50 transition-all duration-300 border-glow group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyber-neon-cyan uppercase font-bold tracking-wider">
                DEFENSIVE &amp; OFFENSIVE AWARENESS
              </span>
              <span className="text-xs font-mono text-cyber-muted group-hover:text-cyber-neon-cyan transition-colors">
                05 // CYBERSECURITY
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyber-neon-cyan" />
              Cybersecurity Fundamentals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              {CYBER_SKILLS.map((item) => (
                <div
                  key={item.title}
                  onClick={() => handleSkillClick(item.title, item.description)}
                  className="p-3 bg-cyber-surface rounded border border-cyber-border hover:border-cyber-neon-cyan/50 transition-colors cursor-pointer group/sec"
                >
                  <p className={`font-bold ${item.color} mb-1 group-hover/sec:underline`}>
                    {item.title}
                  </p>
                  <p className="text-cyber-muted text-[11px] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-cyber-border/40 text-[11px] font-mono text-cyber-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Verified practical labs: PortSwigger Web Security &amp; TryHackMe</span>
            <span className="text-emerald-400 font-semibold tracking-wider">[PRACTICAL AUDIT READY]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
