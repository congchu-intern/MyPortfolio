import React, { useState } from 'react';
import { X, ExternalLink, Github, Shield, Terminal, CheckCircle2, Copy, Check } from 'lucide-react';
import { Project } from '../types';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  mode: 'details' | 'code';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, mode, onClose }) => {
  const [copiedClone, setCopiedClone] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'security' | 'architecture'>('overview');

  if (!project) return null;

  const cloneCmd = `git clone ${project.details.githubRepo}.git`;

  const copyCloneCmd = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(cloneCmd);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-xl bg-cyber-card border border-cyber-border shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-cyber-border bg-cyber-surface/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-neon-cyan animate-pulse"></span>
            <div>
              <span className="text-[10px] font-mono text-cyber-muted uppercase">
                PROJECT #{project.number} // {mode === 'code' ? 'SOURCE REPOSITORY' : 'DEEP SPECIFICATION'}
              </span>
              <h3 className="text-lg font-bold text-white font-mono">{project.title}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg border border-cyber-border hover:border-cyber-neon-cyan text-cyber-muted hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        {mode === 'details' ? (
          <div className="flex border-b border-cyber-border/80 bg-[#060a12] px-6 gap-6 font-mono text-xs">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('overview');
              }}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-cyber-neon-cyan text-cyber-neon-cyan font-bold'
                  : 'border-transparent text-cyber-muted hover:text-cyber-text'
              }`}
            >
              Overview &amp; Features
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('security');
              }}
              className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'security'
                  ? 'border-cyber-neon-cyan text-cyber-neon-cyan font-bold'
                  : 'border-transparent text-cyber-muted hover:text-cyber-text'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              Security Measures
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('architecture');
              }}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === 'architecture'
                  ? 'border-cyber-neon-cyan text-cyber-neon-cyan font-bold'
                  : 'border-transparent text-cyber-muted hover:text-cyber-text'
              }`}
            >
              Architecture Pattern
            </button>
          </div>
        ) : (
          <div className="bg-[#060a12] px-6 py-2.5 border-b border-cyber-border flex items-center justify-between text-xs font-mono text-cyber-muted">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-cyber-neon-cyan" />
              <span className="text-white">alex-dev-cyber / {project.id}</span>
              <span className="px-2 py-0.5 rounded bg-cyber-surface border border-cyber-border text-[10px]">
                Public
              </span>
            </div>
            <span className="text-[11px] text-emerald-400">● Main Branch Verified</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-mono text-sm">
          {mode === 'details' ? (
            <>
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-cyber-text/90 leading-relaxed text-xs sm:text-sm font-sans">
                    {project.details.overview}
                  </p>

                  <div className="p-4 rounded-lg bg-cyber-surface/60 border border-cyber-border space-y-3">
                    <h4 className="text-xs uppercase text-cyber-neon-cyan font-bold tracking-wider">
                      Core Capabilities
                    </h4>
                    <ul className="space-y-2 text-xs text-cyber-muted">
                      {project.details.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyber-neon-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase text-cyber-muted font-bold tracking-wider mb-2">
                      Stack Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-cyber-surface border border-cyber-border text-xs text-cyber-neon-cyan"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase">
                      <Shield className="w-4 h-4" />
                      Defensive Auditing &amp; Zero-Trust Controls
                    </div>
                    <p className="text-cyber-muted">
                      Every input, network connection, and query is fortified against common vectors
                      including OWASP Top 10 vulnerabilities.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {project.details.securityMeasures.map((measure, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded bg-cyber-surface/70 border border-cyber-border flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded bg-cyber-neon-cyan/10 border border-cyber-neon-cyan/40 text-cyber-neon-cyan flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-xs text-cyber-text/90">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-cyber-surface/80 border border-cyber-border text-xs space-y-2">
                    <span className="text-cyber-electric-blue font-bold uppercase">
                      Architectural Blueprint
                    </span>
                    <p className="text-cyber-text leading-relaxed font-sans">
                      {project.details.architecture}
                    </p>
                  </div>

                  {/* ASCII Diagram */}
                  <div className="p-4 rounded bg-[#04070D] border border-cyber-border text-[11px] text-cyber-neon-cyan font-mono overflow-x-auto">
                    <pre>
{`[ Client Layer / UI ]  <--->  [ API / Controller ]
                                |
                                v
               [ Service & Validation Layer ]
                                |
             +------------------+------------------+
             |                                     |
   [ Security Middleware ]               [ Data Access / DAO ]
   (Input Sanitize & Auth)               (Prepared Statements)
             |                                     |
             +------------------+------------------+
                                v
                     [ Relational DB / Host ]`}
                    </pre>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Code / Repository Viewer */
            <div className="space-y-4">
              {/* Clone Bar */}
              <div className="flex items-center justify-between p-3 rounded bg-cyber-surface border border-cyber-border text-xs">
                <div className="flex items-center gap-2 overflow-x-auto text-cyber-text">
                  <Terminal className="w-4 h-4 text-cyber-neon-cyan shrink-0" />
                  <span className="font-mono">{cloneCmd}</span>
                </div>
                <button
                  onClick={copyCloneCmd}
                  className="ml-3 px-3 py-1 rounded bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan text-cyber-neon-cyan flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedClone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedClone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Mock File Tree */}
              <div className="border border-cyber-border rounded-lg bg-[#040810] overflow-hidden text-xs">
                <div className="p-3 bg-cyber-surface/60 border-b border-cyber-border font-bold text-cyber-muted flex items-center justify-between">
                  <span>Repository Structure</span>
                  <span className="text-[10px] text-cyber-neon-cyan">Last commit 2 days ago</span>
                </div>
                <div className="p-4 space-y-2 font-mono text-cyber-text/80">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">📁</span>
                    <span>src/</span>
                  </div>
                  <div className="pl-4 space-y-1.5 text-cyber-muted">
                    <p>├── controllers/ <span className="text-[10px] text-cyber-border">// Route handling</span></p>
                    <p>├── models/ <span className="text-[10px] text-cyber-border">// Database schemas</span></p>
                    <p>├── security/ <span className="text-[10px] text-cyber-border">// Encryption &amp; JWT</span></p>
                    <p>└── main.ts</p>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-cyber-electric-blue">📄</span>
                    <span>README.md</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-electric-blue">📄</span>
                    <span>Dockerfile</span>
                  </div>
                </div>
              </div>

              {/* README Snippet */}
              <div className="p-4 rounded-lg bg-cyber-surface/50 border border-cyber-border text-xs space-y-2">
                <h5 className="font-bold text-cyber-neon-cyan uppercase tracking-wider">
                  # {project.title}
                </h5>
                <p className="text-cyber-muted font-sans leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2 text-[11px] text-cyber-electric-blue">
                  Run locally with: <code className="bg-black/50 px-2 py-0.5 rounded text-white">docker-compose up --build</code>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-cyber-border bg-cyber-surface/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Zero Vulnerabilities Detected in CI/CD pipeline</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.details.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded bg-cyber-surface hover:bg-cyber-neon-cyan/20 border border-cyber-neon-cyan/40 hover:border-cyber-neon-cyan text-cyber-neon-cyan text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded bg-cyber-card hover:bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-white text-xs font-mono transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
