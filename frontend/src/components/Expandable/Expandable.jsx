import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';// For styling
import '/ExpandableBox.css'
const ExpandableBox = ({ title, chartOptions, chartSeries }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`expandable-box ${isExpanded ? 'expanded' : ''}`}>
      <div className="box-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{title}</h3>
        <button>{isExpanded ? 'Collapse' : 'Expand'}</button>
      </div>
      {isExpanded && (
        <div className="box-content">
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="line" // Example chart type
            height="300"
          />
        </div>
      )}
    </div>
  );
};

export default ExpandableBox;
