import React from 'react';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Internship from './components/Internship';
import Scholarship from './components/Scholarship';
import Communication from './components/Communication';
import Transportation from './components/Transportation';
import Issues from './components/Issues';
import Reservation from './components/Reservation';
import ResDorm from './components/ResDorm';
import RecDorm from './components/RecDorm';
import Community from './components/Community';
import './App.css';

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
        <Navbar />
        <Community />
        <RecDorm />
        <ResDorm />
        <Reservation />
        <Transportation />
        <Communication />
        <Issues />
        <Profile />
        <Internship />
        <Scholarship />
      </div>
    </div>
  );
};

export default App;