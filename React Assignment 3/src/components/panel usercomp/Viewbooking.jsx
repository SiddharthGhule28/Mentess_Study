import React from "react";
import Navbar from "../Navbar";
import Mainuserpg from "./Mainuserpg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
const Viewbooking = () => {
  const allbookings = useSelector((state) => state.allbookings);
  const dispatch = useDispatch();
  const [showHideMsg, setShowHideMsg] = useState(false);
  const [msg, setMsg] = useState();

  return (
    <div>
      <Navbar />
      <Mainuserpg />
      <div className="admin">View Bookings</div>
      <table border="1px">
        <tr>
          {" "}
          <th>Customer name</th>
          <th>Age</th>
          <th>Hotel</th>
          <th>No. of Tables (4/table)</th>
          <th>Cancel Booking</th>
        </tr>
        {allbookings.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.custname}</td>
              <td>{value.custage}</td>
              <td>{value.hotel}</td>
              <td>{value.tableno}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: "userbookinglist",
                      value: index,
                    });
                    setShowHideMsg(true);
                    setMsg(<h2>Booking Cancelled</h2>);
                    return;
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Viewbooking;
