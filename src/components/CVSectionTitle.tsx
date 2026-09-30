import React from 'react';

interface CVSectionTitleProps {
  title: string;
  badge?: string;
  className?: string;
}

export const CVSectionTitle: React.FC<CVSectionTitleProps> = ({
  title,
  badge,
  className = '',
}) => {
  return (
    <div className={`mb-3 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-[13px] sm:text-[14px] font-bold tracking-wide text-neutral-900 uppercase">
          {title}
        </h2>
        {badge && (
          <span className="text-[10px] text-neutral-500 font-normal no-print">
            {badge}
          </span>
        )}
      </div>
      <div className="w-full h-[1px] bg-neutral-900 mt-1" />
    </div>
  );
};
