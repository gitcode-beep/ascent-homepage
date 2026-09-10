import React from 'react';
import { ACHIEVEMENTS } from '../data/platformData';
import { Trophy, CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';

interface AchievementsSectionProps {
  accentColor1: string;
  accentColor2: string;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  accentColor1,
  accentColor2,
}) => {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-slate-200 dark:border-[#545454]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300/80 dark:border-[#545454]/50 bg-white/80 dark:bg-[#0c0c0c] mb-4 shadow-sm">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accentColor1 }}
            />
            <span className="font-body text-xs text-slate-600 dark:text-[#A6A6A6] tracking-wider uppercase">
              Milestones & Global Impact
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white mb-4">
            Verified Achievements
          </h2>

          <p className="font-body text-base text-slate-600 dark:text-[#A6A6A6] leading-relaxed">
            Quantified breakthroughs from ASCENT innovation clusters deployed across defense,
            commercial aviation, and sovereign quantum research initiatives.
          </p>
        </div>

        {/* 4 Large Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ACHIEVEMENTS.map((item, idx) => {
            const isBlue = idx % 2 === 0;
            const accentColor = isBlue ? accentColor1 : accentColor2;

            return (
              <div
                key={item.id}
                className="group relative p-7 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#080808]/90 backdrop-blur-xl transition-all duration-300 hover:border-slate-400 dark:hover:border-[#A6A6A6] shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between"
              >
                <div>
                  {/* Category & Year */}
                  <div className="flex items-center justify-between text-xs font-body text-slate-500 dark:text-[#A6A6A6] mb-4">
                    <span>{item.highlightCategory}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#161616] border border-slate-200 dark:border-[#545454]/30 font-mono text-[10px] text-slate-600 dark:text-[#A6A6A6]">
                      {item.milestoneYear}
                    </span>
                  </div>

                  {/* Big Number */}
                  <div className="font-heading text-4xl sm:text-5xl font-extrabold uppercase mb-2 tracking-tight text-slate-900 dark:text-white">
                    {item.metric}
                  </div>

                  {/* Label */}
                  <h3 className="font-heading text-sm font-bold uppercase text-slate-900 dark:text-white mb-2">
                    {item.label}
                  </h3>

                  {/* Descriptor */}
                  <p className="font-body text-xs text-slate-600 dark:text-[#A6A6A6] leading-relaxed">
                    {item.descriptor}
                  </p>
                </div>

                {/* Accent line at bottom */}
                <div
                  className="mt-6 pt-3 border-t border-slate-200 dark:border-[#545454]/30 flex items-center justify-between text-[11px] font-body text-slate-500 dark:text-[#A6A6A6]"
                >
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={12} style={{ color: accentColor }} />
                    Audit Verified
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="rounded-2xl border border-slate-200 dark:border-[#545454]/50 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 dark:from-[#0d0d0d] dark:via-[#121212] dark:to-[#0d0d0d] p-8 text-center max-w-4xl mx-auto flex flex-col items-center space-y-4 shadow-sm dark:shadow-none">
          <Trophy size={28} style={{ color: accentColor1 }} />
          <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-slate-900 dark:text-white">
            Accelerating The Next Wave Of Breakthroughs
          </h3>
          <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-[#A6A6A6] max-w-xl">
            Are you leading an advanced research initiative or developing high-performance hardware?
            ASCENT provides immediate evaluation, lab facilities, and non-dilutive capital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
