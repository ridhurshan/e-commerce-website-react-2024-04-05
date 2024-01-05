import './App.css';
import { AiFillApple } from "react-icons/ai";

function App() {
  return (
 <div className="App">
   <div className="App">
      <div className="header_logo">
        <h1 className ="header_logoTitle" >M.R T-Shirt Online Shop</h1>
        <svg className='roja' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="10px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z"></path></svg>
      </div>

      <div className="header_search">
       <input type="text" className="header_searchInput " />
       <AiFillApple />
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <spam className="itemLineOne">Please</spam>
          <spam className="itemLineOne">Sign in</spam>
        </div>
        <div className="nav_item">
          <spam className="itemLineTwo">Your</spam>
          <spam className="itemLineTwo">Shop</spam>
        </div>
        <div className="nav_item">
          <spam className="itemLineThree">Bucket</spam> 
          <spam className="itemLineThree">0</spam>
        </div>
    </div>
  </div>
 </div>
  );
}

export default App;
