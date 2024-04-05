import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating }) {
  const [{basket},dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id:id,
    })
  }
  return (
   <div className="checkoutProduct">
        <img src={image} alt="" className="checkout_image" />
        <div className="checkoutProduct_info">
            <p className="checkuotProduct_title"> {title} </p>
            <p className="checkoutProduct_price"> {price}</p>
        </div>
        <div className="checkoutProduct_rating"> {Array(rating).fill().map((_,i) => (<p>⭐</p>))} </div>
        <button onClick={removeFromBasket}> Remove from basket </button>
   </div>
  )
}

export default CheckoutProduct