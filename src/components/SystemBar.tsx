import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

interface SystemBarProps {
  glowActive: boolean;
  onToggleGlow: () => void;
  matrixActive: boolean;
  onToggleMatrix: () => void;
}

export const SystemBar: React.FC<SystemBarProps> = ({
  glowActive,
  onToggleGlow,
  matrixActive,
  onToggleMatrix,
}) => {
  const [ping, setPing] = useState(14);
  const [soundOn, setSoundOn] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  // Live ping oscillation to feel like a real cyber monitoring system
  useEffect(() => {
    const pingInterval = setInterval(() => {
      setPing(Math.floor(12 + Math.random() * 5));
    }, 4000);
    return () => clearInterval(pingInterval);
  }, []);

  // Live Da Nang, VN (GMT+7) clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Ha_Noi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        };
        setTimeStr(now.toLocaleTimeString('en-US', options));
      } catch {
        setTimeStr(new Date().toTimeString().slice(0, 8));
      }
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    sound.setEnabled(next);
    if (next) {
      sound.playSuccess();
    }
  };

  return (
    <div className="relative z-50 border-b border-cyber-border/60 bg-cyber-bg/95 backdrop-blur text-xs font-mono py-1.5 px-4 md:px-8 flex flex-wrap justify-between items-center text-cyber-muted gap-2">
      <div className="flex items-center space-x-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-emerald-400 font-semibold tracking-wider">SYSTEM STATUS: OPTIMAL</span>
        <span className="hidden sm:inline text-cyber-border">|</span>
        <span className="hidden sm:inline hover:text-cyber-neon-cyan transition-colors cursor-default" title="Real-time Network Latency">
          PING: {ping}ms
        </span>
        <span className="hidden md:inline text-cyber-border">|</span>
        <span className="hidden md:inline text-cyber-muted/80">SECURITY PROTOCOL: v4.1.9 ENCRYPTED</span>
      </div>

      <div className="flex items-center space-x-3">
        {/* Sound FX Toggle */}
        <button
          onClick={toggleSound}
          title={soundOn ? 'Sound FX Enabled' : 'Click to enable cyberpunk sound FX'}
          className={`hover:text-cyber-neon-cyan transition-all flex items-center gap-1 text-[11px] border border-cyber-border px-2 py-0.5 rounded bg-cyber-surface/60 ${
            soundOn ? 'border-cyber-neon-cyan text-cyber-neon-cyan' : 'opacity-70 text-cyber-muted'
          }`}
        >
          {soundOn ? <Volume2 className="w-3 h-3 text-cyber-neon-cyan" /> : <VolumeX className="w-3 h-3" />}
          <span className="hidden sm:inline">{soundOn ? 'SFX: ON' : 'SFX: OFF'}</span>
        </button>

        {/* Glow FX Toggle */}
        <button
          onClick={() => {
            sound.playClick();
            onToggleGlow();
          }}
          className={`hover:text-cyber-neon-cyan transition-all flex items-center gap-1.5 text-[11px] border border-cyber-border px-2 py-0.5 rounded bg-cyber-surface/60 ${
            glowActive ? 'border-cyber-neon-cyan/50 text-cyber-neon-cyan' : 'opacity-60 text-cyber-muted'
          }`}
        >
          <Sparkles className="w-3 h-3 text-cyber-neon-cyan" />
          <span>{glowActive ? 'FX: GLOW ON' : 'FX: GLOW OFF'}</span>
        </button>

        {/* Matrix Rain Toggle */}
        <button
          onClick={() => {
            sound.playClick();
            onToggleMatrix();
          }}
          title="Toggle Background Matrix Rain"
          className={`hidden lg:flex items-center gap-1 text-[11px] border border-cyber-border px-2 py-0.5 rounded bg-cyber-surface/60 hover:text-emerald-400 transition-all ${
            matrixActive ? 'border-emerald-500/50 text-emerald-400' : 'opacity-60 text-cyber-muted'
          }`}
        >
          <Terminal className="w-3 h-3" />
          <span>{matrixActive ? 'MATRIX: ON' : 'MATRIX: OFF'}</span>
        </button>

        <span className="hidden lg:inline text-cyber-muted/80 border-l border-cyber-border pl-3">
          LOC: HUNG YEN, VN [{timeStr || 'GMT+7'}]
        </span>
      </div>
    </div>
  );
};
