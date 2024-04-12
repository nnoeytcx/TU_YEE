import React from 'react'
import {BiBookAlt} from 'react-icons/bi'
import '../styles/sidebar.css'
const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt className='logo-icon'/>
        <h1>Tu Yee</h1>
      </div>

      <div className="menu--list">
        <a href='#' className='item active'>Learning</a>
        <a href='#' className='item'>Consulting</a>
        <a href='#' className='item'>Convenient</a>
        <a href='#' className='item'>Accommodation</a>
        <a href='#' className='item'>Community</a>
      </div>
    </div>
  )
}

export default Sidebar