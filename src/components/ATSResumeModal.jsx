import React, { useState } from 'react';
import { X, Copy, Check, Printer, Download, Sparkles, FileText } from 'lucide-react';
import { personalDetails, skillsData, experienceData, projectsData, educationData } from '../data/portfolioData';

export default function ATSResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate plain text version for instant ATS copy
  const getPlainATSContent = () => {
    return `==================================================
${personalDetails.name.toUpperCase()}
${personalDetails.title.toUpperCase()}
==================================================
Contact Info:
- Location: ${personalDetails.contact.location}
- Phone: ${personalDetails.contact.phone}
- Email: ${personalDetails.contact.email}
- LinkedIn: ${personalDetails.contact.linkedin}
- GitHub: ${personalDetails.contact.github}

--------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------
${personalDetails.summary}

--------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------
${skillsData.map(group => `${group.category.toUpperCase()}: ${group.skills.join(', ')}`).join('\n')}

--------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------
${experienceData.map(exp => `
${exp.role.toUpperCase()}
${exp.company} | ${exp.location}
${exp.duration}
Key Achievements:
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

--------------------------------------------------
KEY PROJECTS
--------------------------------------------------
${projectsData.map(proj => `
- ${proj.title}: ${proj.description}
  Impact: ${proj.impact}
  Technologies: ${proj.techStack.join(', ')}
`).join('\n')}

--------------------------------------------------
EDUCATION & HONORS
--------------------------------------------------
- Degree: ${educationData.degree} (${educationData.year}) | Grade: ${educationData.grade}
- Award: ${educationData.awards[0].title} (${educationData.awards[0].issuer})
  Description: ${educationData.awards[0].description}
==================================================`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getPlainATSContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">
                ATS-Optimized Resume View
              </h3>
              <p className="text-xs text-slate-400">
                Clean, single-column parsable text layout for recruiters and HR portals
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Printable ATS Layout */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-slate-200 bg-slate-900 text-sm leading-relaxed">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-4">
            <h1 className="text-2xl font-bold text-white tracking-wide">{personalDetails.name}</h1>
            <p className="text-indigo-400 font-semibold">{personalDetails.title}</p>
            <p className="text-xs text-slate-400 mt-1">
              {personalDetails.contact.location} | {personalDetails.contact.phone} | {personalDetails.contact.email}
            </p>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
              Professional Summary
            </h2>
            <p className="text-slate-300">{personalDetails.summary}</p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Technical Core Competencies
            </h2>
            <div className="space-y-1 text-xs">
              {skillsData.map((cat, idx) => (
                <div key={idx}>
                  <strong className="text-white">{cat.category}: </strong>
                  <span className="text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
              Work Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between font-bold text-white">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="text-xs font-mono text-indigo-400">{exp.duration}</span>
                </div>
                <div className="text-xs text-slate-400 mb-2">{exp.location}</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-2">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
              Key Industrial Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <strong className="text-white">{proj.title}</strong> — <span className="text-slate-300">{proj.description}</span>
                  <div className="text-slate-400">Impact: {proj.impact}</div>
                  <div className="text-indigo-300">Stack: {proj.techStack.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Education & Recognitions
            </h2>
            <div className="text-xs text-slate-300">
              <div><strong className="text-white">{educationData.degree}</strong> ({educationData.year}) | Grade: {educationData.grade}</div>
              <div className="mt-1"><strong className="text-white">Award:</strong> {educationData.awards[0].title} — {educationData.awards[0].description}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
