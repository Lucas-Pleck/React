import React from 'react';
import HardSkillsData from '../data/HardSkillsData';
import SkillsComponent from '../subComponents/SkillsComponent';

const HardSkillsComponent = () => (
  <div className="flex flex-wrap justify-around">
    {HardSkillsData.map((u) => (
      <SkillsComponent key={u.id} image={u.image} title={u.title} />
    ))}
  </div>
);
export default HardSkillsComponent;
