import React from 'react'

import { menData } from './../data/men';

const Men = () => {
    const firstFiveImages = menData.slice(0,5);
    return (
     <>
     <h2>Men-Zone</h2>
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
  

export default Men
