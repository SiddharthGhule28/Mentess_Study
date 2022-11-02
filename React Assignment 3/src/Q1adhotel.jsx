import React from "react";

const Addhotel=()=>{

    const hotel=[{name:'Conrad', address: 'Pune', Phone},{name:'Blue Diamond', address: 'Pimpri Chinchwad'} , 'Le Meridian', 'JW Marriot', 'Medinah']
    return(
        <div>
            <div><label htmlFor="Name of Hotel "></label><input type="text" /></div>
            <div><label htmlFor="Hotel Address "></label><input type="text" /></div>
            <div><label htmlFor="Phone number "></label><input type="text" /></div>
            <div><label htmlFor="Room types "></label><input type="text" /></div>
            <div><button>SUBMIT</button></div>

        </div>
    )
}
export default Addhotel;