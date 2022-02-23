import React from 'react';

const SkillsComponent = ({ id, title, image }) => (
  <div key={id} className="flex-col m-4">
    <img src={`/Images/skills/${image}.png`} alt="" className="mx-auto w-20 h-20" />
    <div>{title}</div>
  </div>
);
export default SkillsComponent;
