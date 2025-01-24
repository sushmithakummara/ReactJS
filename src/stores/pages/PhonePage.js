import React,{useState} from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const PhonePage = () => {

const [selectedProduct,setSelectedProduct]=useState([]);

const companyHandler = (data) =>{
   if(selectedProduct.includes(data)){
    setSelectedProduct(selectedProduct.filter(item => item!== data))
   }
   else{
    setSelectedProduct([data])
   }
}
  return (
    <>
    <Navbar/>
     <div className="fullpage">
     <div className="pro-selected">
        {
            mobileData.map((phone) => {
                 return(
                    <div>
                        <label >
                           <input type="checkbox" 
                           checked = {selectedProduct.includes(phone.company)}
                           onChange={() => companyHandler(phone.company)}
                           />
                           {phone.company}
                        </label>
                    </div>
                 )
            })
        }
    </div>



    <div className="pageSection">
        {
            mobileData.map((item) => {
                return(
                    <div>
                        <Link to={`/mobile/${item.id}`}>
                        <div className="pageImg">
                            <img src={item.image} alt="" />
                        </div>
                        </Link>
                       
                        <div className="proModel">
                            {item.company},
                            {item.model}
                        </div>
                    </div>
                )
            })
        }
    </div>
     </div>
    </>
  )
}

export default PhonePage
