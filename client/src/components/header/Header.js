import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
const Header = () => {
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="main"
      />
    </div>
  );
};

export default Header;
