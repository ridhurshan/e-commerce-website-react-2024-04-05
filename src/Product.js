import React from 'react'
import "./Product.css"

const Product = ({id,title,price,rating,image }) => {
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
             <button className='addToCart'> Add to Cart</button>    
            </div>
        </div>
    </div>
  )
}

export default Product