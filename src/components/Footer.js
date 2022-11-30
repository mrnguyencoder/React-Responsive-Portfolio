import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "../styles/Footer.css"
import logo from "../assets/textnguyencoder.png";



function Footer() {
  return (
    <div className='footer'>
      <div className='footer__name'>
      <img src={logo} alt="nguyencoder" />
      </div>
      <div>
        <SocialIcon className='footer__social' url="https://www.instagram.com/mrnguyencoder/" style={{ height: 30, width: 30 }}/>
        <SocialIcon className='footer__social' url="https://github.com/mrnguyencoder" style={{ height: 30, width: 30 }}/>
        <SocialIcon className='footer__social' url="https://codepen.io/mrnguyencoder" style={{ height: 30, width: 30 }}/>
      </div>
        
    </div>
  )
}

export default Footer;