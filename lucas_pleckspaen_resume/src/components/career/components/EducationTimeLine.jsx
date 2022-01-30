import React from 'react';
import { Chrono } from 'react-chrono';
import educationData from './EducationData';

const EducationTimeLine = () => (
  <div className="m-auto">
    <h3>Education</h3>
    <div className="new-line" style={{ width: '550px', height: '70vh' }}>
      <Chrono
        items={educationData}
        mode="VERTICAL"
        cardHeight={250}
        scrollable={{ scrollbar: false }}
      />
    </div>
  </div>
);

export default EducationTimeLine;
