import React from "react";
import best1 from "../assets/best1.JPG";
import "../style/bestSeller.css";

function BestSeller1() {
  return (
    <div>
      <img
        src={best1}
        // style={{
        //   height: "251px",
        //   width: "251px",
        //   objectFit: "cover",
        //   borderRadius: "20px",
        //   marginInline: "10px",
        // }}
        className="best"
      />
    </div>
  );
}

export default BestSeller1;
