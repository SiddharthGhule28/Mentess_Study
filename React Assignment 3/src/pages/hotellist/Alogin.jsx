import React from "react";
import { isElementOfType } from "react-dom/test-utils";
import Admnlog from "../../components/Admnlog";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Mainadpg from "../../components/panel admncomp/Mainadpg";
const Alogin = () => {
  const [showadminDashboard, setShowadminDashboard] = useState(true);

  return (
    <div>
      <Navbar />
      {showadminDashboard && (
        <Admnlog setShowadminDashboard={setShowadminDashboard} />
      )}
      {!showadminDashboard && (
        <Mainadpg setShowadminDashboard={setShowadminDashboard} />
      )}{" "}
    </div>
  );
};

export default Alogin;
