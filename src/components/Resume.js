import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Resume() {
  return (
    <div id="resume" className="resume">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
        <div className="resume-section">
          <span className="title">Education</span>
          <div className="resume-section-info">
            <div className="sub-title">
              Bachelor's Degree, Computer Science.
            </div>
            <div className="date">2019-2022</div>
          </div>
          <p>
            I Studied at the Lebanese University Faculty of Sciences-II/Fanar.
            During this period i acquired a variety of technical coding and
            networking skills, computer theory and concepts, as well as others
            such as Working with a team, managing a project, writing
            documentation and presenting a project in front of juries.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
        <div className="resume-section second">
          <span className="title">Work</span>
          <div className="resume-section-info">
            <div className="sub-title">Full-Stack Developer at XTND</div>
            <div className="date">April 2022, Present</div>
          </div>
          <p>Achievements/Tasks:</p>
          <ul>
            <li>
              Developing and Maintaining Websites and Web Applications based on
              Figma and Adobe xd designs.
            </li>
            <li>
              Developing and integrating MySql Databases using PHP and XTND's
              CMS.
            </li>
            <li>Worked on a QR-Scanner System for a cafeteria.</li>
          </ul>
          <span className="work-contact">
            Contact : Roy naufal - Email: roy.naufal@xtnd.io
          </span>
        </div>
      </ScrollAnimation>
    </div>
  );
}
