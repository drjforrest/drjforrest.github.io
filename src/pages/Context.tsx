import React from 'react';
import BackLink from '../components/BackLink';
import PageHeader from '../components/PageHeader';

const Context: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Project Scope" 
        subtitle="Strategic communications and stakeholder engagement to support facility implementation"
      />

      {/* Project Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          
          <p className="mb-8 text-lg text-gray-700">
            This project delivers five core workstreams to support Fair Price Pharma’s public rollout and strengthen its positioning across stakeholder groups:
          </p>

          <ul className="list-disc pl-6 text-gray-800 space-y-4">
            <li>Develop and deploy a stakeholder engagement strategy over a 6–8 week timeline</li>
            <li>Audit the digital footprint and launch a targeted media and PR campaign to reach prescribers and healthcare partners</li>
            <li>Redesign and rebrand the FPP website with improved SEO and credibility markers</li>
            <li>Establish a communications data hub to track sentiment, reach, and messaging efficacy</li>
          </ul>

          {/* Background */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8 border-l-4 border-[#19404C]">
            <h2 className="text-2xl font-bold text-[#19404C] mb-4">Project Background</h2>
            <p className="mb-4 text-gray-700">
              Fair Price Pharma (FPP) is preparing to operationalize a domestic facility manufacturing diacetylmorphine (pharmaceutical-grade heroin) for integration into safer supply programs across British Columbia. This initiative is rooted in public health leadership and supported by international evidence, but its success depends on public understanding and multi-stakeholder alignment.
            </p>
            <p className="mb-4 text-gray-700">
              While FPP’s mission is clear and well-grounded—addressing the opioid crisis through cost-effective, evidence-based alternatives—the public narrative remains fragmented. Despite substantial media coverage and strong endorsements from figures like Dr. Bonnie Henry and Hon. Patty Hajdu, FPP has a limited digital voice of its own.
            </p>
            <p className="mb-4 text-gray-700">
              The organization’s current website is factual but static, lacking dynamic updates or clear messaging paths for prospective partners. Its social media presence is minimal, and it has missed opportunities to shape the discourse around its brand and product ("Opiax") on platforms where misinformation and stigma remain common.
            </p>
            <p className="text-gray-700">
              A focused engagement strategy is essential to fill these communication gaps—ensuring that FPP’s credibility, evidence base, and progress are actively surfaced and strategically broadcast. This work is not simply about increasing visibility but about safeguarding legitimacy and driving informed consensus.
            </p>
          </div>

          {/* Strategic Objectives */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#19404C] mb-4">Strategic Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <h3 className="text-lg font-semibold text-[#19404C] mb-2">Primary Objectives</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Build early and sustained stakeholder buy-in for facility operations</li>
                  <li>Position Fair Price Pharma as a credible and necessary public health supplier</li>
                  <li>Facilitate transparent, proactive communications with regulatory and health authorities</li>
                  <li>Embed measurable evaluation tools to track and refine engagement over time</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#19404C] mb-2">Supporting Goals</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Strengthen digital presence with SEO-aligned content and site structure</li>
                  <li>Standardize messaging to reflect public interest framing and regulatory alignment</li>
                  <li>Amplify positive media mentions and proactively address misconceptions</li>
                  <li>Create scalable content templates and outreach protocols for long-term use</li>
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