import React from "react";

function ExperienceCard({
  src,
  position,
  companyName,
  bulletpoint1,
  bulletpoint2,
  bulletpoint3,
  bulletpoint4,
}) {
  return (
    <div>
      <img className="hover" src={src} alt={`${companyName} logo`} />
      <h3>{companyName}</h3>
      <hr></hr>
      <h4>{position}</h4>
      <ul>
        {bulletpoint1 && <li>{bulletpoint1}</li>}
        {bulletpoint2 && <li>{bulletpoint2}</li>}
        {bulletpoint3 && <li>{bulletpoint3}</li>}
        {bulletpoint4 && <li>{bulletpoint4}</li>}
      </ul>
    </div>
  );
}

export default ExperienceCard;
