import React from "react";

function ProjectCard({ src, link, h3, desc }) {
  return (
    <a href={link} className="rounded-3xl">
      <img className="hover w-full" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{desc}</p>
    </a>
  );
}

export default ProjectCard;
