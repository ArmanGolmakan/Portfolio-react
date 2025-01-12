import React from "react";

function ExperienceCard({ src, position, companyName, desc }) {
  return (
    <div>
      <img className="hover" src={src} alt={`${companyName} logo`} />
      <h3>{companyName}</h3>
      <hr></hr>
      <h4>{position}</h4>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
