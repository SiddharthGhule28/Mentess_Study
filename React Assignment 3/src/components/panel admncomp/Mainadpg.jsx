import React from "react";
import "./Mainadpg.css";
import { NavLink } from "react-router-dom";

const Mainadpg = (props) => {
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerList">
          <div>
            <button className="b1">Administrator View</button>
          </div>
          <div className="headerListItem">
            <NavLink to="/existinghotel">
              <button className="button">Hotels</button>
            </NavLink>
          </div>
          <div className="headerListItem">
            <NavLink to="/addhotel">
              <button className="button">Add Hotel</button>
            </NavLink>
          </div>
          <div className="headerListItem">
            <NavLink to="/viewbookingadmn">
              <button className="button">Bookings</button>
            </NavLink>
          </div>

          <div className="headerListItem">
            <NavLink to="/loginusers">
              <button className="button">Users</button>
            </NavLink>
          </div>
          <div className="headerListItem">
            <button
              className="adlogout"
              onClick={() => {
                props.setShowadminDashboard(true);
                return;
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mainadpg;
