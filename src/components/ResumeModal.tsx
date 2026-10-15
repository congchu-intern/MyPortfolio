import React, { useState } from 'react';
import { X, Download, Printer, Mail, MapPin, Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, CORE_SKILLS, WEB_SKILLS, DB_SKILLS, TOOLS_SKILLS, TIMELINE_ITEMS } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const handleDownload = () => {
    sound.playSuccess();
    setDownloading(true);

    // Create a markdown resume blob and download it
    const resumeText = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

---

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

---

## EDUCATION
- **${PERSONAL_INFO.education}** (${PERSONAL_INFO.graduation})
  University of Technology & Science
  GPA: 3.6 / 4.0 | Dean's Honor List | Cybersecurity Club Core Member

---

## TECHNICAL SKILLS
- **Languages:** C++, Java, Python, TypeScript, JavaScript, SQL
- **Web Development:** React.js, Node.js, Express, HTML5, CSS3, Tailwind CSS, REST APIs
- **Databases:** SQL Server (T-SQL), MySQL, Normalization, Query Optimization
- **Infrastructure & Security:** Linux (Debian/Ubuntu), Docker, Bash, UFW, OWASP Top 10, Network Packet Analysis

---

## KEY PROJECTS & EXPERIENCE
1. **Student Management System** (Java, SQL Server, JDBC)
   - Comprehensive role-based desktop and web academic management system.
   - Parameterized queries mitigating SQL injection risks.
2. **Personal Portfolio Website** (React, Tailwind CSS, TypeScript)
   - High-performance cyberpunk developer portfolio with terminal emulator and zero layout shift.
3. **Database Management Application** (C++, SQL Server, MySQL)
   - Desktop utility for query execution, schema migrations, and automated backups.
4. **Linux Server / Dedicated Game Administration** (Ubuntu, Docker, Bash)
   - 99.9% uptime maintenance for 100+ concurrent users with automated failover and DDoS protection.
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Alexander_Nguyen_Software_Developer_Resume.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-xl bg-cyber-card border border-cyber-border shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-cyber-border bg-cyber-surface/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-neon-cyan animate-pulse"></span>
            <div>
              <span className="text-[10px] font-mono text-cyber-muted uppercase">
                DOCUMENT PROTOCOL // CV_VERIFIED_v2.5
              </span>
              <h3 className="text-lg font-bold text-white font-mono">Curriculum Vitae</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Resume"
              className="p-2 rounded border border-cyber-border hover:border-cyber-electric-blue text-cyber-muted hover:text-white transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded bg-cyber-neon-cyan text-cyber-bg font-mono font-bold text-xs uppercase flex items-center gap-1.5 hover:bg-white transition-colors shadow-neon-glow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Exporting...' : 'Download (.md / PDF)'}</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded border border-cyber-border hover:border-cyber-neon-cyan text-cyber-muted hover:text-white transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 bg-[#070B12] font-sans text-cyber-text">
          {/* Top Banner */}
          <div className="border-b border-cyber-border pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-cyber-neon-cyan font-mono text-sm mt-1">
                {PERSONAL_INFO.headline}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyber-muted mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyber-electric-blue" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyber-neon-cyan" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Security Clearance: Ready
                </span>
              </div>
            </div>
            <div className="font-mono text-right text-xs text-cyber-muted border-l md:border-l-0 md:pl-0 pl-3 border-cyber-border">
              <p>STATUS: <span className="text-emerald-400 font-bold">AVAILABLE</span></p>
              <p>EXP: <span className="text-white">{PERSONAL_INFO.experience}</span></p>
              <p>DEGREE: <span className="text-cyber-electric-blue">{PERSONAL_INFO.graduation}</span></p>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-neon-cyan font-bold flex items-center gap-2">
              <span className="w-3 h-0.5 bg-cyber-neon-cyan"></span>
              Professional Summary
            </h2>
            <p className="text-sm text-cyber-muted leading-relaxed">
              {PERSONAL_INFO.bio} Dedicated to writing highly maintainable, strongly-typed code with
              security baked into every phase of system architecture. Proven hands-on experience across
              relational database design, modern reactive frontend frameworks, and Linux systems administration.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-neon-cyan font-bold flex items-center gap-2">
              <span className="w-3 h-0.5 bg-cyber-neon-cyan"></span>
              Education &amp; Academic Honors
            </h2>
            <div className="p-4 rounded-lg bg-cyber-surface/60 border border-cyber-border space-y-2 font-mono text-xs">
              <div className="flex flex-col sm:flex-row justify-between text-white font-bold">
                <span>{PERSONAL_INFO.education}</span>
                <span className="text-cyber-neon-cyan">{PERSONAL_INFO.graduation}</span>
              </div>
              <p className="text-cyber-electric-blue">University of Technology &amp; Science</p>
              <p className="text-cyber-muted font-sans text-xs">
                Comprehensive coursework in Advanced Algorithms, RDBMS, Object-Oriented Software Design,
                Operating Systems, and Computer Networks.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                <span className="bg-cyber-card px-2 py-0.5 rounded border border-cyber-border text-emerald-400">
                  GPA: 3.6 / 4.0
                </span>
                <span className="bg-cyber-card px-2 py-0.5 rounded border border-cyber-border text-white">
                  Dean&apos;s Honor List
                </span>
                <span className="bg-cyber-card px-2 py-0.5 rounded border border-cyber-border text-cyber-text">
                  Cybersecurity Club Core Member
                </span>
              </div>
            </div>
          </div>

          {/* Verified Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-neon-cyan font-bold flex items-center gap-2">
              <span className="w-3 h-0.5 bg-cyber-neon-cyan"></span>
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-cyber-surface/40 rounded border border-cyber-border">
                <span className="text-cyber-electric-blue font-bold">Core Languages:</span>
                <p className="text-cyber-muted mt-1">C++, Java, Python, TypeScript, JavaScript (ES6+), SQL</p>
              </div>
              <div className="p-3 bg-cyber-surface/40 rounded border border-cyber-border">
                <span className="text-cyber-neon-cyan font-bold">Web &amp; Frameworks:</span>
                <p className="text-cyber-muted mt-1">React.js, Node.js, Express, Tailwind CSS, HTML5/CSS3, REST APIs</p>
              </div>
              <div className="p-3 bg-cyber-surface/40 rounded border border-cyber-border">
                <span className="text-teal-300 font-bold">Databases:</span>
                <p className="text-cyber-muted mt-1">SQL Server (T-SQL), MySQL, Stored Procedures, Index Optimization</p>
              </div>
              <div className="p-3 bg-cyber-surface/40 rounded border border-cyber-border">
                <span className="text-emerald-400 font-bold">DevSecOps &amp; Infra:</span>
                <p className="text-cyber-muted mt-1">Linux (Debian/Ubuntu), Docker, Git/GitHub, Bash, UFW/iptables, OWASP</p>
              </div>
            </div>
          </div>

          {/* Experience & Practical Milestones */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-neon-cyan font-bold flex items-center gap-2">
              <span className="w-3 h-0.5 bg-cyber-neon-cyan"></span>
              Practical Experience &amp; Research
            </h2>
            {TIMELINE_ITEMS.map((item) => (
              <div key={item.id} className="p-4 rounded-lg bg-cyber-surface/40 border border-cyber-border space-y-1.5 font-mono text-xs">
                <div className="flex flex-col sm:flex-row justify-between text-white font-bold">
                  <span>{item.role}</span>
                  <span className="text-cyber-neon-cyan">{item.period}</span>
                </div>
                <p className="text-cyber-electric-blue">{item.organization}</p>
                <p className="text-cyber-muted font-sans text-xs leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  {item.achievements.map((ach, i) => (
                    <span key={i} className="text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-500/30">
                      ✓ {ach}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-cyber-border bg-cyber-surface/90 flex items-center justify-between font-mono text-xs text-cyber-muted">
          <span>VERIFIED ASSET SHA256: 8f9b42...a90c12</span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded bg-cyber-card border border-cyber-border hover:border-cyber-neon-cyan text-white"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
