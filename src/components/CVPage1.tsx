import React from 'react';
import { CVSidebar } from './CVSidebar';
import { CVHeader } from './CVHeader';
import { CVSectionTitle } from './CVSectionTitle';
import { cvData } from '../data/cvData';

export const CVPage1: React.FC = () => {
  return (
    <div
      id="cv-page-1"
      className="cv-page relative bg-white w-full max-w-[800px] min-h-[1100px] shadow-lg border border-neutral-200 flex flex-row mx-auto text-neutral-900 font-cv text-[11.5px] sm:text-[12px] leading-relaxed"
    >
      {/* Left dark vertical sidebar */}
      <CVSidebar text={cvData.personalInfo.verticalSidebarTitle} />

      {/* Main page content area */}
      <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between">
        <div>
          {/* Header */}
          <CVHeader
            name={cvData.personalInfo.name}
            email={cvData.personalInfo.email}
            phone={cvData.personalInfo.phone}
            city={cvData.personalInfo.city}
          />

          {/* Section: Profil Professionnel */}
          <section className="mb-4">
            <CVSectionTitle title="PROFIL PROFESSIONNEL" />
            <p className="text-neutral-800 text-[11.5px] sm:text-[12px] leading-relaxed text-justify">
              {cvData.profile}
            </p>
          </section>

          {/* Section: Parcours Professionnel */}
          <section className="space-y-3">
            <CVSectionTitle title="PARCOURS PROFESSIONNEL" />

            {cvData.experiences.map((exp, idx) => (
              <div key={idx} className="space-y-0.5">
                {/* Header row: Company and Date */}
                <div className="flex justify-between items-baseline gap-2">
                  <span className="font-semibold text-neutral-900 text-[12px]">
                    {exp.company}
                  </span>
                  <span className="font-medium text-neutral-800 text-[11px] sm:text-[11.5px] whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Subtitle if any */}
                {exp.subtitle && (
                  <p className="text-[11px] sm:text-[11.5px] text-neutral-700 italic">
                    {exp.subtitle}
                  </p>
                )}

                {/* Tasks / Bullet points */}
                <ul className="list-disc pl-4 space-y-0.5 text-neutral-800 text-[11px] sm:text-[11.5px]">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="leading-snug">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        {/* Page Footer Marker */}
        <div className="pt-2 text-[10px] text-neutral-400 text-right no-print">
          Page 1 / 2
        </div>
      </div>
    </div>
  );
};
