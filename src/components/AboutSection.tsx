import React from 'react';
import { Target, Layers, Cpu, Globe2, CheckCircle2, Shield, Eye } from 'lucide-react';

interface AboutSectionProps {
  accentColor1: string;
  accentColor2: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  accentColor1,
  accentColor2,
}) => {
  const pillars = [
    {
      icon: Target,
      title: 'Opportunity Discovery',
      desc: 'Centralized curation of funded fellowships, moonshot research grants, and high-altitude flight allocations for deep-tech engineers.',
    },
    {
      icon: Layers,
      title: 'Modular Infrastructure',
      desc: 'Architected with strict functional boundaries, real-time telemetry APIs, and lightweight high-performance rendering layers.',
    },
    {
      icon: Cpu,
      title: 'Deep Tech Acceleration',
      desc: 'Direct testbed access for cryogenic quantum annealers, autonomous drone swarms, and sub-orbital atmospheric payloads.',
    },
    {
      icon: Globe2,
      title: 'Global Cohort Reach',
      desc: 'Cross-border collaboration between university research labs, independent inventors, and advanced commercial consortiums.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#545454]/25 dark:border-[#545454]/50 bg-white dark:bg-[#0c0c0c] mb-4 shadow-sm">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accentColor2 }}
            />
            <span className="font-body text-xs text-[#545454] dark:text-[#A6A6A6] tracking-wider uppercase">
              Architecture & Vision
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1E1E1E] dark:text-white mb-6">
            A Purpose-Built Engine For Groundbreaking Endeavors
          </h2>

          <p className="font-body text-base sm:text-lg text-[#545454] dark:text-[#A6A6A6] leading-relaxed">
            ASCENT is structured around an uncompromising standard: remove clutter, maximize
            clarity, and give builders direct access to the frontier of scientific and engineering
            endeavors. We bridge pure research with real-world deployment.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isBlue = idx % 2 === 0;
            return (
              <div
                key={pillar.title}
                className="group relative p-6 rounded-2xl border border-[#545454]/20 dark:border-[#545454]/40 bg-white dark:bg-[#080808]/80 backdrop-blur-md transition-all duration-300 hover:border-[#D4A373] dark:hover:border-[#A6A6A6] hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors border border-[#545454]/20 dark:border-[#545454]/50 bg-[#FAF8F5] dark:bg-[#121212]"
                  style={{
                    color: isBlue ? accentColor1 : accentColor2,
                  }}
                >
                  <Icon size={20} />
                </div>

                <h3 className="font-heading text-base font-bold uppercase text-[#1E1E1E] dark:text-white mb-2 tracking-wide">
                  {pillar.title}
                </h3>

                <p className="font-body text-sm text-[#545454] dark:text-[#A6A6A6] leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Subtle bottom edge accent on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                  style={{ backgroundColor: isBlue ? accentColor1 : accentColor2 }}
                />
              </div>
            );
          })}
        </div>

        {/* System Design Philosophy Highlight Card */}
        <div className="rounded-2xl border border-[#545454]/25 dark:border-[#545454]/50 bg-gradient-to-r from-white via-[#FAF8F5] to-white dark:from-[#0c0c0c] dark:via-[#111111] dark:to-[#0c0c0c] p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-sm dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-body text-xs uppercase tracking-widest text-[#545454] dark:text-[#A6A6A6] block">
                Technical Blueprint
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#1E1E1E] dark:text-white">
                Engineered for Reliability & Uncompromised Focus
              </h3>
              <p className="font-body text-sm sm:text-base text-[#545454] dark:text-[#A6A6A6] leading-relaxed">
                Following our core principles, 3D/WebGL experiences serve as progressive
                enhancement for storytelling without ever degrading load velocity or accessibility.
                From mobile screens to ultra-wide displays, every element remains mathematically
                proportioned and responsive.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3 font-body text-xs text-[#545454] dark:text-[#A6A6A6]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#545454]/20 dark:border-[#545454]/40 bg-[#FAF8F5] dark:bg-[#0a0a0a]">
                <CheckCircle2 size={16} style={{ color: accentColor1 }} />
                <span className="text-[#1E1E1E] dark:text-white font-medium">Progressive 3D Enhancement</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#545454]/20 dark:border-[#545454]/40 bg-[#FAF8F5] dark:bg-[#0a0a0a]">
                <Shield size={16} style={{ color: accentColor2 }} />
                <span className="text-[#1E1E1E] dark:text-white font-medium">Monochrome Contrast System</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#545454]/20 dark:border-[#545454]/40 bg-[#FAF8F5] dark:bg-[#0a0a0a]">
                <Eye size={16} className="text-[#1E1E1E] dark:text-white" />
                <span className="text-[#1E1E1E] dark:text-white font-medium">Zero-Clutter Visual Ergonomics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
