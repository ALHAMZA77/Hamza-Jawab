import React, { useState } from 'react';
import { cvData } from '../../data/cvData';
import { ChevronDown, ChevronUp, Calendar, Check, Terminal, Layers } from 'lucide-react';

interface BasementExperienceCardProps {
  accentColor: string;
}

export const BasementExperienceCard: React.FC<BasementExperienceCardProps> = ({
  accentColor,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(0); // First item open by default

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  const expandAll = () => {
    setExpandedId(expandedId === -1 ? 0 : -1);
  };

  return (
    <div
      id="experience"
      className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative"
    >
      {/* Top Specimen Bar matching Basement Foundry */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#888]">
        {/* Left: Dropdown Indicator & Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">EXPÉRIENCES PROFESSIONNELLES // 07 POSTES</span>
        </div>

        {/* Specs metadata */}
        <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666]">
          <span>ODOO / SAGE / ONCF / MARCHE PUBLIC</span>
          <span className="text-[#333]">/</span>
          <span>AVRIL 2022 — JUILLET 2026</span>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#333] text-[#aaa] hover:text-white hover:border-[#666] transition-colors cursor-pointer"
          >
            {expandedId === -1 ? 'RÉDUIRE' : 'TOUT DÉPLIER'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10 bg-grid-dots">
        {/* Section Headline */}
        <div className="mb-8">
          <div className="text-[11px] font-mono uppercase text-[#777] tracking-widest mb-1">
            DOSSIER CARRIÈRE
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            PARCOURS PROFESSIONNEL
          </h3>
        </div>

        {/* Specimen Items List */}
        <div className="divide-y divide-[#181818] border border-[#181818] rounded-lg overflow-hidden bg-[#0d0d0d]">
          {cvData.experiences.map((exp, idx) => {
            const isExpanded = expandedId === idx || expandedId === -1;
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={idx}
                className="group hover:bg-[#121212] transition-colors"
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <span
                      className="font-mono text-xs font-bold px-2 py-0.5 rounded border border-[#262626] text-[#777] group-hover:text-white transition-colors"
                      style={isExpanded ? { borderColor: accentColor, color: accentColor } : {}}
                    >
                      {indexStr}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight">
                        {exp.company}
                      </h4>
                      {exp.subtitle && (
                        <p className="text-xs text-[#888] font-mono mt-0.5">
                          {exp.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto pl-9 sm:pl-0">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#161616] border border-[#222] text-[#bbb]">
                      {exp.period}
                    </span>
                    <span className="text-[#555] group-hover:text-white transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </button>

                {/* Expanded Tasks & Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 pl-14 sm:pl-16 border-t border-[#161616] bg-[#0b0b0b]">
                    <div className="text-[10px] font-mono uppercase text-[#666] tracking-wider mb-2">
                      TACHES & REALISATIONS :
                    </div>
                    <ul className="space-y-1.5 font-mono text-xs text-[#ccc]">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-baseline gap-2">
                          <span style={{ color: accentColor }}>↳</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
