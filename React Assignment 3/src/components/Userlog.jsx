import React from "react";
import "./admnlog.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Mainuserpg from "./panel usercomp/Mainuserpg";

const Userlog = (props) => {
  const [showmsg, setshowmsg] = useState(false);

  let email = "";
  let password = "";

  const users = useSelector((state) => state.userloginlst);

  const checkemail = (event) => {
    email = event.target.value;
  };
  const checkpassword = (event) => {
    password = event.target.value;
  };
  const Checkdetails = () => {
    const user = {
      email1: email,
      password1: password,
    };

    for (let i in users) {
      if (
        users[i].email.trim().toLowerCase() === user.email1.trim().toLowerCase()
      ) {
        if (users[i].password.trim() === user.password1) {
          props.setShowDashboard(false);
          setshowmsg(false);
        }
      } else {
        setshowmsg(true);
      }
    }
  };

  return (
    <div>
      <div className="admin"> User Login</div>
      <div className="main">
        <div className="container">
          <div>
            <input
              className="aln"
              type="text"
              placeholder="Email id"
              onChange={checkemail}
              //
            />
          </div>
          <div>
            <input
              className="aln"
              type="password"
              placeholder="Password"
              onChange={checkpassword}
              //
            />
          </div>
          <div>
            {/* <NavLink to="/userpanel"> */}
            <button type="button" className="button" onClick={Checkdetails}>
              Login
            </button>
            {/* </NavLink> */}
          </div>
          <div>
            <NavLink to="/hotels">
              <button className="buttonr">
                Don't have an Account? Register
              </button>
            </NavLink>
          </div>
          <div>{showmsg && <h6>!invalid email or password</h6>}</div>
        </div>
      </div>
    </div>
  );
};

export default Userlog;
