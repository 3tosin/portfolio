import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/oluwatosin-adeniyi-28ba04199/ " target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/3tosin" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/_3tosin" target='_blank' rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials