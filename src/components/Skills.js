import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills(props) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="skills" id="skills">
      <div className="skills-title">Some of my skills</div>
      {/* <div className="hr" /> */}
      <div className="sections">
        <br />

        <div className="content" data-aos="bounce">
          <div className="section-title">
            <h2>Front-End</h2>
          </div>
          <div className="hr"></div>
          <div className="icon">
            <i className="bi bi-display"></i>
          </div>
          <div className="tech">
            <ul>
              <li>HTML5 | CSS3 | JavaScript</li>
              <li>JQuery</li>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="content" data-aos="tada">
          <div className="section-title">
            <h2>Back-End</h2>
          </div>
          <div className="hr"></div>
          <div className="icon">
            <i className="bi bi-server"></i>
          </div>
          <div className="tech">
            <ul>
              <li>C++</li>
              <li>Laravel</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="content" data-aos="bounce">
          <div className="section-title">
            <h2>Others</h2>
          </div>
          <div className="hr"></div>
          <div className="icon">
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="tech">
            <ul>
              <li>Git/GitHub</li>
              <li>VsCode</li>
              <li>GTest</li>
              <li>NPM</li>
              <li>Unix</li>
              <li>FTP</li>
              <li>SSH</li>
              <li>GDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
