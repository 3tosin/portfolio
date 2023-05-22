import React from 'react'
import './Footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    
    <footer>
        <a href="#Header" className='footer__logo'>Oluwatosin Adeniyi</a>
        <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
        <a href="http://linkedin.com"><BsLinkedin /></a>
        <a href="http://instagram.com"><BsInstagram /></a>
        <a href="http://twitter.com"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>
       Copyright {year}. Developed by Oluwatosin Adeniyi. All rights reserved.
        </small>
      </div>
    </footer>
    
  )
}

export default Footer