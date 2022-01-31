import React from 'react';
import HardSkillsList from './components/HardSkillsList';
import SoftSkillsList from './components/SoftSkillsList';

const Skills = () => (
  <>
    <h2 id="skills">SKILLS</h2>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-85 rounded-lg min-h-96">
      <SoftSkillsList />
      <HardSkillsList />
    </div>
  </>
);
export default Skills;
