import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const validateEmail = (email) => {
    // Basic email validation
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^[a-z0-9]+$/;
    return re.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email (lowercase only)";
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!validatePassword(password)) {
      newErrors.password = "Password can only contain lowercase letters and numbers";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      try {
        const response = await axios.post("/login", {
          email,
          password
        });
        
        if (response.data.status === "Ok") {
          alert("Login successful!");
          // Redirect or handle successful login here
        } else {
          alert(response.data.message || "Login failed");
        }
      } catch (err) {
        alert(err.response?.data?.message || "An error occurred during login");
      }
    }
  };

  return (
    <div>
      <Nav />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value.toLowerCase())} 
              required 
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value.toLowerCase())} 
              required 
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;