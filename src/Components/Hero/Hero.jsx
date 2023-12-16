import React from "react";
import "./Hero.css";
import icon2 from "../Assets/icon2.png";
import arrow_icon from "../Assets/arrow_icon.png";
// import hero_img from '../Assets/arrow_icon.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <p>A Pharmacy Your Family can Trust</p>
        <h2><i>
          Welcome to a life of health,<br />
          happiness, and positive<br />
          medical care for you<br /> 
          and your entire family.</i>
        </h2>
        <div className="hero-explore-btn">
          <div>Explore Medicines</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={icon2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
