import React from 'react';
import '../styles/Contact.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function Contact() {
  return (
    <div className='contact'>
      <p className='contact__title'>Let's talk</p>
      <div className='contact__phone'>
        <ContactPhoneIcon />
        <p>+33-06123456</p>
      </div>
      
      <div className='contact__email'>
        <AlternateEmailIcon />
        <p>mr.nguyencoder@gmail.com</p>
      </div>
      <form className='form'>
        <div className='form__input'>
          <input className='contactInput' type='text' />
          <input className='contactInput' type='text' />
        </div>
        <input className='contactInput' type='text' />
        <textarea className='contactInput' />
        <button className='button'>Sumit</button>

      </form>

    </div>
  )
}

export default Contact;