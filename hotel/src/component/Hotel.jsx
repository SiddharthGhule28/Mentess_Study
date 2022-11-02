// import useCollapse from 'react-collapsed'
import React from 'react'
import { book_table } from './Book_hotel'
import Main from './Main'
// import { hotel } from './Viewdetail'
// import {Link} from 'react-router-dom'
import "../css/test.css"
import h1 from '../images/h1.webp'
import { Link } from 'react-router-dom'
import h2 from '../images/h2.webp'
import h3 from '../images/h3.webp'
import h4 from '../images/h4.webp'
import h5 from '../images/h5.webp'
import h6 from '../images/h6.webp'
import h7 from '../images/h7.webp'
import h8 from '../images/h8.webp'
import h9 from '../images/h9.webp'

const hotel=
{
  h1:{id : 'h1', image:h1,title:'Sheraton Grand,Pune',address:'Raja Bahadur Mill Road Pune, India 411001', price : 'From 8,819 INR/Night'},
  h2:{id : 'h2',image:h2,title:'JW Marriott Hotel Pune',address:'Senapati Bapat Road Pune, India 411053', price : 'From 13,819 INR/Night'},
  h3:{id : 'h3',image:h3,title:'The Ritz-Carlton, Pune ',address:'Golf Course Square,Yerwada Pune, India 411006', price : 'From 10,819 INR/Night'},
  h4:{id : 'h4',image:h4, title:'The Westin Koregaon Park',address:'36/3-B Koregaon Park Annexe, Ghorpadi Pune, India 411001', price : 'From 8,550 INR/Night'},
  h5:{id : 'h5',image:h5,title:'Marriot Suites Pune',address:'81 Mundhwa, Koregaon Park Annex Pune, India 411036', price : 'From 8850 INR/Night'},
  h6:{id : 'h6',image:h6,title:'Four point by Sheraton,Pune ',address:'5th Mile Stone, Viman Nagar , Maharastra Pune, India 411014', price : 'From 4,972 INR/Night'},
  h7:{id : 'h7',image:h7, title:'Fairfield by Marriott,Pune',address:'Kharadi Mundhwa Bypass Road, Thite Nagar, Kharadi Pune, India 411014', price : 'From 4,179 INR/Night'},
  h8:{id : 'h8',image:h8,title:'Coutryard Chakan Pune',address:'Plot P-7, MIDC, Chakan Industrial Area Phase-1, Talegaon Chakan road, Khalumbre Pune, India 410501', price : 'From 4,940 INR/Night'},
  h9:{id : 'h9',image:h9,title:'Courtyard Hinjewadi, Pune ',address:'S. No 19 & 20, P4 Rajiv Gandhi Infotech Park Phase 1, Hinjewadi Pune, India 41105', price : 'From 6,128 INR/Night'},

}




