import React from 'react';
import { cvData } from '../../data/cvData';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Diplômes & Formations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formation Académique
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Un cursus structuré débutant par des bases scientifiques et économiques solides, consolidé par un diplôme d'État en développement informatique.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cvData.education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors shadow-xs"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-bold text-amber-300">
                  <Calendar className="w-3 h-3 text-amber-500" />
                  <span>{edu.year}</span>
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {edu.degree}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
