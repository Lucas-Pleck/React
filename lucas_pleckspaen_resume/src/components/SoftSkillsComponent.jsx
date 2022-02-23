import React from 'react';
import SoftSkillsData from '../data/SoftSkillsData';
import SkillsComponent from '../subComponents/SkillsComponent';

const SoftSkillsComponent = () => (
  <div className="flex flex-wrap justify-around">
    {SoftSkillsData.map((u) => (
      <SkillsComponent key={u.id} image={u.image} title={u.title} />
    ))}
  </div>
);
export default SoftSkillsComponent;
