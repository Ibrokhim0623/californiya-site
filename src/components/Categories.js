import React from "react";
import "../styles/Categories.css";
import image2 from '../assets/phone2.png'
import image3 from '../assets/phone5.png'
import image4 from '../assets/phone3.png'
import image5 from '../assets/phone4.png'

function Categories() {
  return (
    <div className="category-container">
      <div className="category-content">
        <h2 data-aos="fade-up">Shop our latest offers and categories</h2>
        <p data-aos="fade-down">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam, <br /> tempor. Faucibus morbi turpis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="category-cards">
        <div className="cards-left">
            <div className="card1 card-shadow" data-aos="zoom-in">
                <div className="card-img"><img src={image2} alt="Error" /></div>
                <div className="card1-content">
                    <h5>Laptops</h5>
                    <h3>True Laptop <br /> Solution</h3>
                </div>
            </div>
            <div className="card2 card-shadow" data-aos="zoom-in">
                <div className="card-img"><img src={image3} alt="Image3" /></div>
                <div className="card2-content">
                    <h5>Watch</h5>
                    <h3>Not just <br /> stylisht</h3>
                </div>
            </div>
        </div>
        <div className="cards-right">
            <div className="card3 card-shadow" data-aos="zoom-in">
                <div className="card-img"><img src={image4} alt="Image" /></div>
                <div className="card3-content">
                    <h5>Phones</h5>
                    <h3>Your day to day <br /> life</h3>
                </div>
            </div>
            <div className="card4 card-shadow" data-aos="zoom-in">
                <div className="card4-content">
                    <h5>Tablet</h5>
                    <h3>Empower your work</h3>
                </div>
                <div className="card-img"><img src={image5} alt="Image" /></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
