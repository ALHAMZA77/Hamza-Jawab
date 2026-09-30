import React from 'react';
import { cvData } from '../../data/cvData';
import { Download, FileText, ArrowRight, Mail, Phone, MapPin, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onViewCVDocument: () => void;
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewCVDocument,
  onDownloadPdf,
  isGeneratingPdf,
}) => {
  return (
    <section id="hero" className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Text & Hero Presentation */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Disponible pour opportunités professionnelles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Bonjour, je suis{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                {cvData.personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-300 mb-4 tracking-wide uppercase">
              {cvData.personalInfo.title}
            </p>

            {/* Profile Bio */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {cvData.profile}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onDownloadPdf}
                disabled={isGeneratingPdf}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isGeneratingPdf ? (
                  <>
                    <div className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                    <span>Création du PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Télécharger le CV (PDF)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onViewCVDocument}
                className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm border border-neutral-700/80 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Voir Document Officiel A4</span>
              </button>
            </div>

            {/* Direct Contact Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-neutral-400">
              <a
                href={`mailto:${cvData.personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>{cvData.personalInfo.email}</span>
              </a>
              <a
                href={`tel:${cvData.personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{cvData.personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{cvData.personalInfo.city}, Maroc</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Card / Interactive Preview */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                  Profil vérifié & certifié
                </span>
              </div>

              {/* Highlights Matrix */}
              <div className="mt-5 space-y-4">
                <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Développeur Full Stack & Odoo
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Expérience avec Binteg Partenaire Officiel Odoo, développement web, Sage 100/X3 et automatisation.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      6 Certifications Récentes (Anthropic & OPSWAT)
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Spécialisations en Claude Code, Cowork, Plateforme Claude et Protection des infrastructures critiques.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Polyvalence Métier & Gestion Commerciale
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Marchés publics marocains, facturation, suivi de stock, recouvrement et support informatique.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast Stats Footer */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">7+</div>
                  <div className="text-[11px] text-neutral-400">Expériences</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">6</div>
                  <div className="text-[11px] text-neutral-400">Certifications</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-[11px] text-neutral-400">Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
