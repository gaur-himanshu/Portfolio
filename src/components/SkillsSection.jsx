import React, { useState } from 'react';
import { 
  Server, 
  Smartphone, 
  Terminal, 
  Database, 
  Activity, 
  BarChart3, 
  Cloud, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Clock,
  Award,
  CheckCircle2
} from 'lucide-react';

// Comprehensive Skills Dataset with category tags, proficiency, and 1-line practical usage context
export const detailedSkills = [
  {
    id: 'csharp-net',
    name: 'C# (.NET Core, ASP.NET Core)',
    category: 'Backend & .NET',
    level: '3+ Years • Expert',
    proficiency: 95,
    icon: Server,
    color: 'from-purple-500 to-indigo-600',
    context: 'Used to build scalable microservices, high-performance REST APIs, and enterprise CMMS backend.'
  },
  {
    id: 'react-native',
    name: 'React.js & React Native',
    category: 'Frontend & Mobile',
    level: '3+ Years • Advanced',
    proficiency: 90,
    icon: Smartphone,
    color: 'from-cyan-500 to-blue-600',
    context: 'Engineered cross-platform mobile apps for field technicians with offline sync & photo verification.'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend & .NET',
    level: '3+ Years • Proficient',
    proficiency: 85,
    icon: Terminal,
    color: 'from-amber-500 to-yellow-600',
    context: 'Developed background mail-parsing microservices (Package Pulse) and automation scripts.'
  },
  {
    id: 'relational-db',
    name: 'PostgreSQL & MSSQL',
    category: 'Databases & Analytics',
    level: '3+ Years • Advanced',
    proficiency: 90,
    icon: Database,
    color: 'from-blue-600 to-slate-700',
    context: 'Designed relational schemas, optimized complex SQL queries, and managed Entity Framework Core models.'
  },
  {
    id: 'time-series-opc',
    name: 'InfluxDB & APIs (Prediktor Edge)',
    category: 'Databases & Analytics',
    level: '2+ Years • Specialist',
    proficiency: 88,
    icon: Activity,
    color: 'from-emerald-500 to-teal-700',
    context: 'Captured high-frequency time-series Level 1 telemetry from industrial OPC servers for EAFXpert.'
  },
  {
    id: 'grafana-sdk',
    name: 'Grafana Scene Plugin SDK',
    category: 'Frontend & Mobile',
    level: '2+ Years • Specialist',
    proficiency: 85,
    icon: BarChart3,
    color: 'from-orange-500 to-amber-600',
    context: 'Built custom signed Grafana Scene Plugins for live operational delay tracking dashboards.'
  },
  {
    id: 'docker-cicd',
    name: 'Docker & GitHub Actions',
    category: 'DevOps & Cloud',
    level: '3+ Years • Advanced',
    proficiency: 87,
    icon: Cloud,
    color: 'from-sky-500 to-indigo-700',
    context: 'Containerized .NET/Python microservices and established automated CI/CD deployment pipelines.'
  },
  {
    id: 'azure-ad',
    name: 'Azure AD (OAuth2)',
    category: 'DevOps & Cloud',
    level: '2+ Years • Proficient',
    proficiency: 82,
    icon: ShieldCheck,
    color: 'from-blue-500 to-cyan-700',
    context: 'Implemented secure enterprise OAuth2 authentication for automated logistics mail-parsing services.'
  },
  {
    id: 'ai-tools',
    name: 'GitHub Copilot & LLMs',
    category: 'AI & Tools',
    level: '2+ Years • Practitioner',
    proficiency: 92,
    icon: Sparkles,
    color: 'from-pink-500 to-purple-600',
    context: 'Leveraged AI prompt engineering and Copilot for rapid prototyping, unit testing, and code optimization.'
  }
];

export const filterCategories = [
  "All",
  "Backend & .NET",
  "Frontend & Mobile",
  "Databases & Analytics",
  "DevOps & Cloud",
  "AI & Tools"
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? detailedSkills
    : detailedSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      
      {/* Background Glow Blobs */}
      <div className="blob-indigo top-20 right-10 opacity-60"></div>
      <div className="blob-cyan bottom-10 left-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold gradient-badge text-indigo-700 dark:text-indigo-300">
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Technical <span className="gradient-text">Skills & Stack</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Hands-on expertise across backend microservices, real-time industrial telemetry, mobile applications, and cloud DevOps.
          </p>
        </div>

        {/* 1. Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 transform active:scale-95 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-[var(--text-secondary)] hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 2. Skills Card Grid with smooth transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between space-y-5 group transition-all duration-300 hover:shadow-xl"
              >
                <div className="space-y-4">
                  
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800/90 text-indigo-600 dark:text-indigo-400 border border-[var(--border-color)]">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Experience Level & Proficiency */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-indigo-500" />
                        {skill.level}
                      </span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Proficiency Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Brief 1-Line Context */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                    "{skill.context}"
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                  <span className="flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Production Validated
                  </span>
                  <span className="font-mono uppercase tracking-wider">Industrial IT</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
