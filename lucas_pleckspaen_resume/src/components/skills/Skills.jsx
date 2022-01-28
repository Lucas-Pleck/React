import React from 'react';
import HardSkillsList from './components/HardSkillsList';
import SoftSkillsList from './components/SoftSkillsList';

const Skills = () => (
  <>
    <h1 className="text-center text-3xl font-bold">SKILLS</h1>
    <div className="grid grid-cols-2">
      <SoftSkillsList />
      <HardSkillsList />
    </div>
  </>
);
export default Skills;
