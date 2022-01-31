import React from 'react';
import { Chrono } from 'react-chrono';
import educationData from './EducationData';

const EducationTimeLine = () => (
  <div className="m-auto">
    <h3>Education</h3>
    <div
      className="new-line bg-gradient-to-r from-cyan-500 to-blue-500 opacity-85 rounded-lg"
      style={{ width: '550px', height: '60vh' }}>
      <Chrono
        items={educationData}
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

export default EducationTimeLine;
