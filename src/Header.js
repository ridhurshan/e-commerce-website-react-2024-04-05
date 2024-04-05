import React, { useState } from 'react';
import "./Header.css";
import { MdShoppingBasket } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket},dispatch] = useStateValue();
  
  return (
    <div className='header'>
       < Link to="/" style={{textDecoration:"none"}}>
        <div className="header_logo">
          <h2><FaStoreAlt className='headeer_logoImage'  /> </h2> 
          <h2 className='header_logoTitle'> M.R T-Shirt shop </h2>
        </div>
      </Link>
      <div className="header_search">
       <input type="text" className="header_searchInput " />
       <FaSearch className='header_searchIcon' />
      </div>
      <div className="header_nav">
      < Link to="/Login" style={{textDecoration:"none"}}>
        <div className="nav_item">
          <spam className="itemLineOne">Please</spam>
          <spam className="itemLineTwo">Sign in</spam>
        </div>
      </Link>
        <div className="nav_item">
          <spam className="itemLineOne">Your</spam>
          <spam className="itemLineTwo">Shop</spam>
        </div>
        < Link to="/checkout" style={{textDecoration:"none"}}>
          <div className="nav_itemBasket">
          <MdShoppingBasket />
          <spam className="itemLineTwo nav_basketCount ">{basket.length}</spam>
          </div>
        </Link>
      
    </div>
    </div>
  );
}

export default Header;
