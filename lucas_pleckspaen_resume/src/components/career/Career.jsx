import React from 'react';
import EducationTimeLine from './components/EducationTimeLine';
import ExperienceTimeLine from './components/ExperienceTimeLine';

const Career = () => (
  <>
    <h2 id="skills">CAREER</h2>
    <div className="flex flex-wrap">
      <EducationTimeLine />
      <ExperienceTimeLine />
    </div>
  </>
);
export default Career;
