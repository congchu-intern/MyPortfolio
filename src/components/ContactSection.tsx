import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Check, Copy, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast('Direct email copied to clipboard.');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      sound.playError();
      setStatusMessage({
        type: 'error',
        text: '[ERROR] Please fill out all required fields before transmission.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      sound.playError();
      setStatusMessage({
        type: 'error',
        text: '[ERROR] Invalid email address format. Please provide a valid address.',
      });
      return;
    }

    sound.playClick();
    setIsSubmitting(true);
    setStatusMessage(null);

    setTimeout(() => {
      sound.playSuccess();
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: `[TRANSMISSION DISPATCHED] Thank you, ${name}! Your transmission has been verified and queued for dispatch to ${PERSONAL_INFO.email}.`,
      });
      onShowToast(`Transmission from ${name} successfully logged.`);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="p-5 sm:p-10 lg:p-16 rounded-2xl bg-cyber-card border border-cyber-border relative overflow-hidden shadow-2xl">
        {/* Background ambient accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyber-neon-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyber-electric-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          {/* Header & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest">
              <span>// 05. TRANSMISSION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              LET'S BUILD SOMETHING GREAT.
            </h2>
            <p className="text-cyber-muted text-xs sm:text-base leading-relaxed">
              Have an open developer role, vulnerability to solve, or a software engineering challenge? Initialize contact uplink below.
            </p>

            {/* Direct Contact Badges (Visible on desktop & mobile) */}
            <div className="flex flex-col gap-2 pt-2 font-mono">
              <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-between">
                <div className="flex items-center gap-2.5 truncate mr-2">
                  <Mail className="w-4 h-4 text-cyber-neon-cyan shrink-0" />
                  <span className="text-xs sm:text-sm text-cyber-text truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-1.5 rounded hover:bg-cyber-card text-cyber-muted hover:text-cyber-neon-cyan transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-neon-cyan text-cyber-muted hover:text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all"
                >
                  <Github className="w-4 h-4 text-cyber-electric-blue" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-neon-cyan text-cyber-muted hover:text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyber-neon-cyan" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-7 rounded-xl bg-cyber-surface/90 border border-cyber-border space-y-4 font-mono shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-cyber-border/60 pb-2">
                <span className="text-xs uppercase text-cyber-neon-cyan tracking-wider font-bold">
                  TRANSMISSION_PROTOCOL.FORM
                </span>
                <span className="text-[10px] text-cyber-muted flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SANITIZED
                </span>
              </div>

              <div>
                <label htmlFor="nameInput" className="block text-[11px] sm:text-xs uppercase tracking-wider text-cyber-muted mb-1.5">
                  YOUR NAME / COMPANY_
                </label>
                <input
                  id="nameInput"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Satoshi Nakamoto"
                  className="w-full bg-[#050910] border border-cyber-border focus:border-cyber-neon-cyan rounded px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-cyber-muted/40 focus:outline-none transition-all shadow-inner font-sans"
                />
              </div>

              <div>
                <label htmlFor="emailInput" className="block text-[11px] sm:text-xs uppercase tracking-wider text-cyber-muted mb-1.5">
                  EMAIL ADDRESS_
                </label>
                <input
                  id="emailInput"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="congngungo2005@gmail.com"
                  className="w-full bg-[#050910] border border-cyber-border focus:border-cyber-neon-cyan rounded px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-cyber-muted/40 focus:outline-none transition-all shadow-inner font-sans"
                />
              </div>

              <div>
                <label htmlFor="messageInput" className="block text-[11px] sm:text-xs uppercase tracking-wider text-cyber-muted mb-1.5">
                  PROJECT BRIEF / MESSAGE_
                </label>
                <textarea
                  id="messageInput"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="State your requirements or engineering challenge..."
                  className="w-full bg-[#050910] border border-cyber-border focus:border-cyber-neon-cyan rounded px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-cyber-muted/40 focus:outline-none transition-all shadow-inner resize-y font-sans"
                ></textarea>
              </div>

              {statusMessage && (
                <div
                  className={`p-3 rounded text-xs leading-relaxed border ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                      : 'bg-red-950/80 border-red-500 text-red-200'
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded bg-cyber-neon-cyan text-[#05070A] font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:bg-white active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'DISPATCHING TRANSMISSION...' : 'SEND TRANSMISSION >>'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
