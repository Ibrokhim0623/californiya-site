import React from "react";
import "../styles/Services.css";
import Button from "./Button";
import leftImg from "../assets/phone1.png";
import leftImg1 from '../assets/phone4.png'
import leftImg2 from '../assets/phone3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Services() {

    const settings = {
        dots: true,
        infinite: false,
        prev: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

  return (
    <div>
      <Slider {...settings}>
        <div className="container">
          <div className="container-left">
            <h1>The new phones are here take a look.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
            </p>
            <Button />
          </div>
          <div className="container-right">
            <img src={leftImg} alt="Image" />
          </div>
        </div>
        <div className="container">
          <div className="container-left">
            <h1>The new phones are here take a look.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
            </p>
            <Button />
          </div>
          <div className="container-right">
            <img src={leftImg1} alt="Image" />
          </div>
        </div>
        <div className="container">
          <div className="container-left">
            <h1>The new phones are here take a look.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
            </p>
            <Button />
          </div>
          <div className="container-right">
            <img src={leftImg2} alt="Image" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Services;
