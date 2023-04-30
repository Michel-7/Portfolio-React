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
              <li>HTML5 | CSS3 | JavaScript</li>
              <li>JQuery</li>
              <li>ReactJS</li>
              <li>React Native</li>
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
              <li>Laravel</li>
              <li>NodeJs</li>
              <li>ASP.NET</li>
              <li>Express</li>
              <li>MySql</li>
              <li>MongoDb</li>
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
              <li>FTP</li>
              <li>SSH</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
