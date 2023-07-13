import React from "react";
import "./About.css";
import ProfilePic from "../../Image/cute.jpeg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="hello" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
              I am a Full Stack Developer.As a Full Stack Developer I have a strong understanding of both Frontend and Backend. Frontend using technologies like HTML5, CSS3, and JavaScript, CSS3 framework of Bootstrap 5 and Backend usinf technologies like Node Js, Express Js and MongoDB. Iam a motivated individual who is always looking to learn new technologies. I am a team player and have a strong work ethic.
              </p>  
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
