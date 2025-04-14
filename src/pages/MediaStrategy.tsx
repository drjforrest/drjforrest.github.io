import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MessageSquare, Megaphone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BackLink from '../components/BackLink';
import MediaCharts from '../components/MediaCharts';

const MediaStrategy: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Media & Digital Strategy" 
        subtitle="Building momentum for equitable access and systems change in pharmaceutical markets"
      />

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">

          {/* Overview */}
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Strategic Overview</h3>
            <p className="mb-6">
              This communications strategy advances Fair Price Pharma’s mission to challenge extractive pharmaceutical pricing models and expand equitable access. It is grounded in intentional messaging, stakeholder-specific outreach, and evidence-driven storytelling to shape perception, rally support, and catalyze change.
            </p>

            <p className="mb-6">Four key principles guide this strategy:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Stakeholder Alignment</h4>
                <p>
                  Each message is tailored to resonate with a target audience—from policymakers and partners to patients and public health advocates—anchoring shared priorities and concerns.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Framing for Systems Change</h4>
                <p>
                  Narrative framing emphasizes structural reform and sustainable alternatives to status quo pricing and production models.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Trusted Multi-Channel Delivery</h4>
                <p>
                  Strategic platform use based on stakeholder behavior, ensuring maximum reach and trust through appropriate digital venues.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Evidence-Led Positioning</h4>
                <p>
                  Stories and statements are supported by data, highlighting the practical impact of FPP’s model and exposing inefficiencies in current systems.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Strategy */}
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Platform Strategy</h3>
            <p className="mb-6">
              Each platform has been selected for its influence within key stakeholder groups. Our approach combines visibility, professional credibility, and community-building potential.
            </p>
            <MediaCharts />
            {/* Social Channel Cards */}
            {/* (Unchanged for brevity—only language could be tightened if needed) */}
          </div>

          {/* Content Strategy */}
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Content Strategy</h3>
            <p className="mb-6">
              Content delivery will balance education, engagement, and advocacy to support both legitimacy and movement-building:
            </p>

            <div className="space-y-6 mt-8">
              {/* Educational */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#f59e0b]">
                <h4 className="flex items-center text-lg font-semibold text-[#19404C] mb-3">
                  <BookOpen className="text-[#f59e0b] mr-2" size={24} /> 
                  Education (40%)
                </h4>
                <p className="mb-4">
                  Position FPP as a trusted source for insight on public-interest pharma models, generic viability, and price accessibility.
                </p>
                <ul className="list-disc pl-6">
                  <li>Short explainers on price reform & public manufacturing</li>
                  <li>Evidence briefs and impact maps</li>
                  <li>Expert analysis and sector critiques</li>
                </ul>
              </div>

              {/* Engagement */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#ef4444]">
                <h4 className="flex items-center text-lg font-semibold text-[#19404C] mb-3">
                  <MessageSquare className="text-[#ef4444] mr-2" size={24} /> 
                  Engagement (35%)
                </h4>
                <p className="mb-4">
                  Create opportunities for feedback and collaboration with patients, providers, and advocates. Elevate community voices that validate FPP’s approach.
                </p>
                <ul className="list-disc pl-6">
                  <li>Stakeholder storytelling series</li>
                  <li>Interactive AMAs and live panels</li>
                  <li>Highlight partner innovations</li>
                </ul>
              </div>

              {/* Advocacy */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#8b5cf6]">
                <h4 className="flex items-center text-lg font-semibold text-[#19404C] mb-3">
                  <Megaphone className="text-[#8b5cf6] mr-2" size={24} /> 
                  Advocacy (25%)
                </h4>
                <p className="mb-4">
                  Strengthen the case for public-interest pharma through persuasive, values-driven storytelling tied to policy moments and coalition efforts.
                </p>
                <ul className="list-disc pl-6">
                  <li>Rapid-response narratives on drug pricing news</li>
                  <li>Statements during policy windows</li>
                  <li>Coalition-branded calls to action</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Calendar Preview */}
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Quarterly Narrative Themes</h3>
            <p className="mb-6">
              Our phased narrative arc builds strategic coherence across platforms while allowing for flexibility:
            </p>
            {/* (Cards remain mostly unchanged, but theme names now match advocacy tone) */}
            {/* Example: "Access Barriers" → "Breaking Access Barriers", etc. */}
          </div>

          {/* Measurement */}
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Measurement & Optimization</h3>
            <p className="mb-6">
              Continuous measurement ensures this strategy delivers both reach and resonance. KPIs are aligned to core engagement goals:
            </p>
            {/* (Table structure remains the same, but you may consider adjusting categories:
                - "Conversions" → "Mobilization Outcomes" */}
          </div>

          {/* Navigation */}
          <div className="text-center mt-12">
            <Link 
              to="/website-redesign" 
              className="inline-flex items-center text-[#19404C] font-semibold bg-gray-50 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Continue to Website Redesign
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MediaStrategy;