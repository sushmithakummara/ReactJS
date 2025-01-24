import React from 'react'

import { womanData } from './../data/woman';

const Women = () => {
    const firstFiveImages = womanData.slice(0,5);
    return (
     <>
  
     <h2>Women-Zone</h2>
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
  

export default Women
