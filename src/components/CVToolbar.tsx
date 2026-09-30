import React from 'react';
import { Printer, Download, Eye, FileText, Award, ZoomIn, ZoomOut } from 'lucide-react';

export type ViewMode = 'all' | 'page1' | 'page2' | 'linkedin';

interface CVToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
  onPrint: () => void;
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
  pdfStatus?: string;
}

export const CVToolbar: React.FC<CVToolbarProps> = ({
  viewMode,
  onViewModeChange,
  zoom,
  onZoomChange,
  onPrint,
  onDownloadPdf,
  isGeneratingPdf = false,
  pdfStatus,
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs px-3 sm:px-6 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Title Zone */}
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-bold tracking-tight text-neutral-900">
            HAMZA JAWAB
          </span>
          <span className="text-xs text-neutral-400 font-light hidden md:inline">|</span>
          <span className="text-xs text-neutral-600 hidden md:inline font-medium">
            Curriculum Vitae & Certifications
          </span>
        </div>

        {/* View Switcher Tabs Zone */}
        <nav className="flex items-center p-1 bg-neutral-100 rounded-lg text-xs font-medium text-neutral-700">
          <button
            type="button"
            onClick={() => onViewModeChange('all')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              viewMode === 'all'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV Complet (2 Pages)</span>
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange('page1')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              viewMode === 'page1'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span>Page 1</span>
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange('page2')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              viewMode === 'page2'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span>Page 2 (+ Certifications)</span>
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange('linkedin')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              viewMode === 'linkedin'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Vue LinkedIn (Photo)</span>
          </button>
        </nav>

        {/* Action Controls Zone */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden lg:flex items-center gap-1 bg-neutral-100 rounded-lg p-1 text-xs">
            <button
              type="button"
              onClick={() => onZoomChange(Math.max(0.7, zoom - 0.1))}
              className="p-1 hover:bg-white rounded transition-colors text-neutral-600 hover:text-neutral-900 cursor-pointer"
              title="Zoom arrière"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1 text-[11px] font-mono text-neutral-600 min-w-[38px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => onZoomChange(Math.min(1.3, zoom + 0.1))}
              className="p-1 hover:bg-white rounded transition-colors text-neutral-600 hover:text-neutral-900 cursor-pointer"
              title="Zoom avant"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Primary Action: Direct Download PDF */}
          <button
            type="button"
            disabled={isGeneratingPdf}
            onClick={onDownloadPdf}
            className="flex items-center gap-2 bg-neutral-950 text-white px-3.5 py-1.5 rounded-lg text-xs font-medium hover:bg-neutral-800 disabled:opacity-70 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            title="Télécharger directement le fichier PDF (2 pages)"
          >
            {isGeneratingPdf ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>{pdfStatus || 'Téléchargement...'}</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger PDF</span>
              </>
            )}
          </button>

          {/* Secondary Action: Browser Print */}
          <button
            type="button"
            onClick={onPrint}
            className="hidden sm:flex items-center gap-1.5 bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200/70 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap border border-neutral-200"
            title="Ouvrir la boîte d'impression du navigateur"
          >
            <Printer className="w-3.5 h-3.5 text-neutral-500" />
            <span>Imprimer</span>
          </button>
        </div>
      </div>
    </header>
  );
};
