import React, { useEffect, useRef } from 'react';

interface StakeholderMindmapProps {
  // Props if needed
}

const StakeholderMindmap: React.FC<StakeholderMindmapProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create a loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator flex flex-col items-center justify-center h-full';
    loadingDiv.innerHTML = `
      <div class="spinner mb-4"></div>
      <p>Loading interactive mindmap...</p>
    `;
    containerRef.current.appendChild(loadingDiv);
    
    // Function to load D3 and Markmap libraries
    const loadLibraries = async () => {
      try {
        // First load D3 (dependency for markmap)
        await loadScript('https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js');
        
        // Then load markmap-view
        await loadScript('https://cdn.jsdelivr.net/npm/markmap-view@0.15.3');
        
        // Create the mindmap once libraries are loaded
        createMindmap();
      } catch (error) {
        console.error('Failed to load libraries:', error);
        showFallbackImage();
      }
    };
    
    // Load a script dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };
    
    // Show fallback image if the interactive map fails
    const showFallbackImage = () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = `
        <div class="mindmap-error p-6 text-center text-red-600">
          <p class="mb-4">Interactive mindmap could not be loaded. Showing static image instead.</p>
          <img src="/stakeholder-mindmap.png" alt="Fair Price Pharma Stakeholder Mapping" class="max-w-full rounded-lg shadow-md" />
        </div>
      `;
    };
    
    // Create the mindmap
    const createMindmap = () => {
      try {
        if (!containerRef.current) return;
        
        // Clear loading indicator
        containerRef.current.innerHTML = '';
        
        // Create controls
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'mindmap-controls flex gap-2 justify-center mb-4';
        controlsDiv.innerHTML = `
          <button id="expand-all" class="mindmap-btn bg-[#19404C] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2A5A6C] transition-colors">Expand All</button>
          <button id="collapse-all" class="mindmap-btn bg-[#19404C] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2A5A6C] transition-colors">Collapse All</button>
          <button id="fit-view" class="mindmap-btn bg-[#19404C] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2A5A6C] transition-colors">Fit View</button>
        `;
        containerRef.current.appendChild(controlsDiv);
        
        // Create SVG container
        const svgContainer = document.createElement('div');
        svgContainer.style.width = '100%';
        svgContainer.style.height = '600px';
        containerRef.current.appendChild(svgContainer);
        
        // Create SVG element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.id = 'stakeholder-mindmap';
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.display = 'block';
        svgContainer.appendChild(svg);
        
        // Define the markdown content
        const markdownContent = `
# Fair Price Pharma Stakeholder Mapping
## Internal Stakeholders
### Leadership
#### CEO & Board
#### Clinical Advisory Team
### Operations
#### Manufacturing Team
#### Quality Assurance
#### Administration

## External Stakeholders
### Regulatory Authorities
#### Health Canada
#### BC Ministry of Health
#### College of Pharmacists of BC
#### Public Health Authorities
##### BCCDC
##### PHO
##### FDA
##### PHSA

### Healthcare Partners
#### Direct Service Providers
##### OPS Providers
##### Clinics
##### Staff
##### Pharmacists
#### Addiction Medicine Specialists
##### BC-CfE
##### BCCSU
#### Family Doctors
#### Psychiatrists
#### Nurses

### Community
#### Those accessing FPP Rx
#### Community of PWUD or Lived Experience
##### Objectives
###### Voice concerns
###### Inform design
###### Ensure accessibility
##### Actions
###### Regular consultation
###### Lived experience advisory panel
###### Paid peer positions
#### Community Organizations
##### Collectives

### Academic & Research
#### University of TORONTO
#### University of BC
#### Research Centers
#### Academic Healthcare Partners

### Government & Authorities
#### Vancouver Police Department
#### City of Vancouver
#### Federal Ministry of Public Safety
#### Provincial Ministries & Authorities

### Media & Advocacy Groups
#### Health Journalists
#### Local Media Outlets
#### Advocacy Networks

### General Public & Local Residents
#### Strathcona Neighborhood Association
#### General Public & Local Residents
`;

        // Access the markmap global objects
        type Markmap = any;
        type Transformer = any;
        
        const window = (globalThis as any).window;
        
        if (window.markmap) {
          const { Transformer, Markmap } = window.markmap;
          
          // Transform markdown to data structure
          const transformer = new Transformer();
          const { root } = transformer.transform(markdownContent);
          
          // Create markmap
          const mm = Markmap.create('#stakeholder-mindmap', {
            autoFit: true,
            duration: 500,
            maxWidth: 300,
            color: (node: any) => {
              // Color coding based on category
              const colorMap: Record<string, string> = {
                'Regulatory Authorities': '#fb8072',
                'Healthcare Partners': '#ffffb3',
                'Direct Service Providers': '#8dd3c7',
                'Community': '#80b1d3', 
                'Academic & Research': '#bebada',
                'Government & Authorities': '#fdb462',
                'Media & Advocacy Groups': '#d9d9d9',
                'General Public & Local Residents': '#bc80bd',
                'Internal Stakeholders': '#b3de69'
              };
              
              // Match node text against categories
              for (const [category, color] of Object.entries(colorMap)) {
                if (node.data.name.includes(category)) return color;
              }
              
              // Default colors based on depth
              const defaultColors = ['#19404C', '#1f5061', '#266277', '#2c748d', '#3387a3', '#399ab9'];
              return defaultColors[Math.min(node.data.depth, defaultColors.length - 1)];
            }
          }, root);
          
          // Add event listeners for buttons
          const expandAllBtn = document.getElementById('expand-all');
          const collapseAllBtn = document.getElementById('collapse-all');
          const fitViewBtn = document.getElementById('fit-view');
          
          if (expandAllBtn) {
            expandAllBtn.addEventListener('click', () => mm.expandAll());
          }
          
          if (collapseAllBtn) {
            collapseAllBtn.addEventListener('click', () => mm.collapseAll(1));
          }
          
          if (fitViewBtn) {
            fitViewBtn.addEventListener('click', () => mm.fit());
          }
          
          // Make sure it fits initially
          setTimeout(() => mm.fit(), 300);
          
          // Handle window resize
          const handleResize = () => {
            if (mm && mm.fit) {
              mm.fit();
            }
          };
          
          window.addEventListener('resize', handleResize);
          
          // Collapse to first level for initial view
          setTimeout(() => mm.collapseAll(1), 500);
          
          // Return cleanup function
          return () => {
            window.removeEventListener('resize', handleResize);
            expandAllBtn?.removeEventListener('click', () => mm.expandAll());
            collapseAllBtn?.removeEventListener('click', () => mm.collapseAll(1));
            fitViewBtn?.removeEventListener('click', () => mm.fit());
          };
        } else {
          throw new Error('Markmap library not loaded properly');
        }
      } catch (error) {
        console.error('Error creating mindmap:', error);
        showFallbackImage();
      }
    };
    
    // Start the loading process
    loadLibraries();
    
    // Cleanup function
    return () => {
      // Any cleanup like removing event listeners if needed
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="mindmap-container bg-white p-4 rounded-lg shadow-md min-h-[650px] w-full"
    >
      {/* The mindmap will be created here by the useEffect */}
    </div>
  );
};

export default StakeholderMindmap;