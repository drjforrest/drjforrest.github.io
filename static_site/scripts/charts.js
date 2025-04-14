// Charts initialization
document.addEventListener('DOMContentLoaded', function() {
  // Initialize charts only if they exist on the page
  if (document.getElementById('platformChart')) {
    // Platform Chart
    const platformCtx = document.getElementById('platformChart');
    new Chart(platformCtx, {
      type: 'pie',
      data: {
        labels: ['Twitter/X', 'LinkedIn', 'Facebook'],
        datasets: [{
          label: 'Platform Focus',
          data: [45, 35, 20],
          backgroundColor: ['#3b82f6', '#6366f1', '#10b981']
        }]
      },
      options: {
        responsive: true,
        plugins: { 
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: 'Platform Focus Distribution'
          }
        }
      }
    });
  }
  
  if (document.getElementById('contentChart')) {
    // Content Chart
    const contentCtx = document.getElementById('contentChart');
    new Chart(contentCtx, {
      type: 'doughnut',
      data: {
        labels: ['Education', 'Engagement', 'Advocacy'],
        datasets: [{
          label: 'Content Distribution',
          data: [40, 35, 25],
          backgroundColor: ['#f59e0b', '#ef4444', '#8b5cf6']
        }]
      },
      options: {
        responsive: true,
        plugins: { 
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: 'Content Type Distribution'
          }
        }
      }
    });
  }
});