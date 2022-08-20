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
      <div className="headerTitles">
        <span className="headerTitleLg">Chan`s Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="main"
      />
    </div>
  );
};

export default Header;
