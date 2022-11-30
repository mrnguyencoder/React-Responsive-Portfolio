import React, {} from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import logo from "../assets/textnguyencoder.png";

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
         <img src={logo} alt="nguyencoder" />
        </div>
        <div className='links'>   
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/projects">Projects</Link>
            <Link className='link' to="/contact">Contact</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar