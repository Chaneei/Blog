import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://velog.velcdn.com/images/lsc90726/profile/296886ce-b1c0-46d9-8a3d-81a439c8b6f4/image.jpg" />
        <p>
          로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인
          분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을
          보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는
          실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움
          글로도 이용된다.
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
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
