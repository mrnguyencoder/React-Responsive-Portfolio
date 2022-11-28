import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import "../styles/Navbar.css";

function Navbar() {
const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close" }>
        <div className='toggleButton'>
            <button onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}
            >
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar