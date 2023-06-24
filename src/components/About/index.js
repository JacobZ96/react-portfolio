import React from "react";
import ProfilePic from "../../assets/ProfilePic/ProfilePic.png";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img src={ProfilePic} alt="profile of Jacob Zea"></img>
          {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p>
          I'm a full stack web developer with a background in retail inventory
          management and customer service looking to make a career change. I
          recently earned a certificate in full stack web development from the
          University of Denver, where I developed skills in JavaScript, CSS,
          React.js, and responsive web design. I'm excited to leverage my skills
          as part of a fast-paced, quality-driven team to build better
          experiences on the web.
        </p>
      </div>
    </section>
  );
}

export default About;
