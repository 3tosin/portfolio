import React, {useRef} from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_94hpbzf', 'template_voicpj5', form.current, 'pS3mnlyiJh9TlUxGR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

    <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <FiMail className='contact__options-icon'/>
              <h4>Email </h4>
              <h5>adeniyioluwafaith@gmail.com</h5>
              <a href="mailto:adeniyioluwafaith@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
              <BsTwitter className='contact__options-icon'/>
              <h4>Twitter</h4>
              <h5>3tosin</h5>
              <a href="https://twitter.com/_3tosin" rel="noreferrer" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
              <BsWhatsapp className='contact__options-icon'/>
              <h4>Whatsapp</h4>
              <h5>+234123456</h5>
              <a href="https://api.whatsapp.com/send?phone+2348140473908" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="12" placeholder='Your Message' required></textarea>
            <button type='submit' className="btn btn-primary">Send Message</button>
          </form>
    </div>

    </section>
  )
}

export default Contact