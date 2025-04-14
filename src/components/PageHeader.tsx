import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="page-header bg-[#19404C] text-white py-12 mb-8">
      <div className="container mx-auto px-4">
        <h1 className="page-title text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="page-subtitle text-xl max-w-3xl opacity-90">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;