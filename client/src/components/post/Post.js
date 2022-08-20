import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
const Post = ({ img }) => {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <Link className="link" to="/posts?cat=Music">
            Music
          </Link>
          <Link className="link" to="/posts?cat=Music">
            Life
          </Link>
        </div>
        <span className="postTitle">
          <Link to="/post/abc">
            Transfer window latest and Premier League news conferences
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
