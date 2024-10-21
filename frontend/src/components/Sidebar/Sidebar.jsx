import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../img/logo.png'; 
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';

const Sidebar = ({ onSelect, onLogout, userData }) => {
  const [selected, setSelected] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelect = (index) => {
    setSelected(index);
    onSelect(index);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData'); // Clear user data on logout
    if (onLogout) {
      onLogout();
    }
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>
          I<span>Sphere</span>
        </span>
      </div>
      <button className="user-info-button" onClick={toggleDialog}>
        Show User Info
      </button>

      <div className="menu">
        {SidebarData.map((item, index) => (
          <div 
            className={selected === index ? 'menuItem active' : 'menuItem'} 
            key={index} 
            onClick={() => handleSelect(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="menuItem" onClick={handleLogout}>
          <UilSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
     
      {isDialogOpen && (
        <div className="dialog-overlay" onClick={toggleDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <h3>User Information</h3>
            {userData && (
              <div>
                <p><strong>Username:</strong> {userData.Username}</p>
                <p><strong>Email:</strong> {userData.email}</p>
              </div>
            )}
            <button className="close-dialog-button" onClick={toggleDialog}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
