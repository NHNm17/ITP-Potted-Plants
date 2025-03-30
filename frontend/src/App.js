import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductDetail from "./Components/ProductDetails/ProductDetail";


function App() {

  return(
    <div>
      <React.Fragment>
        <Routes>
        <Route path="/" element ={<Home/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/signUp" element ={<SignUp/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/productdetail" element={<ProductDetail/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;