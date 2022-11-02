import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Mainadpg from "./Mainadpg";
const Viewbookingadmn = () => {
  const allbookings = useSelector((state) => state.allbookings);
  return (
    <div>
      <Navbar />
      <Mainadpg />
      <div className="admin">View Bookings</div>
      <table border="1px">
        <th>Customer name</th>
        <th>Age</th>
        <th>Hotel</th>
        <th>No. of Tables (4/table)</th>
        {allbookings.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.custname}</td>
              <td>{value.custage}</td>
              <td>{value.hotel}</td>
              <td>{value.tableno}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Viewbookingadmn;
