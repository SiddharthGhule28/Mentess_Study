import React from "react";
import "./addhotel.css";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Mainadpg from "./Mainadpg";

const Existinghotel = () => {
  const hotels = useSelector((state) => state.hotels);

  // const hotels = [
  //   {
  //     Id: 1,
  //     Name: "Conrad",
  //     Location: "Pune",
  //     Price: 500,
  //   },
  //   {
  //     Id: 2,
  //     Name: "Blue Diamond",
  //     Location: "Pimpri",
  //     Price: 800,
  //   },
  //   {
  //     Id: 3,
  //     Name: "JW Marriot",
  //     Location: "Chinchwad",
  //     Price: 1000,
  //   },
  //   {
  //     Id: 4,
  //     Name: "Raddison Blu",
  //     Location: "Mumbai",
  //     Price: 400,
  //   },
  // ];

  return (
    <div>
      <Navbar />
      <Mainadpg />
      <div className="admin">Available Hotels</div>
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
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Existinghotel;
