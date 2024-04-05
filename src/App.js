import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";


function App() {
  return (
 <div className="App">
    
   
   <Router>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>

    </Routes>
   </Router>
  
 </div>
  );
}

export default App;
