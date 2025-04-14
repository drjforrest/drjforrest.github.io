import React from 'react';
import PageHeader from '../components/PageHeader';
import BackLink from '../components/BackLink';

const Implementation: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Implementation Framework"
        subtitle="A modular Airtable system for stakeholder engagement, media strategy, and team accountability"
      />

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">

          {/* Framework Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">How the Framework Works</h3>
            <p className="mb-6 text-gray-700 max-w-3xl">
              This implementation framework is built using six interconnected Airtable modules. Each module corresponds to a core workstream—campaign execution, stakeholder tracking, sentiment monitoring, SEO optimization, social scheduling, and team roles. Together, they form an operational backbone for Fair Price Pharma's engagement strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: '📊 Media Campaign Tracker',
                  desc: 'Manages campaign objectives, messaging status, publication readiness, and alignment with policy themes.'
                },
                {
                  title: '📰 Media Monitoring & Sentiment',
                  desc: 'Logs media coverage, tone, platform reach, and stakeholder reactions to ensure real-time visibility.'
                },
                {
                  title: '🔍 SEO Strategy',
                  desc: 'Tracks key terms, page performance, metadata status, and SEO tactics aligned with policy messaging.'
                },
                {
                  title: '📅 Social Media Calendar',
                  desc: 'Schedules multi-channel content, assigns responsibility, and records platform engagement metrics.'
                },
                {
                  title: '🤝 Stakeholder Registry',
                  desc: 'Maps stakeholders by influence, interest, engagement status, and records outreach touchpoints.'
                },
                {
                  title: '👥 Team Roles & Accountability',
                  desc: 'Assigns task ownership across modules, linking staff and collaborators to active deliverables.'
                }
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#19404C]">
                  <h4 className="text-lg font-semibold mb-2 text-[#19404C]">{title}</h4>
                  <p className="text-sm text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Airtable Embed */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Live Implementation Framework</h3>
            <p className="mb-6 text-gray-700 max-w-3xl">
              The embedded Airtable workspace below enables structured execution across all modules. It includes linked records, filters by workstream, and is updated continuously.
            </p>

            <div className="w-full h-[900px] rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-full border-0"
                src="https://airtable.com/embed/appkb0tqaUR9npPx9/pagPeUkMb2bzOY9j8"
                title="FPP Implementation Airtable App"
              ></iframe>
            </div>

            <p className="mt-4 text-sm text-gray-600 italic">
              Use the tabs, filters, or views in the embedded dashboard to explore campaign data, stakeholder logs, and media metrics in real time.
            </p>
          </div>

          {/* Feedback Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Feedback & Adaptation</h3>
            <p className="mb-6 text-gray-700 max-w-3xl">
              This framework is adaptive by design. Input from stakeholders, collaborators, and advisors informs ongoing improvements. Submit feedback using the form below to suggest improvements or report gaps.
            </p>

            <div className="feedback-container h-[800px] w-full rounded-lg overflow-hidden shadow-md">
              <iframe 
                className="w-full h-full border-0"
                src="https://airtable.com/embed/appkb0tqaUR9npPx9/pagAXVmoFV6khWy0S/form"
                title="Fair Price Pharma Feedback Form"
              ></iframe>
            </div>

            <p className="text-sm text-gray-600 mt-4 italic">
              Feedback is reviewed and used to improve how the Airtable framework supports real-world needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Implementation;