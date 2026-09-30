import React, { useState } from 'react';
import { BasementSidebar } from './components/basement/BasementSidebar';
import { BasementHeroCard } from './components/basement/BasementHeroCard';
import { BasementAdhesionCard } from './components/basement/BasementAdhesionCard';
import { BasementExperienceCard } from './components/basement/BasementExperienceCard';
import { BasementCertificationsCard } from './components/basement/BasementCertificationsCard';
import { BasementSkillsCard } from './components/basement/BasementSkillsCard';
import { BasementEducationCard } from './components/basement/BasementEducationCard';
import { BasementContactCard } from './components/basement/BasementContactCard';
import { BasementCVDocumentCard } from './components/basement/BasementCVDocumentCard';
import { LinkedInCertificationsView } from './components/LinkedInCertificationsView';

import { Certification, cvData } from './data/cvData';
import { downloadCVPdf } from './utils/pdfExport';
import { CheckCircle2, AlertCircle, Download, ArrowLeft, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [accentColor, setAccentColor] = useState('#ff4a00'); // Signature Basement Foundry electric orange
  const [activeMode, setActiveMode] = useState<1 | 2 | 3>(1); // 1: Grotesque, 2: Adhesion Pixel, 3: Wireframe 3D
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [pdfDownloadUrl, setPdfDownloadUrl] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleToggleAccentColor = () => {
    setAccentColor((prev) => (prev === '#ff4a00' ? '#d4af37' : '#ff4a00'));
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    setDownloadError(null);
    setDownloadSuccess(false);

    try {
      const url = await downloadCVPdf({
        fileName: 'CV_Hamza_Jawab.pdf',
      });
      setPdfDownloadUrl(url);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 9000);
    } catch (err: any) {
      console.error('Erreur lors du téléchargement PDF:', err);
      setDownloadError(
        err?.message || 'Une erreur est survenue lors de la création du fichier PDF.'
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleSelectCert = (cert: Certification) => {
    setSelectedCert(cert);
    setShowLinkedInModal(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col lg:flex-row selection:bg-[#ff4a00] selection:text-black">
      {/* Left Sidebar inspired by Basement Foundry */}
      <BasementSidebar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onDownloadPdf={handleDownloadPdf}
        isGeneratingPdf={isGeneratingPdf}
        accentColor={accentColor}
        onSelectAccentColor={(color) => setAccentColor(color)}
        activeMode={activeMode}
        onModeChange={setActiveMode}
      />

      {/* Main Content Showcase Column */}
      <main className="flex-1 p-3 sm:p-6 lg:p-8 overflow-y-auto max-w-6xl mx-auto w-full">
        {/* Top Minimal Ticker / Marquee Bar */}
        <div className="mb-6 px-4 py-2.5 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a] flex items-center justify-between text-[11px] font-mono text-[#777] overflow-x-auto whitespace-nowrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold">HAMZA JAWAB</span>
            <span className="text-[#444]">/</span>
            <span>TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT INFORMATIQUE</span>
          </div>

          <div className="flex items-center gap-4 text-[#888]">
            <span>TSDI BERRECHID</span>
            <span className="text-[#333]">|</span>
            <span className="text-emerald-400">06 CERTIFS ANTHROPIC & OPSWAT</span>
            <span className="text-[#333]">|</span>
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="text-white hover:underline cursor-pointer font-bold"
              style={{ color: accentColor }}
            >
              [ TÉLÉCHARGER CV A4 .PDF ]
            </button>
          </div>
        </div>

        {/* Global Toast for PDF Download Success or Error */}
        {downloadSuccess && (
          <div className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-[#111] border border-emerald-500/60 text-white rounded-xl p-4 shadow-2xl animate-in slide-in-from-bottom font-mono text-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-white text-sm">FICHIER PDF PRÊT !</p>
              <p className="text-[#aaa] mt-0.5">
                Le document <strong>CV_Hamza_Jawab.pdf</strong> a été généré et téléchargé en format A4 vectoriel.
              </p>
              {pdfDownloadUrl && (
                <a
                  href={pdfDownloadUrl}
                  download="CV_Hamza_Jawab.pdf"
                  className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>TÉLÉCHARGER DIRECTEMENT</span>
                </a>
              )}
            </div>
            <button
              type="button"
              onClick={() => setDownloadSuccess(false)}
              className="text-[#666] hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {downloadError && (
          <div className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-[#111] border border-red-500/60 text-white rounded-xl p-4 shadow-2xl animate-in slide-in-from-bottom font-mono text-xs flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-white text-sm">ERREUR D'EXPORTATION</p>
              <p className="text-[#aaa] mt-0.5">{downloadError}</p>
            </div>
          </div>
        )}

        {/* SECTION 1: HERO SPECIMEN (BASEMENT GROTESQUE / PIXEL / WIREFRAME) */}
        <BasementHeroCard
          onDownloadPdf={handleDownloadPdf}
          onViewCVDocument={() => handleSelectSection('cv-doc')}
          isGeneratingPdf={isGeneratingPdf}
          accentColor={accentColor}
          activeMode={activeMode}
          onModeChange={setActiveMode}
        />

        {/* SECTION 1B: ADHESION SPECIMEN (Second card from user's image) */}
        <BasementAdhesionCard
          accentColor={accentColor}
          onDownloadPdf={handleDownloadPdf}
          onViewCVDocument={() => handleSelectSection('cv-doc')}
        />

        {/* SECTION 2: PARCOURS PROFESSIONNEL */}
        <BasementExperienceCard accentColor={accentColor} />

        {/* SECTION 3: LICENCES ET CERTIFICATIONS */}
        <BasementCertificationsCard
          onOpenLinkedInView={() => setShowLinkedInModal(true)}
          accentColor={accentColor}
        />

        {/* SECTION 4: STACK TECHNIQUE & COMPÉTENCES */}
        <BasementSkillsCard accentColor={accentColor} />

        {/* SECTION 5: FORMATION ACADÉMIQUE */}
        <BasementEducationCard accentColor={accentColor} />

        {/* SECTION 6: DOCUMENT CV ORIGINAL (A4) */}
        <BasementCVDocumentCard
          onDownloadPdf={handleDownloadPdf}
          isGeneratingPdf={isGeneratingPdf}
          accentColor={accentColor}
          onSelectCert={handleSelectCert}
        />

        {/* SECTION 7: TRANSMISSION & CONTACT */}
        <BasementContactCard
          onDownloadPdf={handleDownloadPdf}
          isGeneratingPdf={isGeneratingPdf}
          accentColor={accentColor}
        />

        {/* Basement Foundry Footer */}
        <footer className="mt-12 py-8 border-t border-[#181818] font-mono text-xs text-[#666] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-white" style={{ color: accentColor }}>
              HJ.
            </span>
            <span>© {new Date().getFullYear()} HAMZA JAWAB. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>TSDI BERRECHID</span>
            <span className="text-[#333]">/</span>
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="text-[#999] hover:text-white underline cursor-pointer"
            >
              CV_HAMZA_JAWAB.PDF
            </button>
          </div>
        </footer>
      </main>

      {/* LinkedIn Photo Specimen Modal (When requested) */}
      {showLinkedInModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowLinkedInModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white text-black rounded-xl overflow-hidden shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#111] text-white p-3 px-4 flex items-center justify-between font-mono text-xs">
              <span className="text-amber-400 font-bold">
                [ VUE REPRODUCTION LINKEDIN DE LA PHOTO ]
              </span>
              <button
                type="button"
                onClick={() => setShowLinkedInModal(false)}
                className="px-2 py-0.5 rounded border border-[#333] hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                FERMER [X]
              </button>
            </div>
            <LinkedInCertificationsView
              onBackToCV={() => setShowLinkedInModal(false)}
              selectedCert={selectedCert}
              onSelectCert={setSelectedCert}
            />
          </div>
        </div>
      )}
    </div>
  );
}
