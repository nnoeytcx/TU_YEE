import React from 'react';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Content from './components/Content';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
        <Navbar />
        <div className="dashboard--content">
          <Profile />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;