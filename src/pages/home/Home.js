import React from "react";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
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
