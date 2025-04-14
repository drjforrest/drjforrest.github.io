import React from 'react';
import BackLink from '../components/BackLink';
import PageHeader from '../components/PageHeader';

const Context: React.FC = () => {
  return (
    <div>
      {/* Back to homepage link */}
      <div className="container mx-auto px-4" style={{ paddingTop: '2rem' }}>
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Project Scope" 
      />

      {/* Project Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-8 text-lg text-gray-700">
            This project includes five core deliverables to support the strategic rollout of Fair Price Pharma's upcoming facility:
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-4">
            <li>Develop and implement over 6-8 weeks, a stakeholder engagement strategy</li>
            <li>Audit the current online presence and design and launch an online media and PR campaign around sales targeting providers</li>
            <li>Modernize and rebrand the website with SEO optimization</li>
            <li>Build a data center to track media, sentiment, and branding progress</li>
          </ul>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8 border-l-4 border-[#19404C]">
            <h2 className="text-2xl font-bold text-[#19404C] mb-4">Project Background</h2>
            <p className="mb-4 text-gray-700">
              Fair Price Pharma is developing a licensed manufacturing facility for pharmaceutical-grade heroin (diacetylmorphine) to support safer supply programs as part of comprehensive harm reduction efforts in British Columbia.
            </p>
            <p className="mb-4 text-gray-700">
              This initiative requires careful stakeholder management and communication strategy to ensure successful implementation in a complex regulatory and social environment.
            </p>
            <p className="text-gray-700">
              The stakeholder engagement strategy outlined in this proposal aims to build awareness, trust, and support among key stakeholders including regulatory authorities, healthcare providers, community organizations, and government entities.
            </p>
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#19404C] mb-4">Strategic Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#19404C] mb-2">Primary Objectives</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Build stakeholder support for facility implementation</li>
                  <li>Develop clear communication frameworks with regulatory authorities</li>
                  <li>Establish Fair Price Pharma as a trusted healthcare partner</li>
                  <li>Create measurable engagement metrics for ongoing assessment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#19404C] mb-2">Supporting Goals</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modernize digital presence to align with stakeholder needs</li>
                  <li>Implement policy-aligned terminology across all communications</li>
                  <li>Develop strategic media relationships to support public awareness</li>
                  <li>Create sustainable engagement processes for long-term success</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Context;