import React, { useContext } from "react";
import "./topbar.css";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../context/Context";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/">
          <i class="topIcon fa-solid fa-person-walking"></i>
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link className="link" to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
            <span className="topUsername">{user.username}</span>
            <i
              onClick={handleLogout}
              class="toplogout fa-solid fa-arrow-right-from-bracket"
            ></i>
          </>
        ) : (
          <>
            {/* <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            </ul> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Topbar;
