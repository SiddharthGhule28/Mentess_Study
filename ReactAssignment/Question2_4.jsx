import React, {useState} from "react";

import star from './/images/star.jfif'

const Rating = ()=> {
    const [rating, setRating] = useState(0);
    //const starArray = [...Array(5).keys()].map(i => i + 1);
  const incrementRating = () => {
    if (rating < 5) {
      setRating(rating + 1)
    }
  }
  const decrementRating = () => {
    if (rating > 0) {
      setRating(rating - 1)
    }
  }
  return (
    <div>
      <div><strong>Rating:</strong> {
        [...Array(rating)].map(()=>{
            return (
               <img src = {star} alt = "star" style={{height:"15px"}}/>
            );
        })
        }</div>
      <div>
        <button onClick={incrementRating}>+</button>
        <button onClick={decrementRating}>-</button>
      </div>
    </div>
  )
}

export default Rating;