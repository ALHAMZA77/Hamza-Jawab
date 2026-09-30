import React from 'react';
import { Download, FileText, Globe, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: 'website' | 'cv-doc';
  onTabChange: (tab: 'website' | 'cv-doc') => void;
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  onDownloadPdf,
  isGeneratingPdf,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Parcours', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Formation', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Logo / Monogram */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              if (currentTab === 'cv-doc') {
                e.preventDefault();
                onTabChange('website');
              }
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-neutral-950 font-black text-sm tracking-wider shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              HJ
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Hamza Jawab
              </span>
              <span className="block text-[11px] font-medium text-neutral-400 tracking-wide">
                Développeur Informatique
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        {currentTab === 'website' && (
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* View Mode Switcher & Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* View Mode Toggle Pill */}
          <div className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-xl text-xs">
            <button
              type="button"
              onClick={() => onTabChange('website')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'website'
                  ? 'bg-neutral-800 text-white shadow-xs font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Portfolio</span>
              <span className="sm:hidden">Web</span>
            </button>
            <button
              type="button"
              onClick={() => onTabChange('cv-doc')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'cv-doc'
                  ? 'bg-neutral-800 text-white shadow-xs font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">CV Original (A4)</span>
              <span className="sm:hidden">CV A4</span>
            </button>
          </div>

          {/* Direct PDF Download Button */}
          <button
            type="button"
            onClick={onDownloadPdf}
            disabled={isGeneratingPdf}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer disabled:opacity-70 whitespace-nowrap"
            title="Télécharger le CV au format PDF"
          >
            {isGeneratingPdf ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                <span className="hidden sm:inline">Création...</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-neutral-950" />
                <span className="hidden sm:inline">Télécharger PDF</span>
                <span className="sm:hidden">PDF</span>
              </>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          {currentTab === 'website' && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && currentTab === 'website' && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-neutral-950 border-b border-neutral-800 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
