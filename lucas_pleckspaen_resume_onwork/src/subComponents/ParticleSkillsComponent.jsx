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

const ParticleSkillsComponent = () => (
  <Box>
    <Particles
      style={{ position: 'absolute', top: 0 }}
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2.2,
            straight: false,
          },
          shape: {
            type: ['image'],
            image: [
              {
                src: '/Images/skills/ansible.png',
                height: 20,
                width: 23,
              },
              {
                src: '/Images/skills/css.png',
                height: 23,
                width: 20,
              },
              {
                src: '/Images/skills/docker.png',
                height: 20,
                width: 30,
              },
              {
                src: '/Images/skills/git.png',
                height: 20,
                width: 20,
              },
              {
                src: '/Images/skills/html.png',
                height: 20,
                width: 20,
              },
              {
                src: '/Images/skills/java.png',
                height: 20,
                width: 20,
              },
              {
                src: '/Images/skills/kubernetes.png',
                height: 20,
                width: 30,
              },
              {
                src: '/Images/skills/linux.png',
                height: 20,
                width: 30,
              },
              {
                src: '/Images/skills/nextjs.png',
                height: 20,
                width: 20,
              },
              {
                src: '/Images/skills/nodejs.png',
                height: 20,
                width: 30,
              },
              {
                src: '/Images/skills/python.png',
                height: 30,
                width: 20,
              },
              {
                src: '/Images/skills/react.png',
                height: 20,
                width: 20,
              },
              {
                src: '/Images/skills/sql.png',
                height: 20,
                width: 30,
              },
              {
                src: '/Images/skills/windows.png',
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  </Box>
);

export default ParticleSkillsComponent;
