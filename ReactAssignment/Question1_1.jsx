import React from "react"

const Printcars=()=>{
const car = {
    model: 'i20',
    company: 'Hyundai',
    price: 20,
    configuration: {
     color: 'gray',
     fuel: 'petrol',
     cylinder: 4,
     fuelTankCapacity: 37,
     mileage: {
     city: 14,
     highway: 20,
     },
     },
    features: ['touch screen', 'bluetooth', 'alloy wheels', 'powersteering'],
    }

    return(
        <div>
            <ol>
            <li>Model: {car.model}</li>
            <li>Company: {car.company}</li>
            <li>Price: {car.price}</li>
            <li>Configuration: </li>
            <ul>
                <li>Color: {car.configuration.color}</li>
                <li>Fuel: {car.configuration.fuel}</li>
                <li>Cylinder: {car.configuration.cylinder}</li>
                <li>Fuel Tank Capacity: {car.configuration.fuelTankCapacity}</li>
                <li>Mileage</li>
                <ul>
                    <li>City: {car.configuration.mileage.city} </li>
                    <li>Highway: {car.configuration.mileage.highway} </li>
                </ul>
            </ul>
            <li>Features: {car.features.map((value)=>{
                return(<ul><li>{value}</li> </ul>)
            })}</li>
        </ol>
        </div>
    )
}
export default Printcars;