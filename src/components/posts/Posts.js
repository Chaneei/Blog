import React from "react";
import Post from "../post/Post";
import "./posts.css";

const Posts = () => {
  return (
    <div className="posts">
      <Post img="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/73F5/production/_126358692_bbc-sport-index-imagery-3-split-images-gradient-07862216-08a1-4847-b2a4-1dad5fe66b6e.png" />
      <Post img="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/14696/production/_126360638_casemiro1.jpg" />
      <Post img="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/6832/production/_126347662_0120fdd30c8a075f6eade4132dabadc89354f331.jpg" />
      <Post img="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/11E6/production/_126328540_split.png" />
    </div>
  );
};

export default Posts;
