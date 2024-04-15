import React from 'react'
import '../styles/newsbox.css'
import Button from 'react-bootstrap/Button';
import userImage from '../assets/cat.jpg'

const Newsbox = () => {
    return (
        <div>
            <div className='backcard'>
                <img className='cimg' src={userImage} />
                <div className='cbody'>
                    <div className='ctitle'>Card Title</div>
                    <div className='ctext'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content. Some quick example text to build on the card title and make up the
                        bulk of the card's content. Some quick example text to build on the card title and make up the
                        bulk of the card's content....
                    </div>
                    <Button className='cbutton'>More</Button>
                </div>
            </div>
        </div>
    )
}

export default Newsbox