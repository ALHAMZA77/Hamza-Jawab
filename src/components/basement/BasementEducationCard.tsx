import React from 'react';
import { cvData } from '../../data/cvData';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

interface BasementEducationCardProps {
  accentColor: string;
}

export const BasementEducationCard: React.FC<BasementEducationCardProps> = ({
  accentColor,
}) => {
  return (
    <div
      id="education"
      className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative font-mono"
    >
      {/* Top Specimen Bar matching Basement Foundry */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs text-[#888]">
        {/* Left: Dropdown Indicator & Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">FORMATION ACADÉMIQUE & DIPLÔMES</span>
        </div>

        {/* Specs metadata */}
        <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666]">
          <span>TSDI / UNIVERSITÉ HASSAN I / BACCALAURÉAT</span>
          <span className="text-[#333]">/</span>
          <span>PROMOTION 2020 — 2025</span>
        </div>

        <div className="text-[10px] text-[#555]">
          CURRICULUM ÉDUCATIF
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10 bg-grid-dots">
        {/* Section Headline */}
        <div className="mb-8 font-sans">
          <div className="text-[11px] font-mono uppercase text-[#777] tracking-widest mb-1">
            PARCOURS ACADÉMIQUE
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            FORMATION
          </h3>
        </div>

        {/* Education Timeline Table */}
        <div className="divide-y divide-[#181818] border border-[#181818] rounded-lg overflow-hidden bg-[#0d0d0d]">
          {cvData.education.map((edu, idx) => {
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={idx}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#121212] transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded border border-[#262626] text-[#777]"
                    style={{ borderColor: `${accentColor}50`, color: accentColor }}
                  >
                    {indexStr}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                  </div>
                </div>

                <div className="self-start sm:self-auto pl-8 sm:pl-0">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-[#161616] border border-[#222] text-[#bbb]">
                    {edu.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
