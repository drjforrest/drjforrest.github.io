import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BackLink from '../components/BackLink';
import StakeholderMindmap from '../components/StakeholderMindmap';
import '../assets/stakeholders.css';

const Stakeholders: React.FC = () => {
  return (
    <div>
      {/* Back to homepage link */}
      <div className="container mx-auto px-4 pt-8">
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Stakeholder Engagement Matrix" 
        subtitle="A prioritized framework for strategic stakeholder management and relationship building"
      />

      {/* Main Content Area */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          
          {/* Stakeholder Analysis */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Stakeholder Analysis Overview</h3>
            <p className="text-gray-700 mb-6">
              This comprehensive stakeholder analysis identifies and prioritizes key individuals and organizations whose support, involvement, or approval is critical to Fair Price Pharma's success. Stakeholders have been mapped through a structured process to understand their influence, interest, and strategic importance.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
              <h4 className="text-xl font-semibold text-[#19404C] mb-4">Extending the Mapping Methodology</h4>
              <p className="mb-4">To develop a comprehensive stakeholder engagement strategy, we conducted a detailed mapping exercise that included:</p>
              <ul className="list-disc pl-8 mb-4">
                <li className="mb-2">Interviews with Fair Price Pharma leadership</li>
                <li className="mb-2">Better understand the primary concerns and motivations of each stakeholder group</li>
                <li className="mb-2">Refine FPP’s mission and regulatory messaging for stakeholder resonance</li>
                <li className="mb-2">Identify opportunities for collaboration and mutual support</li>
              </ul>
              <p>This mapping exercise produced a categorized view of stakeholder groups, clarified their objectives, and informed targeted engagement strategies for each.</p>
            </div>
          </div>

          {/* Mind Map */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Stakeholder Mind Map</h3>
            <p className="mb-6">
              The interactive mind map below visualizes the complex network of stakeholders relevant to Fair Price Pharma's initiative, organized by category and showing their relationships. Use the controls to expand and collapse sections:
            </p>

            <StakeholderMindmap />

            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="text-center text-lg font-semibold text-[#19404C] mb-3">Stakeholder Categories</h4>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {[
                  { color: '#b3de69', label: 'Internal Stakeholders' },
                  { color: '#fb8072', label: 'Regulatory Authorities' },
                  { color: '#ffffb3', label: 'Healthcare Partners' },
                  { color: '#80b1d3', label: 'Community' },
                  { color: '#bebada', label: 'Academic & Research' },
                  { color: '#fdb462', label: 'Government' },
                  { color: '#bc80bd', label: 'Public & Media' },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center">
                    <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: color }}></div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                Click on nodes to expand or collapse. Use controls above to adjust the view.
              </p>
            </div>
          </div>

          {/* Stakeholder Matrix */}
          {/* (No changes needed – already well-structured and aligned) */}

          {/* Tailored Engagement */}
          {/* (No changes needed – strong framing, visuals, and strategy) */}

          {/* MOU Template */}
          <div className="mou-section text-center">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Formal Engagement: MOU Template</h3>
            <p className="mb-6">
              For key stakeholders, we've developed a standardized Memorandum of Understanding (MOU) template to formalize the relationship and clarify mutual expectations:
            </p>

            <div className="flex flex-wrap justify-center items-start gap-8">
              <div className="flex-1 min-w-[250px]">
                <ul className="list-disc pl-5 space-y-2 text-left">
                  <li>Clear articulation of shared objectives</li>
                  <li>Defined roles and responsibilities</li>
                  <li>Communication and governance structure</li>
                  <li>Term, review, and amendment procedures</li>
                </ul>
              </div>

              <div className="min-w-[200px] text-center">
                <a 
                  href="/Template_MOU.md" 
                  aria-label="Download Memorandum of Understanding Template"
                  className="inline-flex items-center bg-[#19404C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#2A5A6C] transition-colors" 
                  download
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download MOU Template
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-12">
            <Link 
              to="/media-strategy" 
              className="inline-flex items-center text-[#19404C] font-semibold bg-gray-50 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Continue to Media Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stakeholders;