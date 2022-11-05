import React from "react";
import Typewriter from "typewriter-effect";
import { smoothScroll } from "../helper";

function Home(props) {
  const handleClick = () => {
    smoothScroll(".contact", 1000);
  };
  return (
    <div className="home" id="home">
      <div>
        <div className="title">
          <p>
            Hello, my name is
            <br />
            <span className="name">Michel Aoun</span>
            <br />
            And I'm a{" "}
            <span className="job">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(400)
                    .typeString("Full-Stack Developer")
                    .pauseFor(1000)
                    .stop()
                    .start();
                }}
              />
            </span>
          </p>
        </div>
        <button className="hire-btn" onClick={handleClick}>
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default Home;
