import React from 'react'
import { womanData } from '../stores/data/woman'
import { useParams } from 'react-router-dom'
import { useCart } from '../stores/context/CartContext'
import Navbar from '../stores/components/Navbar'

const WomenSingle = () => {
  const {id}=useParams();
  const product =womanData.find((item) => item.id === id)

 const {addToCart,cartItems} =useCart()

  return (
    <>
    
    <Navbar/>

    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>

        <div className="ind-details space">
            <div className="ind-company space">
                <h2>{product.company}</h2>
            </div>
            <div className="ind-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="ind-price space">
                <h3>{product.price}</h3>
            </div>
            <div className="ind-desc space">
                <p>{product.description}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
    
    
    </>
  )
}

export default WomenSingle
