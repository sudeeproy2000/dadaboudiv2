import React from "react";
import best7 from "../assets/best7.JPG";
import "../style/bestSeller.css";

function BestSeller7() {
  return (
    <div>
      <img
        src={best7}
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

export default BestSeller7;
