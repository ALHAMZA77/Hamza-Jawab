import React from 'react';
import { Mail, Phone, Home } from 'lucide-react';

interface CVHeaderProps {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  city?: string;
}

export const CVHeader: React.FC<CVHeaderProps> = ({
  name = 'HAMZA JAWAB',
  email = 'hamzajawab303@gmail.com',
  phone = '0664155867',
  city = 'BERRECHID',
}) => {
  return (
    <header className="mb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 pb-3">
        {/* Name & Title */}
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-neutral-900 tracking-tight leading-none uppercase">
            {name}
          </h1>
          <div className="mt-1.5 text-[11px] sm:text-[12.5px] font-medium text-neutral-800 tracking-[0.24em] uppercase leading-tight">
            <div>TECHNICIEN SPÉCIALISÉ EN</div>
            <div>DÉVELOPPEMENT INFORMATIQUE</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-1 text-[11.5px] sm:text-[12.5px] text-neutral-800 sm:text-left self-start sm:self-center">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-700 shrink-0" strokeWidth={1.75} />
            <span>{email}</span>
          </a>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-neutral-700 shrink-0" strokeWidth={1.75} />
            <span>{phone}</span>
          </a>
          <div className="flex items-center gap-2">
            <Home className="w-3.5 h-3.5 text-neutral-700 shrink-0" strokeWidth={1.75} />
            <span className="uppercase">{city}</span>
          </div>
        </div>
      </div>

      {/* Horizontal divider rule */}
      <div className="w-full h-[1.5px] bg-neutral-900" />
    </header>
  );
};
