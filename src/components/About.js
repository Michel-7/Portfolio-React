import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import ScrollAnimation from "react-animate-on-scroll";

function About(props) {
  return (
    <div className="about" id="about">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
        <div className="me-img">
          <img src="./images/profile.jpg" alt="Picture of me" />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
        <div className="about-parag">
          <h1>About me </h1>
          <p>
            Hi, I am a 22 years old software developer and a Computer Science
            graduate from the Lebanese University.
            <br />I am interested in all Aspects of Computer Software with a
            focus on{" "}
            <span className="purple"> System and Web apps development.</span>
            <br />
            Fast learner and in love with the craft, I am always learning
            something new. Excited to take the next step in my journey.
          </p>
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
            <div className="download-btn">
              <DownloadIcon />
              <a href="/files/MichelAoun.pdf" download>
                Download Resume
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default About;
