import React from 'react';
import HardSkillsList from './components/HardSkillsList';
import SoftSkillsList from './components/SoftSkillsList';

const Skills = () => (
  <>
    <h2 id="skills">SKILLS</h2>
    <div className="grid grid-cols-2">
      <SoftSkillsList />
      <HardSkillsList />
    </div>
  </>
);
export default Skills;
