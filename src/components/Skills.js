import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Skills(props) {
  return (
    <div className="skills" id="skills">
      <div className="skills-title">Some of my skills</div>
      {/* <div className="hr" /> */}
      <div className="sections">
        <br />

        <div className="content">
          <div className="section-title">
            <ScrollAnimation animateIn="bounce">
              <h2>Front-End</h2>
            </ScrollAnimation>
            <div className="hr"></div>
          </div>
          <div className="icon">
            <i className="bi bi-display"></i>
          </div>
          <div className="tech">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>ReactJS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="content">
          <div className="section-title">
            <ScrollAnimation animateIn="tada">
              <h2>Back-End</h2>
            </ScrollAnimation>
            <div className="hr"></div>
          </div>
          <div className="icon">
            <i className="bi bi-server"></i>
          </div>
          <div className="tech">
            <ul>
              <li>Php</li>
              <li>NodeJs</li>
              <li>Express</li>
              <li>MySql</li>
              <li>MongoDb</li>
              <li>FireBase</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="content">
          <div className="section-title">
            <ScrollAnimation animateIn="bounce">
              <h2>Others</h2>
            </ScrollAnimation>
            <div className="hr"></div>
          </div>
          <div className="icon">
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="tech">
            <ul>
              <li>C++</li>
              <li>Java</li>
              <li>GitHub</li>
              <li>VsCode</li>
              <li>NPM</li>
              <li>Unix</li>
              <li>UML</li>
              <li>FTP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
