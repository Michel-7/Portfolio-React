import React from "react";

function Project({ image, title, info, websiteLink, githubLink }) {
  return (
    <div className="project">
      <div className="project-img">
        <img src={image} />
      </div>
      <h2>{title}</h2>
      <p>{info}</p>
      <div className="links">
        <a href={websiteLink}>
          <i className="bi bi-link-45deg"></i>
        </a>
        <a href={githubLink}>
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
