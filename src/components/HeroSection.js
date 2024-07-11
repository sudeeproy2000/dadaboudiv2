import React from "react";
import heroPhoto from "../assets/hero-slider-1.jpg";
import heroPhotoCrop from "../assets/hero-slider-crop.jpg";
import "../style/heroSection.css";
// import { SwiperRef } from 'antd-mobile/es/components/swiper'

function HeroSection() {
  return (
    <div className="hero">
      <img src={heroPhoto} className="full" />
      <img src={heroPhotoCrop} className="cropped" />
    </div>
  );
}

export default HeroSection;
