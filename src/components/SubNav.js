import React from "react";
import biriyaniPNG from "../assets/hero-slider-1-png.png";
import logo from "../assets/dadaboudi-logo.png";

function SubNav() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        paddingInline: "20px",
      }}
    >
      <img src={logo} style={{ height: "30px", width: "30px" }} />
      <p style={{ color: "white", wordSpacing: "10px" }}>
        বিরিয়ানী মানেই দাদাবৌদি
      </p>
    </div>
  );
}

export default SubNav;
