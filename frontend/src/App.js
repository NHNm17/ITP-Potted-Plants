import React from "react";
import "./App.css";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import {Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductDetail from "./Components/ProductDetails/ProductDetail";
import Feedback from "./Components/Feedback/Feedback";
import Cart from './Components/Cart/Cart';
import useCart from './Components/Cart/useCart';
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import AIChatbot from "./Components/AIchatbot/AIchatbot";
import Checkout from "./Components/Checkout/Checkout";
import PayHereGateway from "./Components/PayHereGateway/PayHereGateway";
import Home from "./Components/Home/Home";


function App() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return(
    <div>
      <Nav cartCount={cartItems.length}/>
      <React.Fragment>
        <Routes>
        <Route path="/" element ={<AdminDashboard/>}/>
        <Route path="/home" element ={<Home/>}/>
          <Route path="/products" element={<ProductPage addToCart={addToCart}/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/productdetail" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/AIchatbot" element={<AIChatbot/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/payhere-gateway" element={<PayHereGateway/>}/>

        </Routes>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;