import React, { useEffect } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import AOS from "aos";
import "aos/dist/aos.css";

function About(props) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="about" id="about">
      <div className="me-img" data-aos="fade-left">
        <img src="./images/profile.jpg" alt="Picture of me" />
      </div>
      <div className="about-parag" data-aos="fade-up">
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
        <div className="download-btn" data-aos="fade-right">
          <DownloadIcon />
          <a href="/files/MichelAoun.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
