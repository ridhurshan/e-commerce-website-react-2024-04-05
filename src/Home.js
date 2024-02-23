import React from 'react';
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

function Home() {
  return (
    <div>
      < Header />
        <div className="home">
        <img src="https://behiragarments.co.ke/wp-content/uploads/2021/04/1-24.jpg" 
                 alt="home_image" className='home_image' />
            <div className="home_container">
               
                 <div className="home_row1">
                  <Product 
                     id="1"
                     title="fgdzsxgb vdsfg"
                     price={45}
                     rating={3}
                     image="https://behiragarments.co.ke/wp-content/uploads/2021/04/1-24.jpg" 
                  />
                  <Product 
                      id="1"
                     title="fgdzsxgb vdsfg"
                     price={45}
                     rating={5}
                     image="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  />
                 </div>
                 <div className="home_row2">
                  <Product  
                     id="1"
                     title="fgdzsxgb vdsfg"
                     price={45}
                     rating={7}
                     image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" 
                  />
                  <Product                
                      id="1"
                     title="fgdzsxgb vdsfg"
                     price={45}
                     rating={6}
                     image="https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  />
                  <Product
                     id="1"
                     title="fgdzsxgb vdsfg"
                     price={45}
                     rating={1}
                     image="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" 
                  />
                 </div>
                 <div className="home_row3">
                  <Product 
                     id="1"
                     title="fgdzsxgb vdsfg"
                     price={45}
                     rating={3}
                     image="https://behiragarments.co.ke/wp-content/uploads/2021/04/1-24.jpg" 
                  /> 
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Home