import Login from "./component/Login";
import Register from "./component/Register";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from "./component/Main";
import Hotel from "./component/Hotel";
import Viewdetail from "./component/Book_hotel";
import Admin from "./component/Admin";
import Home from "./component/Home";
import Book_hotel from "./component/Book_hotel";
import Admin_login from "./component/Admin_login";
import Admin_main from "./component/Admin_main";
import Add_hotel from "./component/Add_hotel";
import Existing_hotel from "./component/Existing_hotel";


function App() {
  const hotelInfo=[{id:1,hotelName:'Hotel Fun',title:'Come and have fun',img:'https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768', rooms:7},
  {id:2,hotelName:'name2',title:'title2',img:'https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391704.jpg?ca=6&ce=1&s=1024x768',rooms:5}]
 
  return (
  <BrowserRouter>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Main" element={<Main/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Hotel" element={<Hotel/>}/>
      <Route path="/Viewdetail" element={<Viewdetail/>}/>
      <Route path="/Book_hotel" element={<Book_hotel/>}/>
      <Route path="/Admin_main" element={<Admin_main/>}/>
      <Route path="/Admin_login" element={<Admin_login/>}/>
      <Route path="/Add_hotel" element={<Add_hotel/>}/>
      <Route path="/Existing_hotel" element={<Existing_hotel/>}/>
      </Routes>
      
  
    
     </BrowserRouter>
  );
}

export default App;
