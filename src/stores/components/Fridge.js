import React from 'react'

import { fridgeData } from './../data/fridge';

const Fridge = () => {

    const firstFiveImages = fridgeData.slice(0,5);
    return (
     <>
  
     <h2>Re-frigerator</h2>
      <div className='proSection'>
           {
              firstFiveImages.map((item) => {
                 return(
                   <div className="imgBox">
                      <img className='proImage' src= {item.image} />
                   </div>
                 )
              })
           }
      </div>
     </>
    )
  }
  
export default Fridge
