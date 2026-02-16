
import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className, title, subtitle, children, dark }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16 md:mb-24">
            {title && (
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-400 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
