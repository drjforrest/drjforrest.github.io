import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle, FileText, Users, Megaphone, Globe, ListChecks } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
  return (
    <div>
          {/* Hero Section */}
          <section className="hero bg-gradient-to-r from-[#19404C] to-[#2A4551] text-white py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Stakeholder Engagement Strategy</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                A comprehensive approach to build awareness, trust, and sales for Fair Price Pharma
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#key-components" className="btn bg-[#CC9332] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                  View Key Components
                </a>
                <a href="/Template_MOU.md" className="btn bg-white text-[#19404C] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download MOU Template
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#19404C] mb-4">Executive Summary</h2>
        <p className="text-center text-[#63757D] mb-12 max-w-3xl mx-auto">
          This proposal outlines a strategic stakeholder engagement and communications framework to support the launch of Fair Price Pharma’s diacetylmorphine facility in British Columbia.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-[#19404C] mb-4">Challenge</h3>
            <p className="text-[#63757D]">
              While FPP’s mission aligns with public health goals, its visibility and digital presence are currently limited. Misinformation, policy ambiguity, and stigma create a complex communications environment requiring careful positioning, especially in media narratives and prescriber engagement.
            </p>
          </div>

          <div className="card bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-[#19404C] mb-4">Approach</h3>
            <p className="text-[#63757D]">
              This strategy introduces a modular Airtable-driven system for managing stakeholder engagement, media campaigns, and sentiment tracking. The framework enables proactive outreach, dynamic message calibration, and precise targeting across stakeholder groups.
            </p>
          </div>

          <div className="card bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-[#19404C] mb-4">Outcome</h3>
            <p className="text-[#63757D]">
              With implementation, FPP will be positioned as a trusted public health provider. Stakeholder relationships will be systematized, communications will reflect regulatory alignment, and sales will grow through informed engagement with prescribing networks.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Key Components Section */}
      <section id="key-components" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#19404C] mb-4">Key Components</h2>
          <p className="text-center text-[#63757D] mb-12 max-w-3xl mx-auto">
            The strategy includes five integrated components, each supporting Fair Price Pharma's stakeholder engagement needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              to="/context" 
              className="component-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#19404C]">Background Context</h3>
              </div>
              <p className="text-[#63757D] mb-4">
                Comprehensive analysis of Fair Price Pharma's operating environment, regulatory considerations, and current landscape
              </p>
              <div className="flex justify-end">
                <span className="text-[#19404C] font-medium flex items-center">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
            
            <Link 
              to="/stakeholders" 
              className="component-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#19404C]">Stakeholder Matrix</h3>
              </div>
              <p className="text-[#63757D] mb-4">
                Prioritized stakeholder mapping with detailed analysis of their interests, concerns, and engagement strategies
              </p>
              <div className="flex justify-end">
                <span className="text-[#19404C] font-medium flex items-center">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
            
            <Link 
              to="/media-strategy" 
              className="component-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <Megaphone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#19404C]">Media Strategy</h3>
              </div>
              <p className="text-[#63757D] mb-4">
                Integrated communications approach with tailored messaging, platform selection, and content planning
              </p>
              <div className="flex justify-end">
                <span className="text-[#19404C] font-medium flex items-center">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
            
            <Link 
              to="/website-redesign" 
              className="component-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#19404C]">Website Redesign</h3>
              </div>
              <p className="text-[#63757D] mb-4">
                Fully modernized website optimized for stakeholder engagement, featuring policy-aligned terminology and accessible design
              </p>
              <div className="flex justify-end">
                <span className="text-[#19404C] font-medium flex items-center">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
            
            <Link 
              to="/implementation" 
              className="component-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <ListChecks className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#19404C]">Implementation Plan</h3>
              </div>
              <p className="text-[#63757D] mb-4">
                Phased rollout strategy with timelines, milestones, and feedback mechanisms to ensure successful execution
              </p>
              <div className="flex justify-end">
                <span className="text-[#19404C] font-medium flex items-center">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* MOU Template Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#19404C] mb-4">Stakeholder Agreement Template</h2>
          <p className="text-center text-[#63757D] mb-12 max-w-3xl mx-auto">
            A standardized Memorandum of Understanding (MOU) template has been prepared to formalize stakeholder relationships
          </p>
          
          <div className="card bg-white rounded-lg shadow-md p-8 border-l-4 border-[#19404C] max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-[#19404C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#19404C]">MOU Template Features</h3>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#19404C] mr-3 mt-1 flex-shrink-0" />
                <span>Clear articulation of shared objectives and mutual commitments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#19404C] mr-3 mt-1 flex-shrink-0" />
                <span>Defined roles and responsibilities for both parties</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#19404C] mr-3 mt-1 flex-shrink-0" />
                <span>Governance structure for ongoing communication and oversight</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#19404C] mr-3 mt-1 flex-shrink-0" />
                <span>Confidentiality provisions and information sharing guidelines</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#19404C] mr-3 mt-1 flex-shrink-0" />
                <span>Term, review, amendment, and termination procedures</span>
              </li>
            </ul>
            
            <div className="flex justify-center">
              <a href="/Template_MOU.md" className="btn bg-[#19404C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#2A5A6C] transition-colors inline-flex items-center" download>
                <Download className="w-5 h-5 mr-2" />
                Download MOU Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Media Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#19404C] mb-4">Integrated Media & Digital Strategy</h2>
          <p className="text-center text-[#63757D] mb-12 max-w-3xl mx-auto">
            Key communication strategies are embedded across all engagement activities
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#19404C] mb-3">Audience-Centric Messaging</h4>
              <p className="text-[#63757D]">
                Targeted communications tailored to each stakeholder group, aligned with their priorities and language preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#19404C] mb-3">Multi-Platform Coordination</h4>
              <p className="text-[#63757D]">
                Planned use of Twitter/X, LinkedIn, and Facebook to reach professional, institutional, and public audiences respectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#19404C] mb-3">Policy-Aligned Terminology</h4>
              <p className="text-[#63757D]">
                Adoption of neutral, evidence-based terms such as "prescribed pharmaceutical alternatives" to replace stigmatizing language.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#19404C] mb-3">Content Planning</h4>
              <p className="text-[#63757D]">
                Strategic mix of educational, engagement, and advocacy content across channels, with monthly themes and quarterly reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#19404C] mb-4">Next Steps</h2>
          <p className="text-center text-[#63757D] mb-12 max-w-3xl mx-auto">
            Recommended actions to initiate the stakeholder engagement strategy
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-10 mb-8">
              <div className="absolute left-0 top-0 w-7 h-7 bg-[#19404C] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-semibold text-[#19404C] mb-2">Review and Approve Strategy</h3>
              <p className="text-[#63757D]">
                Review the complete stakeholder engagement strategy and provide approval to move forward with implementation.
              </p>
            </div>
            
            <div className="relative pl-10 mb-8">
              <div className="absolute left-0 top-0 w-7 h-7 bg-[#19404C] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-semibold text-[#19404C] mb-2">Finalize Priority Stakeholders</h3>
              <p className="text-[#63757D]">
                Confirm the priority stakeholder list and initial outreach targets based on the stakeholder matrix.
              </p>
            </div>
            
            <div className="relative pl-10 mb-8">
              <div className="absolute left-0 top-0 w-7 h-7 bg-[#19404C] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-semibold text-[#19404C] mb-2">Launch Website Redesign</h3>
              <p className="text-[#63757D]">
                Implement the website changes to establish a digital foundation for stakeholder communications.
              </p>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-7 h-7 bg-[#19404C] text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-semibold text-[#19404C] mb-2">Begin Initial Outreach</h3>
              <p className="text-[#63757D]">
                Commence communications with high-priority stakeholders, scheduling initial meetings and distributing information packages.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/implementation" 
              className="bg-[#19404C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#2A5A6C] transition-colors inline-flex items-center"
            >
              View Detailed Implementation Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveSummary;