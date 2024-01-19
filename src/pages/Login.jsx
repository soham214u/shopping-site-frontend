import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <>
      <form className="login-form">
        <h2>Login</h2>
        <div className="email">
          <label className="label-sec">Email</label>
          <input 
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="password">
          <label className="label-sec">Password</label>
          <input 
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <button>Login</button>
        <p>Don't have an account <Link to="/signup">Signup</Link></p>
      </form>
    </>
  )
}

export default Login;