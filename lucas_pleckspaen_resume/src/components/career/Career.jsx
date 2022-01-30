import React from 'react';
import EducationTimeLine from './components/EducationTimeLine';
import ExperienceTimeLine from './components/ExperienceTimeLine';

const Career = () => (
  <>
    <h2 id="skills">CAREER</h2>
    <div className="grid grid-cols-2">
      <EducationTimeLine />
      <ExperienceTimeLine />
    </div>
  </>
);
export default Career;
