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
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndCondition/TermsAndCondition";
import Success from "./Components/Checkout/Success/Success";
import AddDelivery from "./Components/DeliveryScheduling/AddDelivery";
import ShowDelivery from "./Components/DeliveryScheduling/ShowDelivery";
import UpdateDelivery from "./Components/DeliveryScheduling/UpdateDelivery";
import DeliveryTracking from "./Components/DeliveryTracking/DeliveryTracking";
import OrderSucess from "./Components/DeliveryScheduling/OrderSucess";


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
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/termsandcondition" element={<TermsAndConditions/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/adddelivery" element={<AddDelivery/>}/>
          <Route path="/DeliveryInfo" element={<ShowDelivery/>}/>
          <Route path="/UpdateDelivery/:id" element={<UpdateDelivery/>}/>
          <Route path="/deliverytracking" element={<DeliveryTracking/>}/>
          <Route path="/ordersucess" element={<OrderSucess/>}/>



        </Routes>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;