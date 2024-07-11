import React from "react";
import best2 from "../assets/best2.JPG";
import "../style/bestSeller.css";

function BestSeller2() {
  return (
    <div>
      <img
        src={best2}
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

export default BestSeller2;
