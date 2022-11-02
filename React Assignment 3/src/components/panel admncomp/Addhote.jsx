import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import "./addhotel.css";
import Mainadpg from "./Mainadpg";

const Addhote = (props) => {
  const [hotelId, setHotelId] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelPrice, setHotelPrice] = useState("");
  const [msg, setmsg] = useState(false);

  const dispatch = useDispatch();
  const Id = (event) => {
    setHotelId(event.target.value);
  };
  const Name = (event) => {
    setHotelName(event.target.value);
  };
  const Location = (event) => {
    setHotelLocation(event.target.value);
  };
  const Price = (event) => {
    setHotelPrice(event.target.value);
  };
  const saveData = (event) => {
    event.preventDefault();
    const addData = {
      Id: hotelId,
      Name: hotelName,
      Location: hotelLocation,
      Price: hotelPrice,
    };
    dispatch({ type: "hotels", value: addData });
    setmsg(true);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Mainadpg />
      </div>
      <form onSubmit={saveData}>
        <div className="admin">Add Hotel</div>
        <div className="main">
          <div className="container">
            <div>
              <input
                className="fn"
                type="text"
                placeholder="Hotel Id"
                value={hotelId}
                onChange={Id}
              />
            </div>
            <div>
              <input
                className="fn"
                type="text"
                placeholder="Hotel name"
                value={hotelName}
                onChange={Name}
              />
            </div>
            <div>
              <input
                className="fn"
                type="text"
                placeholder="Hotel Location"
                value={hotelLocation}
                onChange={Location}
              />
            </div>
            <div>
              <input
                className="fn"
                type="text"
                placeholder="Price per table (4/table)"
                value={hotelPrice}
                onChange={Price}
              />
            </div>
            <div>
              <input type="submit" />
            </div>
            {msg && <div>Hotel Added Successfully</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addhote;
