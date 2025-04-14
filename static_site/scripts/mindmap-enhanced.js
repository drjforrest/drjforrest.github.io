// Enhanced Stakeholder Mindmap Implementation using markmap
document.addEventListener('DOMContentLoaded', function() {
  // Check if the mindmap container exists
  const mindmapContainer = document.getElementById('mindmap-container');
  if (!mindmapContainer) return;

  // Create loading indicator
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loading-indicator';
  loadingIndicator.innerHTML = `
    <div class="spinner"></div>
    <p>Loading interactive mindmap...</p>
  `;
  mindmapContainer.appendChild(loadingIndicator);

  // Load required scripts
  function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    script.onerror = () => {
      console.error(`Failed to load script: ${url}`);
      showFallbackImage();
    };
    document.head.appendChild(script);
  }

  // Show fallback image if interactive mindmap fails
  function showFallbackImage() {
    mindmapContainer.innerHTML = `
      <div class="mindmap-error">
        <p>Interactive mindmap could not be loaded. Showing static image instead.</p>
        <img src="images/stakeholder-mindmap.png" alt="Fair Price Pharma Stakeholder Mapping" style="max-width: 100%; border-radius: 0.5rem; box-shadow: var(--shadow);">
      </div>
    `;
  }

  // Initialize markmap when libraries are loaded
  function initializeMarkmap() {
    try {
      // Create SVG element
      mindmapContainer.innerHTML = `
        <div class="mindmap-controls">
          <button id="expand-all" class="mindmap-btn">Expand All</button>
          <button id="collapse-all" class="mindmap-btn">Collapse All</button>
          <button id="fit-view" class="mindmap-btn">Fit View</button>
        </div>
        <div style="width: 100%; height: 600px;">
          <svg id="stakeholder-mindmap" style="width: 100%; height: 100%; display: block;"></svg>
        </div>
      `;

      // Get SVG element
      const svgElement = document.getElementById('stakeholder-mindmap');
      
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

      // Get the markmap components
      const { Transformer, Markmap } = window.markmap;
      
      // Create transformer
      const transformer = new Transformer();
      
      // Transform markdown to data
      const { root } = transformer.transform(markdownContent);
      
      // Create markmap
      const mm = Markmap.create(svgElement, {
        autoFit: true,
        duration: 500,
        maxWidth: 300,
        color: (node) => {
          // Color coding based on category
          const colorMap = {
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
      document.getElementById('expand-all').addEventListener('click', () => mm.expandAll());
      document.getElementById('collapse-all').addEventListener('click', () => mm.collapseAll(1));
      document.getElementById('fit-view').addEventListener('click', () => mm.fit());
      
      // Make sure it fits initially
      setTimeout(() => mm.fit(), 300);
      
      // Handle window resize
      window.addEventListener('resize', () => {
        if (mm && mm.fit) {
          clearTimeout(window.markmapResizeTimer);
          window.markmapResizeTimer = setTimeout(() => mm.fit(), 200);
        }
      });
      
      // Collapse to first level for initial view
      setTimeout(() => mm.collapseAll(1), 500);
      
    } catch (error) {
      console.error('Error creating markmap:', error);
      showFallbackImage();
    }
  }

  // Load dependencies in sequence
  loadScript('https://cdn.jsdelivr.net/npm/d3@6.7.0/dist/d3.min.js', () => {
    loadScript('https://cdn.jsdelivr.net/npm/markmap-view@0.14.3/dist/browser/index.min.js', initializeMarkmap);
  });
});
