import React from 'react';
import { cvData } from '../../data/cvData';
import { Download, ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onViewCVDocument: () => void;
  onDownloadPdf: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onViewCVDocument,
  onDownloadPdf,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-neutral-950 font-black text-sm">
              HJ
            </div>
            <div>
              <span className="font-bold text-base tracking-tight">
                {cvData.personalInfo.name}
              </span>
              <p className="text-xs text-neutral-400">
                {cvData.personalInfo.title}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              type="button"
              onClick={onViewCVDocument}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Version CV Papier (A4)</span>
            </button>
            <button
              type="button"
              onClick={onDownloadPdf}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Télécharger PDF</span>
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Hamza Jawab. Tous droits réservés.</p>
          <p>Technicien Spécialisé en Développement Informatique · Berrechid, Maroc</p>
        </div>
      </div>
    </footer>
  );
};
