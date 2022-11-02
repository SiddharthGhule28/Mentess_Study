import React from "react";
import "./admnlog.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
const Admnlog = (props) => {
  const [showmsg, setshowmsg] = useState(false);

  let email = "";
  let password = "";

  const admins = useSelector((state) => state.adminloginlst);

  const checkemail = (event) => {
    email = event.target.value;
  };
  const checkpassword = (event) => {
    password = event.target.value;
  };
  const Checkdetails = () => {
    const admin = {
      email1: email,
      password1: password,
    };

    for (let i in admins) {
      if (
        admins[i].email.trim().toLowerCase() ===
        admin.email1.trim().toLowerCase()
      ) {
        if (admins[i].password.trim() === admin.password1) {
          props.setShowadminDashboard(false);
          setshowmsg(false);
        }
      } else {
        setshowmsg(true);
      }
    }
  };

  return (
    <div>
      <div className="admin"> Administrator Login</div>
      <div className="main">
        <div className="container">
          <div>
            <input
              className="aln"
              type="text"
              placeholder="Email id"
              onChange={checkemail}
            />
          </div>
          <div>
            <input
              className="aln"
              type="password"
              placeholder="Password"
              onChange={checkpassword}
            />
          </div>
          <div>
            <button className="button" onClick={Checkdetails}>
              Login
            </button>
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
export default Admnlog;
