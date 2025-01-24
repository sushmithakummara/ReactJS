import React from 'react'

import { acData } from './../data/ac';

const Ac = () => {
 
    const firstFiveImages = acData.slice(0,5);
    return (
     <>
  
     <h2>AC</h2>
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
  

export default Ac
