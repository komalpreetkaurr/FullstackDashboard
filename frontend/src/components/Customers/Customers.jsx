import React from 'react';
import ApexCharts from 'react-apexcharts';
import './CustomersPage.css'; 
const CustomerDistributionChart = () => {
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['New Customers', 'Returning Customers', 'Loyal Customers', 'One-time Visitors'],
    colors: ['#1E90FF', '#FF6347', '#3CB371', '#FFD700'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const chartSeries = [25, 35, 20, 20]; // Example data: percentages for each category

  return (
    <div className="customer-distribution-chart">
      <ApexCharts
        options={chartOptions}
        series={chartSeries}
        type="pie"
        width="400"
      />
    </div>
  );
};
const CustomersTable = () => {
  const customers = [
    { name: "Aarav Patel", email: "aarav.patel@example.com", phone: "+91-982-3456789", status: "Active" },
    { name: "Isha Sharma", email: "isha.sharma@example.com", phone: "+91-987-6543210", status: "Inactive" },
    { name: "Ravi Kumar", email: "ravi.kumar@example.com", phone: "+91-994-5678901", status: "Active" },
    { name: "Priya Singh", email: "priya.singh@example.com", phone: "+91-998-8776655", status: "Inactive" },
    { name: "Arjun Reddy", email: "arjun.reddy@example.com", phone: "+91-912-3456789", status: "Active" },
    { name: "Ananya Gupta", email: "ananya.gupta@example.com", phone: "+91-919-8765432", status: "Active" }
  ];
  

  return (
    <div className="customers-table-container">
      <table className="customers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td className={`status-${customer.status.toLowerCase()}`}>{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const UpdatesSection = () => {
  const updates = [
    { id: 1, title: ' * New Feature Released', description: 'We have just released a new feature that allows you to customize your dashboard.' },
    { id: 2, title: ' * Scheduled Maintenance', description: 'Our system will be down for maintenance from 2 AM to 4 AM on July 30th.' },
    { id: 3, title: ' * Customer Feedback', description: 'We received great feedback from customers regarding our latest update. Thank you!' },
    { id: 4, title: ' * Bug Fixes', description: 'Several bugs have been fixed to improve system stability.' },
  ];

  return (
    <div className="updates-section">
      <h2>Recent Updates</h2>
      <ul>
            {updates.map(update => (
              <li key={update.id}>
                <h3>{update.title}</h3>
                <p>{update.description}</p>
              </li>
            ))}
          </ul>
    </div>
  );
};

const FunnelChart = () => {
  // Example real data
  const chartOptions = {
    chart: {
      type: 'area',
    },
    colors: ['#3498DB', '#1AAC9C', '#9B59B6']

, // Colors for different categories
    plotOptions: {
      line: {
        curve: 'smooth', // Smooth curve for the line chart
      },
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'
      ],
    },
    dataLabels: {
      enabled: false,
      formatter: (val) => `${val}%`,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    stroke: {
      width: 4, // Adjust stroke width as needed
    },
    legend: {
      show: false,
      position: 'bottom',
      horizontalAlign: 'right',
    },
  };

  const chartSeries = [
      {
        name: 'Top-Sells',
        data: [35, 45, 40, 55, 60, 50, 65, 70], // More dynamic data
      },
      {
        name: 'Mid-Sells',
        data: [25, 35, 30, 40, 45, 50, 55, 50], // More dynamic data
      },
      {
        name: 'Low-Sells',
        data: [15, 20, 25, 30, 20, 25, 30, 25], // More dynamic data
      },
    ];

  return (
    <div className="funnel-chart">
      <ApexCharts
        options={chartOptions}
        series={chartSeries}
        type="area"
        height="400"
      />
    </div>
  );
};
const CustomersPage = () => {
  return (
    <div className="customers-page">
        <h1 style={{marginTop:'-29px'}}>Customers Overview</h1>
      <div className="content-row">
        <div className='pi'>
        <CustomerDistributionChart /></div>
        <UpdatesSection />
      </div>
      <div className='rw'>
      <div className="cus">
       <FunnelChart/>
      </div>
      <div><CustomersTable/></div>
      </div>
    </div>
    
  );
};

export default CustomersPage;
