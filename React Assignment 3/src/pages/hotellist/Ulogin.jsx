import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Mainuserpg from "../../components/panel usercomp/Mainuserpg";
import Userlog from "../../components/Userlog";

const Ulogin = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  return (
    <div>
      <Navbar />
      {showDashboard && <Userlog setShowDashboard={setShowDashboard} />}
      {!showDashboard && <Mainuserpg setShowDashboard={setShowDashboard} />}
    </div>
  );
};

export default Ulogin;
