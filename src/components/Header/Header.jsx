import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../images/me-removebg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adeniyi Oluwatosin</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>

        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#Contact" className="scroll__down">Click Here</a>
      </div>
    </header>
  )
}

export default Header