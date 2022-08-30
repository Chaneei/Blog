import React from "react";
import Header from "../../components/header/Header";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutText">
          <span className="aboutTitle" style={{ fontSize: "1.8rem" }}>
            About us
          </span>
          <br />
          <span className="aboutTitle">We Like To Share</span>
          <br />
          <span className="aboutTitle">
            <strong>Stories, News, And Ideas</strong>
          </span>

          <br />
          <span className="aboutTitle">with you</span>
        </div>
      </div>
    </>
  );
};

export default About;
