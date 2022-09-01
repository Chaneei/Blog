import React, { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  console.log(cats);

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {user.profilePic ? (
          <img src={PF + user.profilePic} alt="me" />
        ) : (
          <>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
          </>
        )}
        <p>
          환영합니다 <i>{user.username}</i> 님
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com" target="_blanket">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://www.twitter.com" target="_blanket">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com" target="_blanket">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
