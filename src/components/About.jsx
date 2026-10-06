import React from 'react';
import { UserCheck, Globe2, Server, Smartphone, Zap, Award, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Globe2,
      title: "Global On-Site Deployments",
      description: "Proven track record executing international software integration, commissioning, and client training across Germany, Luxembourg, and the Philippines."
    },
    {
      icon: Server,
      title: "Scalable Microservices",
      description: "Specialized in .NET Core, C#, REST APIs, and background worker services designed for high reliability in heavy manufacturing environments."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Mobile",
      description: "Engineering field technician apps in React Native featuring camera photo verification, local data persistence, and offline sync."
    },
    {
      icon: Zap,
      title: "Industrial Telemetry & OT",
      description: "Connecting Level 1 & Level 2 plant equipment using InfluxDB time-series metrics, OPC servers, and custom Grafana Scene Plugins."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Professional Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            About <span className="gradient-text">Himanshu Gaur</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Architecting robust industrial software solutions and digitalizing heavy manufacturing workflows.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Summary Card (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono text-sm">01</span>
                Full Stack & Plant Digitalization Lead
              </h3>
              
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {personalDetails.summary}
              </p>

              <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-800/40 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  <Award className="w-4 h-4" />
                  <span>Key Value Proposition</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Bridging Operational Technology (OT) and Information Technology (IT) to modernize heavy industrial machinery, reduce downtime, and drive real-time operational efficiency.
                </p>
              </div>

              {/* Bulleted Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Industrial Plant Digitalization",
                  "Cross-Platform Mobile Apps",
                  "OPC Server & Time-Series Integration",
                  "OAuth2 / Azure AD Security",
                  "Custom Grafana Plugin SDK",
                  "xUnit & Automated Testing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span>Based in Delhi, India</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Available for Global Projects</span>
            </div>
          </div>

          {/* Pillars Grid Cards (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
