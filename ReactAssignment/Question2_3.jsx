import React from "react";
import { useState } from "react";

const Counter = ()=> {
    const [count, setcount] = useState(0);
    //const starArray = [...Array(5).keys()].map(i => i + 1);
  const incrementRating = () => {
    
      setcount(count + 1)
  }
  const decrementRating = () => {
    
      setcount(count - 1)
    
  }
  return (
    <div>
      <div><strong>Counter:</strong> 
        
        </div>
      <div>
        <button onClick={incrementRating}>+</button>
        {count}
        <button onClick={decrementRating}>-</button>
      </div>
    </div>
  )
}

export default Counter;