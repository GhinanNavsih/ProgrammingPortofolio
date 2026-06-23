import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const skillRows = chunkArray(skillsSection.softwareSkills, 10);

  return (
    <div>
      <div className="software-skills-main-div">
        {skillRows.map((row, rowIndex) => (
          <ul className="dev-icons" key={rowIndex}>
            {row.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
