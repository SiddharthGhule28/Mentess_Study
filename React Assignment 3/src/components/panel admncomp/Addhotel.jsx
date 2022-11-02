// import React from 'react';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// import "./addhotel.css"
// const Addhotel=(props)=>{

//     const [hotelId, setHotelId] = useState("");
//     const [hotelName, setHotelName] = useState("");
//     const [hotelLocation, setHotelLocation] = useState("");
//     const [hotelPrice, setHotelPrice] = useState("");
//     // const [successmsg, setSuccessMsg] = useState(false);

//     const Id = (event) => {
//       setHotelId(event.target.value);
//     };
//     const Name = (event) => {
//       setHotelName(event.target.value);
//     };
//     const Location = (event) => {
//       setHotelLocation(event.target.value);
//     };
//     const Price = (event) => {
//       setHotelPrice(event.target.value);
//     };
//     const saveData = (event) => {
//         event.preventDefault();
//         const addData = {
//           Id: hotelId,
//           Name: hotelName,
//           Place: hotelLocation,
//           Price: hotelPrice,
//         };
//         props.saveDataHandler(addData)
//         setHotelId("");
//         setHotelName("");
//         setHotelLocation("");
//         setHotelPrice("");
//     }
//     return (
//         <div>
//               <form onSubmit={addData}>

//                <div className="admin">Add Hotel</div>
//         <div className="main">

//         <div className="container">

//             <div><input  className="fn" type="text" placeholder="Hotel Id" value={hotelId} onChange={Id} /></div>
//             <div><input className="fn" type="text" placeholder="Hotel name" value={hotelName} onChange={Name}/></div>
//             <div><input className="fn" type="text" placeholder="Hotel Location" value={hotelLocation} onChange={Location}/></div>
//             <div><input className="fn" type="text" placeholder="Price per table (4/table)" value={hotelPrice} onChange={Price}/></div>
//             <NavLink to="/Existinghotel.jsx"><button type="submit" className="button">Submit</button></NavLink>

//         </div>
//         </div>
//         </form>
//         </div>
//     );
// }

// export default Addhotel;
