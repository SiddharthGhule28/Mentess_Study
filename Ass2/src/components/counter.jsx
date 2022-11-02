import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    console.log('incrementing... ')
    setCounter(counter + 1)
    console.log(`counter = ${counter}`)
  }

  const decrement = () => {
    console.log('decrementing... ')
    setCounter(counter - 1)
    console.log(`counter = ${counter}`)
  }

  return (

    <div>
        <h3>Counter Assignment</h3>
      <div style={{padding:"20px"}}>
        <button onClick={increment} style={{borderRadius:"20px"}} > + </button>
            <span> {counter} </span>
        <button onClick={decrement} style={{borderRadius:"20px"}} > - </button>
      </div>
    </div>
  )
}

export default Counter