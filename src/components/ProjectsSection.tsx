import React, { useState } from 'react';
import { PROJECTS } from '../data/platformData';
import { ProjectItem } from '../types';
import { InteractiveHolodeck3D } from './InteractiveHolodeck3D';
import { Box, ExternalLink, Activity, Sparkles, Filter } from 'lucide-react';

interface ProjectsSectionProps {
  accentColor1: string;
  accentColor2: string;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  accentColor1,
  accentColor2,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Aerospace', 'Quantum', 'Autonomous', 'AI Systems'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-slate-200 dark:border-[#545454]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300/80 dark:border-[#545454]/50 bg-white/80 dark:bg-[#0c0c0c] mb-4 shadow-sm">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentColor2 }}
              />
              <span className="font-body text-xs text-slate-600 dark:text-[#A6A6A6] tracking-wider uppercase">
                Technical Specifications & 3D Lab
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
              Projects & Hardware
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-button text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-bold border-slate-900 dark:bg-white dark:text-black dark:border-white shadow-sm'
                    : 'bg-white/80 dark:bg-[#111111] text-slate-600 dark:text-[#A6A6A6] border-slate-300/80 dark:border-[#545454]/40 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-[#A6A6A6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Holodeck Animation Space from Three.js */}
        <div className="mb-14">
          <InteractiveHolodeck3D
            accentColor1={accentColor1}
            accentColor2={accentColor2}
            title="ASCENT 3D CAD & HARDWARE OBSERVATORY"
            subtitle="Interactive Three.js physics & spatial telemetry space. Rotate and examine prototype geometries in realtime."
          />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => {
            const isBlue = idx % 2 === 0;
            const cardAccent = isBlue ? accentColor1 : accentColor2;

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-7 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#070707]/90 backdrop-blur-xl transition-all duration-300 hover:border-slate-400 dark:hover:border-[#A6A6A6] hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-xs text-slate-500 dark:text-[#A6A6A6] uppercase tracking-wider">
                      {project.category} • {project.year}
                    </span>
                    <span
                      className="font-button text-[11px] font-semibold px-2.5 py-0.5 rounded-full border"
                      style={{
                        borderColor: `${cardAccent}66`,
                        backgroundColor: `${cardAccent}15`,
                        color: cardAccent,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold uppercase text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-body text-sm text-slate-600 dark:text-[#A6A6A6] leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Telemetry Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200 dark:border-[#545454]/30 mb-5 bg-slate-100/70 dark:bg-[#0e0e0e]/50 rounded-xl px-3">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="font-heading text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="font-body text-[10px] text-slate-500 dark:text-[#A6A6A6]">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-[#161616] text-slate-600 dark:text-[#A6A6A6] border border-slate-200 dark:border-[#545454]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-[#545454]/30">
                  <span className="font-body text-xs text-slate-500 dark:text-[#A6A6A6] flex items-center gap-1.5">
                    <Activity size={13} style={{ color: cardAccent }} />
                    Active Flight Telemetry
                  </span>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-button font-bold text-xs px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#EAE4D9] transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
                  >
                    <span>View Dossier</span>
                    <ExternalLink size={13} />
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

export default ProjectsSection;
