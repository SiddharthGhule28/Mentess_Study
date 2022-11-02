import React from "react";
import "./registrn.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Adminlogin = () => {
  const [fullName, setFullName] = useState("");
  const fullNameHandler = (event) => {
    setFullName(event.target.value);
    console.log(fullName);
  };
  return (
    <div>
      <div className="admin">Registration</div>
      <div className="main">
        <div className="container">
          <div>
            <input
              className="fn"
              type="text"
              placeholder="Full Name"
              onChange={fullNameHandler}
            />
          </div>
          <div>
            <input className="fn" type="text" placeholder="Email Id" />
          </div>
          <div>
            <input className="fn" type="text" placeholder="Mobile no" />
          </div>
          <div>
            <input className="fn" type="text" placeholder="Age" />
          </div>
          <div>
            <input className="fn" type="password" placeholder="Set Password" />
          </div>
          <div>
            <input
              className="fn"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <NavLink to="/">
              <button className="button">Submit</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Adminlogin;
