import React from "react";

const Property=(props)=>{
return(
    <ol>
        <li>Model: {props.model}</li>
        <li>Company: {props.company}</li>
            <li>Price: {props.price}</li>
            <li>Configuration: </li>
            <ul>
                <li>Color: {props.configuration.color}</li>
                <li>Fuel: {props.configuration.fuel}</li>
                <li>Cylinder: {props.configuration.cylinder}</li>
                <li>Fuel Tank Capacity: {props.configuration.fuelTankCapacity}</li>
                <li>Mileage</li>
                <ul>
                    <li>City: {props.configuration.mileage.city} </li>
                    <li>Highway: {props.configuration.mileage.highway} </li>
                </ul>
            </ul>
            <li>Features: {props.features.map((value)=>{
                return(<ul><li>{value}</li> </ul>)
            })}</li>
    </ol>
)
}
export default Property;