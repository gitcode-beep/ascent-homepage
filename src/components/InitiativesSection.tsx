import React, { useState } from 'react';
import { INITIATIVES } from '../data/platformData';
import { InitiativeItem } from '../types';
import { ArrowUpRight, Check, Compass, Sparkles } from 'lucide-react';

interface InitiativesSectionProps {
  accentColor1: string;
  accentColor2: string;
  onSelectInitiative: (initiative: InitiativeItem) => void;
}

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({
  accentColor1,
  accentColor2,
  onSelectInitiative,
}) => {
  const [filterPillar, setFilterPillar] = useState<string>('All');

  const pillars = ['All', 'Deep Tech Acceleration', 'Foundational Science', 'Aerospace & Environment'];

  const filteredInitiatives =
    filterPillar === 'All'
      ? INITIATIVES
      : INITIATIVES.filter((init) => init.pillar === filterPillar);

  return (
    <section id="initiatives" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-[#545454]/30">
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
                Strategic Programs
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
              Flagship Initiatives
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {pillars.map((pillar) => (
              <button
                key={pillar}
                onClick={() => setFilterPillar(pillar)}
                className={`font-button text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  filterPillar === pillar
                    ? 'bg-slate-900 text-white font-bold border-slate-900 dark:bg-white dark:text-black dark:border-white shadow-sm'
                    : 'bg-white/80 dark:bg-[#111111] text-slate-600 dark:text-[#A6A6A6] border-slate-300/80 dark:border-[#545454]/40 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-[#A6A6A6]'
                }`}
              >
                {pillar}
              </button>
            ))}
          </div>
        </div>

        {/* Initiatives Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredInitiatives.map((init) => {
            const isCrimson = init.secondaryAccent === 'crimson';
            const cardAccent = isCrimson ? accentColor2 : accentColor1;

            return (
              <div
                key={init.id}
                className="group relative flex flex-col justify-between p-7 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#070707]/90 backdrop-blur-xl transition-all duration-300 hover:border-slate-400 dark:hover:border-[#A6A6A6] shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              >
                <div>
                  {/* Top Bar: Code and Pillar */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-heading text-xs font-bold px-2.5 py-1 rounded border tracking-widest uppercase"
                      style={{
                        borderColor: `${cardAccent}55`,
                        backgroundColor: `${cardAccent}15`,
                        color: cardAccent,
                      }}
                    >
                      {init.code}
                    </span>
                    <span className="font-body text-xs text-slate-500 dark:text-[#A6A6A6]">{init.timeline}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-slate-900 dark:text-white mb-3 tracking-wide leading-snug">
                    {init.title}
                  </h3>

                  {/* Pillar Category */}
                  <div className="font-body text-xs text-slate-500 dark:text-[#A6A6A6] uppercase tracking-wider mb-4">
                    {init.pillar}
                  </div>

                  {/* Objective */}
                  <p className="font-body text-sm text-slate-600 dark:text-[#A6A6A6] leading-relaxed mb-6">
                    {init.objective}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 mb-6 border-t border-slate-200 dark:border-[#545454]/30 pt-4">
                    <span className="font-body text-[11px] text-slate-500 dark:text-[#A6A6A6] uppercase tracking-wider block">
                      Core Highlights
                    </span>
                    {init.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-body text-slate-700 dark:text-[#e0e0e0]">
                        <Check size={14} className="shrink-0 mt-0.5" style={{ color: cardAccent }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-[#545454]/30 flex items-center justify-between">
                  <div className="font-body text-xs">
                    <span className="text-slate-500 dark:text-[#A6A6A6]">Lead: </span>
                    <span className="font-medium text-slate-900 dark:text-white">{init.lead}</span>
                  </div>

                  <button
                    onClick={() => onSelectInitiative(init)}
                    className="font-button font-bold text-xs px-3.5 py-2 rounded-lg bg-slate-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#EAE4D9] transition-all flex items-center gap-1 active:scale-95 shadow-sm"
                  >
                    <span>View Brief</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
