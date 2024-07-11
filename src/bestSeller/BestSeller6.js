import React from "react";
import best6 from "../assets/best6.JPG";
import "../style/bestSeller.css";

function BestSeller6() {
  return (
    <div>
      <img
        src={best6}
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

export default BestSeller6;
