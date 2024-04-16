import React from 'react'
import '../styles/scholarship.css'
import catImage from '../assets/cat.jpg'
import ListGroup from 'react-bootstrap/ListGroup';

const Scholarship = () => {
    return (
        <div className='dashboard--content3'>
            <div className="scholar--header">
                <h2>Scholarship</h2>
            </div>
            <div className="inblock">
                <img className='catimg' src={catImage} />
                <div className='sometext'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Some quick example text to build on the card title and make up the
                    bulk of the card's content. Some quick example text to build on the card title and make up the
                    bulk of the card's content....
                </div>
            </div>
            <div className="imgcontainer">
                <img className='catimg' src={catImage} />
                <img className='catimg' src={catImage} />
                <img className='catimg' src={catImage} />
                <img className='catimg' src={catImage} />
                <img className='catimg' src={catImage} />
            </div>
            <div className='sclistcontainer'>
                <div className='sclist'>Cras justo odio</div>
                <div className="news">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <div className='sclist'>Dapibus ac facilisis in</div>
                <div className="news">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <div className='sclist'>Morbi leo risus</div>
                <div className="news">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <div className='sclist'>Porta ac consectetur ac</div>
                <div className="news">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <div className='sclist'>Vestibulum at eros</div>
                <div className="news">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>
        </div>
    )
}

export default Scholarship