import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <Button className='bar3-5'>Profile</Button>
            <Button className='bar3'>Internship</Button>
            <Button className='bar3'>Scholarship</Button>
        </ul>
    </div>
  )
}

export default Navbar