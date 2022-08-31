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
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={PF + user.profilePic} />
        <p>
          나이키의 여러가지 상품에 대한 관심과 신발 수집에 대한 취미를 가지고
          있는 <i>{user.username}</i> 입니다.
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
