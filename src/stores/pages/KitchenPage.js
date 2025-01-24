import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const KitchenPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {
           kitchenData.map((item)=> {
            return(
               <div>
               <Link to={`/kitchen/${item.id}`}>
               <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
               </Link>

                <div className="proModel">
                     {item.brand},
                     {item.price}
                </div>
               </div>
            )
           })
        }
    </div>
    
    </>
  )
}

export default KitchenPage
