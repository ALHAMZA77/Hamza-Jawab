import React, { useState } from 'react';
import { cvData, Certification } from '../../data/cvData';
import { ShieldCheck, Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

interface CertificationsSectionProps {
  onOpenLinkedInView?: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onOpenLinkedInView,
}) => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Accréditations Officielles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Licences & Certifications
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Certifications professionnelles récentes délivrées par <strong>Anthropic</strong> et <strong>OPSWAT Academy</strong>.
            </p>
          </div>

          {onOpenLinkedInView && (
            <button
              type="button"
              onClick={onOpenLinkedInView}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs border border-neutral-800 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>Voir Format Photo d'origine</span>
            </button>
          )}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cvData.certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setActiveCert(cert)}
              className="group relative rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-amber-500/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Organization Logo + Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="shrink-0">
                    {cert.logo === 'opswat' ? (
                      <div className="w-12 h-12 rounded-xl bg-[#1e1136] flex flex-col items-center justify-center p-1 border border-neutral-700 shadow-xs">
                        <div className="w-3 h-3 border-2 border-emerald-400 rotate-45 mb-0.5" />
                        <span className="text-[7.5px] font-bold text-white tracking-tighter uppercase leading-none">
                          OPSWAT
                        </span>
                        <span className="text-[6px] text-neutral-300 tracking-tight leading-none">
                          academy
                        </span>
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center shadow-xs">
                        <span className="font-serif font-black text-xl text-amber-400 tracking-tighter">
                          A\
                        </span>
                      </div>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Vérifié</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-neutral-400 mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Dates & Action Footer */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Calendar className="w-3 h-3 text-neutral-500" />
                  <span>
                    Émise {cert.issueDate}
                    {cert.expiryDate ? ` · Expire ${cert.expiryDate}` : ''}
                  </span>
                </div>

                <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium text-[11px]">
                  <span>Détails</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Details Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-neutral-900 border border-neutral-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-base">Attestation de Certification</h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="text-neutral-400 hover:text-white text-sm px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <div className="flex items-center gap-4">
                {activeCert.logo === 'opswat' ? (
                  <div className="w-14 h-14 rounded-xl bg-[#1e1136] flex flex-col items-center justify-center p-1 text-white border border-neutral-700">
                    <Award className="w-6 h-6 text-emerald-400 mb-0.5" />
                    <span className="text-[8px] font-bold">OPSWAT</span>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                    <span className="font-serif font-black text-2xl text-amber-400">A\</span>
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg text-white leading-snug">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    Organisme délivreur : {activeCert.issuer}
                  </p>
                </div>
              </div>

              <div className="bg-neutral-950/70 rounded-xl p-4 space-y-2.5 border border-neutral-800 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800/80">
                  <span className="text-neutral-400">Date d'émission :</span>
                  <span className="font-semibold text-white">{activeCert.issueDate}</span>
                </div>
                {activeCert.expiryDate && (
                  <div className="flex justify-between py-1 border-b border-neutral-800/80">
                    <span className="text-neutral-400">Date d'expiration :</span>
                    <span className="font-semibold text-white">{activeCert.expiryDate}</span>
                  </div>
                )}
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Statut de validité :</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Actif & Certifié</span>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-xs hover:from-amber-400 hover:to-amber-500 transition-colors shadow-xs cursor-pointer"
                >
                  Fermer la vue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
