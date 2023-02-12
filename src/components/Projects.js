import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h2>Some of my Personal Projects</h2>
      </div>
      <div className="content">
        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
          <Project
            image="./images/Screenshot (6).png"
            title="Covid19-Tracker:"
            info="Built with ReactJs and open Api"
            websiteLink="https://covid19-v-tracker.netlify.app/"
            githubLink="https://github.com/Michel-7/Covid19Tracker"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" delay={300} animateOnce="true">
          <Project
            image="./images/Screenshot (127).png"
            title="Web Chat App:"
            info="Built with ReactJs, Node and socket.io"
            websiteLink="https://chat-app-7.netlify.app/"
            githubLink="https://github.com/Michel-7/Chat-App"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" delay={600} animateOnce="true">
          <Project
            image="./images/Screenshot (103).png"
            title="Android Gym App:"
            info="Built with AndroidStudio, java, php, mysql and wamp server."
            websiteLink="#"
            githubLink="https://github.com/Michel-7/Gym_AndroidApp"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" delay={900} animateOnce="true">
          <Project
            image="./images/tic-tac-toe sc.png"
            title="Tic-Tac-Toe:"
            info="Built with CSS and vanilla javascript"
            websiteLink="https://michel-7.github.io/Tic-Tac-Toe/"
            githubLink="https://github.com/Michel-7/Tic-Tac-Toe.git"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Projects;
