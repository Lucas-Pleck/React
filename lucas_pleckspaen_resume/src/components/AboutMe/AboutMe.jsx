import React from 'react';
import Description from './components/ProfileDescription';
import ProfilePicture from './components/ProfilePicture';

const AboutMe = () => (
  <div className="flex items-center justify-around">
    <ProfilePicture />
    <Description />
  </div>
);

export default AboutMe;
