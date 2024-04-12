import React from 'react'
import '../styles/profile.css'
import { BiEdit } from 'react-icons/bi'

const ProfileHeader = () => {
  return (
    <div>
      <div className="profile--header">
        <h2 className="header--title">Profile</h2>
        <div className="edit">
          <BiEdit className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader