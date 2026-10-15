import React, { useState } from 'react';
import { FileText, Code2, ShieldAlert, ChevronDown, ChevronUp, Braces } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface AboutSectionProps {
  onRequestResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestResume }) => {
  const [specsOpen, setSpecsOpen] = useState(true);

  return (
    <section id="about" className="scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-1 mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest">
          <span>// 01. SYS_IDENTITY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
          ABOUT ME<span className="text-cyber-neon-cyan animate-pulse">_</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left: Bio & Philosophy */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-cyber-muted leading-relaxed">
          <div className="p-5 sm:p-7 rounded-xl bg-cyber-card border border-cyber-border shadow-lg relative overflow-hidden flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-cyber-border/60 pb-3">
              <span className="font-mono text-xs text-cyber-neon-cyan font-bold tracking-wider">
                [BIO_CORE]
              </span>
              <span className="font-mono text-[11px] text-cyber-muted">REF_ID: #VN-8092</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white font-mono flex items-center gap-2 pt-1">
              Engineering with Curiosity &amp; Defense-in-Depth
            </h3>
            <p className="text-xs sm:text-sm text-cyber-muted">
              Hello! I am a passionate developer with a strong foundation in modern web technologies,
              algorithmic problem solving, and cybersecurity fundamentals. My path started with deconstructing game servers and understanding network packets, which quickly evolved into building responsive web applications and hardened Linux infrastructures.
            </p>
            <p className="text-xs sm:text-sm text-cyber-muted hidden sm:block">
              Whether architecting modular frontend components with{' '}
              <span className="text-cyber-text font-semibold">React &amp; TypeScript</span>,
              structuring relational databases, or exploring security auditing through ethical penetration testing, I focus on crafting software that is not only visually clean, but resilient against emerging threats.
            </p>

            {/* Micro Feature Cards */}
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              <div className="p-3 rounded-lg bg-cyber-surface/70 border border-cyber-border flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-cyber-neon-cyan/15 border border-cyber-neon-cyan/30 flex items-center justify-center text-cyber-neon-cyan shrink-0 mt-0.5 font-mono font-bold text-xs">
                  01
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs sm:text-sm text-white font-semibold">
                    Clean &amp; Maintainable Code
                  </span>
                  <span className="text-xs text-cyber-muted mt-0.5">
                    Strict OOP practices, scalable architecture, and strongly-typed conventions.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-cyber-surface/70 border border-cyber-border flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-cyber-electric-blue/15 border border-cyber-electric-blue/30 flex items-center justify-center text-cyber-electric-blue shrink-0 mt-0.5 font-mono font-bold text-xs">
                  02
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs sm:text-sm text-white font-semibold">
                    Security-First Mindset
                  </span>
                  <span className="text-xs text-cyber-muted mt-0.5">
                    OWASP Top 10 mitigation, secure session management, and server hardening.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Collapsible DEV_SPECIFICATIONS.JSON Card */}
        <div className="lg:col-span-5 space-y-3">
          <div className="rounded-xl bg-cyber-card border border-cyber-border shadow-md overflow-hidden">
            {/* Header toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setSpecsOpen(!specsOpen);
              }}
              className="w-full p-4 flex items-center justify-between bg-[#14212c] text-left hover:bg-[#1f2b37] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Braces className="w-4 h-4 text-cyber-neon-cyan" />
                <span className="font-mono text-xs text-cyber-neon-cyan font-bold tracking-wider">
                  DEV_SPECIFICATIONS.JSON
                </span>
              </div>
              {specsOpen ? (
                <ChevronUp className="w-4 h-4 text-cyber-muted" />
              ) : (
                <ChevronDown className="w-4 h-4 text-cyber-muted" />
              )}
            </button>

            {/* Spec Content Drawer */}
            {specsOpen && (
              <div className="p-4 sm:p-5 font-mono text-xs space-y-2 bg-[#060A10] border-t border-cyber-border/60">
                <p className="text-cyber-electric-blue">
                  <span className="text-cyber-muted">&quot;location&quot;:</span> &quot;{PERSONAL_INFO.location}&quot;,
                </p>
                <p className="text-cyber-electric-blue">
                  <span className="text-cyber-muted">&quot;education&quot;:</span> &quot;{PERSONAL_INFO.education}&quot;,
                </p>
                <p className="text-cyber-electric-blue">
                  <span className="text-cyber-muted">&quot;focus&quot;:</span> &quot;{PERSONAL_INFO.focus}&quot;,
                </p>
                <p className="text-cyber-electric-blue">
                  <span className="text-cyber-muted">&quot;experience&quot;:</span> &quot;{PERSONAL_INFO.experience}&quot;,
                </p>
                <p className="text-cyber-electric-blue">
                  <span className="text-cyber-muted">&quot;languages&quot;:</span> [&quot;Vietnamese (Native)&quot;, &quot;English (Professional)&quot;]
                </p>
                <p className="text-cyber-electric-blue">
                  <span className="text-cyber-muted">&quot;interests&quot;:</span> [&quot;CTFs&quot;, &quot;Homelabs&quot;, &quot;Microservices&quot;]
                </p>
              </div>
            )}
          </div>

          {/* Action button */}
          <button
            onClick={() => {
              sound.playClick();
              onRequestResume();
            }}
            className="w-full h-12 px-4 rounded bg-[#14212c] hover:bg-cyber-neon-cyan hover:text-[#05070A] text-cyber-neon-cyan font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all border border-cyber-border/80 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>REQUEST DETAILED RÉSUMÉ</span>
          </button>
        </div>
      </div>
    </section>
  );
};
