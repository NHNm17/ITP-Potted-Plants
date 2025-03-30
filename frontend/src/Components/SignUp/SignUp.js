import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL="http://localhost:5000"
function SignUp() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser((prevUser) => ({...prevUser,[name]:value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
        .then(() => {
            alert("Register Success");
        })
        .catch((err) =>{
            alert(err.message);
        });
    };

    const sendRequest = async() => {
        await axios
        .post("http://Localhost:3000/register",{
            name: String(user.name),
            email: String(user.email),
            password: String(user.password),
        })
        .then((res) => res.data);
    };

    return (
        <div>
            <Nav />
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <br></br>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                        <br></br>
                        <br></br>
                        <label>Email</label>
                        <br></br>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                        <br></br>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />

                        <br></br>
                        <br></br>

                    <button type="submit">Sign Up</button>
                    <br></br>

                    <p className="login-link">
                     I have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default SignUp;