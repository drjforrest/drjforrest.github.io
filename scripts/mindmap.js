// Advanced Stakeholder Mindmap Implementation using markmap
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

  // Function to create the mindmap using markdown format
  function createMindmap() {
    try {
      // Create a SVG element for the mindmap
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('id', 'stakeholder-mindmap');
      svg.setAttribute('style', 'width: 100%; height: 600px; display: block;');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '600px');
      
      // Remove loading indicator and append SVG
      mindmapContainer.innerHTML = '';
      mindmapContainer.appendChild(svg);
      
      // Define markdown content for the mindmap
      // This structure matches more closely the mindmap image shown
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

      // Initialize markmap transformation and rendering
      const { Transformer } = window.markmap;
      const transformer = new Transformer();
      
      // Transform markdown to the data structure markmap expects
      const { root } = transformer.transform(markdownContent);
      
      // Create the markmap instance
      const { Markmap } = window.markmap;
      const mm = Markmap.create('#stakeholder-mindmap', {
        autoFit: true, 
        zoom: true,
        maxWidth: 300, // Maximum node width
        duration: 500, // Animation duration
        style: function(el) {
          el.style.width = '100%';
          el.style.height = '600px';
          el.style.display = 'block';
        },
        color: (node) => {
          // Custom coloring based on the hierarchy level
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
          
          // Check for major categories in node path
          for (const [category, color] of Object.entries(colorMap)) {
            if (node.data.name.includes(category)) return color;
          }
          
          // Default coloring based on depth
          const colors = ['#19404C', '#1f5061', '#266277', '#2c748d', '#3387a3', '#399ab9', '#40add0'];
          return colors[Math.min(node.data.depth, colors.length - 1)];
        }
      }, root);
      
      // Add control buttons
      const controlsDiv = document.createElement('div');
      controlsDiv.className = 'mindmap-controls';
      controlsDiv.innerHTML = `
        <button id="expand-all" class="mindmap-btn">Expand All</button>
        <button id="collapse-all" class="mindmap-btn">Collapse All</button>
        <button id="fit-view" class="mindmap-btn">Fit View</button>
      `;
      mindmapContainer.insertBefore(controlsDiv, svg);
      
      // Add event listeners for control buttons
      document.getElementById('expand-all').addEventListener('click', () => {
        mm.expandAll();
      });
      
      document.getElementById('collapse-all').addEventListener('click', () => {
        mm.collapseAll(1); // Collapse to the first level
      });
      
      document.getElementById('fit-view').addEventListener('click', () => {
        mm.fit();
      });
      
      // Add resize handler to adjust the mindmap when window resizes
      window.addEventListener('resize', () => {
        setTimeout(() => {
          if (mm && typeof mm.fit === 'function') {
            mm.fit();
          }
        }, 300);
      });
      
      // Initial fit with a slight delay to ensure proper rendering
      setTimeout(() => {
        if (mm && typeof mm.fit === 'function') {
          mm.fit();
        }
      }, 500);
      
    } catch (error) {
      console.error('Error creating mindmap:', error);
      
      // Fallback to static image if interactive map fails
      mindmapContainer.innerHTML = `
        <div class="mindmap-error">
          <p>Interactive mindmap could not be loaded. Showing static image instead.</p>
          <img src="images/stakeholder-mindmap.png" alt="Fair Price Pharma Stakeholder Mapping" style="max-width: 100%; border-radius: 0.5rem; box-shadow: var(--shadow);">
        </div>
      `;
    }
  }

  // Load required libraries from CDN
  function loadLibraries() {
    // Using more recent version of markmap
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://cdn.jsdelivr.net/npm/markmap-toolbar@0.15.3/dist/style.css';
    document.head.appendChild(styles);
    
    // Load d3 (dependency for markmap)
    const d3Script = document.createElement('script');
    d3Script.src = 'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js';
    d3Script.onload = function() {
      // After d3 loads, load markmap-view
      const markmapScript = document.createElement('script');
      markmapScript.src = 'https://cdn.jsdelivr.net/npm/markmap-view@0.15.3';
      markmapScript.onload = createMindmap;
      markmapScript.onerror = handleLibraryError;
      document.head.appendChild(markmapScript);
    };
    d3Script.onerror = handleLibraryError;
    document.head.appendChild(d3Script);
  }
  
  function handleLibraryError() {
    // Fallback to static image if libraries fail to load
    mindmapContainer.innerHTML = `
      <div class="mindmap-error">
        <p>Interactive mindmap libraries could not be loaded. Showing static image instead.</p>
        <img src="images/stakeholder-mindmap.png" alt="Fair Price Pharma Stakeholder Mapping" style="max-width: 100%; border-radius: 0.5rem; box-shadow: var(--shadow);">
      </div>
    `;
  }
  
  // Start loading libraries
  loadLibraries();
});
