import React from "react";
import best5 from "../assets/best5.JPG";
import "../style/bestSeller.css";

function BestSeller5() {
  return (
    <div>
      <img
        src={best5}
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

export default BestSeller5;
