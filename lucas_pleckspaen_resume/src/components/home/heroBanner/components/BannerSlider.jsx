import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: '/img/banner_1.jpg',
    caption: 'Slide 1',
  },
  {
    url: '/img/banner_2.jpg',
    caption: 'Slide 2',
  },
];

const BannerSlider = () => (
  <div className="slide-container">
    <Slide>
      {slideImages.map((slideImage) => (
        <div className="each-slide h-96" key={slideImage.url}>
          <div
            className="bg-no-repeat w-full h-96"
            style={{ backgroundImage: `url(${slideImage.url})` }}>
            <span>{slideImage.caption}</span>
          </div>
        </div>
      ))}
    </Slide>
  </div>
);

export default BannerSlider;
