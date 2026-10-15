import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Terminal, ShieldCheck, Shield, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface HeroProps {
  onRequestResume: () => void;
  onOpenProject: (projectId: string) => void;
}

interface CommandHistory {
  cmd: string;
  res: string | React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ onRequestResume, onOpenProject }) => {
  const statusPhrases = [
    'Initializing developer portfolio...',
    'Loading defensive security modules...',
    'Connecting to kernel node hung-yen...',
    'Ready for enterprise collaboration.',
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Terminal input & output
  const [termInput, setTermInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Typewriter effect for top status
  useEffect(() => {
    const currentPhrase = statusPhrases[phraseIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      }, 50);
    } else if (!isDeleting && displayedText.length === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      }, 25);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % statusPhrases.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIdx]);

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;
    const lower = trimmed.toLowerCase();

    sound.playKey();

    if (lower === 'clear') {
      setHistory([]);
      setTermInput('');
      return;
    }

    let response: React.ReactNode = '';

    switch (lower) {
      case 'help':
        response = (
          <div className="space-y-1 text-cyber-text/90">
            <p className="text-cyber-neon-cyan font-bold">AVAILABLE COMMANDS:</p>
            <p>• <span className="text-cyber-electric-blue">skills</span> - List primary verified tech stacks</p>
            <p>• <span className="text-cyber-electric-blue">projects</span> - View all featured production projects</p>
            <p>• <span className="text-cyber-electric-blue">whoami</span> - Display engineer identity & credentials</p>
            <p>• <span className="text-cyber-electric-blue">audit</span> - Run zero-trust vulnerability check</p>
            <p>• <span className="text-cyber-electric-blue">contact</span> - Output encrypted communication channels</p>
            <p>• <span className="text-cyber-electric-blue">resume</span> - Launch detailed résumé viewer</p>
            <p>• <span className="text-cyber-electric-blue">clear</span> - Clear terminal session window</p>
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="space-y-1 text-cyber-text/90">
            <p><span className="text-cyber-neon-cyan">LANGUAGES:</span> C++, Java, Python, TypeScript / JavaScript</p>
            <p><span className="text-cyber-electric-blue">WEB STACK:</span> React, Node.js, Express, Tailwind CSS, REST APIs</p>
            <p><span className="text-teal-300">DATABASES:</span> SQL Server (T-SQL), MySQL, Relational Normalization</p>
            <p><span className="text-emerald-400">INFRA &amp; SEC:</span> Linux (Ubuntu/Debian), Docker, Bash, UFW, OWASP Top 10</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="space-y-1 text-cyber-text/90">
            <p className="text-cyber-neon-cyan">FEATURED BUILDS:</p>
            <p>1. [SMS_DASHBOARD] Student Management System (Java / SQL Server)</p>
            <p>2. [CYBER_PORTFOLIO] Personal Portfolio Website (Tailwind / Vanilla JS)</p>
            <p>3. [SQL_EXECUTOR] Database Management Application (C++ / C# / MySQL)</p>
            <p>4. [SYS_NODE_01] Linux Server &amp; Game Administration (Ubuntu / Docker / BASH)</p>
          </div>
        );
        break;
      case 'whoami':
        response = (
          <p className="text-emerald-400">
              congdz@cyber-core: Cong Chu | B.S. Software Engineering (2025) | Thai Binh / Hung Yen, Vietnam
          </p>
        );
        break;
      case 'audit':
      case 'security':
        response = (
          <div className="space-y-1 text-xs text-emerald-400">
            <p>&gt; [OK] Input sanitization: ENFORCED</p>
            <p>&gt; [OK] Prepared statements: VERIFIED</p>
            <p>&gt; [OK] Node defense score: 99.4% optimal</p>
            <p>&gt; [OK] 0 Critical Vulnerabilities detected.</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="space-y-1 text-cyber-text/90">
            <p><span className="text-cyber-neon-cyan">EMAIL:</span> {PERSONAL_INFO.email}</p>
            <p><span className="text-cyber-electric-blue">GITHUB:</span> github.com/{PERSONAL_INFO.githubHandle}</p>
            <p><span className="text-teal-300">LOCATION:</span> Thai Binh / Hung Yen, Vietnam</p>
          </div>
        );
        break;
      case 'resume':
      case 'cv':
        onRequestResume();
        response = <p className="text-cyber-neon-cyan">[OK] Opening detailed interactive résumé modal...</p>;
        break;
      case 'date':
        response = <p className="text-cyber-text">{new Date().toUTCString()}</p>;
        break;
      default:
        sound.playError();
        response = (
          <p className="text-red-400">
            Command not recognized: '{trimmed}'. Type <span className="text-cyber-neon-cyan underline cursor-pointer" onClick={() => executeCommand('help')}>'help'</span> for options.
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: trimmed, res: response }]);
    setTermInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(termInput);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center pt-4 md:pt-16 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
        {/* Left Content / Mobile Main Column */}
        <div className="lg:col-span-7 space-y-5 md:space-y-6">
          {/* Status badge */}
          <div className="flex items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14212c]/90 border border-cyber-border shadow-[0_0_12px_rgba(0,245,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyber-neon-cyan animate-ping shadow-[0_0_8px_#00f5ff]"></span>
              <span className="font-mono text-[11px] text-cyber-neon-cyan uppercase tracking-wider font-bold">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* Typewriter boot line */}
          <div className="flex items-center gap-2 font-mono text-xs md:text-sm text-cyber-neon-cyan/90">
            <span className="text-cyber-neon-cyan">&gt;</span>
            <span className="min-w-[180px]">{displayedText}</span>
            <span className="w-1.5 h-3.5 bg-cyber-neon-cyan animate-pulse inline-block"></span>
          </div>

          {/* Headline */}
          <div className="space-y-1 md:space-y-2">
            <span className="font-mono text-xs md:text-sm tracking-widest text-cyber-electric-blue uppercase">
              // HELLO WORLD, I'M
            </span>
            <h1 className="text-3xl sm:text-5xl xl:text-7xl font-bold tracking-tight text-white leading-tight font-sans drop-shadow-[0_0_20px_rgba(0,245,255,0.35)]">
              CONG<br className="sm:hidden" />{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon-cyan via-cyber-electric-blue to-teal-200 neon-text-glow">
                CHU
              </span>
            </h1>
            <p className="text-base sm:text-xl font-mono text-cyber-neon-cyan/90 pt-1 font-medium">
              Software Developer | Cybersecurity Enthusiast
            </p>
          </div>

          {/* Futuristic Cyber Portrait Image Card (Prominently featured on mobile as in screen.png, also elegant on desktop) */}
          <div className="w-full relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden bg-cyber-card border border-cyber-border shadow-xl group">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="Cong Chu - Futuristic Cyber Terminal"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/40 to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
              <div className="flex flex-col font-mono text-xs">
                <span className="text-cyber-neon-cyan font-bold tracking-wider">// NODE: VN_DA_NANG</span>
                <span className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  SEC_PROTOCOL: ACTIVE
                </span>
              </div>
              <div className="w-8 h-8 rounded bg-cyber-neon-cyan/20 border border-cyber-neon-cyan/40 flex items-center justify-center text-cyber-neon-cyan shadow-[0_0_8px_#00f5ff]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-cyber-muted max-w-2xl leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* CTAs - Stacked for mobile touch targets, flex-row on desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto h-12 px-6 bg-cyber-neon-cyan text-cyber-bg font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded hover:bg-white transition-all duration-300 shadow-neon-glow hover:shadow-neon-glow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onRequestResume();
              }}
              className="w-full sm:w-auto h-12 px-6 bg-cyber-surface border border-cyber-border hover:border-cyber-electric-blue text-cyber-neon-cyan font-mono text-xs sm:text-sm tracking-wider uppercase rounded transition-all duration-300 hover:text-white flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(0,245,255,0.15)] active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV [VER_2025]</span>
            </button>
          </div>

          {/* 3-Column Metrics Dashboard */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-cyber-border/70 font-mono">
            <div className="bg-[#101d28] p-2.5 sm:p-3 rounded border border-cyber-border/60 flex flex-col items-center justify-center text-center shadow-md">
              <span className="text-xl sm:text-2xl font-bold text-cyber-neon-cyan">3+ YRS</span>
              <span className="text-[10px] sm:text-xs text-cyber-muted uppercase mt-0.5">Coding Exp</span>
            </div>
            <div className="bg-[#101d28] p-2.5 sm:p-3 rounded border border-cyber-border/60 flex flex-col items-center justify-center text-center shadow-md">
              <span className="text-xl sm:text-2xl font-bold text-cyber-electric-blue">15+</span>
              <span className="text-[10px] sm:text-xs text-cyber-muted uppercase mt-0.5">Repos Shipped</span>
            </div>
            <div className="bg-[#101d28] p-2.5 sm:p-3 rounded border border-cyber-border/60 flex flex-col items-center justify-center text-center shadow-md">
              <span className="text-xl sm:text-2xl font-bold text-emerald-400">100%</span>
              <span className="text-[10px] sm:text-xs text-cyber-muted uppercase mt-0.5">Sec Safety</span>
            </div>
          </div>
        </div>

        {/* Right Terminal Mockup (Interactive Shell) */}
        <div className="lg:col-span-5">
          <div className="relative group">
            {/* Glow background effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-neon-cyan/25 to-cyber-electric-blue/25 rounded-xl blur-lg group-hover:opacity-100 transition duration-1000"></div>

            {/* Terminal Box */}
            <div className="relative rounded-xl bg-cyber-card border border-cyber-border overflow-hidden shadow-2xl">
              {/* Window Bar */}
              <div className="bg-cyber-surface px-4 py-2.5 border-b border-cyber-border flex items-center justify-between select-none">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-cyber-neon-cyan"></div>
                  <span className="ml-2 font-mono text-xs text-cyber-muted">bash: alex@cyber-core:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyber-neon-cyan/80">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">ARCH-x86_64</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2.5 bg-[#060A10]/95 min-h-[300px] max-h-[420px] overflow-y-auto text-cyber-muted relative">
                <div className="text-cyber-muted">
                  <span className="text-cyber-neon-cyan font-bold">root@core</span>:
                  <span className="text-cyber-electric-blue">~</span># cat profile.config
                </div>
                <div className="pl-3 border-l-2 border-cyber-border space-y-0.5 text-cyber-text/90 text-xs">
                  <p><span className="text-cyber-electric-blue">name:</span> &quot;Alexander Nguyen&quot;</p>
                  <p><span className="text-cyber-electric-blue">role:</span> &quot;Software Developer&quot;</p>
                  <p><span className="text-cyber-electric-blue">status:</span> &quot;Ready for Collaboration&quot;</p>
                </div>

                <div className="pt-1 text-cyber-muted">
                  <span className="text-cyber-neon-cyan font-bold">root@core</span>:
                  <span className="text-cyber-electric-blue">~</span># nmap -sV --script vuln localhost
                </div>
                <div className="text-xs text-cyber-neon-cyan/90 pl-3 border-l-2 border-emerald-500/40 space-y-0.5">
                  <p className="text-emerald-400 font-bold">[+] 0 Critical Vulnerabilities detected.</p>
                  <p className="text-cyber-muted text-[11px]">// Node defense score: 99.4% optimal</p>
                </div>

                {/* History commands */}
                {history.map((item, idx) => (
                  <div key={idx} className="pt-2">
                    <div className="flex items-center gap-2 text-cyber-muted">
                      <span className="text-cyber-neon-cyan font-bold">alex@core:~$</span>
                      <span className="text-white font-mono">{item.cmd}</span>
                    </div>
                    <div className="mt-1 pl-3 border-l border-cyber-neon-cyan/40 text-xs font-mono">
                      {item.res}
                    </div>
                  </div>
                ))}

                {/* Interactive Terminal Input */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 text-cyber-text">
                    <span className="text-cyber-neon-cyan font-bold">$</span>
                    <input
                      type="text"
                      value={termInput}
                      onChange={(e) => setTermInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="type 'help', 'skills' or 'projects'..."
                      className="bg-transparent border-none text-cyber-neon-cyan focus:outline-none w-full text-xs font-mono placeholder:text-cyber-muted/50"
                    />
                  </div>
                </div>

                <div ref={terminalEndRef} />
              </div>

              {/* Interactive touch chips for mobile & desktop */}
              <div className="p-3 bg-[#101d28] border-t border-cyber-border flex flex-wrap gap-2 items-center">
                <span className="font-mono text-[11px] text-cyber-muted uppercase mr-1">// EXECUTE:</span>
                {['help', 'skills', 'projects', 'contact'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2.5 py-1 rounded bg-[#1f2b37] text-cyber-neon-cyan font-mono text-xs font-medium hover:bg-cyber-neon-cyan hover:text-[#05070A] active:scale-95 transition-all border border-cyber-border"
                  >
                    [{cmd}]
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
