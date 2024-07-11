import React from "react";
import best3 from "../assets/best3.JPG";
import "../style/bestSeller.css";

function BestSeller3() {
  return (
    <div>
      <img
        src={best3}
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

export default BestSeller3;
