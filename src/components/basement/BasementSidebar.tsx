import React from 'react';
import { Download, FileText, ArrowUpRight, Terminal, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface BasementSidebarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
  accentColor: string;
  onSelectAccentColor: (color: string) => void;
  activeMode: 1 | 2 | 3;
  onModeChange: (mode: 1 | 2 | 3) => void;
}

export const BasementSidebar: React.FC<BasementSidebarProps> = ({
  activeSection,
  onSelectSection,
  onDownloadPdf,
  isGeneratingPdf,
  accentColor,
  onSelectAccentColor,
  activeMode,
  onModeChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const sections = [
    { id: 'hero', label: 'PROFIL', count: null },
    { id: 'experience', label: 'PARCOURS', count: '7' },
    { id: 'certifications', label: 'CERTIFS', count: '6' },
    { id: 'skills', label: 'STACK & SKILLS', count: null },
    { id: 'education', label: 'FORMATION', count: '4' },
    { id: 'cv-doc', label: 'CV PAPIER A4', count: 'DOC' },
    { id: 'contact', label: 'CONTACT', count: null },
  ];

  const handleSectionClick = (id: string) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <aside className="w-full lg:w-64 shrink-0 bg-[#080808] border-b lg:border-b-0 border-r border-[#1a1a1a] p-4 sm:p-6 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between overflow-y-auto no-scrollbar font-mono z-40">
      {/* Brand Header */}
      <div>
        <div className="mb-4 lg:mb-8 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleSectionClick('hero');
            }}
            className="group block"
          >
            <h1
              className="text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-none transition-colors"
              style={{ color: accentColor }}
            >
              HAMZA
              <br />
              JAWAB.
            </h1>
            <div className="mt-1.5 text-[10px] uppercase tracking-widest text-[#777] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DEV. INFORMATIQUE / TSDI</span>
            </div>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-3 py-1.5 rounded border border-[#333] text-xs font-bold uppercase text-[#bbb] hover:text-white"
          >
            {mobileMenuOpen ? '[ FERMER X ]' : '[ MENU ☰ ]'}
          </button>
        </div>

        {/* Navigation Content (Visible on desktop or when mobileMenuOpen is true) */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          {/* Tree: Navigation */}
          <div className="mb-6">
            <div className="text-[11px] font-bold text-[#888] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span style={{ color: accentColor }}>↳</span>
              <span>SECTIONS</span>
            </div>

            <div className="space-y-1.5 relative">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => handleSectionClick(sec.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-[11.5px] uppercase tracking-wider font-semibold border transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#151515] text-white border-[#333]'
                        : 'border-transparent text-[#999] hover:text-white hover:border-[#222] hover:bg-[#0f0f0f]'
                    }`}
                    style={isActive ? { borderColor: `${accentColor}80`, color: '#fff' } : {}}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="text-[9px] text-[#555]">{isActive ? '▶' : '•'}</span>
                      <span>{sec.label}</span>
                    </span>

                    {sec.count && (
                      <span
                        className="text-[10px] px-1.5 py-0.2 rounded font-bold font-mono"
                        style={{
                          color: accentColor,
                          backgroundColor: `${accentColor}15`,
                        }}
                      >
                        {sec.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tree: DISPLAY MODE CONTROLLER (MODE 1, 2, 3) */}
          <div className="mb-6">
            <div className="text-[11px] font-bold text-[#888] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span style={{ color: accentColor }}>↳</span>
              <span>DISPLAY MODE</span>
            </div>
            <div className="space-y-1.5 pl-3">
              {([1, 2, 3] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => onModeChange(m)}
                  className={`w-full text-left px-2.5 py-1.5 rounded text-[10.5px] font-bold uppercase transition-all flex items-center justify-between cursor-pointer border ${
                    activeMode === m
                      ? 'bg-white text-black border-white shadow-xs'
                      : 'text-[#777] hover:text-white bg-[#111] border-[#222]'
                  }`}
                >
                  <span>
                    {m === 1 && 'MODE 1 : GROTESQUE'}
                    {m === 2 && 'MODE 2 : ADHESION PIXEL'}
                    {m === 3 && 'MODE 3 : WIREFRAME 3D'}
                  </span>
                  <span className="text-[9px]">{activeMode === m ? '●' : '○'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3D Isometric Wireframe Monogram inspired by Basement Foundry */}
          <div className="mb-6 pl-3">
            <div className="p-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg flex items-center justify-center">
              <svg
                width="84"
                height="64"
                viewBox="0 0 84 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                {/* 3D Wireframe 'H' */}
                <path
                  d="M10 10 L10 54 M26 10 L26 54 M10 32 L26 32"
                  stroke={accentColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 4 L20 48 M36 4 L36 48 M20 26 L36 26"
                  stroke={accentColor}
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M10 10 L20 4 M10 54 L20 48 M26 10 L36 4 M26 54 L36 48"
                  stroke={accentColor}
                  strokeWidth="1.2"
                />

                {/* 3D Wireframe 'J' */}
                <path
                  d="M48 10 L68 10 M58 10 L58 44 C58 50, 52 54, 44 54 C38 54, 36 50, 36 50"
                  stroke={accentColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M58 4 L78 4 M68 4 L68 38 C68 44, 62 48, 54 48"
                  stroke={accentColor}
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M48 10 L58 4 M68 10 L78 4 M58 44 L68 38"
                  stroke={accentColor}
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>

          {/* Tree: Color Theme Switcher matching screenshot: ↳ ○ ● */}
          <div className="mb-6">
            <div className="text-[11px] font-bold text-[#888] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span style={{ color: accentColor }}>↳</span>
              <span>COLOR ACCENT</span>
            </div>
            <div className="flex items-center gap-3 pl-3">
              {[
                { color: '#ff4a00', name: 'ORANGE BASEMENT' },
                { color: '#ffffff', name: 'PURE WHITE' },
                { color: '#d4af37', name: 'GOLD SPECIMEN' },
              ].map((c) => (
                <button
                  key={c.color}
                  type="button"
                  onClick={() => onSelectAccentColor(c.color)}
                  className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                    accentColor === c.color
                      ? 'scale-125 border-white ring-2 ring-white/30'
                      : 'border-[#444] opacity-70 hover:opacity-100 hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.color }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Tree: Coordonnées */}
          <div className="mb-6">
            <div className="text-[11px] font-bold text-[#888] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span style={{ color: accentColor }}>↳</span>
              <span>COORDONNÉES</span>
            </div>
            <div className="space-y-1 pl-3 text-[11px] text-[#aaa]">
              <a
                href="mailto:hamzajawab303@gmail.com"
                className="block truncate hover:text-white transition-colors"
              >
                hamzajawab303@gmail.com
              </a>
              <a
                href="tel:0664155867"
                className="block hover:text-white transition-colors"
              >
                0664155867
              </a>
              <div className="text-[#666]">BERRECHID, MAROC</div>
            </div>
          </div>

          {/* Tree: Reseaux & Liens */}
          <div className="mb-6">
            <div className="text-[11px] font-bold text-[#888] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span style={{ color: accentColor }}>↳</span>
              <span>RÉSEAUX & LIENS</span>
            </div>
            <div className="space-y-1 pl-3 text-[11px]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-[#aaa] hover:text-white transition-colors"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 text-[#666]" />
              </a>
              <a
                href="https://wa.me/212664155867"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-[#aaa] hover:text-white transition-colors"
              >
                <span>WHATSAPP</span>
                <ArrowUpRight className="w-3 h-3 text-[#666]" />
              </a>
              <button
                type="button"
                onClick={() => handleSectionClick('cv-doc')}
                className="flex items-center justify-between w-full text-left text-[#aaa] hover:text-white transition-colors cursor-pointer"
              >
                <span>CV PAPIER (A4)</span>
                <ArrowUpRight className="w-3 h-3 text-[#666]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Section: Direct Download button */}
      <div className="pt-4 border-t border-[#1a1a1a]">
        <div className="text-[10px] font-bold text-[#666] uppercase tracking-widest mb-2 flex items-center gap-1">
          <span style={{ color: accentColor }}>↳</span>
          <span>ACTION PDF</span>
        </div>

        <button
          type="button"
          onClick={onDownloadPdf}
          disabled={isGeneratingPdf}
          className="w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-lg"
          style={{
            backgroundColor: accentColor,
            color: accentColor === '#ffffff' ? '#000000' : '#0a0a0a',
          }}
        >
          {isGeneratingPdf ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              <span>GÉNÉRATION...</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>[ TÉLÉCHARGER CV .PDF ]</span>
            </>
          )}
        </button>

        <div className="mt-3 text-[9px] text-[#555] text-center font-mono">
          FORMAT A4 OFFICIEL · 2 PAGES VECTORIELLES
        </div>
      </div>
    </aside>
  );
};
