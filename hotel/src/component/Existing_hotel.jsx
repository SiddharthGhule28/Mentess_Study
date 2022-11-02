import React from 'react'
import { Link } from 'react-router-dom'
import h1 from '../images/h1.webp'
import h2 from '../images/h2.webp'
import h3 from '../images/h3.webp'
import h4 from '../images/h4.webp'
import h5 from '../images/h5.webp'
import h6 from '../images/h6.webp'
import h7 from '../images/h7.webp'
import h8 from '../images/h8.webp'
import h9 from '../images/h9.webp'

const hotel=
[
  {id : 'h1', image:h1,title:'Sheraton Grand,Pune',address:'Raja Bahadur Mill Road Pune, India 411001', price : 'From 8,819 INR/Night'},
  {id : 'h2',image:h2,title:'JW Marriott Hotel Pune',address:'Senapati Bapat Road Pune, India 411053', price : 'From 13,819 INR/Night'},
  {id : 'h3',image:h3,title:'The Ritz-Carlton, Pune ',address:'Golf Course Square,Yerwada Pune, India 411006', price : 'From 10,819 INR/Night'},
  {id : 'h4',image:h4, title:'The Westin Koregaon Park',address:'36/3-B Koregaon Park Annexe, Ghorpadi Pune, India 411001', price : 'From 8,550 INR/Night'},
  {id : 'h5',image:h5,title:'Marriot Suites Pune',address:'81 Mundhwa, Koregaon Park Annex Pune, India 411036', price : 'From 8850 INR/Night'},
  {id : 'h6',image:h6,title:'Four point by Sheraton,Pune ',address:'5th Mile Stone, Viman Nagar , Maharastra Pune, India 411014', price : 'From 4,972 INR/Night'},
  {id : 'h7',image:h7, title:'Fairfield by Marriott,Pune',address:'Kharadi Mundhwa Bypass Road, Thite Nagar, Kharadi Pune, India 411014', price : 'From 4,179 INR/Night'},
  {id : 'h8',image:h8,title:'Coutryard Chakan Pune',address:'Plot P-7, MIDC, Chakan Industrial Area Phase-1, Talegaon Chakan road, Khalumbre Pune, India 410501', price : 'From 4,940 INR/Night'},
  {id : 'h9',image:h9,title:'Courtyard Hinjewadi, Pune ',address:'S. No 19 & 20, P4 Rajiv Gandhi Infotech Park Phase 1, Hinjewadi Pune, India 41105', price : 'From 6,128 INR/Night'},

]

const Existing_hotel = () => {
  return (
  <div>
     <div class="wrappeer">
  <div class="cards"></div>
    {hotel.map((display)=>
    {
      return(
        <div>
             <div className='container'>
                     <div>
                         <div className='hotel'>
                 <div className="card" style={{width:' 18rem'}}>
                 <img src={display.image} className="card-img-top" alt="h1"/>
           <div class="card-body">
             <h5 class="card-title">{display.title}</h5>
             <p class="card-text">{display.address}</p>
            <p class="card-text">{display.price}</p>
     
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

    
    
  )
}

export default Existing_hotel