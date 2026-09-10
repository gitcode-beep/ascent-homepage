import React from 'react';
import { EVENTS } from '../data/platformData';
import { EventItem } from '../types';
import { Calendar, MapPin, Users, Ticket, ArrowUpRight } from 'lucide-react';

interface EventsSectionProps {
  accentColor1: string;
  accentColor2: string;
  onRegisterEvent: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  accentColor1,
  accentColor2,
  onRegisterEvent,
}) => {
  return (
    <section id="events" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-slate-200 dark:border-[#545454]/30">
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
                Summits, Sprints & Symposia
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
              Curated Events & Hackathons
            </h2>
          </div>

          <p className="font-body text-sm text-slate-600 dark:text-[#A6A6A6] max-w-md">
            Join international consortiums, hardware sprints, and live prototype demonstrations in person or via verified hybrid telemetry.
          </p>
        </div>

        {/* Events Cards */}
        <div className="space-y-4">
          {EVENTS.map((event, idx) => {
            const isBlue = idx % 2 === 0;
            const cardAccent = isBlue ? accentColor1 : accentColor2;

            return (
              <div
                key={event.id}
                className="group relative p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#545454]/40 bg-white/80 dark:bg-[#070707]/90 backdrop-blur-xl transition-all duration-300 hover:border-slate-400 dark:hover:border-[#A6A6A6] shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Date pill and titles */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 max-w-3xl">
                  {/* Event Type Badge */}
                  <div
                    className="w-16 h-16 rounded-xl flex flex-col items-center justify-center border shrink-0 bg-slate-100 dark:bg-[#0e0e0e]"
                    style={{
                      borderColor: `${cardAccent}55`,
                      color: cardAccent,
                    }}
                  >
                    <span className="font-heading text-xs font-bold uppercase">{event.type}</span>
                    <span className="font-body text-[10px] text-slate-500 dark:text-[#A6A6A6]">2026</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-slate-900 dark:text-white">
                        {event.title}
                      </h3>
                      <span
                        className="font-button text-[11px] font-semibold px-2 py-0.5 rounded-full border"
                        style={{
                          borderColor: `${cardAccent}66`,
                          backgroundColor: `${cardAccent}15`,
                          color: cardAccent,
                        }}
                      >
                        {event.status}
                      </span>
                    </div>

                    <p className="font-body text-sm text-slate-600 dark:text-[#A6A6A6] leading-relaxed">
                      {event.agendaSummary}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-body text-slate-500 dark:text-[#A6A6A6] pt-1">
                      <span className="flex items-center gap-1 text-slate-900 dark:text-white">
                        <Calendar size={13} className="text-slate-500 dark:text-[#A6A6A6]" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-slate-500 dark:text-[#A6A6A6]" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={13} className="text-slate-500 dark:text-[#A6A6A6]" />
                        {event.capacity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Action button with Quicksand font */}
                <div className="flex items-center gap-3 shrink-0 lg:self-center">
                  <button
                    onClick={() => onRegisterEvent(event)}
                    className="font-button font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#EAE4D9] transition-all flex items-center gap-2 shadow-sm dark:shadow-[0_2px_12px_rgba(255,255,255,0.15)] active:scale-95 whitespace-nowrap"
                  >
                    <Ticket size={15} />
                    <span>Reserve Delegate Pass</span>
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

export default EventsSection;
