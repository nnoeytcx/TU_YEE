import React from 'react';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Internship from './components/Internship';
import Scholarship from './components/Scholarship';
import './App.css';

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
        <Navbar />
        <Profile />
        <Internship />
        <Scholarship />
      </div>
    </div>
  );
};

export default App;