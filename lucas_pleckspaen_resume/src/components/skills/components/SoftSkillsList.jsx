import React from 'react';
import softSkillsData from './SoftSkillsData';

const SoftSkillsList = () => (
  <div className="flex my-8">
    <h3>SOFTSKILLS</h3>
    <div className="grid grid-cols-5 w-full mx-5">
      {softSkillsData.map(({ id, title, img }) => (
        <li className="list-none" key={id}>
          <div className="img-container p-1 w-32">
            <img src={img} alt={title} />
            <p className="text-center text-sm">{title}</p>
          </div>
        </li>
      ))}
    </div>
  </div>
);

export default SoftSkillsList;
