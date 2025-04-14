import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MediaCharts: React.FC = () => {
  const platformChartRef = useRef<HTMLCanvasElement>(null);
  const contentChartRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    let platformChart: Chart | null = null;
    let contentChart: Chart | null = null;
    
    if (platformChartRef.current && contentChartRef.current) {
      // Platform Chart
      const platformCtx = platformChartRef.current.getContext('2d');
      if (platformCtx) {
        platformChart = new Chart(platformCtx, {
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
      
      // Content Chart
      const contentCtx = contentChartRef.current.getContext('2d');
      if (contentCtx) {
        contentChart = new Chart(contentCtx, {
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
    }
    
    // Cleanup function
    return () => {
      if (platformChart) platformChart.destroy();
      if (contentChart) contentChart.destroy();
    };
  }, []);
  
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8 mb-12">
      <div>
        <h4 className="text-center text-lg font-semibold mb-4">Platform Focus Distribution</h4>
        <div className="chart-container">
          <canvas ref={platformChartRef}></canvas>
        </div>
      </div>
      <div>
        <h4 className="text-center text-lg font-semibold mb-4">Content Type Distribution</h4>
        <div className="chart-container">
          <canvas ref={contentChartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default MediaCharts;