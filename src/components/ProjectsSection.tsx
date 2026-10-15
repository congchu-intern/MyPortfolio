import React from 'react';
import { Eye, Code, ExternalLink, Terminal, Server, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { sound } from '../utils/audio';

interface ProjectsSectionProps {
  onOpenProjectDetails: (project: Project) => void;
  onOpenProjectCode: (project: Project) => void;
  onShowToast: (message: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectDetails,
  onOpenProjectCode,
  onShowToast,
}) => {
  return (
    <section id="projects" className="scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-1 mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest">
          <span>// 03. DEPLOYMENTS</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              FEATURED PROJECTS<span className="text-cyber-neon-cyan">[]</span>
            </h2>
            <p className="text-cyber-muted text-xs sm:text-sm mt-1 max-w-xl font-mono">
              Practical software engineering artifacts with security-conscious designs.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-cyber-muted border border-cyber-border px-3 py-1.5 rounded bg-cyber-card">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ALL CODE TESTED &amp; DOCUMENTED</span>
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-card-subtle"
          >
            <div>
              {/* Header Preview Screen / Image on Mobile */}
              {project.imageUrl ? (
                <div className="w-full h-44 sm:h-52 relative bg-cyber-surface overflow-hidden border-b border-cyber-border">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-transparent to-transparent opacity-80 sm:opacity-50"></div>
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-[#030f1a]/90 font-mono text-[10px] text-cyber-neon-cyan font-bold border border-cyber-border/80 shadow-md">
                    [{project.badge}]
                  </div>
                </div>
              ) : (
                /* Interactive Cyber Shell Mockup for text-based projects */
                <div className="relative bg-cyber-surface h-44 sm:h-52 border-b border-cyber-border overflow-hidden flex items-center justify-center p-3 sm:p-4">
                  <div className="w-full h-full rounded border border-cyber-border bg-[#050B14] p-3 sm:p-4 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500 font-mono text-xs">
                    {project.mockupType === 'database' && (
                      <>
                        <div className="flex justify-between items-center border-b border-cyber-border/60 pb-2 text-[10px]">
                          <span className="text-cyber-electric-blue">{project.mockupData.title}</span>
                          <span className="text-emerald-400">{project.mockupData.statusBadge}</span>
                        </div>
                        <div className="text-[10px] space-y-1 text-cyber-muted">
                          {project.mockupData.logs?.map((log, idx) => (
                            <p
                              key={idx}
                              className={
                                idx === 0
                                  ? 'text-cyber-neon-cyan'
                                  : idx === 1
                                  ? 'text-cyber-text'
                                  : 'text-cyber-muted'
                              }
                            >
                              {log}
                            </p>
                          ))}
                        </div>
                        <div className="text-[10px] text-cyber-electric-blue flex items-center justify-between">
                          <span>{project.mockupData.footerNotes?.left}</span>
                          <span className="text-emerald-400">{project.mockupData.footerNotes?.right}</span>
                        </div>
                      </>
                    )}

                    {project.mockupType === 'sysadmin' && (
                      <>
                        <div className="flex justify-between items-center border-b border-cyber-border/60 pb-2">
                          <span className="text-cyber-muted">{project.mockupData.title}</span>
                          <span className="text-emerald-400 font-bold">{project.mockupData.statusBadge}</span>
                        </div>
                        <div className="space-y-1 text-cyber-text text-[10px]">
                          {project.mockupData.logs?.map((line, idx) => (
                            <p
                              key={idx}
                              className={
                                idx === 0
                                  ? 'text-cyber-electric-blue'
                                  : idx === 1
                                  ? 'text-cyber-muted'
                                  : 'text-cyber-neon-cyan'
                              }
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                        <div className="flex justify-between text-cyber-muted text-[9px]">
                          <span>{project.mockupData.footerNotes?.left}</span>
                          <span className="text-emerald-400">{project.mockupData.footerNotes?.right}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-4 sm:p-7 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-cyber-muted">
                  <span className="text-cyber-neon-cyan font-bold tracking-wider">
                    {project.mockupType === 'database' ? '[DATABASE UTILITY]' : project.mockupType === 'sysadmin' ? '[SYSADMIN & NETWORKING]' : `PROJECT #${project.number}`}
                  </span>
                  <span className="text-[11px] text-cyber-muted font-bold">
                    {project.mockupType === 'database' ? 'v2.1.0' : project.mockupType === 'sysadmin' ? 'ONLINE' : project.badge}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-mono group-hover:text-cyber-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyber-muted leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-cyber-surface border border-cyber-border/80 text-[11px] font-mono text-cyber-electric-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 sm:p-7 pt-0 flex items-center gap-2 sm:gap-3 border-t border-cyber-border/40 mt-2">
              {project.id === 'cyber-portfolio' ? (
                <a
                  href="#hero"
                  onClick={() => sound.playClick()}
                  className="flex-1 h-10 sm:h-11 rounded bg-cyber-neon-cyan/20 text-cyber-neon-cyan hover:bg-cyber-neon-cyan hover:text-[#05070A] border border-cyber-neon-cyan/40 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer font-bold active:scale-[0.98]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenProjectDetails(project);
                  }}
                  className="flex-1 h-10 sm:h-11 rounded bg-cyber-neon-cyan/20 text-cyber-neon-cyan hover:bg-cyber-neon-cyan hover:text-[#05070A] border border-cyber-neon-cyan/40 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer font-bold active:scale-[0.98]"
                >
                  <span>
                    {project.mockupType === 'database'
                      ? 'Inspection Docs'
                      : project.mockupType === 'sysadmin'
                      ? 'Review Config'
                      : 'View Project'}
                  </span>
                  <Eye className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Code icon button */}
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenProjectCode(project);
                }}
                title="View Source Repository"
                aria-label="View Source Repository"
                className="w-10 sm:w-11 h-10 sm:h-11 rounded bg-cyber-surface border border-cyber-border hover:border-cyber-neon-cyan text-cyber-muted hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95"
              >
                <Code className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