const Hotel = () => {
function togglePopup1()
{
  document.getElementById('popup-1').classList.toggle('active')
 
}
function togglePopup2()
{
  document.getElementById('popup-2').classList.toggle('active')
 
}
function togglePopup3()
{
  document.getElementById('popup-3').classList.toggle('active')
 
}
function togglePopup4()
{
  document.getElementById('popup-4').classList.toggle('active')
 
}
function togglePopup5()
{
  document.getElementById('popup-5').classList.toggle('active')
 
}
function togglePopup6()
{
  document.getElementById('popup-6').classList.toggle('active')
 
}

  return (
<div>

<div class="wrappeer">
  <div class="cards">
    <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">
        
        <div id='popup-1' className='popup'>
          <div className='content'>
          <div class="close-btn" onClick={togglePopup1}>
     ×</div>
        <img src={hotel.h1.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h1.title}</h5>
        <p class="card-text">{hotel.h1.address}</p>
            <p class="card-text">{hotel.h1.price}</p>
            <Link to='/Book_hotel' ><button className='btn btn-primary' >Book Room</button> </Link>
           <Link to='/Book_hotel' ><button className='btn btn-primary' onClick={event=>book_table(event,hotel.h1.title)} >Book Table</button> </Link>
            </div>
            </div>
            <span>
        <img src={hotel.h1.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h1.title}</h5>
        </span>
            <button   class="btn btn-primary" onClick={togglePopup1}>View Detail</button>
      </div>
      </div>
      <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">
        
        <div id='popup-2' className='popup'>
          <div className='content'>
          <div class="close-btn" onClick={togglePopup2}>
     ×</div>
        <img src={hotel.h2.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h2.title}</h5>
        <p class="card-text">{hotel.h2.address}</p>
            <p class="card-text">{hotel.h2.price}</p>
            <Link to='/Book_hotel' ><button className='btn btn-primary' >Book Room</button> </Link>
           <Link to='/Book_hotel' ><button className='btn btn-primary' onClick={event=>book_table(event,hotel.h2.title)} >Book Table</button> </Link>
            </div>
            </div>
            <span>
        <img src={hotel.h2.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h2.title}</h5>
        </span>
            <button   class="btn btn-primary" onClick={togglePopup2}>View Detail</button>
      </div>
      </div>
    
      <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">
        
        <div id='popup-3' className='popup'>
          <div className='content'>
          <div class="close-btn" onClick={togglePopup3}>
     ×</div>
        <img src={hotel.h3.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h3.title}</h5>
        <p class="card-text">{hotel.h3.address}</p>
            <p class="card-text">{hotel.h3.price}</p>
            <Link to='/Book_hotel' ><button className='btn btn-primary' >Book Room</button> </Link>
           <Link to='/Book_hotel' ><button className='btn btn-primary' onClick={event=>book_table(event, hotel.h3.title)}>Book Table</button> </Link>
            </div>
            </div>
            <span>
        <img src={hotel.h3.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h3.title}</h5>
        </span>
            <button   class="btn btn-primary" onClick={togglePopup3}>View Detail</button>
      </div>
      </div>
     
    
     
    
    </div>
    </div>
    
<div class="wrappeer">
  <div class="cards">
    <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">
        
        <div id='popup-4' className='popup'>
          <div className='content'>
          <div class="close-btn" onClick={togglePopup4}>
     ×</div>
        <img src={hotel.h4.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h4.title}</h5>
        <p class="card-text">{hotel.h4.address}</p>
            <p class="card-text">{hotel.h4.price}</p>
            <Link to='/Book_hotel' ><button className='btn btn-primary' >Book Room</button> </Link>
           <Link to='/Book_hotel' ><button className='btn btn-primary'  onClick={event=>book_table(event,hotel.h4.title)}>Book Table</button> </Link>
            </div>
            </div>
            <span>
        <img src={hotel.h4.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h4.title}</h5>
        </span>
            <button   class="btn btn-primary" onClick={togglePopup4}>View Detail</button>
      </div>
      </div>
      <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">
        
        <div id='popup-5' className='popup'>
          <div className='content'>
          <div class="close-btn" onClick={togglePopup5}>
     ×</div>
        <img src={hotel.h5.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h5.title}</h5>
        <p class="card-text">{hotel.h5.address}</p>
            <p class="card-text">{hotel.h5.price}</p>
            <Link to='/Book_hotel' ><button className='btn btn-primary' >Book Room</button> </Link>
           <Link to='/Book_hotel' ><button className='btn btn-primary'  onClick={event=>book_table(event,hotel.h5.title)}>Book Table</button> </Link>
            </div>
            </div>
            <span>
        <img src={hotel.h5.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h5.title}</h5>
        </span>
            <button   class="btn btn-primary" onClick={togglePopup5}>View Detail</button>
      </div>
      </div>
    
      <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">
        
        <div id='popup-6' className='popup'>
          <div className='content'>
          <div class="close-btn" onClick={togglePopup6}>
     ×</div>
        <img src={hotel.h6.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h6.title}</h5>
        <p class="card-text">{hotel.h6.address}</p>
            <p class="card-text">{hotel.h6.price}</p>
            <Link to='/Book_hotel' ><button className='btn btn-primary' >Book Room</button> </Link>
           <Link to='/Book_hotel' ><button className='btn btn-primary'  onClick={event=>book_table(event,hotel.h6.title)}>Book Table</button> </Link>
            </div>
            </div>
            <span>
        <img src={hotel.h6.image} className="card-img-top" alt="h1"/><br/><br/>
        <h5 class="card-title" id ='hotel-id'>{hotel.h6.title}</h5>
        </span>
            <button   class="btn btn-primary" onClick={togglePopup6}>View Detail</button>
      </div>
      </div>
     
    
     
    
    </div>
    </div>
    </div>   
  )
}
export {hotel}
export default Hotel