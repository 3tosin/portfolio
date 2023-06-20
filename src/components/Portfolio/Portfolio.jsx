import React from 'react'
import './Portfolio.css'

import IMG1 from '../../images/portfolio1.png'
import IMG2 from '../../images/portfolio2.png'
import IMG3 from '../../images/portfolio3.PNG'
import IMG4 from '../../images/portfolio4.png'
// import IMG5 from '../../images/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather App',
    github: 'https://github.com/3tosin/weather-app',
    demo: 'https://codepen.io/3tosin/full/YzxqVBQ'
  },
  {
    id: 2,
    image: IMG3,
    title: 'To-Do App',
    github: 'https://github.com/3tosin/TODO-APP',
    demo: 'https://3tosin-todo.netlify.app/'
  },
  {
    id: 3,
    image: IMG2,
    title: 'PremiumAssistant',
    github: 'https://github.com/3tosin/PremiumAssistant',
    demo: 'https://premiumassistant.netlify.app'
  },
  // {
  //   id: 4,
  //   image: IMG5,
  //   title: 'Note App',
  //   github: 'https://github.com/3tosin/NoteApp',
  //   demo: 'https://github.com/3tosin/NoteApp'
  // },
  {
    id: 5,
    image: IMG4,
    title: 'React Portfolio',
    github: 'http://github.com/3tosin/portfolio',
    demo: 'https://github.com/3tosin/portfolio'
  },
  
]

const Portfolio = () => {

  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({
          id,image,title,github, demo
        }) =>{
          return(
          <article key={id} className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
          )
           })
      }
      </div>
    </section>
  )
}

export default Portfolio
