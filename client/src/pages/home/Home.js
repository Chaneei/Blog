import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const { user } = useContext(Context);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      {user ? (
        <>
          <Header />
          <div className="home">
            <Posts posts={posts} />
            <Sidebar />
          </div>
        </>
      ) : (
        <div className="homeMain">
          <p>WELCOME TO MY BLOG ❤</p>
          <Link to="/register">
            <span className="mainNotice">Please make your accout ❌</span>
          </Link>
          <Link to="/login">
            <span className="mainNotice">If I already have account ⭕</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
