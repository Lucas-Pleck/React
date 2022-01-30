import React from 'react';
import hardSkillsData from './HardSkillsData';

const HardSkillsList = () => (
  <div className="flex">
    <h3>HARDSKILLS</h3>
    <div className="grid grid-cols-5 w-full mx-5">
      {hardSkillsData.map(({ id, title, img, link }) => (
        <li className="list-none" key={id}>
          <div className="img-container p-1 w-32">
            <img src={img} alt={title}></img>
            <p className="text-center text-sm">{title}</p>
          </div>
        </li>
      ))}
    </div>
  </div>
);

export default HardSkillsList;
