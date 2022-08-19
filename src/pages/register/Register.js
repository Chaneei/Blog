import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your name..."
          className="registerInput"
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className="registerInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="registerInput"
        />
        <input className="registerButton" type="button" value="Login" />
        <input className="registerLoginButton" type="button" value="Register" />
      </form>
    </div>
  );
};

export default Register;
