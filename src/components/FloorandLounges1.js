import React from "react";
import BestSeller1 from "../bestSeller/BestSeller1";
import "../style/floorAndLounges.css";
import FloorAndLoungesSingleCard from "./FloorAndLoungesSingleCard";

function FloorandLounges1() {
  return (
    <div className="main">
      <div className="container1">
        <h1>Floor & Lounges</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* <div
          style={{
            height: "350px",
            width: "250px",
            backgroundColor: "white",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <BestSeller1 />
        </div> */}

        <FloorAndLoungesSingleCard />
        <FloorAndLoungesSingleCard />
        <FloorAndLoungesSingleCard />
      </div>
    </div>
  );
}

export default FloorandLounges1;
