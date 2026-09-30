import React, { useState } from 'react';
import { cvData } from '../../data/cvData';
import { Download, FileText, ArrowRight, ShieldCheck, Terminal, Sparkles, RefreshCw, Type } from 'lucide-react';

interface BasementHeroCardProps {
  onDownloadPdf: () => void;
  onViewCVDocument: () => void;
  isGeneratingPdf?: boolean;
  accentColor: string;
  activeMode: 1 | 2 | 3;
  onModeChange: (mode: 1 | 2 | 3) => void;
}

export const BasementHeroCard: React.FC<BasementHeroCardProps> = ({
  onDownloadPdf,
  onViewCVDocument,
  isGeneratingPdf,
  accentColor,
  activeMode,
  onModeChange,
}) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isUppercase, setIsUppercase] = useState(true);
  const [customText, setCustomText] = useState('');
  const [isEditingCustomText, setIsEditingCustomText] = useState(false);

  const specimenWords = [
    'HAMZA JAWAB',
    'FULL STACK',
    'ODOO & SAGE',
    'DEVELOPPEUR',
    'INFORMATIQUE',
  ];

  // Raw current word
  const rawWord = customText.trim() ? customText : specimenWords[activeWordIndex];

  // Apply AA / Aa transform
  const displayWord = isUppercase
    ? rawWord.toUpperCase()
    : rawWord
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');

  return (
    <div
      id="hero"
      className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative transition-all"
    >
      {/* Top Specimen Bar matching Basement Foundry */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#888]">
        {/* Left: Dropdown Indicator & Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">
            {activeMode === 1 && 'BASEMENT GROTESQUE // HAMZA JAWAB'}
            {activeMode === 2 && 'ADHESION PIXEL GOTHIC // HAMZA JAWAB'}
            {activeMode === 3 && 'CYBER WIREFRAME 3D // HAMZA JAWAB'}
          </span>
        </div>

        {/* Middle: Technical specs changing with mode */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] text-[#666]">
          {activeMode === 1 && (
            <>
              <span>10 STYLES / 4 WEIGHTS</span>
              <span className="text-[#333]">/</span>
              <span>265 GLYPHS</span>
              <span className="text-[#333]">/</span>
              <span className="text-emerald-400 font-semibold">DISPONIBLE</span>
            </>
          )}
          {activeMode === 2 && (
            <>
              <span>1 STYLE / 1 WEIGHT</span>
              <span className="text-[#333]">/</span>
              <span>165 GLYPHS (PIXEL FRAKTUR)</span>
              <span className="text-[#333]">/</span>
              <span className="text-emerald-400 font-semibold">VERIFIED</span>
            </>
          )}
          {activeMode === 3 && (
            <>
              <span>OUTLINE WIREFRAME / 3D MATRIX</span>
              <span className="text-[#333]">/</span>
              <span className="text-amber-400 font-semibold">INTERACTIVE TYPING</span>
            </>
          )}
        </div>

        {/* Interactive Controls matching Basement: AA Aa | MODE 1 MODE 2 MODE 3 | BUTTONS */}
        <div className="flex items-center gap-3">
          {/* AA / Aa Toggle */}
          <div className="flex items-center gap-1 bg-[#141414] px-2 py-0.5 rounded border border-[#222]">
            <button
              type="button"
              onClick={() => setIsUppercase(true)}
              className={`text-[11px] font-bold transition-colors cursor-pointer px-1 py-0.5 rounded ${
                isUppercase ? 'text-white bg-[#222]' : 'text-[#666] hover:text-[#bbb]'
              }`}
              title="Passer en MAJUSCULES (AA)"
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
              title="Passer en minuscules / casse mixte (Aa)"
            >
              Aa
            </button>
          </div>

          {/* Mode Toggles: MODE 1 | MODE 2 | MODE 3 */}
          <div className="flex items-center gap-1 text-[10px] bg-[#121212] p-1 rounded-lg border border-[#222]">
            <span className="text-[#555] px-1 font-bold">MODE</span>
            {([1, 2, 3] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => onModeChange(m)}
                className={`px-2 py-1 rounded font-bold cursor-pointer transition-all ${
                  activeMode === m
                    ? 'bg-white text-black shadow-xs scale-105'
                    : 'text-[#777] hover:text-white hover:bg-[#202020]'
                }`}
                title={`Activer MODE ${m} : ${
                  m === 1 ? 'Grotesque Solid' : m === 2 ? 'Adhesion Gothic Pixel' : 'Wireframe 3D'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Action Buttons matching Basement: EXPLORE / PDF */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onViewCVDocument}
              className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#333] text-[#aaa] hover:text-white hover:border-[#666] transition-colors cursor-pointer hidden sm:block"
            >
              CV A4
            </button>
            <button
              type="button"
              onClick={onDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer hover:bg-white hover:text-black hover:border-white shadow-xs"
              style={{
                borderColor: accentColor,
                color: accentColor,
              }}
            >
              {isGeneratingPdf ? 'EXPORT...' : 'TÉLÉCHARGER PDF'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Specimen Display Area with Dynamic Typography according to MODE */}
      <div className="p-6 sm:p-10 lg:p-12 bg-grid-dots relative">
        {/* Mode Notification Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#181818]">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="text-white font-bold">
              {activeMode === 1 && 'MODE 1 ACTIVE : BASEMENT GROTESQUE SOLID'}
              {activeMode === 2 && 'MODE 2 ACTIVE : ADHESION GOTHIC PIXEL (FRAKTUR)'}
              {activeMode === 3 && 'MODE 3 ACTIVE : CYBER WIREFRAME NEON & LIVE INPUT'}
            </span>
          </div>

          {/* Custom Text Live Typing Switch */}
          <button
            type="button"
            onClick={() => setIsEditingCustomText(!isEditingCustomText)}
            className="text-[11px] font-mono text-[#888] hover:text-white underline cursor-pointer flex items-center gap-1.5"
          >
            <Type className="w-3.5 h-3.5 text-amber-500" />
            <span>{isEditingCustomText ? 'Fermer la saisie libre' : 'Tester votre propre texte'}</span>
          </button>
        </div>

        {/* Live Text Input Field */}
        {isEditingCustomText && (
          <div className="mb-6 p-3 rounded-lg bg-[#111] border border-[#222] flex items-center gap-3">
            <span className="text-xs font-mono text-[#666] shrink-0">VOTRE TEXTE :</span>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Tapez n'importe quel texte ou nom..."
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-[#444]"
            />
            {customText && (
              <button
                type="button"
                onClick={() => setCustomText('')}
                className="text-[10px] text-[#666] hover:text-white uppercase font-mono px-2 py-0.5 rounded bg-[#1e1e1e]"
              >
                Effacer
              </button>
            )}
          </div>
        )}

        {/* Preset Words Selector Pills */}
        {!customText && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-[10px] font-mono text-[#555] uppercase tracking-wider mr-1">
              SPECIMEN :
            </span>
            {specimenWords.map((word, wIdx) => (
              <button
                key={wIdx}
                type="button"
                onClick={() => setActiveWordIndex(wIdx)}
                className={`px-2.5 py-1 rounded text-[10.5px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                  activeWordIndex === wIdx
                    ? 'border-white text-white bg-[#181818] shadow-xs'
                    : 'border-[#222] text-[#666] hover:text-[#bbb] hover:border-[#333]'
                }`}
                style={activeWordIndex === wIdx ? { borderColor: accentColor } : {}}
              >
                {word}
              </button>
            ))}
          </div>
        )}

        {/* DYNAMIC GIANT HEADLINE (Changes dynamically based on MODE 1, 2, 3) */}
        <div className="py-4 sm:py-8 overflow-hidden select-none transition-all duration-300">
          {/* MODE 1: BASEMENT GROTESQUE SOLID */}
          {activeMode === 1 && (
            <div className="animate-in fade-in duration-200">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.9] font-display break-words">
                {displayWord}
              </h2>
              {/* Curved Underline Arcs matching Basement Foundry Specimen in image */}
              <div className="flex items-center gap-3 sm:gap-6 mt-6 sm:mt-8 opacity-40">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-3 rounded-t-full border-t-2 border-white/60"
                  />
                ))}
              </div>
            </div>
          )}

          {/* MODE 2: ADHESION PIXEL GOTHIC (Exact design from the bottom card in user's image!) */}
          {activeMode === 2 && (
            <div className="animate-in fade-in duration-200">
              <h2
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest text-white uppercase leading-[0.95] font-gothic-pixel break-words"
                style={{
                  textShadow: '0 0 1px #fff, 2px 2px 0px rgba(0,0,0,0.8)',
                  letterSpacing: '0.08em',
                }}
              >
                {displayWord}
              </h2>
              {/* Pixelated dashed baseline matching retro specimen */}
              <div className="flex items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 opacity-30 overflow-hidden">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 sm:w-6 h-1 bg-white"
                  />
                ))}
              </div>
            </div>
          )}

          {/* MODE 3: CYBER WIREFRAME 3D & NEON */}
          {activeMode === 3 && (
            <div className="animate-in fade-in duration-200">
              <h2
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.9] font-display break-words wireframe-stroke"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: `2px ${accentColor}`,
                  filter: `drop-shadow(0 0 16px ${accentColor}50)`,
                }}
              >
                {displayWord}
              </h2>
              {/* Neon technical grid lines */}
              <div className="flex items-center gap-3 sm:gap-6 mt-6 sm:mt-8 opacity-70">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-0.5 border-t border-dashed"
                    style={{ borderColor: accentColor }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sub-header Specimen Info: Full Profile Bio */}
        <div className="mt-8 pt-8 border-t border-[#1a1a1a] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <div className="text-[11px] font-mono uppercase text-[#777] tracking-widest mb-2 flex items-center gap-2">
              <span style={{ color: accentColor }}>[ PROFIL PROFESSIONNEL ]</span>
              <span className="text-[#444]">/</span>
              <span>SYNTHÈSE DE CARRIÈRE</span>
            </div>
            <p className="text-sm sm:text-base text-[#ccc] leading-relaxed font-sans">
              {cvData.profile}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#0d0d0d] p-4 rounded-lg border border-[#1e1e1e] font-mono text-xs space-y-2">
            <div className="flex justify-between pb-1.5 border-b border-[#1a1a1a]">
              <span className="text-[#666]">TITRE:</span>
              <span className="text-white font-bold text-right">DEV. INFORMATIQUE</span>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-[#1a1a1a]">
              <span className="text-[#666]">LOCALISATION:</span>
              <span className="text-white">BERRECHID, MAROC</span>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-[#1a1a1a]">
              <span className="text-[#666]">CERTIFICATIONS:</span>
              <span className="text-emerald-400 font-bold">06 CERTIFS ANTHROPIC/OPSWAT</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666]">STATUT:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                DISPONIBLE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
