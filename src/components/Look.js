import React from "react";
import BtnSearch from "./BtnSearch";
import "../styles/Look.css";

import iPhone  from '../assets/phone14.png'

function Look() {
  return (
    <div className="look-container">
      <h1 className="title">Looking for anything else?</h1>
      <div className="look-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search keyword" />
      </div>
      <div className="btns">
        <BtnSearch />
      </div>

      <div className="look-content">
        <h1 data-aos="fade-up">Never miss a thing</h1>
        <p data-aos="fade-down">Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        <img src={iPhone} alt="iPhone" />
        <div className="forms">
            <input type="email" placeholder="Your Email" data-aos="fade-up" />
            <button data-aos="fade-down">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Look;
