import React from 'react';
import "./Checkout.css";
import Header from "./Header"
import CheckoutProduct from './CheckoutProduct'; 
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div>
    <Header />
    <div className='Checkout'>
        <div className="checkout_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaglOY536d09N07LCAVdbRe7Mlzi42PYSeydg_tV-d9vQ6PKk65TaAy3B1l39BJePDjyU&usqp=CAU" alt=""
           className="checkout_ad" />
          <h2 className="checkout_title">
            Your Shopping Bascut
          </h2>
            {basket.map(item => (
              < CheckoutProduct
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
              />
            ))

            }
        </div>
        <div className="checkout_right">
            < Subtotal/>
        </div>
    </div>
    </div>
  )
}

export default Checkout