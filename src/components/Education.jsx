import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, Trophy, Star } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Awards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Education & <span className="gradient-text">Recognitions</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Academic achievements and professional honors awarded for software excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Education Card */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {educationData.degree}
                    </h3>
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      Computer Science & Engineering
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{educationData.year}</span>
                </div>
              </div>

              {/* Grade CPI Badge */}
              <div className="p-4 rounded-xl gradient-badge flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-[var(--text-secondary)]">Cumulative Performance Index</span>
                  <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {educationData.grade}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  First Class Distinction
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                {educationData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] flex items-center justify-between">
              <span>Degree Verified</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Computer Science Dept</span>
            </div>
          </div>

          {/* Awards Card */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      Corporate Honor
                    </h3>
                    <p className="text-xs font-medium text-amber-500">
                      SMS Group Recognition
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                  Excellence Award
                </span>
              </div>

              {educationData.awards.map((award, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-bold text-[var(--text-primary)]">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span>{award.title}</span>
                  </div>
                  
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    Issued by: {award.issuer}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-[var(--border-color)]">
                    "{award.description}"
                  </p>
                </div>
              ))}

            </div>

            <div className="pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] flex items-center justify-between">
              <span>Industrial Digitalization</span>
              <span className="font-semibold text-amber-500">Certificate of Merit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
