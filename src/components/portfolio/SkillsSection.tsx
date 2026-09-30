import React from 'react';
import { cvData } from '../../data/cvData';
import { Cpu, Code2, Globe2, Layers, Languages, Heart, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Développement Web & Logiciel',
      icon: Code2,
      skills: [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'Full Stack Development',
        'VB.NET',
        'WordPress & CMS',
        'WooCommerce (E-commerce)',
      ],
    },
    {
      title: 'ERP & Outils de Gestion',
      icon: Layers,
      skills: [
        'Odoo ERP (Partenaire Binteg)',
        'Sage 100',
        'Sage X3',
        'Gestion de facturation & Recouvrement',
        'Gestion de stock & Moniteur véhicule',
        'Portail marocain des marchés publics',
      ],
    },
    {
      title: 'Bureautique & Systèmes',
      icon: Cpu,
      skills: [
        'Microsoft Excel (Avancé)',
        'Microsoft Word & Outlook',
        'Microsoft PowerPoint',
        'Microsoft Access',
        'Canva & Design Web',
      ],
    },
    {
      title: 'Digital Marketing & E-commerce',
      icon: Globe2,
      skills: [
        'LinkedIn & Réseaux Sociaux',
        'Instagram & Facebook Ads',
        'X (anciennement Twitter)',
        'Dropshipping (eBay, Etsy)',
        'Service Commercial & Relation Client',
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-neutral-900/60 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Compétences & Maîtrise Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Expertise & Savoir-Faire
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Une combinaison équilibrée d'ingénierie web, d'administration d'outils de gestion d'entreprise et d'efficacité bureautique.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-950/80 border border-neutral-800 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-colors shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-4">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages & Interests Double Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Languages Card */}
          <div className="rounded-2xl bg-neutral-950/80 border border-neutral-800 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-neutral-800">
              <Languages className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Langues Maîtrisées</h3>
            </div>
            <div className="space-y-4">
              {cvData.languages.map((lang, lIdx) => (
                <div key={lIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-amber-400">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-900 overflow-hidden border border-neutral-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500"
                      style={{
                        width:
                          lang.name === 'Arabe'
                            ? '100%'
                            : lang.name === 'Anglais'
                            ? '88%'
                            : '80%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="rounded-2xl bg-neutral-950/80 border border-neutral-800 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-neutral-800">
              <Heart className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Centres d'Intérêt & Passions</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cvData.interests.map((interest, iIdx) => (
                <div
                  key={iIdx}
                  className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
                >
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2">
                    {interest.category}
                  </span>
                  <p className="text-sm font-medium text-neutral-200">
                    {interest.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
