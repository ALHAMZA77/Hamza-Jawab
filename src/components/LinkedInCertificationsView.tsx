import React, { useState } from 'react';
import { ArrowLeft, Plus, Pencil, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { cvData, Certification } from '../data/cvData';

interface LinkedInCertificationsViewProps {
  onBackToCV?: () => void;
  selectedCert?: Certification | null;
  onSelectCert?: (cert: Certification | null) => void;
}

export const LinkedInCertificationsView: React.FC<LinkedInCertificationsViewProps> = ({
  onBackToCV,
  selectedCert,
  onSelectCert,
}) => {
  const [modalCert, setModalCert] = useState<Certification | null>(selectedCert || null);

  const handleOpenCertificate = (cert: Certification, e: React.MouseEvent) => {
    e.stopPropagation();
    setModalCert(cert);
  };

  return (
    <div className="w-full max-w-[760px] mx-auto bg-white border border-neutral-200 rounded-xl shadow-md overflow-hidden font-sans">
      {/* Top Header replicating the LinkedIn mobile/web header from the user photo */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 bg-white">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToCV}
            className="p-1 -ml-1 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            title="Retour au CV"
            type="button"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-base sm:text-lg font-semibold text-neutral-900">
            Licences et certifications
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert("Ajouter une certification : cette vue reflète fidèlement la capture d'écran fournie.")}
            className="p-1.5 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            title="Ajouter une certification"
            type="button"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Certifications List */}
      <div className="divide-y divide-neutral-200">
        {cvData.certifications.map((cert, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 flex items-start justify-between gap-3 sm:gap-4 hover:bg-neutral-50/70 transition-colors"
          >
            {/* Left: Organization Logo */}
            <div className="shrink-0 mt-0.5">
              {cert.logo === 'opswat' ? (
                <div className="w-12 h-12 rounded bg-[#1e1136] flex flex-col items-center justify-center p-1 shadow-sm border border-neutral-200">
                  <div className="w-3.5 h-3.5 border-2 border-emerald-400 rotate-45 mb-0.5" />
                  <span className="text-[7.5px] font-bold text-white tracking-tighter uppercase leading-none">
                    OPSWAT
                  </span>
                  <span className="text-[6px] text-neutral-300 tracking-tight leading-none mt-0.5">
                    academy
                  </span>
                </div>
              ) : (
                <div className="w-12 h-12 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-sm">
                  {/* Stylized Anthropic "A\" logo */}
                  <span className="font-serif font-black text-xl text-neutral-900 tracking-tighter">
                    A\
                  </span>
                </div>
              )}
            </div>

            {/* Middle: Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-neutral-900 leading-snug">
                {cert.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-neutral-700 mt-0.5 font-normal">
                {cert.issuer}
              </p>
              <p className="text-[11.5px] sm:text-[12px] text-neutral-500 mt-0.5">
                Émise le {cert.issueDate}
                {cert.expiryDate ? ` · Expire le ${cert.expiryDate}` : ''}
              </p>

              {/* Action Button matching user screenshot */}
              <div className="mt-3">
                <button
                  type="button"
                  onClick={(e) => handleOpenCertificate(cert, e)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-600 text-neutral-800 text-[12px] font-medium hover:bg-neutral-100 hover:border-neutral-900 transition-colors cursor-pointer"
                >
                  <span>Afficher le diplôme</span>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </button>
              </div>
            </div>

            {/* Right: Pencil edit button matching user screenshot */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setModalCert(cert)}
                className="p-1.5 text-neutral-500 hover:text-black hover:bg-neutral-200/60 rounded-full transition-colors"
                title="Modifier / Vérifier"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Diploma Details Verification Modal */}
      {modalCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setModalCert(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-200 relative text-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-base">Certification Officielle</h4>
              </div>
              <button
                type="button"
                onClick={() => setModalCert(null)}
                className="text-neutral-400 hover:text-neutral-700 text-sm font-medium px-2 py-1 rounded"
              >
                Fermer
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-4">
                {modalCert.logo === 'opswat' ? (
                  <div className="w-14 h-14 rounded-lg bg-[#1e1136] flex flex-col items-center justify-center p-1 text-white shrink-0">
                    <Award className="w-6 h-6 text-emerald-400 mb-0.5" />
                    <span className="text-[7.5px] font-bold">OPSWAT</span>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
                    <span className="font-serif font-black text-2xl text-neutral-900">A\</span>
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg text-neutral-900 leading-snug">
                    {modalCert.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-medium">
                    Organisme délivreur : {modalCert.issuer}
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-4 space-y-2 border border-neutral-200/80 text-sm">
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-neutral-500">Date d'émission :</span>
                  <span className="font-medium text-neutral-800">{modalCert.issueDate}</span>
                </div>
                {modalCert.expiryDate && (
                  <div className="flex justify-between py-1 border-b border-neutral-200/60">
                    <span className="text-neutral-500">Date d'expiration :</span>
                    <span className="font-medium text-neutral-800">{modalCert.expiryDate}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalCert(null)}
                  className="w-full py-2 px-4 rounded-lg bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
