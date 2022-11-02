import React from "react";
import "./navbar.css";
import Adminlogin from "./Registrn";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <NavLink to="/">
          <span className="logo">Hotel Reservation</span>
        </NavLink>
        <div className="navitems">
          <NavLink to="/Alogin">
            <button className="navButton">Admin Login</button>
          </NavLink>
          <NavLink to="/Ulogin">
            <button className="navButton">User Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
