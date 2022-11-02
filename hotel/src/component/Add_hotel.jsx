import React, { useState } from 'react'
import '../css/book.css'
const Add_hotel = () => {
    const [name, setHName] = useState('')
    const [image, setImg] = useState('')
    const [address, setAddress] = useState('')
    const [price, setPrice] = useState('')
    const[array,setArray]=useState([]);
    const readHName = (e) =>{
        setHName(e.target.value)
    } 
      const readimg = (e) =>{
        setImg(e.target.value)
    } 
    const readAddress = (e) =>{
        setAddress(e.target.value)
    } 
    const readPrice = (e) =>{
      setPrice(e.target.value)
    } 
    const Add=()=>
    {
        const obj = {name,image,address,price}
        setArray([...array,obj])
    }
  return (
    <div>
          <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                        <h1>Add Hotel</h1>
                    </div>
                    <form>
                         
                        <div class="form-group">
                            <input onChange={readHName} class="form-control" type="text" placeholder=" Hotel Name"/>
                            <span class="form-label">Hotel Name</span>
                        </div>
                        
                                <div class="form-group">
                                    <input onChange={readimg} class="form-control" type="url" placeholder="Image link"/>
                                    <span class="form-label">Image Link</span>
                                </div>
                          
                         
                                <div class="form-group">
                                    <input onChange={readAddress} class="form-control" type="text" placeholder="Address"/>
                                    <span class="form-label">Address</span>
                                </div>
                            
                       
   
                                <div class="form-group">
                                    <input onChange={readPrice} class="form-control" type="text" placeholder='price in Inr' required/>
                                    <span class="form-label">Price</span>
                                </div>
                          
                           
                            
                           
                     
                        
                        <div class="form-btn">
                            <button class="submit-btn" onClick={Add}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> 
     {/* <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                       <h1>Add Hotel</h1>
                    </div>
                    <form>
                        <div class="form-group">
                            <input onChange={readHName} class="form-control" type="text" placeholder=" Full Name"/>
                            <span class="form-label">Hotel Name</span>
                        </div>
                        <div class="form-group">
                            <input onChange={readimg} class="form-control" type="text" placeholder="Image Url"/>
                            <span class="form-label">Image Link</span>
                        </div>
                       
                                <div class="form-group">
                                    <input onChange={readAddress} class="form-control" type="email" placeholder="Address"/>
                                    <span class="form-label">Address</span>
                                </div>
                        
                           
                                <div class="form-group">
                                    <input onChange={readPrice} class="form-control" type="tel" placeholder="Price In INR"/>
                                    <span class="form-label">Price</span>
                                </div>
                          
                       
                        
                       
                        
                        <div class="form-btn">
                            <button class="submit-btn" onClick={Add}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>  */}
{/* <div>
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
     */}
     <div>
        <h2>Hotel Added : </h2>
     <div class="wrappeer">
  <div class="cards">
    <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">     
        <div id='popup-1' className='popup'>
          <div className='content'>
            {array.map(()=>{
                return(
                    <div>
                    <img src={image} className="card-img-top" alt="h1"/><br/><br/>
                    <h5 class="card-title" id ='hotel-id'>{name}</h5>
                    <p class="card-text">{address}</p>
                        <p class="card-text">{price}</p>
                        </div>
                )
               
            })}
     </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Add_hotel