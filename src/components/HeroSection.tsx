import React, { useState } from 'react';
import { HeroThreeCanvas, Model3DStyle } from './HeroThreeCanvas';
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Compass,
  Cpu,
  Globe2,
  Radio,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

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
  const [modelStyle, setModelStyle] = useState<Model3DStyle>('apex');

  const scrollToOverview = () => {
    const el = document.getElementById('overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Dedicated Empty Space at the Beginning for the 3D Effect */}
      <section
        id="home"
        className="relative w-full min-h-[86vh] lg:min-h-[92vh] flex flex-col items-center justify-between pt-24 sm:pt-28 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
        aria-label="3D Kinetic Specimen Stage"
      >
        {/* Top Minimal Status Indicator */}
        <div className="flex flex-col items-center gap-2 z-10 animate-in fade-in duration-500">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4A373]/30 dark:border-[#D4A373]/25 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-xl shadow-sm">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: '#D4A373' }}
            />
            <span className="w-2 h-2 rounded-full -ml-3" style={{ backgroundColor: '#D4A373' }} />
            <span className="font-body text-xs text-[#545454] dark:text-[#A6A6A6] tracking-wide">
              ASCENT 3D KINETIC STAGE • PUBLIC PLATFORM 2026
            </span>
          </div>
        </div>

        {/* Expansive Empty Space Canvas Container */}
        <div className="relative w-full max-w-5xl h-[52vh] sm:h-[58vh] md:h-[64vh] flex items-center justify-center my-auto">
          {/* Subtle Ambient Radial Glow Infused with #D4A373 */}
          <div
            className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-25 dark:opacity-30 pointer-events-none transition-colors duration-500"
            style={{
              background: `radial-gradient(circle, #D4A373 0%, ${accentColor1} 50%, ${accentColor2} 85%, transparent 100%)`,
            }}
          />

          {/* Three.js Interactive Kinetic Canvas */}
          <HeroThreeCanvas
            accentColor1={accentColor1}
            accentColor2={accentColor2}
            interactive={true}
            modelStyle={modelStyle}
            className="w-full h-full z-10"
          />

          {/* Floating Subtle Corner Telemetry Badge */}
          <div className="absolute top-2 left-2 sm:left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#545454]/80 dark:text-[#A6A6A6]/70 px-2.5 py-1 rounded-md bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/50 dark:border-white/10">
            <Radio size={12} className="animate-pulse" style={{ color: accentColor1 }} />
            <span>REALTIME WEBGL • INTERACTIVE ORBIT</span>
          </div>

          <div className="absolute top-2 right-2 sm:right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#545454]/80 dark:text-[#A6A6A6]/70 px-2.5 py-1 rounded-md bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/50 dark:border-white/10">
            <Compass size={12} style={{ color: accentColor2 }} />
            <span>DRAG TO ROTATE • WHEEL TO ZOOM</span>
          </div>
        </div>

        {/* Bottom Interactive HUD & Scroll Invitation */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-4 z-20">
          {/* Model Switcher Pill */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/70 dark:bg-[#111111]/70 border border-[#D4A373]/25 dark:border-[#D4A373]/20 backdrop-blur-xl shadow-sm">
            <button
              onClick={() => setModelStyle('apex')}
              className={`font-body text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                modelStyle === 'apex'
                  ? 'bg-[#545454] text-white dark:bg-[#D4A373] dark:text-black font-semibold shadow-sm ring-1 ring-[#D4A373]/50'
                  : 'text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white'
              }`}
            >
              <Boxes size={13} className={modelStyle === 'apex' ? 'text-[#D4A373] dark:text-black' : ''} />
              <span>Apex Crystal</span>
            </button>

            <button
              onClick={() => setModelStyle('gyroscope')}
              className={`font-body text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                modelStyle === 'gyroscope'
                  ? 'bg-[#545454] text-white dark:bg-[#D4A373] dark:text-black font-semibold shadow-sm ring-1 ring-[#D4A373]/50'
                  : 'text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white'
              }`}
            >
              <Compass size={13} className={modelStyle === 'gyroscope' ? 'text-[#D4A373] dark:text-black' : ''} />
              <span>Quantum Gyro</span>
            </button>

            <button
              onClick={() => setModelStyle('torus')}
              className={`font-body text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                modelStyle === 'torus'
                  ? 'bg-[#545454] text-white dark:bg-[#D4A373] dark:text-black font-semibold shadow-sm ring-1 ring-[#D4A373]/50'
                  : 'text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white'
              }`}
            >
              <Sparkles size={13} className={modelStyle === 'torus' ? 'text-[#D4A373] dark:text-black' : ''} />
              <span>Torus Knot</span>
            </button>
          </div>

          {/* Smooth Scroll Cue */}
          <button
            onClick={scrollToOverview}
            className="group flex items-center gap-2 text-xs font-body text-[#545454] dark:text-[#A6A6A6] hover:text-[#1E1E1E] dark:hover:text-white transition-colors py-1 px-3 rounded-full hover:bg-white/40 dark:hover:bg-white/5"
            aria-label="Scroll to Platform Overview"
          >
            <span className="font-button tracking-wide">Explore Platform Overview</span>
            <ArrowDown size={14} className="animate-bounce transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </section>

      {/* 2. Platform Overview & Manifesto Section */}
      <section
        id="overview"
        className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#545454]/15 dark:border-[#545454]/30 bg-white/40 dark:bg-transparent backdrop-blur-sm z-10"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
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
            <p className="font-body text-base sm:text-lg text-[#545454] dark:text-[#A6A6A6] max-w-xl leading-relaxed">
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
                <span>Launch 3D Spec Lab</span>
              </button>
            </div>

            {/* Metric Badges (Monochrome + Dual Accents) */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#545454]/20 dark:border-[#545454]/30 w-full max-w-lg">
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
            </div>
          </div>

          {/* Right Column: Platform Architecture & Live Telemetry Panel */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <div className="relative w-full rounded-2xl border border-[#545454]/20 dark:border-[#545454]/40 bg-white/90 dark:bg-[#050505]/80 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(84,84,84,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#545454]/15 dark:border-[#545454]/30">
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#1E1E1E] dark:text-white">
                  <Cpu size={16} style={{ color: accentColor1 }} />
                  <span>Public Node Architecture</span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#D4A373]/20 text-[#1E1E1E] dark:text-[#D4A373] font-semibold">
                  SYNCHRONIZED
                </span>
              </div>

              {/* Architecture Metrics Grid */}
              <div className="space-y-3 font-body text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 dark:bg-[#111111]/80 border border-[#545454]/15 dark:border-[#545454]/25">
                  <div className="flex items-center gap-2.5">
                    <Globe2 size={15} style={{ color: accentColor1 }} />
                    <span className="text-[#545454] dark:text-[#A6A6A6]">Global Compute Mesh</span>
                  </div>
                  <span className="font-mono font-semibold text-[#1E1E1E] dark:text-white">48 PoPs Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 dark:bg-[#111111]/80 border border-[#545454]/15 dark:border-[#545454]/25">
                  <div className="flex items-center gap-2.5">
                    <Zap size={15} style={{ color: accentColor2 }} />
                    <span className="text-[#545454] dark:text-[#A6A6A6]">Quantum Simulation Node</span>
                  </div>
                  <span className="font-mono font-semibold text-[#1E1E1E] dark:text-white">128 Qubits Emulated</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 dark:bg-[#111111]/80 border border-[#545454]/15 dark:border-[#545454]/25">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={15} className="text-[#545454] dark:text-[#A6A6A6]" />
                    <span className="text-[#545454] dark:text-[#A6A6A6]">Zero-Knowledge Audit</span>
                  </div>
                  <span className="font-mono font-semibold text-[#1E1E1E] dark:text-white">Epoch #4,821</span>
                </div>
              </div>

              {/* Live Spec Telemetry Gauge */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-[#545454] dark:text-[#A6A6A6] mb-1.5">
                  <span>Platform Throughput</span>
                  <span className="font-mono font-bold text-[#1E1E1E] dark:text-white">94.8% Operational</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-[#222222] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: '94.8%',
                      background: `linear-gradient(to right, ${accentColor1}, ${accentColor2})`,
                    }}
                  />
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-[#545454]/15 dark:border-[#545454]/30 text-[11px] font-body text-[#545454]/80 dark:text-[#A6A6A6]">
                <span className="flex items-center gap-1.5">
                  <RotateCcw size={12} />
                  Continuous Telemetry Stream
                </span>
                <span className="font-mono text-[10px]">LATENCY: 14ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

