import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Globe, Building2, ChevronRight, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Hands-on technical leadership in industrial digitalization and enterprise platform development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 pb-12 last:pb-0 group">
              
              {/* Vertical Line */}
              <div className="absolute left-2.5 sm:left-4 top-3 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/60 group-last:hidden"></div>

              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-1 top-2.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 shadow-md flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl space-y-6">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--text-secondary)] font-normal">
                        <MapPin className="w-4 h-4 text-indigo-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-[var(--text-primary)] border border-[var(--border-color)] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Key Achievements Bullet Grid */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    Key Accomplishments & Technical Deliverables
                  </h4>

                  <ul className="grid grid-cols-1 gap-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* International Deployments Highlight Banner */}
                <div className="p-4 rounded-xl gradient-badge flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[var(--text-primary)]">
                        International On-Site Engineering
                      </h5>
                      <p className="text-xs text-[var(--text-secondary)]">
                        Germany 🇩🇪 | Luxembourg 🇱🇺 | Philippines 🇵🇭
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    On-Site Integration & Client Training
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
