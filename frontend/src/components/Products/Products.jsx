import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Products.css';

const exampleProducts = [
  { name: 'Smartphone', sku: 'SKU12345', category: 'Gadgets', price: 9999.99, stock: 20, sales: 199999.80, status: 'In Stock' },
  { name: 'Wireless Earbuds', sku: 'SKU12346', category: 'Gadgets', price: 4999.99, stock: 35, sales: 174999.65, status: 'In Stock' },
  { name: 'Smartwatch', sku: 'SKU12347', category: 'Gadgets', price: 7999.99, stock: 50, sales: 399999.50, status: 'Out of Stock' },
  { name: 'Bluetooth Speaker', sku: 'SKU12348', category: 'Gadgets', price: 2999.99, stock: 15, sales: 44999.85, status: 'In Stock' },
  { name: 'Laptop', sku: 'SKU12349', category: 'Gadgets', price: 54999.99, stock: 10, sales: 549999.90, status: 'In Stock' },
  { name: 'Action Camera', sku: 'SKU12350', category: 'Gadgets', price: 19999.99, stock: 25, sales: 499999.75, status: 'In Stock' },
  { name: 'Smart TV', sku: 'SKU12351', category: 'Gadgets', price: 39999.99, stock: 12, sales: 479999.88, status: 'In Stock' },
  { name: 'Tablet', sku: 'SKU12352', category: 'Gadgets', price: 15999.99, stock: 30, sales: 479999.70, status: 'In Stock' },
  { name: 'Portable SSD', sku: 'SKU12353', category: 'Gadgets', price: 8999.99, stock: 20, sales: 179999.80, status: 'In Stock' },
  { name: 'Smart Home Hub', sku: 'SKU12354', category: 'Gadgets', price: 6999.99, stock: 18, sales: 125999.82, status: 'In Stock' },
  { name: 'Drone', sku: 'SKU12355', category: 'Gadgets', price: 24999.99, stock: 22, sales: 549999.78, status: 'In Stock' },
  { name: 'VR Headset', sku: 'SKU12356', category: 'Gadgets', price: 14999.99, stock: 25, sales: 374999.75, status: 'In Stock' },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [stockFilter, setStockFilter] = useState('');

  const filteredProducts = exampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    const matchesPrice = priceFilter ? (
      product.price >= parseInt(priceFilter.split('-')[0]) && 
      product.price <= parseInt(priceFilter.split('-')[1])
    ) : true;
    const matchesStock = stockFilter ? product.status === stockFilter : true;

    return matchesSearch && matchesCategory && matchesPrice && matchesStock;
  });

  const salesTrendsData = {
    labels: filteredProducts.map(product => product.name),
    datasets: [
      {
        label: 'Sales Trends',
        data: filteredProducts.map(product => product.sales),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1) ',
        backgroundColor:'rgba(54, 162, 235, 0.1)',
        tension: 0.1,
      },
    ],
  };

  const revenueByProductData = {
    labels: filteredProducts.map(product => product.name),
    datasets: [
      {
        label: 'Revenue by Product',
        data: filteredProducts.map(product => product.price),
        backgroundColor: 'rgba(255, 159, 64, 0.4)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: false,
        ticks: {
          display: true, // This ensures the labels are visible
          color: 'rgba(75, 192, 192,0.1)', // You can customize the label color here
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="products-page">
      <h1 style={{ marginTop: '-10px', marginLeft:'-23px' }}>Products Overview</h1>
      <main className="main-content">
        <section className="left-section">
          <div className="search-filter">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="filters">
              <select onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter}>
                <option value="">All Categories</option>
                <option value="Gadgets">Gadgets</option>
              </select>
              <select onChange={e => setPriceFilter(e.target.value)} value={priceFilter}>
                <option value="">Price Range</option>
                <option value="0-5000">0 - 5000</option>
                <option value="5001-10000">5001 - 10000</option>
                <option value="10001-50000">10001 - 50000</option>
              </select>
              <select onChange={e => setStockFilter(e.target.value)} value={stockFilter}>
                <option value="">Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="product-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Sales</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => (
                  <tr key={product.sku}>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>{product.category}</td>
                    <td>₹{product.price.toFixed(2)}</td>
                    <td>{product.stock}</td>
                    <td>₹{product.sales.toFixed(2)}</td>
                    <td>{product.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rightt-section">
          <div className="metrics">
            <h2>Performance Metrics</h2>
            <p>Total Revenue: ₹{filteredProducts.reduce((total, product) => total + product.sales, 0).toFixed(2)}</p>
            <p>Total Units Sold: {filteredProducts.reduce((total, product) => total + product.stock, 0)}</p>
            <p>Average Price: ₹{(filteredProducts.reduce((total, product) => total + product.price, 0) / filteredProducts.length).toFixed(2)}</p>
          </div>
          <div className="charttt-container small-chart">
            <Line data={salesTrendsData} options={chartOptions} />
          </div>
          <div className="charttt-container small-chart">
            <Bar data={revenueByProductData} options={chartOptions} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
