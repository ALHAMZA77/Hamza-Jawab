import React, { useState } from 'react';
import { CVPage1 } from '../CVPage1';
import { CVPage2 } from '../CVPage2';
import { Download, Printer, ZoomIn, ZoomOut, FileText } from 'lucide-react';
import { Certification } from '../../data/cvData';

interface BasementCVDocumentCardProps {
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
  accentColor: string;
  onSelectCert?: (cert: Certification) => void;
}

export const BasementCVDocumentCard: React.FC<BasementCVDocumentCardProps> = ({
  onDownloadPdf,
  isGeneratingPdf,
  accentColor,
  onSelectCert,
}) => {
  const [docPage, setDocPage] = useState<'both' | 'p1' | 'p2'>('both');
  const [docZoom, setDocZoom] = useState(1);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-doc"
      className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative"
    >
      {/* Top Specimen Bar matching Basement Foundry */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#888]">
        {/* Left: Dropdown Indicator & Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">DOCUMENT CV PAPIER ORIGINAL (A4)</span>
        </div>

        {/* Specs metadata */}
        <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666]">
          <span>FORMAT 210 × 297 MM</span>
          <span className="text-[#333]">/</span>
          <span>BARRE LATÉRALE NOIRE & OR</span>
          <span className="text-[#333]">/</span>
          <span>CERTIFICATIONS FR INCLUSES</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Page switchers */}
          <div className="flex items-center gap-1 bg-[#141414] p-0.5 rounded border border-[#222] text-[10px]">
            <button
              type="button"
              onClick={() => setDocPage('both')}
              className={`px-2 py-0.5 rounded font-bold cursor-pointer transition-colors ${
                docPage === 'both' ? 'bg-white text-black' : 'text-[#777] hover:text-white'
              }`}
            >
              2 PAGES
            </button>
            <button
              type="button"
              onClick={() => setDocPage('p1')}
              className={`px-2 py-0.5 rounded font-bold cursor-pointer transition-colors ${
                docPage === 'p1' ? 'bg-white text-black' : 'text-[#777] hover:text-white'
              }`}
            >
              P.1
            </button>
            <button
              type="button"
              onClick={() => setDocPage('p2')}
              className={`px-2 py-0.5 rounded font-bold cursor-pointer transition-colors ${
                docPage === 'p2' ? 'bg-white text-black' : 'text-[#777] hover:text-white'
              }`}
            >
              P.2
            </button>
          </div>

          {/* Download & Print Buttons */}
          <button
            type="button"
            onClick={onDownloadPdf}
            disabled={isGeneratingPdf}
            className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer hover:bg-white hover:text-black hover:border-white"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            {isGeneratingPdf ? 'EXPORT...' : 'TÉLÉCHARGER PDF'}
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#333] text-[#aaa] hover:text-white hover:border-[#666] transition-colors cursor-pointer"
          >
            <Printer className="w-3 h-3" />
            <span>IMPRIMER</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-8 bg-[#121212] overflow-x-auto flex flex-col items-center">
        <div className="text-center font-mono text-[11px] text-[#777] uppercase tracking-wider mb-6">
          VUE DU DOCUMENT EXACT TEL QU'IMPRIMÉ & TÉLÉCHARGÉ
        </div>

        <div className="flex flex-col items-center gap-8 w-full max-w-[820px]">
          {(docPage === 'both' || docPage === 'p1') && (
            <div className="w-full flex justify-center shadow-2xl">
              <CVPage1 />
            </div>
          )}

          {(docPage === 'both' || docPage === 'p2') && (
            <div className="w-full flex justify-center shadow-2xl">
              <CVPage2 onSelectCert={onSelectCert} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
