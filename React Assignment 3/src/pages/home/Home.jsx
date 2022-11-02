import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Featured from "../../components/Featured";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  );
};
export default Home;
