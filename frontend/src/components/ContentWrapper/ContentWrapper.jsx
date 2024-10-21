import React from 'react';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import Updates from '../Updates/Updates';
import Cus from '../Cus/Cus';
import Orders from '../Orders/Orders';
import Products from '../Products/Products';
import Customers from '../Customers/Customers';
import Analytics from '../Analytics/Analytics';
import './ContentWrapper.css';

const ContentWrapper = ({ selectedIndex, userData }) => {
  const renderContent = () => {
    switch (selectedIndex) {
      case 0: 
        return (
          <div className="dashboardLayout">
            <div className="mainContent">
            <h2 style={{ marginTop: '-30px'}}>Hi</h2>
              <h1 style={{ marginTop: '-12px', color:'#D2122E' }}>
               {userData?.Username || 'User'} !!
              </h1>
              <Cards />
              <Table />
            </div>
            <div className="sideContent">
              <div>
                <h3>Updates</h3>
                <Updates />
              </div>
              <div>
                <h3>Customers Review</h3>
                <Cus />
              </div>
            </div>
          </div>
        );
      case 1:
        return <Orders />;
      case 2:
        return <Customers />;
      case 3:
        return <Products />;
      case 4:
        return <Analytics />;
      default:
        return null;
    }
  };

  return (
    <div className="contentWrapper">
      {renderContent()}
    </div>
  );
};

export default ContentWrapper;
