import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chart from 'react-apexcharts'; // Ensure this library is installed
import './Orders.css';

// Function to create data
function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

// Sample data with real-world examples
const rows = [
  createData("Apple iPhone 14", 12345678, "1 March 2024", "Approved"),
  createData("Samsung Galaxy S23", 23456789, "5 March 2024", "Pending"),
  createData("Sony WH-1000XM5", 34567890, "10 March 2024", "Approved"),
  createData("Dell XPS 13", 45678901, "15 March 2024", "Rejected"),
  createData("Google Pixel 8", 56789012, "20 March 2024", "Pending"),
  createData("Apple MacBook Air M2", 67890123, "25 March 2024", "Approved"),
  createData("Microsoft Surface Pro 9", 78901234, "30 March 2024", "Rejected"),
  createData("Sony PlayStation 5", 89012345, "2 April 2024", "Approved"),
  createData("Nintendo Switch OLED", 90123456, "7 April 2024", "Pending"),
];

// Function to get status style
const getStatusStyle = (status) => {
  switch (status) {
    case "Approved":
      return {
        background: '#ACE1AF',
        color: 'green'
      };
    case 'Pending':
      return {
        background: '#ffadad8f',
        color: 'red'
      };
    default:
      return {
        background: '#59bfff',
        color: 'white'
      };
  }
};

// Graph data
const trendingProductsOptions = {
  chart: {
    type: 'area',
  },
  xaxis: {
    categories: ['Apple iPhone 14', 'Samsung Galaxy S23', 'Sony WH-1000XM5', 'Dell XPS 13', 'Google Pixel 8'],
    labels: { show: false }, 
    lines: { show: true } ,

  },
  title: { text: 'Trending Products' },
  dataLabels: { enabled: false }, // Hide data labels
  colors: ['#2ecc71'], // Line color
  stroke: {
    curve: 'smooth', // Optional: smooth curve for the line
    width: 5 // Optional: width of the line
  },
  fill: {
    type: 'gradient', // Optional: gradient fill under the line
    gradient: {
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    enabled:true
  }
};

const trendingProductsSeries = [{
  name: 'Sales',
  data: [18200, 49000, 62800, 29500, 90700]
}];
const highestSalesOptions = {
  chart: { 
    type: 'pie'
  },
  labels: ['Apple iPhone 14', 'Sony WH-1000XM5', 'Apple MacBook Air M2'],
  title: { text: 'Highest Selling Products' },
  legend: { show: true }, // Show the legend
  dataLabels: { enabled: true }, // Show data labels
  colors: ['#3498db', '#9b59b6', '#1abc9c'], // Colors for each pie segment
  plotOptions: {
    pie: {
      donut: {
        size: '70%', // Optional: Adjust donut size if needed
      },
    },
  },
};

const highestSalesSeries = [8820, 4900, 9075];

export default function BasicTable() {
  return (
    <div className="TableContainer">
    <div className="Table" style={{ marginTop: '1px' }}>
      <h1 style={{ marginTop: '-12px', marginBottom: '25px' }}> Orders</h1>
      <div className="tablc"> 
          <TableContainer
            component={Paper}
            className="tableContainer"
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="left">Tracking ID</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.trackingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                      <span
                        className="status"
                        style={getStatusStyle(row.status)}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell align="left" className='details'>Detail</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="Graphs">
        <div className="chart-container">
          <Chart options={highestSalesOptions} series={highestSalesSeries} type='pie' height={300} width={300} />
        </div>
        <div className="chart-container">
          <Chart options={trendingProductsOptions} series={trendingProductsSeries} type='area' height={400} width={300} />
        </div>
      </div>
    </div>
  );
}
