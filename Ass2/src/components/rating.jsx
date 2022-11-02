import React from 'react'
import star from './star.png'

function RenderSwitch(Rating){
  
  const RenderStars = (Rating) => {
    const rows = [];
    for (let i = 0; i < Rating ; i++) {
    rows.push(
    // <span class="fa fa-star checked"></span>
    <img src={star} style={{ maxWidth: '10%'}} alt="logo" />
    );
}
return <div>{rows}</div>;
  }
    switch (Rating) {
        case (5):
            return (
              <div>{RenderStars(5)}</div>
            )
        case (4):
            return (
              <div>{RenderStars(4)}</div>
            )
        case (3):
          return (
            <div>{RenderStars(3)}</div>
          )
        case (2):
            return (
              <div>{RenderStars(2)}</div>
            )
        case (1):
              return (
                <div>{RenderStars(1)}</div>
              )  
        default:
            return (
              <div> Wrong Rating </div>
            )
     }
}

const Rating = () => {
  return (
    <div>
        {/* <h1>Hi </h1> */}
        { RenderSwitch(5) }
        { RenderSwitch(4) }
        { RenderSwitch(3) }
        { RenderSwitch(2) }
        { RenderSwitch(1) }
    </div>
  )
}

export default Rating