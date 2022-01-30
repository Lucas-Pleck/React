import React from 'react';
import HardSkillsList from './components/HardSkillsList';
import SoftSkillsList from './components/SoftSkillsList';

const Skills = () => (
  <>
    <h2 id="skills">SKILLS</h2>
    <>
      <SoftSkillsList />
      <HardSkillsList />
    </>
  </>
);
export default Skills;
