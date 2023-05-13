import React, { useState } from "react";
import profilePic from "./alaska-profile-pic.png";
const aboutMe = () => {
  return (
    <div>
      <h1 id="about-me">About Jacob</h1>
      <div id="about-me-section">
        <div>
          <img
            src={profilePic}
            alt="Jacob Zea"
            className='profile-pic'
          />
        </div>
        <div id="about-me-bio">
          <p>
            I'm originally from Sioux Falls, SD, I moved to Denver, CO in 2020
            with my wife. I have a strong background in customer service and
            inventory management. I graduated college in 2019 with degrees in
            Conservation Biology and Sustainability from the University of South
            Dakota.
          </p>
        </div>
      </div>
    </div>
  );
};

export default aboutMe;
