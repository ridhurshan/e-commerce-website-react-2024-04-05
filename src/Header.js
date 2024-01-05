import React from 'react';
import "./Header.css";
import { MdShoppingBasket } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className='header'>
        <div className="header_logo">
       <h2><FaStoreAlt className='headeer_logoImage'  /> </h2> 
        <h2 className='header_logoTitle'> M.R T-Shirt shop </h2>
      </div>

      <div className="header_search">
       <input type="text" className="header_searchInput " />
       <FaSearch className='header_searchIcon' />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <spam className="itemLineOne">Please</spam>
          <spam className="itemLineTwo">Sign in</spam>
        </div>
        <div className="nav_item">
          <spam className="itemLineOne">Your</spam>
          <spam className="itemLineTwo">Shop</spam>
        </div>
        <div className="nav_item">
          <MdShoppingBasket className='itemBasket'/>
          <spam className="nav_basketItem nav_basketCount ">0</spam>
        </div>
    </div>
    </div>
  );
}

export default Header;
