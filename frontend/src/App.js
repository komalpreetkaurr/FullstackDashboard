import React, { useState, useEffect } from 'react';
import './App.css';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import LoginSignup from './components/login/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken')); 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleSidebarSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true); 
    setUserData(user); // Update state with user data
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUserData(null);
  };

  if (!isLoggedIn) {
    return <LoginSignup onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar onSelect={handleSidebarSelect} onLogout={handleLogout} userData={userData} />
        <ContentWrapper selectedIndex={selectedIndex} userData={userData} />
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
