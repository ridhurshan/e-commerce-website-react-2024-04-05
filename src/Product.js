import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

const Product = ({id,title,price,rating,image }) => {
  //here [state, dispatch] ==(state , action)
  const [state, dispatch] = useStateValue();
  //function that addtobasket
  const addToBasket = () => {
      dispatch({
          type:"ADD_TO_BASKET",
          item:{
              id:id,
              image:image,
              price:price,
              rating:rating
          },
      });
  };

  return (
    <div className='first'>
        <div className="product">
            <div className="product_info">
                < p > {title} </p>
                < p className={price} > ₨ 3000  </p>    
              <div className="product_rating">
                {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
            </div>
             <div className='div_product_photo'>
                <img className='product_photo' src={image} />
            </div>
             <button className='button-21' onClick={addToBasket}> Add to Cart</button>  
               
            </div>
        </div>
    </div>
  )
}

export default Product