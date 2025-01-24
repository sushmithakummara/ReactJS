import React from 'react'
import { mobileData } from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'

import { useCart } from '../stores/context/CartContext'

const MobileSingle = () => {
    const {id}=useParams()
    const product=mobileData.find((item) => item.id === id)

    const {addToCart,cartItems} =useCart()
    

  return (
   <>
   
   <Navbar/>
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
        <div className="ind-company space" >
            <h2>{product.company}</h2>
        </div>  
        <div className="ind-model space">
            <h3>{product.model}</h3>
        </div>
        <div className="ind-price space">
            <h3>{product.price}</h3>
        </div>
        <div className="ind-description space">
            <p>
                {product.description}
            </p>
        </div>
        <button onClick={() =>  addToCart(product)}>Add to Cart</button>

        </div>
    </div>
   
   </>
  )
}

export default MobileSingle
