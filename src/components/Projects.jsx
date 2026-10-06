import React from 'react';
import { FolderGit2, ExternalLink, Cpu, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Github } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Industrial <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Selected engineering projects driving automation, telemetry, and operational efficiency.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6 group"
            >
              
              <div className="space-y-4">
                
                {/* Top Badge & Links */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full gradient-badge text-indigo-700 dark:text-indigo-300">
                    {project.badge}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveDemoUrl !== '#' && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label={`View Live Demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                  </h3>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Highlight Box */}
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-[var(--border-color)] flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Key Impact: </span>
                    <span className="text-[var(--text-secondary)]">{project.impact}</span>
                  </div>
                </div>

              </div>

              {/* Tech Stack Pills Footer */}
              <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1">
                  <Layers className="w-3 h-3 text-indigo-500" />
                  Architecture & Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--text-primary)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
