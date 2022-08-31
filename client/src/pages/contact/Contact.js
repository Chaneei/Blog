import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u6nb3or",
        "template_osic5nc",
        form.current,
        "user_qHgj1PwQMqi9JP0v1OMcl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert("Sorry There`s something Error");
          console.log(error.text);
        }
      );
    alert("Thank you for contact me!");
    e.target.reset();
  };

  return (
    <>
      <div className="contact">
        <div className="contactTitle">
          <span>Get In Touch</span>
          <h1>Contact me</h1>
        </div>
        <div className="contactWrap">
          <div className="contactSns">
            <div className="contactOption">
              <i className="contacticon fab fa-instagram-square"></i>
              <h4>Instagram</h4>
              <h5>@chan.growing.up</h5>
              <a href="https://www.instagram.com" target="_blank">
                Send a message
              </a>
            </div>
            <div className="contactOption">
              <i class="contacticon fa-solid fa-comment"></i>
              <h4>Kakao Talk</h4>
              <h5>frostworm</h5>
              <a href="https://open.kakao.com/o/s6a8AGie" target="_blank">
                Send a message
              </a>
            </div>
          </div>
          <form className="contactForm" ref={form} onSubmit={handleSubmit}>
            <input
              className="contactName"
              name="name"
              placeholder="Name"
              autoFocus
              required
            />
            <input
              className="contactEmail"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              className="contactContent"
              placeholder="Please write..."
              required
            />
            <button className="contentBtn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
