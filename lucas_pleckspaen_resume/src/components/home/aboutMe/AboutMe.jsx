import React from 'react';
import Description from './components/ProfileDescription';
import ProfilePicture from './components/ProfilePicture';

const AboutMe = () => (
  <div
    className="flex items-center justify-around bg-gradient-to-r from-cyan-500 to-blue-500 opacity-85 rounded-lg mt-16"
    id="about">
    <ProfilePicture />
    <Description />
  </div>
);

export default AboutMe;
