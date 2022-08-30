import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import "./login.css";
const Login = () => {
  const userRef = useRef();
  const pwRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: pwRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Username..."
          className="loginInput"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="loginInput"
          ref={pwRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="loginRegisterButton" type="button">
          <Link to="/register">Register</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
