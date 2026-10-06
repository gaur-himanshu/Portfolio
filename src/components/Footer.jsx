import React from 'react';
import { ArrowUp, Mail, Heart, FileText } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function Footer({ onOpenATSModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-slate-900 text-slate-300 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-base flex items-center justify-center">
              HG
            </div>
            <div>
              <div className="font-bold text-white text-base">
                {personalDetails.name}
              </div>
              <div className="text-xs text-slate-400">
                Full Stack & Service Platforms Engineer
              </div>
            </div>
          </div>

          {/* Nav & ATS Quick Trigger */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            <button
              onClick={onOpenATSModal}
              className="flex items-center gap-1 text-indigo-400 hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ATS Resume</span>
            </button>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.contact.email}`}
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Himanshu Gaur. All Rights Reserved.</span>
          <span className="flex items-center gap-1">
            Built with React.js & Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
}
