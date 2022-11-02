import React from "react";
import "./featured.css";
import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jfif";
import hotel3 from "./hotel3.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featureditem">
        <img src={hotel1} alt="" className="featuredImg" />
      </div>
      <div className="featureditem">
        <img src={hotel2} alt="" className="featuredImg" />
      </div>
      <div className="featureditem">
        <img src={hotel3} alt="" className="featuredImg" />
      </div>
    </div>
  );
};
export default Featured;
