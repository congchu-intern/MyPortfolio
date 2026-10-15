import React from 'react';
import { Check } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-1 mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest">
          <span>// 04. MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
          JOURNEY &amp; EDUCATION<span className="text-cyber-electric-blue">()</span>
        </h2>
        <p className="text-cyber-muted text-xs sm:text-sm max-w-xl font-mono">
          Milestones in academic learning, independent research, and practical engineering challenges.
        </p>
      </div>

      {/* Vertical Neon Timeline */}
      <div className="relative pl-6 md:pl-10 border-l-2 border-cyber-border space-y-10 sm:space-y-12 before:absolute before:top-0 before:bottom-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-cyber-neon-cyan via-cyber-electric-blue before:to-cyber-border">
        {TIMELINE_ITEMS.map((item, index) => {
          const isCyan = index === 0;
          const isBlue = index === 1;

          const dotColor = isCyan
            ? 'border-cyber-neon-cyan bg-cyber-neon-cyan shadow-[0_0_8px_#00f5ff]'
            : isBlue
            ? 'border-cyber-electric-blue bg-cyber-electric-blue shadow-[0_0_8px_#04a8ff]'
            : 'border-cyber-muted bg-cyber-muted shadow-[0_0_8px_#849495]';

          return (
            <div key={item.id} className="relative group">
              {/* Neon Node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 flex items-center justify-center`}
              >
                <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan/50 transition-all shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5 font-mono">
                  <span
                    className={`text-xs font-bold tracking-wider ${
                      isCyan
                        ? 'text-cyber-neon-cyan'
                        : isBlue
                        ? 'text-cyber-electric-blue'
                        : 'text-cyber-muted'
                    }`}
                  >
                    {item.period}
                  </span>
                  <span className="text-[11px] text-cyber-muted bg-cyber-surface px-2 py-0.5 rounded border border-cyber-border uppercase w-fit">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 font-sans">{item.role}</h3>
                <h4 className="text-xs sm:text-sm font-mono text-cyber-electric-blue mb-3">
                  {item.organization}
                </h4>

                <p className="text-xs sm:text-sm text-cyber-muted leading-relaxed mb-3 font-sans">
                  {item.description}
                </p>

                {/* Achievements / Tags */}
                {index === 0 ? (
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-cyber-muted">Cumulative GPA:</span>
                    <span className="text-white font-semibold">3.6 / 4.0</span> •
                    <span className="text-white font-semibold">Dean's Honor List</span> •
                    <span className="text-white font-semibold">Cybersecurity Club</span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {item.achievements.map((ach, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded bg-cyber-surface border border-cyber-border text-cyber-text text-[11px] flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-cyber-neon-cyan" />
                        <span>{ach}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
