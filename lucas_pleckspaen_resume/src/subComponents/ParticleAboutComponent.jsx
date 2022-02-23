import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleAboutComponent = () => (
  <Box>
    <Particles
      style={{ position: 'absolute', top: 0 }}
      params={{
        particles: {
          number: {
            value: 0,
            density: {
              enable: true,
              value_area: 800,
            },
          },

          color: {
            value: '#ffffff',
            animation: {
              enable: true,
              speed: -150,
              sync: true,
            },
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.1,
            random: false,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: { enable: true, minimumValue: 2 },
            animation: {
              enable: false,
              speed: 4,
              minimumValue: 2,
              sync: false,
            },
          },
          life: {
            duration: {
              value: 4,
            },
            count: 1,
          },
          move: {
            angle: {
              value: 10,
              offset: 0,
            },
            enable: true,
            gravity: {
              enable: true,
              acceleration: -0.8,
            },
            speed: 6,
            direction: 'top',
            random: false,
            straight: false,
            size: true,
            outModes: {
              default: 'destroy',
              bottom: 'none',
            },
            attract: {
              enable: false,
              distance: 300,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
        },
        detectRetina: true,
        emitters: {
          direction: 'top',
          rate: {
            quantity: 50,
            delay: 0.01,
          },
          size: {
            width: 100,
            height: 10,
          },
          position: {
            x: 50,
            y: 100,
          },
        },
        retina_detect: false,
      }}
    />
  </Box>
);

export default ParticleAboutComponent;
