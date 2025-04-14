import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BackLink from '../components/BackLink';

const WebsiteRedesign: React.FC = () => {
  return (
    <div>
      {/* Back to homepage link */}
      <div className="container mx-auto px-4" style={{ paddingTop: '2rem' }}>
        <BackLink to="/executive-summary" label="Back to Executive Summary" />
      </div>

      {/* Page Header */}
      <PageHeader 
        title="Website Redesign" 
      />

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <p className="text-gray-700 mb-8 text-lg max-w-4xl mx-auto">
            To support public rollout and strengthen communications, we've delivered a fully modernized, policy-aligned web platform for Fair Price Pharma.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-700 mb-2">Current Website</h4>
              <p className="text-sm text-gray-700 mb-4">https://fairpricepharma.ca</p>
              <ul className="list-disc pl-5 text-gray-800 text-sm space-y-2">
                <li>Static HTML site</li>
                <li>Limited mobile optimization</li>
                <li>Outdated terminology</li>
                <li>Minimal search visibility (low SEO)</li>
                <li>No structured performance reporting</li>
              </ul>
            </div>

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
                <li>Next.js + React for performance and scalability</li>
                <li>WCAG 2.1 accessibility compliant</li>
                <li>Policy-aligned terminology</li>
                <li>Fully responsive design across devices</li>
                <li>Real-time analytics and SEO optimization</li>
              </ul>
            </div>
          </div>

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
            <div className="relative pb-4" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://fpp.drjforrest.com"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Live Fair Price Pharma Website"
                sandbox="allow-same-origin allow-scripts"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-6">Key Website Improvements</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Technical Enhancements</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Modern JavaScript framework for fast loading</li>
                  <li>Structured data for improved SEO</li>
                  <li>Optimized for all device sizes</li>
                  <li>Performance optimization techniques</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">Content Improvements</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Policy-aligned terminology throughout</li>
                  <li>Clear stakeholder-focused messaging</li>
                  <li>Educational resources section</li>
                  <li>Improved information architecture</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-[#19404C] mb-3">User Experience</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Intuitive navigation structure</li>
                  <li>Accessible to users with disabilities</li>
                  <li>Stakeholder-specific content paths</li>
                  <li>Interactive FAQ and resources</li>
                </ul>
              </div>
            </div>
          </div>
          
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