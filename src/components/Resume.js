import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="resume" className="resume">
      <div className="resume-section" data-aos="fade-left">
        <span className="title">Education</span>
        <div className="resume-section-info">
          <div className="sub-title">
            Bachelor's Degree, Computer Science.
          </div>
          <div className="date">2019 - 2022</div>
        </div>
        <p>
          I Studied at the Lebanese University Faculty of Sciences-II/Fanar.
          During this period I acquired a variety of technical skills in coding languages, networks, computer theory and architecture, as well as others
          such as Working with a team, managing a project and writing
          documentation.
        </p>
      </div>
      <div className="resume-section second" data-aos="fade-left">
        <span className="title">Work</span>
        <div className="resume-section-info">
          <div className="sub-title">Software engineer at Murex</div>
          <div className="date">July 2023 - Present</div>
        </div>
        <p>Achievements/Tasks:</p>
        <ul>
          <li>
            Developing and maintaining the risk measures module of the MX.3 Platform using C++ while adhering to market standards in both performance and ease of use.
          </li>
          <li>Designing and documenting both internal Apis used by other teams and Apis for external clients with a focus on ease of integration.</li>
          <li>Enriching the MX codeline with unit tests that covers large parts of the module and ensures early detection of bugs and regressions.</li>
          <li>
            Contributing to manual and automated functional validations for trade sensitivities and derivatives after new developments.
          </li>
        </ul>
        <div className="resume-section-info">
          <div className="sub-title">Full-Stack Developer at XTND</div>
          <div className="date">April 2022 - July 2023</div>
        </div>
        <p>Achievements/Tasks:</p>
        <ul>
          <li>
            Developed user interfaces based on Figma and AdobeXD designs while
            aiming for a smooth user experience and ensuring cross-browser
            compatibility as well as mobile responsiveness.
          </li>

          <li>Developed and Debugged REST Apis using Laravel.</li>
          <li>
            Designed and integrated MySQL databases using PHP and XTND's CMS. {" "}
          </li>
          <li>Built a QR-Scanner System for a cafeteria using PHP.</li>
          <li>Migrating existing websites to Wordpress. </li>
          <li>
            Created a Custom Admin Menu in Wordpress that allows users to
            modify and edit a custom-theme based website.
          </li>
          <li>Developing native mobile applications using React Native.</li>
          <li>
            Helping and Assisting clients in resolving their queries quickly
            and effectively.
          </li>
        </ul>
        <span className="work-contact">
          Contact : Roy naufal - Email: roy.naufal@xtnd.io
        </span>
        
      </div>
    </div>
  );
}
