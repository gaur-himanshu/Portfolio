import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

// EmailJS Configuration Placeholders
// Replace these with your actual keys from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_x8ngyto';
const EMAILJS_TEMPLATE_ID = 'template_jvxw81e';
const EMAILJS_PUBLIC_KEY = 'p7_b7hMr6OefdgkyM';

export default function Contact() {
  const formRef = useRef();
  
  // Submission States
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSuccess(false);

    // If keys are placeholders, handle gracefully or attempt send
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSending(false);
          setSuccess(true);
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (err) => {
          setSending(false);
          // If keys are placeholders, show helpful prompt or actual error text
          if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
            setSuccess(true); // Graceful fallback demo for testing UI
            if (formRef.current) formRef.current.reset();
          } else {
            setError(err?.text || 'Failed to send message. Please check EmailJS configuration.');
          }
        }
      );
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Contact <span className="gradient-text">Himanshu Gaur</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Open for technical consultations, engineering leadership roles, and full-stack projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--text-muted)]">Direct Email</span>
                  <div className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {personalDetails.contact.email}
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalDetails.contact.email, 'email')}
                className="p-2.5 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--text-muted)]">Phone / WhatsApp</span>
                  <div className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {personalDetails.contact.phone}
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalDetails.contact.phone, 'phone')}
                className="p-2.5 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--text-muted)]">Current Location</span>
                  <div className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {personalDetails.contact.location}
                  </div>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                Active
              </span>
            </div>

            {/* Social Connect Banner */}
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Professional Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-[var(--text-primary)] font-semibold text-xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalDetails.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-[var(--text-primary)] font-semibold text-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* EmailJS Contact Form Card (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              Send Direct Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">Your Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/80 border border-[var(--border-color)] focus:border-indigo-500 text-sm text-[var(--text-primary)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">Your Email *</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/80 border border-[var(--border-color)] focus:border-indigo-500 text-sm text-[var(--text-primary)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[var(--text-primary)]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/80 border border-[var(--border-color)] focus:border-indigo-500 text-sm text-[var(--text-primary)] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[var(--text-primary)]">Message *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Hello Himanshu, I would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/80 border border-[var(--border-color)] focus:border-indigo-500 text-sm text-[var(--text-primary)] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01]"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Feedback Notifications */}
              {success && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 text-xs sm:text-sm animate-fadeIn">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Your message was sent successfully! Himanshu will respond to your email soon.</span>
                </div>
              )}

              {error && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-500/30 text-rose-800 dark:text-rose-300 flex items-center gap-3 text-xs sm:text-sm animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
