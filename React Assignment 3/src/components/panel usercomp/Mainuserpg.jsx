import React from "react";
import "./mainuserpg.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Userlog from "../Userlog";
import { useState } from "react";
const Mainuserpg = (props) => {
  // const [showmainuserpage, setshowmainuserpage] = useState(false);

  return (
    <div>
      <div></div>
      <div className="header">
        <div className="headercontainer">
          <div className="headerList">
            <div>
              <button className="b1">User View</button>
            </div>
            <div className="headerListItem">
              <NavLink to="/ushotel">
                <button className="button">Hotels</button>
              </NavLink>
            </div>
            <div className="headerListItem">
              <NavLink to="/usbook">
                <button className="button">Book Hotel</button>
              </NavLink>
            </div>
            <div className="headerListItem">
              <NavLink to="/viewbooking">
                <button className="button">View bookings</button>
              </NavLink>
            </div>
            <div className="headerListItem">
              <button
                className="logout"
                onClick={() => {
                  props.setShowDashboard(true);
                  return;
                }}
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mainuserpg;
