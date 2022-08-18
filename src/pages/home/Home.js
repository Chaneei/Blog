import React from "react";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Posts />
      <Sidebar />
    </div>
  );
};

export default Home;
