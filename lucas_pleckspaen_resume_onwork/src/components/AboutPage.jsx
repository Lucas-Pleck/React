import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import BigTitle from '../subComponents/BigTitlte';
import astronaut from '../../public/Images/lucas-pleckspaen-falling.png';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 25vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2.5rem;
  width: 50vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const AboutPage = () => (
  <ThemeProvider theme={DarkTheme}>
    <Box>
      <LogoComponent theme="dark" />
      <SocialIcons theme="dark" />
      <PowerButton />

      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>
      <Main>
        I have a curious mind that makes me keen to learn, adapt and grow.
        <br />
        My experience as a marketeer, webshop owner, sales representative and area manager
        allowed me to acquire solid soft & hard skills.
        <br />
        Long passionate about information technology and always looking for new
        challenges, I decided to reorient my career in this sector in May 2021.
        <br />
        Since then, I followed DevOps specialization courses as well as a technical and
        network support training. Furthermore I have acquired a solid knowledge of other
        technologies and methodologies on my own.
      </Main>

      <BigTitle text="ABOUT" top="13%" left="21%" />
    </Box>
  </ThemeProvider>
);

export default AboutPage;
