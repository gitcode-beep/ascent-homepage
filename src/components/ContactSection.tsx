import React, { useState } from 'react';
import { Mail, MapPin, ShieldCheck, Send, CheckCircle2, Globe, Clock, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  accentColor1: string;
  accentColor2: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  accentColor1,
  accentColor2,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Research Collaboration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="contacts" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-slate-200 dark:border-[#545454]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300/80 dark:border-[#545454]/50 bg-white/80 dark:bg-[#0c0c0c] mb-4 shadow-sm">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentColor1 }}
              />
              <span className="font-body text-xs text-slate-600 dark:text-[#A6A6A6] tracking-wider uppercase">
                Direct Channels & Communications
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
              Connect With ASCENT
            </h2>
          </div>
          <p className="font-body text-sm text-slate-600 dark:text-[#A6A6A6] max-w-md">
            Direct channels for research consortiums, academic fellowships, hardware demonstrations, and strategic sovereign partnerships.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#070707]/90 backdrop-blur-xl p-6 sm:p-8 shadow-sm dark:shadow-none">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm"
                  style={{
                    backgroundColor: `${accentColor1}15`,
                    borderColor: accentColor1,
                    color: accentColor1,
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-900 dark:text-white">
                  Transmission Dispatched
                </h3>
                <p className="font-body text-sm text-slate-600 dark:text-[#A6A6A6] max-w-sm">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. Your inquiry has been routed to the appropriate department coordinator. A response will be dispatched within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="font-button text-xs font-bold px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#EAE4D9] transition-all mt-4 shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={16} style={{ color: accentColor1 }} />
                  <h3 className="font-heading text-base font-bold uppercase text-slate-900 dark:text-white">
                    Send Direct Inquiry
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 dark:text-[#A6A6A6] uppercase tracking-wider text-[10px] mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Elena Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-300 dark:border-[#545454]/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-[#545454] focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors text-xs font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-[#A6A6A6] uppercase tracking-wider text-[10px] mb-1.5 font-semibold">
                      Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@laboratory.org"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-300 dark:border-[#545454]/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-[#545454] focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors text-xs font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-[#A6A6A6] uppercase tracking-wider text-[10px] mb-1.5 font-semibold">
                    Inquiry Classification
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-300 dark:border-[#545454]/50 text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors text-xs font-body"
                  >
                    <option value="Research Collaboration">Research Collaboration & Joint Labs</option>
                    <option value="Fellowship & Grants">ASCENT Fellowships & Accelerator Grants</option>
                    <option value="Hardware Evaluation">3D Lab & Hardware Specification Access</option>
                    <option value="Media & Press">Media, Press & Symposium Inquiries</option>
                    <option value="General">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-[#A6A6A6] uppercase tracking-wider text-[10px] mb-1.5 font-semibold">
                    Message / Technical Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your initiative, technology domain, or proposed collaboration..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-300 dark:border-[#545454]/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-[#545454] focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors resize-none text-xs font-body"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-[#A6A6A6]">
                    <ShieldCheck size={13} style={{ color: accentColor2 }} />
                    <span>256-bit encrypted transmission channel</span>
                  </div>

                  <button
                    type="submit"
                    className="font-button text-xs font-bold px-6 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#EAE4D9] transition-all flex items-center gap-2 shadow-sm active:scale-95"
                  >
                    <span>Transmit Message</span>
                    <Send size={13} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Key Contacts & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Hub Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#080808]/90 backdrop-blur-xl shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center border"
                  style={{
                    backgroundColor: `${accentColor1}15`,
                    borderColor: `${accentColor1}40`,
                    color: accentColor1,
                  }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-slate-900 dark:text-white">
                    Consortium Headquarters
                  </h4>
                  <p className="font-body text-[11px] text-slate-500 dark:text-[#A6A6A6]">
                    Global Research & Fabrication Cluster
                  </p>
                </div>
              </div>
              <p className="font-body text-xs text-slate-600 dark:text-[#A6A6A6] leading-relaxed">
                Campus Biotech, Chemin des Mines 9<br />
                1202 Geneva, Switzerland<br />
                <span className="text-[11px] text-slate-400 dark:text-[#777]">Secondary Node: Cambridge Innovation Center, MA, USA</span>
              </p>
            </div>

            {/* Direct Email Channels Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#080808]/90 backdrop-blur-xl shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center border"
                  style={{
                    backgroundColor: `${accentColor2}15`,
                    borderColor: `${accentColor2}40`,
                    color: accentColor2,
                  }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-slate-900 dark:text-white">
                    Electronic Dispatch
                  </h4>
                  <p className="font-body text-[11px] text-slate-500 dark:text-[#A6A6A6]">
                    Direct Inboxes by Department
                  </p>
                </div>
              </div>

              <div className="space-y-2 font-body text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#545454]/30">
                  <span className="text-slate-500 dark:text-[#A6A6A6]">Partnerships & Labs:</span>
                  <a
                    href="mailto:consortium@ascent-platform.org"
                    className="font-medium text-slate-900 dark:text-white hover:underline"
                  >
                    consortium@ascent-platform.org
                  </a>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#545454]/30">
                  <span className="text-slate-500 dark:text-[#A6A6A6]">Fellowships:</span>
                  <a
                    href="mailto:fellows@ascent-platform.org"
                    className="font-medium text-slate-900 dark:text-white hover:underline"
                  >
                    fellows@ascent-platform.org
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-[#A6A6A6]">Press & Media:</span>
                  <a
                    href="mailto:press@ascent-platform.org"
                    className="font-medium text-slate-900 dark:text-white hover:underline"
                  >
                    press@ascent-platform.org
                  </a>
                </div>
              </div>
            </div>

            {/* Protocol Guarantee Card */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-[#545454]/30 bg-slate-100/70 dark:bg-[#0c0c0c] flex items-center justify-between text-xs font-body text-slate-600 dark:text-[#A6A6A6]">
              <div className="flex items-center gap-2">
                <Clock size={14} style={{ color: accentColor1 }} />
                <span>Response SLA: &lt; 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} style={{ color: accentColor2 }} />
                <span>UTC Timezone Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
