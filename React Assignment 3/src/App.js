import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotellist from "./pages/hotellist/Hotellist";
import Alogin from "./pages/hotellist/Alogin";
import Ulogin from "./pages/hotellist/Ulogin";
import Adminpanel from "./pages/Panel/Adminpanel";
import Userpanel from "./pages/Panel/Userpanel";
import Addhote from "./components/panel admncomp/Addhote";
import Existinghotel from "./components/panel admncomp/Existinghotel";
import Ushotel from "./components/panel usercomp/Ushotel";
import { useState } from "react";
import Usbook from "./components/panel usercomp/Usbook";
import Viewbooking from "./components/panel usercomp/Viewbooking";
import Viewbookingadmn from "./components/panel admncomp/Viewbookingadmn";
import Viewusers from "./components/panel admncomp/Viewusers";
function App() {
  const [usrData, setUsrData] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotellist />} />
        <Route path="/alogin" element={<Alogin />} />
        <Route path="/ulogin" element={<Ulogin />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/userpanel" element={<Userpanel />} />
        <Route path="/addhotel" element={<Addhote />} />
        <Route
          path="/existinghotel"
          element={<Existinghotel setUsrData={setUsrData} />}
        />
        <Route path="/ushotel" element={<Ushotel usrData={usrData} />} />
        <Route path="/usbook" element={<Usbook />} />
        <Route path="/viewbooking" element={<Viewbooking />} />
        <Route path="/viewbookingadmn" element={<Viewbookingadmn />} />
        <Route path="/loginusers" element={<Viewusers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
