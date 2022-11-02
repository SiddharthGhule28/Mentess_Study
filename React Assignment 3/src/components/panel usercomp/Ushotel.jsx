import React from "react";
import Navbar from "../Navbar";
import Mainuserpg from "./Mainuserpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Ushotel = () => {
  const hotels = useSelector((state) => state.hotels);

  return (
    <div>
      <Navbar />
      <Mainuserpg />
      <table border="1px">
        <tr>
          <th>Hotel Id</th>
          <th>Name</th>
          <th>Location</th>
          <th>Price (4/table)</th>
        </tr>
        {hotels.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.Id}</td>
              <td>{value.Name}</td>
              <td>{value.Location}</td>
              <td>{value.Price}</td>
              <td>
                <NavLink to="/usbook">
                  <button>BOOK</button>
                </NavLink>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Ushotel;
