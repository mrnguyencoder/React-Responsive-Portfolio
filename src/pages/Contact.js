import React from 'react';
import '../styles/Contact.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    window.location.href = `mailto:mr.nguyencoder@gmail.com?subject=${data.subject}&body=${data.message} (${data.email}) `
  };
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
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <input {...register('name')} className='contactInput' placeholder='Name' type='text' />
          <input {...register('email')} className='contactInput' placeholder='Email'type='email' />

        <input {...register('subject')} className='contactInput' placeholder='Subject' type='text' />
        <textarea {...register('message')} className='contactInput' placeholder='Message' />
        <button className='button' type='submit'>Submit</button>

      </form> 

    </div>
  )
}

export default Contact;