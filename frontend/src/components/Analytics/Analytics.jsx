import React from 'react';
import { Bar, Line, Pie, Radar, Doughnut, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
import './Analytics.css';  // Import the CSS file

const Analytics = () => {
  const commonOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: true, // Display the y-axis
        ticks: {
          display: true, // Show y-axis labels
        },
      },
    },
  };

  const salesData = {
    labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`), // Example with 12 months
    datasets: [
      {
        label: 'Sales',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const visitsData = {
    labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: 'Monthly Visits',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 500)),
        fill: false,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  const demographicsData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        data: [55, 35, 10], // Example with three segments
        backgroundColor: ['#4ABDAC', '#FFC3A0', '#FF677D'],
        hoverBackgroundColor: ['#39A89E', '#FF9A8B', '#E55B6C']
        
      },
    ],
  };

  const radarData = {
    labels: ['Service Quality', 'Product Satisfaction', 'Response Time', 'Price Competitiveness', 'Ease of Use'],
    datasets: [
      {
        label: 'Group A',
        data: [90, 70, 80, 79, 89],
        backgroundColor: 'RGB(255, 111, 97,0.4)',
        borderColor: '#FF6F61',
        pointBackgroundColor: '#FF6F61',
        pointBorderColor: '#fff',
      },
      {
        label: 'Group B',
        data: [80, 80, 79, 80, 70],
        backgroundColor: 'RGB(0, 128, 128,0.4)',
        borderColor: '#008080',
        pointBackgroundColor: '#008080',
        pointBorderColor: '#fff',
      },
      {
        label: 'Group C',
        data: [75, 99, 86, 60, 77],
        backgroundColor: 'RGB(0, 51, 160,0.4)',
        borderColor: '#0033A0',
        pointBackgroundColor: '#0033A0',
        pointBorderColor: '#fff',
      },
    ],
  };

  const doughnutData = {
    labels: ['High Satisfaction', 'Moderate Satisfaction', 'Low Satisfaction', 'Active Customers', 'Inactive Customers', 'New Customers'],
    datasets: [
      {
        data: [30, 25, 15, 20, 5, 5],
        backgroundColor: ['#00ACC1', '#4FC3F7', '#64B5F6', '#42A5F5', '#1976D2', '#0288D1'],
        hoverBackgroundColor: ['#00ACC1', '#4FC3F7', '#64B5F6', '#42A5F5', '#1976D2', '#0288D1']
      },
    ],
  };

  const polarData = {
    labels: ['Customer Support', 'Product Quality', 'Delivery Time', 'Pricing', 'User Experience'],
    datasets: [
      {
        data: [85, 90, 75, 60, 80],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
        label: 'Customer Feedback',
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: 'Customer Engagement',
        data: [
          { x: 10, y: 85, r: 15 }, // x: Number of Interactions, y: Satisfaction Score, r: Customer Importance
          { x: 20, y: 78, r: 10 },
          { x: 30, y: 90, r: 20 },
          { x: 40, y: 70, r: 25 },
          { x: 50, y: 88, r: 30 },
          { x: 60, y: 82, r: 18 }
        ],
        backgroundColor: 'rgba(255,99,132,0.6)',
        hoverBackgroundColor: 'rgba(255,99,132,1)',
      },
      {
        label: 'Customer Retention',
        data: [
          { x: 5, y: 80, r: 10 }, // x: Number of Retention Efforts, y: Retention Rate, r: Customer Base Size
          { x: 15, y: 85, r: 12 },
          { x: 25, y: 75, r: 14 },
          { x: 35, y: 90, r: 16 },
          { x: 45, y: 78, r: 20 },
          { x: 55, y: 88, r: 25 }
        ],
        backgroundColor: 'rgba(54,162,235,0.6)',
        hoverBackgroundColor: 'rgba(54,162,235,1)',
      }
    ]
  };

  const scatterData = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20 },
          { x: 20, y: 40 },
          { x: 30, y: 60 },
          { x: 40, y: 80 },
          { x: 50, y: 100 }
        ],
        backgroundColor: 'rgba(255,99,132,0.6)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 15, y: 25 },
          { x: 25, y: 35 },
          { x: 35, y: 45 },
          { x: 45, y: 55 },
          { x: 55, y: 65 }
        ],
        backgroundColor: 'rgba(54,162,235,0.6)',
      },
    ],
  };

  return (
    <div className="container">
      <h1 style={{ marginLeft: '-20px', marginTop: '-20px' }}>Analytics and Insight Overview</h1>
      <div className="chart-row">
        <div className="chart">
          <h3>Monthly Sales Performance</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Bar data={salesData} options={commonOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>Website Traffic Over the Year</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Line data={visitsData} options={commonOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>User Demographics Distribution</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Pie data={demographicsData} options={commonOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>Customer Satisfaction Metrics</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Radar data={radarData} options={commonOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>Customer Satisfaction Breakdown</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Doughnut data={doughnutData} options={commonOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>Customer Fback on Key Areas</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <PolarArea data={polarData} options={commonOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>Customer Engage vs. Satis</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Bubble data={bubbleData} options={commonOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>Sales Performance Scatter</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Scatter data={scatterData} options={commonOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
