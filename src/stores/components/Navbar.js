import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
      <div className="navSection">
        <div className="title">
            <h2>SmYraStores</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='search..' />
        </div>
        <div className="user">
            <div className="user-detail">
                SignIN/SignUp
            </div>
            <Link to='/cart'>
            <div className="cart">
                MyCart
            </div>
            </Link>
        </div>
      </div>
    </div>
    <div className="subMenu">
      <ul>
        <Link to='/kitchen'>
        <li>KitchenWare</li>
        </Link>

        <Link to='/woman'>
        <li>Women </li>
        </Link>
       
       <Link to='/computer'>
       <li>Computers</li>
       </Link>
       
       <Link to='/mobile'> 
       <li>Mobiles</li>
       </Link>

       <Link to='/men'>
       <li>MenFashion</li>
       </Link>
       
       

       
       
        <li>Watches</li>
        <li>TV</li>
        <li>Air Condition</li>
        <li>Refrigerator</li>
        <li>Furniture</li>
        <li>Speakers</li>
        
       
       
      </ul>
    </div>
    </>
  )
}

export default Navbar
