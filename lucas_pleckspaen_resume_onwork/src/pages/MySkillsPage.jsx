import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../components/Themes';
import { SoftSkills, HardSkills } from '../components/AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import BackBtn from '../subComponents/BackButton';
import ParticleSkillsComponent from '../subComponents/ParticleSkillsComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  font-weight: bold;
  color: #084276;

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => (
  <ThemeProvider theme={lightTheme}>
    <Box>
      <LogoComponent theme="light" />
      <SocialIcons theme="light" />
      <BackBtn />
      <ParticleSkillsComponent />
      <Main>
        <Title>
          <SoftSkills width={40} height={40} /> Soft Skills
        </Title>
        <Description>jfe fez fz zgf lffzpkpf zfzplk fzp^k fzpkpk.</Description>
        <Description>
          <strong>Lorem amet</strong>
          <ul>
            <li>zfzplk fzp^k</li>
            <li>zfzplk fzp^k</li>
          </ul>
        </Description>
        <Description>
          <strong>zfzplk fzp^k</strong>
          <ul>
            <li>zfzplk fzp^k</li>
          </ul>
        </Description>
      </Main>
      <Main>
        <Title>
          <HardSkills width={40} height={40} /> Hard Skills
        </Title>
        <Description>
          jfe fez fz zgf lffzpkpf zfzplk fzp^k fzpkpk jfe fez fz zgf lffzpkpf zfzplk fzp^k
          fzpkpk.
        </Description>
        <Description>
          <strong>Skills</strong>
          <p>Html, Css, Js, React, , Tailwind, etc.</p>
        </Description>
        <Description>
          <strong>jfe fez fz zgf lffzpkpf zfzplk fzp^k fzpkpk.</strong>
          <p>jfe fez fz zgf lffzpkpf zfzplk fzp^k fzpkpk.</p>
        </Description>
      </Main>
      <BigTitle text="SKILLS" top="80%" />
    </Box>
  </ThemeProvider>
);

export default MySkillsPage;
