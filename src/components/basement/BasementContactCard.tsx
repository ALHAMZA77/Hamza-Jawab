import React, { useState } from 'react';
import { cvData } from '../../data/cvData';
import { Terminal, Send, Check, Copy, Download, ArrowUpRight } from 'lucide-react';

interface BasementContactCardProps {
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
  accentColor: string;
}

export const BasementContactCard: React.FC<BasementContactCardProps> = ({
  onDownloadPdf,
  isGeneratingPdf,
  accentColor,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Message Portfolio de ${formName}`);
    const mailtoBody = encodeURIComponent(
      `Nom: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    );
    window.location.href = `mailto:${cvData.personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div
      id="contact"
      className="rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden mb-8 shadow-2xl relative font-mono"
    >
      {/* Top Specimen Bar matching Basement Foundry */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-3 text-xs text-[#888]">
        {/* Left: Dropdown Indicator & Title */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <span className="text-[10px]" style={{ color: accentColor }}>▼</span>
          <span className="uppercase">CANAL DE TRANSMISSION & CONTACT</span>
        </div>

        {/* Specs metadata */}
        <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666]">
          <span>EMAIL / TÉLÉPHONE / WHATSAPP</span>
          <span className="text-[#333]">/</span>
          <span>RÉPONSE SOUS 24H</span>
        </div>

        <div className="text-[10px] text-emerald-400 font-bold">
          CONNECTÉ
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10 bg-grid-dots">
        {/* Section Headline */}
        <div className="mb-8 font-sans">
          <div className="text-[11px] font-mono uppercase text-[#777] tracking-widest mb-1">
            INITIER LE CONTACT
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            CONTACT & DISPONIBILITÉ
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Direct Contact Coordinates */}
          <div className="lg:col-span-5 space-y-3">
            {/* Email Card */}
            <div className="p-4 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#666] block">
                  ADRESSE EMAIL
                </span>
                <span className="text-xs font-bold text-white truncate block">
                  {cvData.personalInfo.email}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(cvData.personalInfo.email, 'email')}
                className="px-2 py-1 rounded bg-[#141414] border border-[#222] text-[10px] text-[#aaa] hover:text-white transition-colors cursor-pointer"
              >
                {copiedItem === 'email' ? 'COPIÉ' : 'COPIER'}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#666] block">
                  TÉLÉPHONE / WHATSAPP
                </span>
                <span className="text-xs font-bold text-white block">
                  {cvData.personalInfo.phone}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(cvData.personalInfo.phone, 'phone')}
                className="px-2 py-1 rounded bg-[#141414] border border-[#222] text-[10px] text-[#aaa] hover:text-white transition-colors cursor-pointer"
              >
                {copiedItem === 'phone' ? 'COPIÉ' : 'COPIER'}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
              <span className="text-[10px] uppercase text-[#666] block">
                BASE OPÉRATIONNELLE
              </span>
              <span className="text-xs font-bold text-white block">
                {cvData.personalInfo.city}, MAROC
              </span>
            </div>

            {/* Direct PDF Download */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onDownloadPdf}
                disabled={isGeneratingPdf}
                className="w-full py-3 px-4 rounded bg-transparent border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all cursor-pointer"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                <Download className="w-3.5 h-3.5" />
                <span>TÉLÉCHARGER LE CV EN PDF A4</span>
              </button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 p-5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e]">
            <div className="text-xs font-bold uppercase text-white mb-4 pb-2 border-b border-[#1a1a1a]">
              FORMULAIRE DE TRANSMISSION DIRECTE
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase text-[#666] mb-1">
                    VOTRE NOM :
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="ex. Karim Alami"
                    className="w-full px-3 py-2 rounded bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-white transition-colors text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-[#666] mb-1">
                    VOTRE EMAIL :
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="contact@societe.ma"
                    className="w-full px-3 py-2 rounded bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-white transition-colors text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-[#666] mb-1">
                  MESSAGE :
                </label>
                <textarea
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Décrivez votre besoin technique ou offre de mission..."
                  className="w-full px-3 py-2 rounded bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-white transition-colors text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-[#ddd] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>ENVOYER LE MESSAGE</span>
              </button>

              {sent && (
                <div className="p-2 rounded bg-[#141414] border border-emerald-500/50 text-emerald-400 text-[11px] text-center font-bold">
                  Client email ouvert avec succès.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
