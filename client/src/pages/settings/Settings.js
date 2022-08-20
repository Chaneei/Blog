import React from "react";
import "./settings.css";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://chan-portfolio-site.web.app/static/media/me-about.fb9f209068b03765935b.jpg"
              alt="me"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>Email</label>
          <input type="email" placeholder="youremail@gmail.com" />
          <label>Email</label>
          <input type="password" />
          <button className="settingsSubmitButton ">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
