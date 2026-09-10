import React from 'react';
import { TEAM } from '../data/platformData';
import { TeamMember } from '../types';
import { Linkedin, Github, Twitter, Award } from 'lucide-react';

interface TeamSectionProps {
  accentColor1: string;
  accentColor2: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  accentColor1,
  accentColor2,
}) => {
  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-slate-200 dark:border-[#545454]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300/80 dark:border-[#545454]/50 bg-white/80 dark:bg-[#0c0c0c] mb-4 shadow-sm">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentColor2 }}
              />
              <span className="font-body text-xs text-slate-600 dark:text-[#A6A6A6] tracking-wider uppercase">
                Scientific Directors & Architects
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
              The Vanguard Team
            </h2>
          </div>

          <p className="font-body text-sm text-slate-600 dark:text-[#A6A6A6] max-w-md">
            World-class leaders in autonomous robotics, quantum optics, orbital dynamics, and advanced materials engineering.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => {
            const isBlue = idx % 2 === 0;
            const borderAccent = isBlue ? accentColor1 : accentColor2;

            return (
              <div
                key={member.id}
                className="group relative p-6 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#080808]/90 backdrop-blur-xl transition-all duration-300 hover:border-slate-400 dark:hover:border-[#A6A6A6] hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] flex flex-col justify-between"
              >
                <div>
                  {/* Monochromatic Initials Avatar with Dual Accent Ring */}
                  <div className="relative w-16 h-16 rounded-2xl bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#545454]/50 flex items-center justify-center mb-5 overflow-hidden group-hover:border-slate-400 dark:group-hover:border-[#A6A6A6] transition-colors">
                    <span className="font-heading text-lg font-bold text-slate-800 dark:text-white tracking-widest">
                      {member.initials}
                    </span>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 transition-all opacity-80"
                      style={{ backgroundColor: borderAccent }}
                    />
                  </div>

                  {/* Name & Domain */}
                  <h3 className="font-heading text-base font-bold uppercase text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>

                  <div
                    className="font-body text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ color: borderAccent }}
                  >
                    {member.role}
                  </div>

                  <p className="font-body text-xs text-slate-600 dark:text-[#A6A6A6] leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Domain Tag */}
                <div className="pt-4 border-t border-slate-200 dark:border-[#545454]/30 flex items-center justify-between">
                  <span className="font-body text-[11px] text-slate-500 dark:text-[#A6A6A6]">
                    {member.domain}
                  </span>

                  <div className="flex items-center gap-2 text-slate-400 dark:text-[#A6A6A6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/40" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
