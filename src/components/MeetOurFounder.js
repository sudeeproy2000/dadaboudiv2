import React from "react";
import founder from "../assets/founder.jpg";
import "../style/meetOurFounder.css";

function MeetOurFounder() {
  return (
    <div>
      <div className="title-container ">
        <h1 className="title">Meet Our Founders</h1>
      </div>
      <div className="content-contaner">
        <diiv className="content-img">
          <img src={founder} />
        </diiv>

        <div className="content-line">
          <p className="content-text">
            “Starting from the tag of “DADA BOUDI” to the love, support and
            growth is something “our customers “ have immensely blessed us with.
            We as a couple are highly obliged and we look forward to serve you
            with our hearts and souls.”
          </p>
          <p className="content-name">- DHIREN SAHA& SANDHYA RANI SAHA</p>
        </div>
      </div>
    </div>
  );
}

export default MeetOurFounder;
