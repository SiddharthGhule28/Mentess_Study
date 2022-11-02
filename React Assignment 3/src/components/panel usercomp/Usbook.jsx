import React from "react";
import Navbar from "../Navbar";
import Mainuserpg from "./Mainuserpg";
import { useState } from "react";
import "./usbook.css";
import { useDispatch } from "react-redux";

const Usbook = (props) => {
  const [uname, setuname] = useState("");
  const [age, setage] = useState("");
  const [hotelname, sethotelname] = useState("");
  const [tableno, settableno] = useState("");
  const [msg, setmsg] = useState(false);
  const dispatch = useDispatch();
  const savename = (event) => {
    setuname(event.target.value);
  };
  const saveage = (event) => {
    setage(event.target.value);
  };
  const savehotelname = (event) => {
    sethotelname(event.target.value);
  };
  const savetableno = (event) => {
    settableno(event.target.value);
  };
  const savebookdata = (event) => {
    event.preventDefault();
    const addbookdata = {
      custname: uname,
      custage: age,
      hotel: hotelname,
      tableno: tableno,
    };
    dispatch({ type: "update", value: addbookdata });
    setmsg(true);
  };
  return (
    <div>
      <Navbar />
      <Mainuserpg />
      <form onSubmit={savebookdata}>
        <div className="admin">Book Hotel</div>
        <div className="main">
          <div className="container">
            <div>
              <input
                type="text"
                className="bookin"
                placeholder="Name"
                onChange={savename}
                value={uname}
              />
            </div>
            <div>
              <input
                type="text"
                className="bookin"
                placeholder="Age"
                onChange={saveage}
                value={age}
              />
            </div>
            <div>
              <input
                type="text"
                className="bookin"
                placeholder="Hotel name"
                onChange={savehotelname}
                value={hotelname}
              />
            </div>
            <div>
              <input
                type="text"
                className="bookin"
                placeholder="No. of Tables"
                onChange={savetableno}
                value={tableno}
              />
            </div>
            <div>
              <input type="submit" />
            </div>
            {msg && <div>Table Booked Successfully</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Usbook;
