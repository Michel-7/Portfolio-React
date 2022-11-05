import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/michel-aoun7/">
          <LinkedInIcon fontSize="large" />
        </a>
        <a className="last" href="https://github.com/Michel-7">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <div className="copyright">Made By Michel Aoun</div>
    </div>
  );
}
