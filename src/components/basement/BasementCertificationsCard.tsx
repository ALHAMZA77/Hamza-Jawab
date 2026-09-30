import React, { useState } from 'react';
import { cvData, Certification } from '../../data/cvData';
import { ShieldCheck, Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

interface BasementCertificationsCardProps {
  onOpenLinkedInView?: () => void;
  accentColor: string;
}

export const BasementCertificationsCard: React.FC<BasementCertificationsCardProps> = ({
  onOpenLinkedInView,
  accentColor,
}) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div
      id="certifications"
      className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative"
    >
      {/* Top Specimen Bar matching Basement Foundry */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#888]">
        {/* Left: Dropdown Indicator & Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">LICENCES ET CERTIFICATIONS // 06 TITRES</span>
        </div>

        {/* Specs metadata */}
        <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666]">
          <span>ANTHROPIC AI (5) + OPSWAT ACADEMY (1)</span>
          <span className="text-[#333]">/</span>
          <span>ÉMISES EN SEPTEMBRE 2026</span>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          {onOpenLinkedInView && (
            <button
              type="button"
              onClick={onOpenLinkedInView}
              className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#333] text-[#aaa] hover:text-white hover:border-[#666] transition-colors cursor-pointer"
            >
              VUE PHOTO ORIGINALE
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10 bg-grid-dots">
        {/* Section Headline */}
        <div className="mb-8">
          <div className="text-[11px] font-mono uppercase text-[#777] tracking-widest mb-1">
            ACCRÉDITATIONS INTERNATIONALES
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            LICENCES & CERTIFICATIONS
          </h3>
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cvData.certifications.map((cert, idx) => {
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={idx}
                onClick={() => setSelectedCert(cert)}
                className="group p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#444] transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-0.5 shadow-sm"
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#2a2a2a] text-[#777] group-hover:text-white">
                        {indexStr}
                      </span>
                      <span className="font-mono text-[11px] text-[#888] font-bold">
                        {cert.issuer}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 font-bold">
                      <ShieldCheck className="w-3 h-3" />
                      <span>ACTIF</span>
                    </span>
                  </div>

                  {/* Logo + Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="shrink-0 mt-0.5">
                      {cert.logo === 'opswat' ? (
                        <div className="w-10 h-10 rounded bg-[#1e1136] flex flex-col items-center justify-center p-1 border border-neutral-700">
                          <div className="w-2.5 h-2.5 border-2 border-emerald-400 rotate-45 mb-0.5" />
                          <span className="text-[6.5px] font-bold text-white tracking-tighter uppercase leading-none">
                            OPSWAT
                          </span>
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded bg-[#141414] border border-[#282828] flex items-center justify-center">
                          <span
                            className="font-serif font-black text-lg tracking-tighter"
                            style={{ color: accentColor }}
                          >
                            A\
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-snug tracking-tight">
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Footer Dates */}
                <div className="pt-3 border-t border-[#181818] flex items-center justify-between font-mono text-[10.5px] text-[#666]">
                  <span>
                    ÉMISE {cert.issueDate.toUpperCase()}
                    {cert.expiryDate ? ` · EXP. ${cert.expiryDate.toUpperCase()}` : ''}
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#444] group-hover:text-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Diploma Details Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 font-mono animate-in fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#0e0e0e] border border-[#333] rounded-xl max-w-lg w-full p-6 text-white shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#222]">
              <span className="text-xs uppercase text-[#888] font-bold flex items-center gap-1.5">
                <span style={{ color: accentColor }}>[ SPECIMEN ATTESTATION ]</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="text-xs text-[#777] hover:text-white px-2 py-0.5 rounded border border-[#333] cursor-pointer"
              >
                FERMER [ESC]
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <h3 className="text-lg font-bold uppercase text-white font-display">
                {selectedCert.title}
              </h3>
              <div className="p-4 rounded bg-[#141414] border border-[#262626] text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#666]">ORGANISME :</span>
                  <span className="font-bold text-white">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">DATE D'ÉMISSION :</span>
                  <span className="text-white">{selectedCert.issueDate}</span>
                </div>
                {selectedCert.expiryDate && (
                  <div className="flex justify-between">
                    <span className="text-[#666]">DATE D'EXPIRATION :</span>
                    <span className="text-white">{selectedCert.expiryDate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#666]">VALIDATION :</span>
                  <span className="text-emerald-400 font-bold">CERTIFIÉ & VÉRIFIÉ</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 rounded bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-[#eee] transition-colors cursor-pointer"
              >
                CONFIRMER & RETOUR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
