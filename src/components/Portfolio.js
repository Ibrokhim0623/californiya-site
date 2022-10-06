import React from 'react'
import leftImg from '../assets/phone13.png'

import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio-container'>
      <div className="portfolio-content">
        <h2 data-aos="fade-up">Ideas have a place here</h2>
        <p  data-aos="fade-down">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
      </div>
      <div className="portfolio">
        <div className="portfolio-left" data-aos="fade-up">
            <img src={leftImg} alt="leftImg" />
        </div>
        <div className="portfolio-right" data-aos="fade-down">
            <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
            <p>Road Design Handbook For The International Road...</p>
            <p>The Best Kept Secrets About Creative People</p>
            <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
        </div>
      </div>
      <div className="portfolio-see">
        <h3>See All <i class="fa-solid fa-arrow-up-right-from-square"></i></h3>
      </div>
    </div>
  )
}

export default Portfolio
