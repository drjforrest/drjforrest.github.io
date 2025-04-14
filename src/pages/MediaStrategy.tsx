import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MessageSquare, Megaphone, Twitter, Linkedin, Facebook } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BackLink from '../components/BackLink';
import MediaCharts from '../components/MediaCharts';

const MediaStrategy: React.FC = () => {
  return (
    <div>
      {/* Back to homepage link */}
      <div className="container mx-auto px-4" style={{ paddingTop: '2rem' }}>
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Media & Digital Strategy" 
        subtitle="A targeted communications approach to build awareness, trust, and support for Fair Price Pharma"
      />

      {/* Main Content Area */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Media Strategy Overview</h3>
            <p className="mb-6">
              This comprehensive media and communications strategy is designed to support Fair Price Pharma's stakeholder engagement efforts. The strategy focuses on delivering clear, consistent messaging across strategic channels to build awareness, foster trust, and secure support for Fair Price Pharma's mission.
            </p>
            
            <p className="mb-6">The media strategy is built on four core principles:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Audience-Centric Messaging</h4>
                <p>
                  Tailored communications designed to resonate with specific stakeholder groups, addressing their unique interests, concerns, and priorities.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Consistent Terminology</h4>
                <p>
                  Carefully selected language that aligns with current healthcare policy priorities and avoids potentially problematic terminology.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Multi-Channel Approach</h4>
                <p>
                  Strategic use of diverse communication channels to reach stakeholders where they are most accessible and receptive.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Evidence-Based Storytelling</h4>
                <p>
                  Compelling narratives grounded in data and real-world impact to demonstrate the value and necessity of Fair Price Pharma's work.
                </p>
              </div>
            </div>
          </div>
          
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Platform Strategy</h3>
            <p className="mb-6">
              Based on stakeholder analysis and media consumption patterns, we've developed a targeted platform strategy that prioritizes channels based on their reach and effectiveness with key stakeholder groups:
            </p>
            
            <MediaCharts />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-[#1da1f2] text-center mb-4">
                  <Twitter size={36} />
                </div>
                <h4 className="text-lg font-semibold text-[#19404C] mb-3 text-center">Twitter/X</h4>
                <p className="mb-4">
                  Primary platform for engagement with healthcare professionals, academics, and policy makers. Focus on sharing research, policy updates, and professional content.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tweet frequency: 3-5 per week</li>
                  <li>Focus: Professional audience</li>
                  <li>Content: Research, policy, impact data</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-[#0077b5] text-center mb-4">
                  <Linkedin size={36} />
                </div>
                <h4 className="text-lg font-semibold text-[#19404C] mb-3 text-center">LinkedIn</h4>
                <p className="mb-4">
                  Secondary platform for professional networking, partnership development, and thought leadership content to establish organizational credibility.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Post frequency: 2-3 per week</li>
                  <li>Focus: Industry partners</li>
                  <li>Content: Case studies, partnerships</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-[#4267B2] text-center mb-4">
                  <Facebook size={36} />
                </div>
                <h4 className="text-lg font-semibold text-[#19404C] mb-3 text-center">Facebook</h4>
                <p className="mb-4">
                  Tertiary platform for community engagement, patient stories, and broader public awareness campaigns to build grassroots support.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Post frequency: 1-2 per week</li>
                  <li>Focus: Community & public</li>
                  <li>Content: Stories, events, education</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Content Strategy</h3>
            <p className="mb-6">
              The content strategy balances three key objectives: education, engagement, and advocacy. Each content type serves a specific purpose in advancing Fair Price Pharma's stakeholder engagement goals:
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#f59e0b]">
                <h4 className="flex items-center text-lg font-semibold text-[#19404C] mb-3">
                  <BookOpen className="text-[#f59e0b] mr-2" size={24} /> 
                  Educational Content (40%)
                </h4>
                <p className="mb-4">
                  Content that builds understanding of pharmaceutical access issues, clarifies Fair Price Pharma's approach, and provides context for the organization's work.
                </p>
                <ul className="list-disc pl-6">
                  <li>Explainer articles on prescribed pharmaceutical alternatives</li>
                  <li>Research summaries and data visualizations</li>
                  <li>Expert Q&As and interview series</li>
                  <li>Terminology guides and resource lists</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#ef4444]">
                <h4 className="flex items-center text-lg font-semibold text-[#19404C] mb-3">
                  <MessageSquare className="text-[#ef4444] mr-2" size={24} /> 
                  Engagement Content (35%)
                </h4>
                <p className="mb-4">
                  Content designed to foster two-way communication, build relationships, and create opportunities for stakeholder input and participation.
                </p>
                <ul className="list-disc pl-6">
                  <li>Patient and provider stories and testimonials</li>
                  <li>Virtual events and webinar series</li>
                  <li>Twitter chats and LinkedIn discussions</li>
                  <li>Stakeholder spotlights and partner features</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#8b5cf6]">
                <h4 className="flex items-center text-lg font-semibold text-[#19404C] mb-3">
                  <Megaphone className="text-[#8b5cf6] mr-2" size={24} /> 
                  Advocacy Content (25%)
                </h4>
                <p className="mb-4">
                  Content that makes the case for Fair Price Pharma's approach, addresses potential concerns, and rallies support for the organization's mission.
                </p>
                <ul className="list-disc pl-6">
                  <li>Policy briefings and position papers</li>
                  <li>Impact reports and success metrics</li>
                  <li>Calls to action for specific stakeholder groups</li>
                  <li>Responses to industry developments</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Content Calendar Preview</h3>
            <p className="mb-6">
              A structured content calendar will guide implementation of the media strategy. The calendar below provides a high-level overview of planned content themes by month for the first quarter:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#19404C] text-white p-3 text-center font-semibold">January</div>
                <div className="p-4">
                  <p className="font-semibold mb-2">Theme: Foundation & Introduction</p>
                  <ul className="list-disc pl-5">
                    <li>Website launch</li>
                    <li>Organization overview</li>
                    <li>Vision & mission</li>
                    <li>Leadership profiles</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#19404C] text-white p-3 text-center font-semibold">February</div>
                <div className="p-4">
                  <p className="font-semibold mb-2">Theme: Pharmaceutical Access</p>
                  <ul className="list-disc pl-5">
                    <li>Access barriers</li>
                    <li>Current landscape</li>
                    <li>Alternative approaches</li>
                    <li>Case studies</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#19404C] text-white p-3 text-center font-semibold">March</div>
                <div className="p-4">
                  <p className="font-semibold mb-2">Theme: Partnership Models</p>
                  <ul className="list-disc pl-5">
                    <li>Stakeholder spotlights</li>
                    <li>Collaboration frameworks</li>
                    <li>Partner interviews</li>
                    <li>Joint initiatives</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#19404C] text-white p-3 text-center font-semibold">April</div>
                <div className="p-4">
                  <p className="font-semibold mb-2">Theme: Impact & Evidence</p>
                  <ul className="list-disc pl-5">
                    <li>Early outcomes</li>
                    <li>Research findings</li>
                    <li>Patient testimonials</li>
                    <li>Data visualizations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-sm italic text-gray-600">
              Note: A detailed content calendar with specific posts, publication dates, target audiences, and engagement metrics will be developed as part of the implementation phase.
            </p>
          </div>
          
          <div className="content-section mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Measurement & Optimization</h3>
            <p className="mb-6">
              The media strategy includes a robust measurement framework to track effectiveness and inform ongoing optimization:
            </p>
            
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border-b-2 border-gray-200">Metric Category</th>
                    <th className="text-left p-3 border-b-2 border-gray-200">Key Performance Indicators</th>
                    <th className="text-left p-3 border-b-2 border-gray-200">Measurement Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-gray-200">Reach & Awareness</td>
                    <td className="p-3 border-b border-gray-200">Website traffic, social media impressions, email open rates</td>
                    <td className="p-3 border-b border-gray-200">Weekly</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200">Engagement</td>
                    <td className="p-3 border-b border-gray-200">Social media engagement, website time on page, event attendance</td>
                    <td className="p-3 border-b border-gray-200">Weekly</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200">Sentiment</td>
                    <td className="p-3 border-b border-gray-200">Social media sentiment analysis, feedback forms, qualitative assessments</td>
                    <td className="p-3 border-b border-gray-200">Monthly</td>
                  </tr>
                  <tr>
                    <td className="p-3">Conversions</td>
                    <td className="p-3">Partnership inquiries, MOU signings, volunteer sign-ups, resource downloads</td>
                    <td className="p-3">Monthly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-6">
              Monthly reporting will track these metrics and inform strategy adjustments. Quarterly reviews will assess overall effectiveness and make larger strategic shifts as needed to optimize performance.
            </p>
          </div>
          
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