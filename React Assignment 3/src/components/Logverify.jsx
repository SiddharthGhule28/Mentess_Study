import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Mainuserpg from "./panel usercomp/Mainuserpg";
import Userlog from "./Userlog";

const Logverify = (props) => {
  const [validater, setValidater] = useState(undefined);
  const users = useSelector((state) => state.userloginlst);
  const dispatch = useDispatch();

  const emailPassData = (user) => {
    for (let i in users) {
      if (
        users[i].email.trim().toLowerCase() === user.email.trim().toLowerCase()
      ) {
        if (users[i].password.trim() === user.password) {
          //   props.receiveSingleUserData(user);
          //   props.setUName(users[i].firstName);
          // dispatch({ type: "DUMMY_USER_LIST", value: user });
          //   localStorage.setItem("isuserLoggedIn", "USER_LOGGED_IN");
          //   <Mainuserpg />;
          props.setshowmainuserpage(true);
          setValidater(false);
          return;
        }
      }
    }
    setValidater(true);
  };
  return (
    <div>
      <Userlog
        emailData={emailPassData}
        validater={validater}
        setValidater={setValidater}
      />
    </div>
  );
};

export default Logverify;
