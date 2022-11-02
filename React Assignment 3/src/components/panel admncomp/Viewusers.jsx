import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Mainadpg from "./Mainadpg";
const Viewusers = () => {
  const userloginlst = useSelector((state) => state.userloginlst);
  return (
    <div>
      <Navbar />
      <Mainadpg />
      <div className="admin">Users List</div>
      <table border="1px">
        <tr>
          {" "}
          <th>Full name</th>
          <th>Mobile no</th>
          <th>Email</th>
          <th>Age</th>
          <th>Password</th>
        </tr>
        {userloginlst.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.fullname}</td>
              <td>{value.mobileno}</td>
              <td>{value.email}</td>
              <td>{value.age}</td>
              <td>{value.password}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Viewusers;
