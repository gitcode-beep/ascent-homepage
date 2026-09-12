import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  accentColor1: string;
  accentColor2: string;
  onExploreClick: () => void;
  onLaunchLabClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  accentColor1,
  accentColor2,
  onExploreClick,
  onLaunchLabClick,
}) => {
  return (
    <>
      {/* 1. Dedicated Empty Space at the Beginning */}
      <section
        id="home"
        className="w-full h-28 sm:h-40 md:h-52"
        aria-label="Empty Space"
      />

      {/* 2. Platform Overview & Manifesto Section */}
      <section
        id="overview"
        className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#545454]/15 dark:border-[#545454]/30 bg-white/40 dark:bg-transparent backdrop-blur-sm z-10"
      >
        <div className="max-w-4xl mx-auto w-full flex flex-col items-start space-y-6">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#545454]/25 dark:border-[#545454]/60 bg-white dark:bg-[#0d0d0d]/80 backdrop-blur-md shadow-sm">
            <ShieldCheck size={14} style={{ color: accentColor1 }} />
            <span className="font-body text-xs text-[#545454] dark:text-[#A6A6A6] tracking-wide">
              Verified Global Infrastructure • Cohort Manifest Active
            </span>
          </div>

          {/* Primary Heading */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1E1E1E] dark:text-white leading-[1.12]">
            Ascend Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] via-[#545454] to-[#1E1E1E] dark:from-white dark:via-[#A6A6A6] dark:to-white">
              The Horizon of
            </span>{' '}
            <span
              className="underline decoration-2 underline-offset-8"
              style={{ textDecorationColor: accentColor1 }}
            >
              Innovation
            </span>
          </h1>

          {/* Body Text: Century Gothic Font */}
          <p className="font-body text-base sm:text-lg text-[#545454] dark:text-[#A6A6A6] max-w-2xl leading-relaxed">
            ASCENT is the premier public infrastructure empowering visionary engineers, researchers,
            and ventures. Discover frontier opportunities, access non-dilutive R&D resources, and deploy
            autonomous, quantum, and aerospace architectures.
          </p>

          {/* Call-to-Action Controls: Quicksand Font */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={onExploreClick}
              className="font-button font-bold text-sm px-6 py-3 rounded-xl bg-[#D4A373] text-black hover:bg-[#c69363] dark:bg-[#D4A373] dark:text-black dark:hover:bg-[#dfad7d] transition-all flex items-center justify-center gap-2 shadow-[0_4px_22px_rgba(212,163,115,0.32)] active:scale-95 group"
              id="hero-btn-explore"
            >
              <span>Explore Initiatives</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={onLaunchLabClick}
              className="font-button font-semibold text-sm px-5 py-3 rounded-xl border border-[#545454]/25 dark:border-[#545454]/60 bg-white dark:bg-[#0a0a0a]/70 text-[#1E1E1E] dark:text-white hover:border-[#D4A373] dark:hover:border-[#D4A373] hover:bg-[#FAF8F5] dark:hover:bg-[#141414] transition-all flex items-center justify-center gap-2 backdrop-blur-md shadow-sm"
              id="hero-btn-launch-3d"
            >
              <Zap size={16} className="text-[#D4A373]" />
              <span>Launch Spec Lab</span>
            </button>
          </div>

          {/* Metric Badges (Monochrome + Dual Accents) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6 border-t border-[#545454]/20 dark:border-[#545454]/30 w-full max-w-2xl">
            <div>
              <div className="font-heading text-xl sm:text-2xl font-bold text-[#1E1E1E] dark:text-white">18.4K+</div>
              <div className="font-body text-[11px] text-[#545454] dark:text-[#A6A6A6] uppercase tracking-wider">Engineers</div>
            </div>
            <div>
              <div
                className="font-heading text-xl sm:text-2xl font-bold"
                style={{ color: accentColor1 }}
              >
                $14.2M
              </div>
              <div className="font-body text-[11px] text-[#545454] dark:text-[#A6A6A6] uppercase tracking-wider">R&D Capital</div>
            </div>
            <div>
              <div
                className="font-heading text-xl sm:text-2xl font-bold"
                style={{ color: accentColor2 }}
              >
                99.98%
              </div>
              <div className="font-body text-[11px] text-[#545454] dark:text-[#A6A6A6] uppercase tracking-wider">Verified State</div>
            </div>
            <div>
              <div className="font-heading text-xl sm:text-2xl font-bold text-[#1E1E1E] dark:text-white">128+</div>
              <div className="font-body text-[11px] text-[#545454] dark:text-[#A6A6A6] uppercase tracking-wider">Fellows</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

