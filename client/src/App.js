import React from "react";
import "./App.css";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {

  Routes,
  Route,
} from "react-router-dom";
import Signup from "./screens/signup";
import Login from './screens/login'
import MyOrder from './screens/MyOrder'

import Homescreen from './screens/homescreen'
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <CartProvider>
    <div>
  
      
        <Routes>
          <Route exact path="/" element={<Homescreen />} />
          <Route exact  path="/login" element={<Login />} />
    
          <Route exact path="/creatuser" element={<Signup />} />
          <Route exact path="/myOrder" element={<MyOrder/>} />
        
          
        </Routes>
      
    
      </div>
      </CartProvider>
  
  );
}

export default App;
