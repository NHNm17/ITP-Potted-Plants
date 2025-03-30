import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>Potted Plants SL - Bringing Nature to Your Home</h1>
      </header>

      <div className="top-bar">
        <img src="logo.jpg" alt="Potted Plants SL Logo" className="logo" />
        <h6 className="auth-links">
          Hi, <a href="/login">Login</a> OR <a href="/signup">Sign Up</a>
        </h6>
        <a href="/cart" className="cart-icon">
          <img src="cart.png" alt="Cart" />
        </a>
      </div>

      {/* Navigation Bar */}
      <ul className="nav-bar">
        <li className="nav-bar">
        <Link to="/home" className="active home-a">
          <h4>Home</h4>
        </Link>
        </li>
        <li className="nav-bar">
        <Link to="/products" className="active products-a">
          <h4>Products</h4>
          </Link>
        </li>
        <li className="nav-bar">
        <Link to="/wishlist" className="active wishlist-a">
          <h4>Wishlist</h4>
          </Link>
        </li>
        <li className="nav-bar">
        <Link to="/AIchatbot" className="active aichatbot-a">
          <h4>AI chatbot</h4>
          </Link>
        </li>
        <li className="nav-bar">
        <Link to="/supportAndFeedback" className="active supportandfeedback -a">
          <h4>Support and Feedback</h4>
          </Link>
        </li>
        <li className="nav-bar">
        <Link to="/deliverytracking" className="active tracking-a">
          <h4>Delivery Tracking</h4>
          </Link>
        </li>
        <li className="nav-bar">
          <Link to="/signUp" className="active signUp-a">
            <h4>Sign Up</h4>
          </Link>
        </li>
        <li className="nav-bar">
          <Link to="/login" className="active login-a">
            <h4>Login</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
