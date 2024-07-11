import React from "react";
import Marquee from "react-fast-marquee";
import BestSeller1 from "../bestSeller/BestSeller1";
import BestSeller2 from "../bestSeller/BestSeller2";
import BestSeller3 from "../bestSeller/BestSeller3";
import BestSeller4 from "../bestSeller/BestSeller4";
import BestSeller5 from "../bestSeller/BestSeller5";
import BestSeller6 from "../bestSeller/BestSeller6";
import BestSeller7 from "../bestSeller/BestSeller7";
import "../style/ourBestSeller.css";

const OurBestSeller = () => (
  <>
    <div className="container1">
      <h1>Best Seller</h1>
    </div>
    <div className="container2">
      <Marquee>
        <BestSeller1 />
        <BestSeller2 />
        <BestSeller3 />
        <BestSeller4 />
        <BestSeller5 />
        <BestSeller6 />
        <BestSeller7 />
      </Marquee>
    </div>
  </>
);
export default OurBestSeller;
