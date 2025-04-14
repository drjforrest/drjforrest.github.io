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
      <div className="container mx-auto px-4" style={{ paddingTop: '2rem' }}>
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
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Stakeholder Analysis Overview</h3>
            <p className="text-gray-700 mb-6">
              This comprehensive stakeholder analysis identifies and prioritizes key individuals and organizations whose support, involvement, or approval is critical to Fair Price Pharma's success. Stakeholders have been mapped through a structured process to understand their influence, interest, and strategic importance.
            </p>
          
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
              <h4 className="text-xl font-semibold text-[#19404C] mb-4">Mapping Methodology</h4>
              <p className="mb-4">To develop a comprehensive stakeholder engagement strategy, we conducted a detailed mapping exercise that included:</p>
              <ul className="list-disc pl-8 mb-4">
                <li className="mb-2">Interviews with Fair Price Pharma leadership</li>
                <li className="mb-2">Review of regulatory and industry landscapes</li>
                <li className="mb-2">Consultation with policy and healthcare experts</li>
                <li className="mb-2">Analysis of similar initiatives in comparable contexts</li>
              </ul>
              <p>The resulting stakeholder map categorizes stakeholders into distinct groups, identifies their objectives, and outlines tailored engagement approaches for each.</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Stakeholder Mind Map</h3>
            <p className="mb-6">
              The interactive mind map below visualizes the complex network of stakeholders relevant to Fair Price Pharma's initiative, organized by category and showing their relationships. Use the controls to expand and collapse sections:
            </p>
            
            <StakeholderMindmap />
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="text-center text-lg font-semibold text-[#19404C] mb-3">Stakeholder Categories</h4>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#b3de69] mr-2 rounded"></div>
                  <span>Internal Stakeholders</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#fb8072] mr-2 rounded"></div>
                  <span>Regulatory Authorities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#ffffb3] mr-2 rounded"></div>
                  <span>Healthcare Partners</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#80b1d3] mr-2 rounded"></div>
                  <span>Community</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#bebada] mr-2 rounded"></div>
                  <span>Academic & Research</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#fdb462] mr-2 rounded"></div>
                  <span>Government</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#bc80bd] mr-2 rounded"></div>
                  <span>Public & Media</span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">
                Click on nodes to expand or collapse. Use controls above to adjust the view.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Priority Stakeholder Matrix</h3>
            <p className="mb-6">
              Based on the mapping exercise, we've developed a prioritized matrix to guide engagement efforts. The matrix below categorizes stakeholders based on their influence and interest levels, allowing for strategically focused outreach:
            </p>
            
            <div className="overflow-x-auto">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Key Stakeholders</th>
                    <th>Influence</th>
                    <th>Interest</th>
                    <th>Primary Concerns</th>
                    <th>Engagement Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Regulatory Authorities */}
                  <tr>
                    <td className="font-semibold">Regulatory Authorities</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Health Canada</li>
                        <li>BC Ministry of Health</li>
                        <li>College of Pharmacists of BC</li>
                      </ul>
                    </td>
                    <td className="high-influence">High</td>
                    <td className="medium-influence">Medium</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Regulatory compliance</li>
                        <li>Patient safety</li>
                        <li>Quality control measures</li>
                      </ul>
                    </td>
                    <td>
                      <p>Proactive engagement with regular updates, detailed documentation, and collaborative approach to compliance.</p>
                    </td>
                  </tr>
                  
                  {/* Healthcare Providers */}
                  <tr>
                    <td className="font-semibold">Healthcare Providers</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Addiction Medicine Specialists</li>
                        <li>Community Health Centers</li>
                        <li>Harm Reduction Clinics</li>
                      </ul>
                    </td>
                    <td className="high-influence">High</td>
                    <td className="high-influence">High</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Clinical effectiveness</li>
                        <li>Integration with existing protocols</li>
                        <li>Patient outcomes</li>
                      </ul>
                    </td>
                    <td>
                      <p>Education sessions, clinical data sharing, and co-development of implementation protocols.</p>
                    </td>
                  </tr>
                  
                  {/* Community Organizations */}
                  <tr>
                    <td className="font-semibold">Community Organizations</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Harm Reduction Networks</li>
                        <li>Peer Support Groups</li>
                        <li>Community Advocacy Organizations</li>
                      </ul>
                    </td>
                    <td className="medium-influence">Medium</td>
                    <td className="high-influence">High</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Accessibility</li>
                        <li>Stigma reduction</li>
                        <li>Community inclusion in process</li>
                      </ul>
                    </td>
                    <td>
                      <p>Collaborative partnership development, regular community forums, and peer involvement in program design.</p>
                    </td>
                  </tr>
                  
                  {/* Academic Institutions */}
                  <tr>
                    <td className="font-semibold">Academic Institutions</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>UBC Faculty of Pharmaceutical Sciences</li>
                        <li>Research Centers</li>
                        <li>Academic Healthcare Partners</li>
                      </ul>
                    </td>
                    <td className="medium-influence">Medium</td>
                    <td className="medium-influence">Medium</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Research opportunities</li>
                        <li>Evidence-based practice</li>
                        <li>Academic partnerships</li>
                      </ul>
                    </td>
                    <td>
                      <p>Research collaboration proposals, data sharing agreements, and joint educational initiatives.</p>
                    </td>
                  </tr>
                  
                  {/* Government Entities */}
                  <tr>
                    <td className="font-semibold">Government Entities</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>City of Vancouver</li>
                        <li>BC Ministry of Mental Health</li>
                        <li>Federal Health Authorities</li>
                      </ul>
                    </td>
                    <td className="high-influence">High</td>
                    <td className="medium-influence">Medium</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Policy alignment</li>
                        <li>Public health outcomes</li>
                        <li>Fiscal responsibility</li>
                      </ul>
                    </td>
                    <td>
                      <p>Policy briefings, economic impact data, and alignment with governmental health objectives.</p>
                    </td>
                  </tr>
                  
                  {/* Media & Public */}
                  <tr>
                    <td className="font-semibold">Media & Public</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Health Journalists</li>
                        <li>Local Media Outlets</li>
                        <li>General Public</li>
                      </ul>
                    </td>
                    <td className="medium-influence">Medium</td>
                    <td className="low-influence">Low</td>
                    <td>
                      <ul className="list-disc pl-5">
                        <li>Accurate reporting</li>
                        <li>Public perception</li>
                        <li>Community impact</li>
                      </ul>
                    </td>
                    <td>
                      <p>Transparent communication, media education sessions, and prepared messaging with evidence-based narratives.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Tailored Engagement Approach</h3>
            <p className="mb-6">
              Based on the stakeholder analysis, we've developed tailored engagement approaches for each category of stakeholders:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* High Influence, High Interest */}
              <div className="approach-card border-t-4 border-[#ef4444]">
                <h4 className="text-[#ef4444] text-lg font-semibold mb-3">Key Players (High Influence, High Interest)</h4>
                <p className="mb-3"><strong>Strategy:</strong> Close Partnership</p>
                <ul className="list-disc pl-5">
                  <li>Regular face-to-face meetings</li>
                  <li>Inclusion in decision-making processes</li>
                  <li>Collaborative program development</li>
                  <li>Formalized agreements (MOUs)</li>
                </ul>
              </div>
              
              {/* High Influence, Lower Interest */}
              <div className="approach-card border-t-4 border-[#f59e0b]">
                <h4 className="text-[#f59e0b] text-lg font-semibold mb-3">Meet Their Needs (High Influence, Lower Interest)</h4>
                <p className="mb-3"><strong>Strategy:</strong> Keep Satisfied</p>
                <ul className="list-disc pl-5">
                  <li>Regular briefings and updates</li>
                  <li>Focus on compliance and risk mitigation</li>
                  <li>Clear documentation and reporting</li>
                  <li>Address concerns proactively</li>
                </ul>
              </div>
              
              {/* Lower Influence, High Interest */}
              <div className="approach-card border-t-4 border-[#10b981]">
                <h4 className="text-[#10b981] text-lg font-semibold mb-3">Show Consideration (Lower Influence, High Interest)</h4>
                <p className="mb-3"><strong>Strategy:</strong> Keep Informed</p>
                <ul className="list-disc pl-5">
                  <li>Regular communication channels</li>
                  <li>Consultation on relevant issues</li>
                  <li>Educational materials and resources</li>
                  <li>Opportunities for feedback</li>
                </ul>
              </div>
              
              {/* Lower Influence, Lower Interest */}
              <div className="approach-card border-t-4 border-[#6366f1]">
                <h4 className="text-[#6366f1] text-lg font-semibold mb-3">Minimal Effort (Lower Influence, Lower Interest)</h4>
                <p className="mb-3"><strong>Strategy:</strong> Monitor</p>
                <ul className="list-disc pl-5">
                  <li>General updates and information</li>
                  <li>Public communications</li>
                  <li>Website and accessible resources</li>
                  <li>Monitor for changes in position or interest</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mou-section">
            <h3 className="text-2xl font-semibold text-[#19404C] mb-4">Formal Engagement: MOU Template</h3>
            <p className="mb-6">
              For key stakeholders, we've developed a standardized Memorandum of Understanding (MOU) template to formalize the relationship and clarify mutual expectations:
            </p>
            
            <div className="flex flex-wrap justify-between items-center gap-8">
              <div className="flex-1 min-w-[250px]">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clear articulation of shared objectives</li>
                  <li>Defined roles and responsibilities</li>
                  <li>Communication and governance structure</li>
                  <li>Term, review, and amendment procedures</li>
                </ul>
              </div>
              
              <div className="min-w-[200px] text-center">
                <a href="/Template_MOU.md" className="inline-flex items-center bg-[#19404C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#2A5A6C] transition-colors" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download MOU Template
                </a>
              </div>
            </div>
          </div>

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