import React, { useState } from 'react';
import { cvData } from '../../data/cvData';
import { Type } from 'lucide-react';

interface BasementAdhesionCardProps {
  accentColor: string;
  onDownloadPdf: () => void;
  onViewCVDocument: () => void;
}

export const BasementAdhesionCard: React.FC<BasementAdhesionCardProps> = ({
  accentColor,
  onDownloadPdf,
  onViewCVDocument,
}) => {
  const [adhesionMode, setAdhesionMode] = useState<1 | 2>(1);
  const [isUppercase, setIsUppercase] = useState(true);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [customText, setCustomText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const words = [
    'ADHESION',
    'HAMZA JAWAB',
    'FULL STACK',
    'ODOO BINTEG',
    'OPSWAT CIP',
  ];

  const rawWord = customText.trim() ? customText : words[activeWordIndex];

  const displayWord = isUppercase
    ? rawWord.toUpperCase()
    : rawWord
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');

  return (
    <div className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative transition-all">
      {/* Top Specimen Bar matching Basement Foundry Card 2: ADHESION */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#888]">
        {/* Left: Specimen Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">ADHESION // PIXEL GOTHIC SPECIMEN</span>
        </div>

        {/* Middle Specs */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] text-[#666]">
          <span>1 STYLE / 1 WEIGHT</span>
          <span className="text-[#333]">/</span>
          <span>165 GLYPHS</span>
          <span className="text-[#333]">/</span>
          <span>RASTER BLACKLETTER</span>
        </div>

        {/* Interactive Controls matching Basement: AA Aa | MODE 1 MODE 2 | BUTTONS */}
        <div className="flex items-center gap-3">
          {/* AA / Aa Toggle */}
          <div className="flex items-center gap-1 bg-[#141414] px-2 py-0.5 rounded border border-[#222]">
            <button
              type="button"
              onClick={() => setIsUppercase(true)}
              className={`text-[11px] font-bold transition-colors cursor-pointer px-1 py-0.5 rounded ${
                isUppercase ? 'text-white bg-[#222]' : 'text-[#666] hover:text-[#bbb]'
              }`}
            >
              AA
            </button>
            <span className="text-[#333]">/</span>
            <button
              type="button"
              onClick={() => setIsUppercase(false)}
              className={`text-[11px] font-bold transition-colors cursor-pointer px-1 py-0.5 rounded ${
                !isUppercase ? 'text-white bg-[#222]' : 'text-[#666] hover:text-[#bbb]'
              }`}
            >
              Aa
            </button>
          </div>

          {/* Mode Toggles: MODE 1 | MODE 2 */}
          <div className="flex items-center gap-1 text-[10px] bg-[#121212] p-1 rounded-lg border border-[#222]">
            <span className="text-[#555] px-1 font-bold">MODE</span>
            {([1, 2] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setAdhesionMode(m)}
                className={`px-2 py-1 rounded font-bold cursor-pointer transition-all ${
                  adhesionMode === m
                    ? 'bg-white text-black shadow-xs scale-105'
                    : 'text-[#777] hover:text-white hover:bg-[#202020]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onViewCVDocument}
              className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#333] text-[#aaa] hover:text-white transition-colors cursor-pointer hidden sm:block"
            >
              EXPLORE
            </button>
            <button
              type="button"
              onClick={onDownloadPdf}
              className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer hover:bg-white hover:text-black"
              style={{
                borderColor: accentColor,
                color: accentColor,
              }}
            >
              BUY NOW (CV)
            </button>
          </div>
        </div>
      </div>

      {/* Main Specimen Display Area */}
      <div className="p-6 sm:p-10 lg:p-12 bg-grid-dots relative">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#181818]">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="text-white font-bold">
              {adhesionMode === 1 && 'MODE 1 ACTIVE : SOLID GOTHIC RASTER'}
              {adhesionMode === 2 && 'MODE 2 ACTIVE : WIREFRAME PIXEL CONTOUR'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="text-[11px] font-mono text-[#888] hover:text-white underline cursor-pointer flex items-center gap-1.5"
          >
            <Type className="w-3.5 h-3.5 text-amber-500" />
            <span>{isEditing ? 'Fermer' : 'Tester un texte personnalisé'}</span>
          </button>
        </div>

        {isEditing && (
          <div className="mb-6 p-3 rounded-lg bg-[#111] border border-[#222] flex items-center gap-3">
            <span className="text-xs font-mono text-[#666] shrink-0">SAISIE GOTHIC :</span>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Tapez un mot en style Adhesion..."
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-[#444]"
            />
          </div>
        )}

        {!customText && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-[10px] font-mono text-[#555] uppercase tracking-wider mr-1">
              MOTS :
            </span>
            {words.map((w, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveWordIndex(idx)}
                className={`px-2.5 py-1 rounded text-[10.5px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                  activeWordIndex === idx
                    ? 'border-white text-white bg-[#181818]'
                    : 'border-[#222] text-[#666] hover:text-[#bbb]'
                }`}
                style={activeWordIndex === idx ? { borderColor: accentColor } : {}}
              >
                {w}
              </button>
            ))}
          </div>
        )}

        {/* GIANT ADHESION GOTHIC PIXEL TYPOGRAPHY */}
        <div className="py-4 sm:py-8 overflow-hidden select-none">
          {adhesionMode === 1 ? (
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest text-white uppercase leading-[0.95] font-gothic-pixel break-words animate-in fade-in"
              style={{
                textShadow: '0 0 1px #fff, 2px 2px 0px rgba(0,0,0,0.8)',
                letterSpacing: '0.08em',
              }}
            >
              {displayWord}
            </h2>
          ) : (
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest uppercase leading-[0.95] font-gothic-pixel break-words wireframe-stroke animate-in fade-in"
              style={{
                color: 'transparent',
                WebkitTextStroke: `2px ${accentColor}`,
                letterSpacing: '0.08em',
              }}
            >
              {displayWord}
            </h2>
          )}

          {/* Pixelated dashed baseline */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 opacity-30 overflow-hidden">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-4 sm:w-6 h-1 bg-white" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
