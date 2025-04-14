import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BackLink from '../components/BackLink';

const WebsiteRedesign: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Website Redesign" 
        subtitle="Strengthening FPP's digital credibility and strategic communication infrastructure"
      />

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">

          <p className="text-gray-700 mb-8 text-lg max-w-4xl mx-auto">
            A core priority for Fair Price Pharma is enhancing its digital presence to increase visibility, build legitimacy, and counter the digital influence of detractors. A modernized website plays a pivotal role in advancing FPP’s communications goals, stakeholder engagement, and public trust.
          </p>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {/* Current */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-700 mb-2">Current Website</h4>
              <p className="text-sm text-gray-700 mb-4">https://fairpricepharma.ca</p>
              <ul className="list-disc pl-5 text-gray-800 text-sm space-y-2">
                <li>Static HTML with minimal flexibility</li>
                <li>Limited mobile optimization</li>
                <li>Outdated terminology and structure</li>
                <li>Low visibility in search results (limited SEO)</li>
                <li>No analytics or performance tracking</li>
              </ul>
            </div>

            {/* Redesigned */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Modernized Website</h4>
              <p className="text-sm text-gray-700 mb-4">
                <a 
                  href="https://fpp.drjforrest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline text-green-800 hover:text-green-600 inline-flex items-center"
                >
                  https://fpp.drjforrest.com 
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <ul className="list-disc pl-5 text-gray-800 text-sm space-y-2">
                <li>Built with React + Next.js for speed and scalability</li>
                <li>Fully responsive and WCAG 2.1 compliant</li>
                <li>Policy-aligned language and terminology</li>
                <li>Search engine–optimized structure and metadata</li>
                <li>Integrated analytics and performance tracking</li>
              </ul>
            </div>
          </div>

          {/* Preview */}
          <div className="mt-12 mb-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Live Preview: Modernized Website</p>
            <a 
              href="https://fpp.drjforrest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-700 underline hover:text-green-600"
            >
              Open in new tab <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden max-w-5xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://fpp.drjforrest.com"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Live Fair Price Pharma Website"
                sandbox="allow-same-origin allow-scripts"
                loading="lazy"
              />
            </div>
          </div>

          {/* Key Improvements */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-6">Key Website Improvements</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Technical Enhancements</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>High-performance JavaScript framework</li>
                  <li>Structured data markup for SEO</li>
                  <li>Cross-device optimization</li>
                  <li>Accessibility built-in (WCAG 2.1)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Content Improvements</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Terminology aligned with health policy and regulatory norms</li>
                  <li>Focused messaging for stakeholder groups</li>
                  <li>Centralized education hub</li>
                  <li>Improved hierarchy and structure for discovery</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">User Experience</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Simplified and intuitive navigation</li>
                  <li>Stakeholder-specific content pathways</li>
                  <li>Interactive FAQs and dynamic components</li>
                  <li>Inclusive design for wider accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-12">
            <Link 
              to="/implementation" 
              className="inline-flex items-center text-[#19404C] font-semibold bg-gray-50 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Continue to Implementation Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WebsiteRedesign;