import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headertitle">A life time of discounts? It's Genius.</h1>
        <p className="headerdesc">
          You can't buy happiness, but you can buy food, and that's kind of the
          same thing.
        </p>
        <button className="headerbtn">Sign in/ Register</button>
      </div>
    </div>
  );
};
export default Header;
