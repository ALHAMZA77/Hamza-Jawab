import React, { useState } from 'react';
import { cvData } from '../../data/cvData';
import { Briefcase, Calendar, Check, Building2, Tag } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dev' | 'gestion'>('all');

  const experiencesWithCategory = cvData.experiences.map((exp, index) => {
    const isDev =
      exp.company.toLowerCase().includes('odoo') ||
      exp.company.toLowerCase().includes('yoozak') ||
      exp.tasks.some(
        (t) =>
          t.toLowerCase().includes('développeur') ||
          t.toLowerCase().includes('wordpress') ||
          t.toLowerCase().includes('web') ||
          t.toLowerCase().includes('informatique')
      );

    return {
      ...exp,
      category: isDev ? 'dev' : 'gestion',
      featured: index === 0 || index === 1,
    };
  });

  const filteredExperiences = experiencesWithCategory.filter((exp) => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  return (
    <section id="experience" className="py-16 sm:py-24 bg-neutral-900/60 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Parcours Professionnel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Expériences & Missions
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Un parcours diversifié alliant développement logiciel, solutions ERP, intégration web et gestion opérationnelle.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center p-1 bg-neutral-950 border border-neutral-800 rounded-xl text-xs font-medium self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Toutes ({cvData.experiences.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('dev')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'dev'
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Développement & Web
            </button>
            <button
              type="button"
              onClick={() => setFilter('gestion')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'gestion'
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Gestion & Commercial
            </button>
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                exp.featured
                  ? 'bg-neutral-950/80 border-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-amber-500/5'
                  : 'bg-neutral-950/50 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-amber-500/40 transition-colors">
                    <Building2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {exp.company}
                    </h3>
                    {exp.subtitle && (
                      <p className="text-xs sm:text-sm text-neutral-400 italic mt-0.5">
                        {exp.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-amber-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  Responsabilités & Réalisations :
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.tasks.map((task, tIdx) => (
                    <li
                      key={tIdx}
                      className="flex items-start gap-2.5 text-sm text-neutral-300 bg-neutral-900/40 p-2.5 rounded-lg border border-neutral-800/60"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
