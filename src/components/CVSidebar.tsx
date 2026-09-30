import React from 'react';

interface CVSidebarProps {
  text?: string;
}

export const CVSidebar: React.FC<CVSidebarProps> = ({
  text = 'HAMZA JAWAB : TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT INFORMATIQUE',
}) => {
  return (
    <aside 
      className="w-10 sm:w-11 bg-neutral-950 shrink-0 flex flex-col justify-end items-center pb-8 sm:pb-12 relative overflow-hidden select-none print:w-10"
      aria-label="En-tête vertical"
    >
      <div 
        className="text-[#deb642] font-semibold text-[10.5px] sm:text-[11.5px] tracking-[0.22em] uppercase whitespace-nowrap"
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          letterSpacing: '0.22em',
        }}
      >
        {text}
      </div>
    </aside>
  );
};
