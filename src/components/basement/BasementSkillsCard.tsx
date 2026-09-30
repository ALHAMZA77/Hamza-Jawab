import React from 'react';
import { cvData } from '../../data/cvData';
import { Terminal, Cpu, Layers, Globe, Code } from 'lucide-react';

interface BasementSkillsCardProps {
  accentColor: string;
}

export const BasementSkillsCard: React.FC<BasementSkillsCardProps> = ({
  accentColor,
}) => {
  return (
    <div
      id="skills"
      className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative"
    >
      {/* Top Specimen Bar matching Basement Foundry */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#888]">
        {/* Left: Dropdown Indicator & Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">STACK TECHNIQUE & COMPÉTENCES</span>
        </div>

        {/* Specs metadata */}
        <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666]">
          <span>WEB DEV / ERP / OFFICE / CMS / E-COM</span>
          <span className="text-[#333]">/</span>
          <span>LANGUES: 3 FLUIDES</span>
        </div>

        <div className="text-[10px] font-mono text-[#555]">
          MATRICE SPEC. 2026
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10 bg-grid-dots">
        {/* Section Headline */}
        <div className="mb-8">
          <div className="text-[11px] font-mono uppercase text-[#777] tracking-widest mb-1">
            STACK & SAVOIR-FAIRE
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            COMPÉTENCES & OUTILS
          </h3>
        </div>

        {/* Skills Matrix Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono mb-8">
          {/* Box 1: Web Development */}
          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#181818]">
              <span className="text-xs font-bold uppercase text-white">
                01 // DÉVELOPPEMENT WEB
              </span>
              <span className="text-[10px] text-[#555]">CODE</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'HTML5',
                'CSS3',
                'JAVASCRIPT',
                'FULL STACK',
                'VB.NET',
                'WORDPRESS',
                'WOOCOMMERCE',
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-[#141414] border border-[#252525] text-xs font-semibold text-[#ddd] hover:border-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Box 2: ERP & Business Management */}
          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#181818]">
              <span className="text-xs font-bold uppercase text-white">
                02 // ERP & LOGICIELS DE GESTION
              </span>
              <span className="text-[10px] text-[#555]">ENTERPRISE</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'ODOO ERP',
                'SAGE 100',
                'SAGE X3',
                'RECOUVREMENT',
                'MARCHÉS PUBLICS',
                'GESTION DE STOCK',
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-[#141414] border border-[#252525] text-xs font-semibold text-[#ddd] hover:border-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Box 3: Office & Tools */}
          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#181818]">
              <span className="text-xs font-bold uppercase text-white">
                03 // MICROSOFT OFFICE & SYSTÈMES
              </span>
              <span className="text-[10px] text-[#555]">TOOLS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'EXCEL (AVANCÉ)',
                'WORD',
                'POWERPOINT',
                'OUTLOOK',
                'ACCESS',
                'CANVA',
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-[#141414] border border-[#252525] text-xs font-semibold text-[#ddd] hover:border-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Box 4: Digital & Social */}
          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#181818]">
              <span className="text-xs font-bold uppercase text-white">
                04 // DIGITAL & E-COMMERCE
              </span>
              <span className="text-[10px] text-[#555]">COMMERCE</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'LINKEDIN',
                'INSTAGRAM',
                'FACEBOOK',
                'X (TWITTER)',
                'DROPSHIPPING (EBAY, ETSY)',
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-[#141414] border border-[#252525] text-xs font-semibold text-[#ddd] hover:border-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages & Interests Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
          {/* Languages */}
          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
            <div className="text-xs font-bold uppercase text-white mb-3 flex items-center justify-between">
              <span>LANGUES</span>
              <span style={{ color: accentColor }}>[ 03 ]</span>
            </div>
            <div className="space-y-2">
              {cvData.languages.map((lang, lIdx) => (
                <div
                  key={lIdx}
                  className="flex items-center justify-between text-xs p-2 rounded bg-[#141414] border border-[#222]"
                >
                  <span className="text-white font-bold">{lang.name}</span>
                  <span className="text-[#888]">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
            <div className="text-xs font-bold uppercase text-white mb-3 flex items-center justify-between">
              <span>CENTRES D'INTÉRÊT</span>
              <span style={{ color: accentColor }}>[ 02 ]</span>
            </div>
            <div className="space-y-2 text-xs">
              {cvData.interests.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="p-2 rounded bg-[#141414] border border-[#222]"
                >
                  <span className="text-white font-bold block mb-0.5">
                    {item.category} :
                  </span>
                  <span className="text-[#888]">{item.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
