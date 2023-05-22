import React from 'react'
import './About.css'
import ME from '../../images/me-removebg.png'
import {BiAward} from 'react-icons/bi'
import {CiLaptop} from 'react-icons/ci'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Img' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
               <BiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working </small>
            </article>
            <article className='about__card'>
                <CiLaptop className='about__icon'/>
              <h5>Skills</h5>
              <small>HTML,CSS,Javascript</small>
            </article>
            <article className='about__card'>
               <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro est quaerat deleniti? Voluptatibus labore minus, soluta quas adipisci nisi quam debitis quos eius optio.
          </p>

          <a href="#Contact" className='btn btn-primary abt-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About