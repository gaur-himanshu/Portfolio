import React from 'react';
import { Mail, Phone, MapPin, Download, Send, ArrowRight, ShieldCheck, Sparkles, Globe, Terminal } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

/**
 * Hero Component:
 * - Presents Himanshu Gaur's headline, title, and tagline
 * - Functional Download Resume link targeting /Himanshu_Gaur_Resume.pdf
 * - Social Links (GitHub & LinkedIn) with target="_blank" and rel="noopener noreferrer"
 * - Interactive Code Showcase Window with key metrics
 */
export default function Hero({ onOpenATSModal }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Glow Effect Blobs */}
      <div className="blob-indigo top-10 left-1/4 -translate-x-1/2"></div>
      <div className="blob-cyan top-40 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Hero Content Column */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold gradient-badge text-indigo-700 dark:text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Full Stack & Service Platforms Engineer</span>
            </div>

            {/* Main Headline & Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                {personalDetails.title}
              </p>
            </div>

            {/* Subtitle / Tagline */}
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalDetails.tagline}
            </p>

            {/* Quick Contact Info Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[var(--text-secondary)] pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-[var(--border-color)]">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>{personalDetails.contact.location}</span>
              </div>

              <a 
                href={`tel:${personalDetails.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-[var(--border-color)] hover:border-indigo-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-indigo-500" />
                <span>{personalDetails.contact.phone}</span>
              </a>

              <a 
                href={`mailto:${personalDetails.contact.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-[var(--border-color)] hover:border-indigo-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>{personalDetails.contact.email}</span>
              </a>
            </div>

            {/* CTAs: Contact Me, Download Resume & Social Icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              
              {/* Primary Contact CTA */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition-all"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4" />
              </a>

              {/* Functional Resume Download Link */}
              <a
                href="/Himanshu_Gaur_Resume.pdf"
                download="Himanshu_Gaur_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-indigo-500/40 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all hover:scale-[1.02]"
                title="Download Himanshu Gaur's Resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Verified Social Media Links */}
              <div className="flex items-center gap-2 pl-2">
                {/* GitHub */}
                <a
                  href={personalDetails.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalDetails.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Code Showcase & Metrics */}
          <div className="w-full lg:w-[480px]">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  <span className="text-xs font-mono text-[var(--text-muted)] ml-2">engineer_profile.cs</span>
                </div>
                <Terminal className="w-4 h-4 text-indigo-500" />
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-950 text-slate-100 p-4 rounded-xl shadow-inner overflow-x-auto">
                <div><span className="text-purple-400">public class</span> <span className="text-amber-300">SoftwareEngineer</span></div>
                <div className="pl-4"><span className="text-sky-400">public string</span> Name = <span className="text-emerald-300">"{personalDetails.name}"</span>;</div>
                <div className="pl-4"><span className="text-sky-400">public string[]</span> CoreStack = {"{"}</div>
                <div className="pl-8 text-emerald-300">".NET Core", "C#", "React", "React Native", "PostgreSQL"</div>
                <div className="pl-4">{"};"}</div>
                <div className="pl-4"><span className="text-sky-400">public string[]</span> Deployments = {"{"}</div>
                <div className="pl-8 text-emerald-300">"Germany 🇩🇪", "Luxembourg 🇱🇺", "Philippines 🇵🇭"</div>
                <div className="pl-4">{"};"}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {personalDetails.stats.map((stat, index) => (
                  <div key={index} className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-[var(--border-color)]">
                    <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-[var(--text-primary)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  SMS Group Lead Engineer
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-indigo-500" />
                  Industrial Digitalization
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
