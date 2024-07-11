import React from "react";
import "../style/floorAndLounges.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import FloorAndLoungesSingleCard from "./FloorAndLoungesSingleCard";

export default function FloorAndLounges() {
  const ground = {
    img: "../assets/floor-ground.jpg",
    name: "Bangaliyana Lounge",
    description: "Mordern Interior Mixed with asthetic vibe",
  };

  const first = {
    img: "../assets/floor-first.JPG",
    name: "Peime Lounge",
    description: "Situated in first floor",
  };

  const second = {
    img: "../assets/floor-second.JPG",
    name: "Velvet Lounge",
    description: "Situated in third floor",
  };
  return (
    <div className="main">
      <div className="container1">
        <h1>Floor & Lounges</h1>
      </div>
      <div style={{ padding: "20px 60px" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <FloorAndLoungesSingleCard content={ground} />
          </SwiperSlide>
          <SwiperSlide>
            <FloorAndLoungesSingleCard content={first} />
          </SwiperSlide>
          <SwiperSlide>
            <FloorAndLoungesSingleCard content={second} />
          </SwiperSlide>
          <SwiperSlide>
            <FloorAndLoungesSingleCard content={ground} />
          </SwiperSlide>
          <SwiperSlide>
            <FloorAndLoungesSingleCard content={first} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
