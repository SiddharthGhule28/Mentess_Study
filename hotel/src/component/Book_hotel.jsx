import React from 'react'
import { useState } from 'react'
import '../css/book.css'
let title=''
function book_table(event,param)
{
 title=param
}
const Book_hotel = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guest, setGuest] = useState('')
  const[array,setArray]=useState([]);
  const[bookingId,setBookingId]=useState(1)
  const CancelBooking=()=>{
    const getId=prompt('Enter Id of Booking For Cancel.')
    array[getId-1].bookingId=bookingId-1;
    }
  const readName = (e) =>{
    setName(e.target.value)
} 
  const readEmail = (e) =>{
    setEmail(e.target.value)
} 
const readPhone = (e) =>{
    setPhone(e.target.value)
} 
const readDate = (e) =>{
  setDate(e.target.value)
} 
const readTime = (e) =>{
  setTime(e.target.value)
} 
const readGuest = (e) =>{
  setGuest(e.target.value)
} 
const Confirm_Booking = ()=>{
  alert('Congratulation Your Booking Is Confirmed')
  console.log(`hotel name = ${title}`)
  console.log(`name = ${ name}`)
  console.log(`email = ${email}`)
  console.log(`phone = ${phone}`)
  console.log(`date = ${date}`)
  console.log(`time = ${time}`)
  console.log(`No of guest = ${guest}`)
  const obj = { Id:bookingId,hotel_name:title,Full_name:name,Email:email,Phone:phone,Date:date,Time:time,No_guest:guest}
  setArray([...array,obj])
  setBookingId(bookingId+1)
}
  return (
    <div>
     <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                        <h1>Welcome {title}</h1>
                    </div>
                    <form>
                                <div class="form-group">

                                    <span class="select-arrow"></span>
                                    <span class="form-label">Rooms</span>
                                </div>
                        <div class="form-group">
                            <input onChange={readName} class="form-control" type="text" placeholder=" Full Name"/>
                            <span class="form-label">Name</span>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input onChange={readEmail} class="form-control" type="email" placeholder="Enter your Email"/>
                                    <span class="form-label">Email</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input onChange={readPhone} class="form-control" type="tel" placeholder="Enter you Phone"/>
                                    <span class="form-label">Phone</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input onChange={readDate} class="form-control" type="date" required/>
                                    <span class="form-label">Date</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input onChange={readTime} class="form-control" type="time" required/>
                                    <span class="form-label">Time</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                   <input onChange={readGuest} type="number" className="form-control"placeholder="Enter no of Guest" />
                                    <span   class="form-label">Guests</span>
                                </div>
                            </div>
                            
                           
                        </div>
                        
                        <div class="form-btn">
                            <button class="submit-btn" onClick={Confirm_Booking}>Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> 
<div>
  <h2>Booking History:</h2>
  <div class="wrappeer">
  <div class="cards">
  {array.map(()=>{
  return(
    <div>
 <div>
         <div className='container'>
             <div>
                 <div className='hotel'>
         <div className="card" style={{width:' 18rem'}}>
         {/* <img src={} className="card-img-top" alt="h1"/> */}
   <div class="card-body">
     <h5 class="card-title">{title}</h5>
     <p className='card-title'>{bookingId}</p>
     <p class="card-text">{name}</p>
      <p class="card-text">{date}</p>     
      <p class="card-text">{time}</p>
      <p class="card-text">{guest}</p>     
      <button onClick={CancelBooking} className='btn btn-danger' type="">Cancel booking</button>

   </div>
 </div>
     </div>
     </div>
   </div>
     </div>
    </div>           
       )
      })}
    

  </div>
    </div>
    </div>
    
  </div>
  )


}
export {book_table}
export default Book_hotel