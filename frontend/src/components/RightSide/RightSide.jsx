import React from 'react';
import Cards from '../Cards/Cards'; // Adjust paths if needed
import Table from '../Table/Table'; // Adjust paths if needed
import RightSide from '../RightSide/RightSide'; // Adjust path if needed
import Orders from '../Orders/Orders';
import Products from '../Products/Products';
import Customers from '../Customers/Customers';
import Analytics from '../Analytics/Analytics';

const ContentWrapper = ({ selectedIndex }) => {
  const renderContent = () => {
    switch (selectedIndex) {
      case 0: // Assuming index 0 is for Dashboard
        return (
          <div className="dashboardLayout">
            <div className="mainContent">
              <Cards />
              <Table />
            </div>
            <RightSide />
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
