import React from "react";
import "./topbar.css";
const Topbar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <a className="topIcon">⚽FB</a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <a className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </a>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <a className="link" to="/login">
                LOGIN
              </a>
            </li>
            <li className="topListItem">
              <a className="link" to="/register">
                REGISTER
              </a>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
