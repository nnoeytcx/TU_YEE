import React from 'react'
import Card from './Card'
import Newsbox from './Newsbox'
import '../styles/internship.css'

const Internship = () => {
  return (
    <div>
        <div className="dashboard--content">
            <Card />
            <Newsbox />
            <Newsbox />
            <Newsbox />
        </div>
    </div>
  )
}

export default Internship