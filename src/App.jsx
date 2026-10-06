import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ATSResumeModal from './components/ATSResumeModal';

/**
 * Main Application Component for Himanshu Gaur's Portfolio Website.
 * Serves as the central state controller for:
 * - Theme management (Dark / Light mode with local storage persistence)
 * - ATS-Friendly Resume Modal visibility
 * - Global smooth scroll behavior & section composition
 */
export default function App() {
  // Theme state: default to dark mode for high-tech industrial aesthetic
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true;
  });

  // Modal visibility state for clean ATS resume view
  const [isATSModalOpen, setIsATSModalOpen] = useState(false);

  // Sync dark mode class on root HTML element whenever darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      
      {/* Sticky Navigation Header with Dark Mode Toggle & ATS Modal Trigger */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenATSModal={() => setIsATSModalOpen(true)}
      />

      {/* Main Portfolio Content Sections */}
      <main>
        {/* 1. Hero / Header Introduction */}
        <Hero 
          onOpenATSModal={() => setIsATSModalOpen(true)} 
        />

        {/* 2. Professional Biography & International Experience */}
        <About />

        {/* 3. Categorized Technical Skills Grid with Filter Pills */}
        <SkillsSection />

        {/* 4. SMS Group Career History Timeline */}
        <Experience />

        {/* 5. Industrial Projects Showcase (CMMS, EAFXpert, Package Pulse) */}
        <Projects />

        {/* 6. Education & Corporate Recognitions */}
        <Education />

        {/* 7. Contact Form (EmailJS Ready) & Direct Links */}
        <Contact />
      </main>

      {/* Footer Component */}
      <Footer 
        onOpenATSModal={() => setIsATSModalOpen(true)} 
      />

      {/* ATS Resume Modal Component */}
      <ATSResumeModal 
        isOpen={isATSModalOpen} 
        onClose={() => setIsATSModalOpen(false)} 
      />

    </div>
  );
}
