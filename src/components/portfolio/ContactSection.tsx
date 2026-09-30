import React, { useState } from 'react';
import { cvData } from '../../data/cvData';
import { Mail, Phone, MapPin, Send, Check, Copy, Download, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onDownloadPdf,
  isGeneratingPdf,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formSubject || `Contact Portfolio de ${formName}`);
    const mailtoBody = encodeURIComponent(
      `Nom: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    );
    window.location.href = `mailto:${cvData.personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-900/60 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact & Disponibilité</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Entrons en Contact
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Vous avez un projet de développement, une opportunité d'emploi ou une mission technique ? N'hésitez pas à me joindre directement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between hover:border-amber-500/30 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Adresse Email
                </h3>
                <p className="text-sm font-bold text-white break-all">
                  {cvData.personalInfo.email}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <a
                  href={`mailto:${cvData.personalInfo.email}`}
                  className="text-xs font-medium text-amber-400 hover:text-amber-300"
                >
                  Envoyer un mail
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(cvData.personalInfo.email, 'email')}
                  className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copier l'email"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between hover:border-amber-500/30 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Téléphone / WhatsApp
                </h3>
                <p className="text-sm font-bold text-white">
                  {cvData.personalInfo.phone}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <a
                  href={`tel:${cvData.personalInfo.phone}`}
                  className="text-xs font-medium text-amber-400 hover:text-amber-300"
                >
                  Appeler
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(cvData.personalInfo.phone, 'phone')}
                  className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copier le numéro"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between hover:border-amber-500/30 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Localisation
                </h3>
                <p className="text-sm font-bold text-white">
                  {cvData.personalInfo.city}, Maroc
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Mobile & Disponible</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span>Envoyer un message direct</span>
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Ce formulaire prépare votre message et l'envoie directement à hamzajawab303@gmail.com.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="ex. Karim Alami"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="ex. contact@entreprise.ma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Objet
                </label>
                <input
                  type="text"
                  required
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="ex. Opportunité de poste / Projet Web"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Décrivez votre besoin ou proposition..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer l'email</span>
                </button>

                <button
                  type="button"
                  onClick={onDownloadPdf}
                  disabled={isGeneratingPdf}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Télécharger le CV complet (PDF)</span>
                </button>
              </div>

              {submitted && (
                <div className="mt-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Votre client de messagerie a été ouvert avec les données pré-remplies.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
