import React from "react";
import best4 from "../assets/best4.jpg";
import "../style/bestSeller.css";

function BestSeller4() {
  return (
    <div>
      <img
        src={best4}
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

export default BestSeller4;
