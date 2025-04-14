import React from 'react';
import PageHeader from '../components/PageHeader';
import BackLink from '../components/BackLink';

const Implementation: React.FC = () => {
  return (
    <div>
      {/* Back to homepage link */}
      <div className="container mx-auto px-4" style={{ paddingTop: '2rem' }}>
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Implementation Plan & Feedback" 
        subtitle="Phased roadmap for execution and a place to share your input"
      />

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Implementation Overview</h3>
            <p className="mb-6">
              This roadmap supports Fair Price Pharma's 12-month stakeholder engagement plan across four strategic phases. Each phase includes specific deliverables, training, and relationship milestones.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Strategic:</strong> Priority-focused with sequenced activation</li>
              <li><strong>Iterative:</strong> Monthly review and adaptation cycles</li>
              <li><strong>Measurable:</strong> Trackable KPIs aligned to timeline</li>
              <li><strong>Sustainable:</strong> Internal enablement for continuity</li>
            </ul>
          </div>

          <div className="timeline mb-16">
            <div className="max-w-4xl mx-auto">
              {/* Phase 1 */}
              <div className="relative pl-10 pb-10 border-l-2 border-[#19404C] ml-6">
                <div className="absolute left-0 top-0 w-12 h-12 bg-[#fee2e2] rounded-full border-4 border-[#19404C] flex items-center justify-center -ml-6">
                  <span className="text-[#991b1b] font-bold">1</span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="inline-block bg-[#fee2e2] text-[#991b1b] text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    Phase 1: Months 1-2
                  </div>
                  <h3 className="text-xl font-semibold text-[#19404C] mb-3">Initial Engagement</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Finalize stakeholder mapping</li>
                    <li>Deploy Airtable tracker</li>
                    <li>Launch redesigned website</li>
                    <li>Outreach to top-priority stakeholders</li>
                  </ul>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative pl-10 pb-10 border-l-2 border-[#19404C] ml-6">
                <div className="absolute left-0 top-0 w-12 h-12 bg-[#fef3c7] rounded-full border-4 border-[#19404C] flex items-center justify-center -ml-6">
                  <span className="text-[#92400e] font-bold">2</span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="inline-block bg-[#fef3c7] text-[#92400e] text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    Phase 2: Months 3-4
                  </div>
                  <h3 className="text-xl font-semibold text-[#19404C] mb-3">Relationship Building</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Launch media strategy content</li>
                    <li>Initiate stakeholder sessions</li>
                    <li>Formalize MOU templates</li>
                  </ul>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative pl-10 pb-10 border-l-2 border-[#19404C] ml-6">
                <div className="absolute left-0 top-0 w-12 h-12 bg-[#dcfce7] rounded-full border-4 border-[#19404C] flex items-center justify-center -ml-6">
                  <span className="text-[#166534] font-bold">3</span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="inline-block bg-[#dcfce7] text-[#166534] text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    Phase 3: Months 5-8
                  </div>
                  <h3 className="text-xl font-semibold text-[#19404C] mb-3">Active Collaboration</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Formalize key partnerships with MOUs</li>
                    <li>Conduct collaborative planning sessions</li>
                    <li>Develop joint communications</li>
                    <li>Implement feedback mechanisms</li>
                  </ul>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="relative pl-10 border-l-2 border-[#19404C] ml-6">
                <div className="absolute left-0 top-0 w-12 h-12 bg-[#dbeafe] rounded-full border-4 border-[#19404C] flex items-center justify-center -ml-6">
                  <span className="text-[#1e40af] font-bold">4</span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="inline-block bg-[#dbeafe] text-[#1e40af] text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    Phase 4: Months 9-12
                  </div>
                  <h3 className="text-xl font-semibold text-[#19404C] mb-3">Optimization & Scaling</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Evaluate engagement effectiveness</li>
                    <li>Scale successful approaches</li>
                    <li>Refine communications strategy</li>
                    <li>Develop long-term sustainability plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Implementation Milestones</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-3 text-left">Timeline</th>
                    <th className="border p-3 text-left">Key Deliverables</th>
                    <th className="border p-3 text-left">Success Metrics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Month 1</td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>Finalized stakeholder map</li>
                        <li>Website launch</li>
                        <li>Outreach materials created</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>Stakeholder database complete</li>
                        <li>Website traffic metrics established</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-medium">Month 3</td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>Initial stakeholder meetings</li>
                        <li>Media content calendar active</li>
                        <li>First MOU signed</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>50% of priority stakeholders engaged</li>
                        <li>Media engagement metrics improving</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Month 6</td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>Quarterly review completed</li>
                        <li>Strategy optimization</li>
                        <li>Content refinement</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>80% of priority stakeholders engaged</li>
                        <li>Multiple formal partnerships established</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-medium">Month 12</td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>Comprehensive evaluation report</li>
                        <li>Long-term sustainability plan</li>
                        <li>Success stories documentation</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5">
                        <li>100% of priority stakeholders engaged</li>
                        <li>Positive sentiment metrics</li>
                        <li>Strong partnership foundation</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Feedback Portal</h3>
            <p className="mb-6">
              Please use the embedded form below to share feedback, questions, or ideas regarding the proposal. Your input will shape refinements during the next phase of development.
            </p>
            
            <div className="feedback-container h-[800px] w-full rounded-lg overflow-hidden shadow-md">
              <iframe 
                className="w-full h-full border-0"
                src="https://airtable.com/embed/appkb0tqaUR9npPx9/pagAXVmoFV6khWy0S/form"
                title="Fair Price Pharma Feedback Form"
              ></iframe>
            </div>
            
            <p className="text-sm text-gray-600 mt-4 italic">
              All responses are confidential and reviewed solely by the project lead.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Implementation;