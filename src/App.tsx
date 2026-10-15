/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SystemBar } from './components/SystemBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { MatrixRain } from './components/MatrixRain';
import { MobileDrawer } from './components/MobileDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [glowActive, setGlowActive] = useState(true);
  const [matrixActive, setMatrixActive] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Modals
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'details' | 'code'>('details');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Mouse tracker for ambient glow cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowActive) return;
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [glowActive]);

  const handleOpenProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setModalMode('details');
  };

  const handleOpenProjectCode = (project: Project) => {
    setSelectedProject(project);
    setModalMode('code');
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) {
      handleOpenProjectDetails(found);
    }
  };

  return (
    <div className="bg-cyber-bg text-cyber-text font-sans antialiased selection:bg-cyber-neon-cyan selection:text-cyber-bg relative min-h-screen overflow-x-hidden flex flex-col">
      {/* Matrix rain canvas */}
      <MatrixRain active={matrixActive} />

      {/* Ambient Grid Background */}
      <div className="fixed inset-0 cyber-grid-bg pointer-events-none z-0"></div>

      {/* Ambient Glow Gradients */}
      {glowActive && (
        <>
          <div className="fixed top-[-15%] left-[20%] w-[600px] h-[600px] bg-cyber-electric-blue/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
          <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyber-neon-cyan/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

          {/* Interactive Cursor Light (desktop only) */}
          <div
            className="fixed w-72 h-72 rounded-full bg-cyber-neon-cyan/5 blur-3xl pointer-events-none z-10 glow-dot -translate-x-1/2 -translate-y-1/2 hidden md:block"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          ></div>
        </>
      )}

      {/* System Ticker / Top Bar (Desktop & Tablet) */}
      <div className="hidden sm:block">
        <SystemBar
          glowActive={glowActive}
          onToggleGlow={() => setGlowActive(!glowActive)}
          matrixActive={matrixActive}
          onToggleMatrix={() => setMatrixActive(!matrixActive)}
        />
      </div>

      {/* Primary Sticky Header */}
      <Navbar
        onOpenDrawer={() => setDrawerOpen(true)}
        onRequestResume={() => setIsResumeOpen(true)}
      />

      {/* Mobile Slide-out Drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onRequestResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-40 pb-20 md:pb-28 flex-1 w-full">
        {/* Section // 01: Hero & Terminal */}
        <Hero
          onRequestResume={() => setIsResumeOpen(true)}
          onOpenProject={handleOpenProjectById}
        />

        {/* Section // 02: About Me */}
        <AboutSection onRequestResume={() => setIsResumeOpen(true)} />

        {/* Section // 03: Technical Skills */}
        <SkillsSection />

        {/* Section // 04: Featured Projects */}
        <ProjectsSection
          onOpenProjectDetails={handleOpenProjectDetails}
          onOpenProjectCode={handleOpenProjectCode}
          onShowToast={showToast}
        />

        {/* Section // 05: Journey & Education */}
        <TimelineSection />

        {/* Section // 06: Contact Form & Transmission */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Fixed Nav Bar */}
      <MobileBottomNav />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        mode={modalMode}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 bg-cyber-card border border-cyber-neon-cyan text-white px-4 py-3 md:px-5 md:py-4 rounded-lg shadow-neon-glow font-mono text-xs flex items-center gap-3 animate-in slide-in-from-bottom duration-200">
          <span className="w-2 h-2 rounded-full bg-cyber-neon-cyan animate-ping shrink-0"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
