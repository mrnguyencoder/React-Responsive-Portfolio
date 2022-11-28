import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import "../styles/Footer.css"



function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GitHubIcon />
            <InstagramIcon />
        </div>
        <p>&copy; nguyencoder</p>
    </div>
  )
}

export default Footer;