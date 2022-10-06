import React from "react";
import "../styles/Works.css";
import Button from "./Button";
import img1 from "../assets/phone10.png";
import img2 from "../assets/phone11.png";
import img3 from "../assets/phone12.png";

const works = [
  {
    id: 1,
    desc: "Smart light bulb pack",
    title: "Latest and gratest",
    img: img1,
  },
  {
    id: 2,
    desc: "Smart light bulb pack",
    title: "Best selling",
    img: img2,
  },
  {
    id: 3,
    desc: "Smart light bulb pack",
    title: "Every product",
    img: img3,
  },
];

function Works() {
  return (
    <div className="works-container">
      <div className="works-content">
        <h2 data-aos="fade-up">See the best around here</h2>
        <p data-aos="fade-down">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </p>
      </div>
      <div className="works">
        {works.map((item) => {
          return (
            <div
              className="work"
              key={item.id}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h6>{item.desc}</h6>
              <h4>{item.title}</h4>
              <Button />
              <img src={item.img} alt={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
