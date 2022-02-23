import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { lightTheme } from '../components/Themes';
import { SoftSkills, HardSkills } from '../components/AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import BackBtn from '../subComponents/BackButton';
import ParticleSkillsComponent from '../subComponents/ParticleSkillsComponent';
import BigTitle from '../subComponents/BigTitlte';
import HardSkillsComponent from '../components/HardSkillsComponent';
import SoftSkillsComponent from '../components/SoftSkillsComponent';
// import SoftSkillsData from '../data/SoftSkillsData';
// import HardSkillsData from '../data/HardSkillsData';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-wrap: wrap;
`;

const SkillsContainer = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  opacity: 0.98;
  padding: 1rem;
  width: 590px;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 1rem;

  &:hover {
    color: '#fcfcfc';
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  font-weight: bold;
  color: #6d8fae;

  ${SkillsContainer}:hover & {
    & > * {
      fill: '${(props) => props.theme.body}';
      text-color=white;
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const MySkillsPage = () => (
  <ThemeProvider theme={lightTheme}>
    <Box>
      <LogoComponent theme="light" />
      <SocialIcons theme="light" />
      <BackBtn />
      <ParticleSkillsComponent />
      <SkillsContainer>
        <div className="w-1/2 flex justify-around">
          <SoftSkills width={50} height={50} />
          <Title>Soft Skills</Title>
        </div>
        <SoftSkillsComponent />
      </SkillsContainer>
      <SkillsContainer>
        <div className="w-1/2 flex justify-around">
          <HardSkills width={50} height={50} />
          <Title>Hard Skills</Title>
        </div>
        <HardSkillsComponent />
      </SkillsContainer>
      <BigTitle text="SKILLS" top="80%" />
    </Box>
  </ThemeProvider>
);

export default MySkillsPage;
