import React from 'react';
import { Chrono } from 'react-chrono';
import experienceData from './ExperienceData';

const ExperienceTimeLine = () => (
  <div className="m-auto">
    <h3>Experiences</h3>
    <div
      className="new-line bg-gradient-to-r from-blue-500 to-cyan-500 opacity-85 rounded-lg"
      style={{ width: '550px', height: '60vh' }}>
      <Chrono
        items={experienceData}
        theme={{
          primary: 'blue',
          secondary: 'var(--text-color)',
          cardBgColor: 'var(--text-color)',
          cardForeColor: 'darkblue',
          titleColor: 'var(--link-color)',
        }}
        mode="VERTICAL"
        cardHeight={250}
        scrollable={{ scrollbar: false }}
      />
    </div>
  </div>
);

export default ExperienceTimeLine;
