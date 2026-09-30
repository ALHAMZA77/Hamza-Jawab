import React from 'react';
import { CVSidebar } from './CVSidebar';
import { CVSectionTitle } from './CVSectionTitle';
import { cvData, Certification } from '../data/cvData';
import { ExternalLink } from 'lucide-react';

interface CVPage2Props {
  onSelectCert?: (cert: Certification) => void;
}

export const CVPage2: React.FC<CVPage2Props> = ({ onSelectCert }) => {
  return (
    <div
      id="cv-page-2"
      className="cv-page relative bg-white w-full max-w-[800px] min-h-[1100px] shadow-lg border border-neutral-200 flex flex-row mx-auto text-neutral-900 font-cv text-[11.5px] sm:text-[12px] leading-relaxed"
    >
      {/* Left dark vertical sidebar */}
      <CVSidebar text={cvData.personalInfo.verticalSidebarTitle} />

      {/* Main page content area */}
      <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Section: Formation */}
          <section>
            <CVSectionTitle title="FORMATION" />
            <div className="space-y-1.5">
              {cvData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-baseline gap-2 text-neutral-800 text-[11.5px] sm:text-[12px]"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>{edu.degree}</span>
                  </div>
                  <span className="font-semibold text-neutral-900 whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Licences et Certifications (Newly added from the photo, translated to French) */}
          <section>
            <div className="flex items-center justify-between">
              <CVSectionTitle 
                title="LICENCES ET CERTIFICATIONS" 
                badge="Nouveau" 
                className="w-full"
              />
            </div>
            
            <div className="space-y-1.5">
              {cvData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectCert?.(cert)}
                  className="group rounded hover:bg-neutral-50/80 transition-colors py-1 px-1 -mx-1 cursor-pointer flex justify-between items-baseline gap-3"
                  title="Cliquer pour afficher les détails du diplôme"
                >
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="text-neutral-900 shrink-0">•</span>
                    <div className="font-semibold text-neutral-900 text-[11.5px] sm:text-[12px] flex items-center gap-1.5 flex-wrap">
                      <span>{cert.title}</span>
                      <span className="text-neutral-500 font-normal">
                        ({cert.issuer})
                      </span>
                      <ExternalLink className="w-2.5 h-2.5 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity no-print shrink-0" />
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-neutral-700 whitespace-nowrap shrink-0">
                    Émise {cert.issueDate}
                    {cert.expiryDate ? ` · Expire ${cert.expiryDate}` : ''}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Compétences */}
          <section>
            <CVSectionTitle title="COMPETENCES" />
            <ul className="space-y-1 text-neutral-800 text-[11px] sm:text-[11.5px] uppercase">
              {cvData.skills.map((skill, idx) => (
                <li key={idx} className="flex items-baseline gap-2">
                  <span className="text-neutral-900 shrink-0">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Langues & Centres d'intérêt (Two columns matching original) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Column 1: Langues */}
            <section>
              <CVSectionTitle title="LANGUES" />
              <div className="space-y-1 text-[11.5px] sm:text-[12px] text-neutral-800">
                {cvData.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-baseline gap-2">
                    <span className="font-semibold text-neutral-900 min-w-[70px]">
                      {lang.name} :
                    </span>
                    <span>{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Column 2: Centres d'intérêt */}
            <section>
              <CVSectionTitle title="CENTRES D’INTERET" />
              <div className="space-y-2 text-[11.5px] sm:text-[12px] text-neutral-800">
                {cvData.interests.map((interest, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-neutral-900 uppercase text-[11px] tracking-wider underline underline-offset-2">
                      {interest.category} :
                    </div>
                    <div className="pl-1 text-neutral-800">
                      {interest.items}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Page Footer Marker */}
        <div className="pt-2 text-[10px] text-neutral-400 text-right no-print">
          Page 2 / 2
        </div>
      </div>
    </div>
  );
};
