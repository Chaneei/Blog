import React from "react";
import "./singlePost.css";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/73F5/production/_126358692_bbc-sport-index-imagery-3-split-images-gradient-07862216-08a1-4847-b2a4-1dad5fe66b6e.png"
          alt="postimg"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Transfer window latest and Premier League news conferences
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Chan</b>
          </span>
          <span>1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
          <br />
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
