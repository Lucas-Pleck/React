/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../components/Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import BackBtn from '../subComponents/BackButton';
import CareerTimeline from '../subComponents/CareerTimeline';

import BigTitlte from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled(motion.ul)`
  height: 40vh;
  width: 54vw;
  display: flex;
  flex-wrap: wrap;
  color: white;
  margin-top: 4rem;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const CareerPage = () => {
  const ref = useRef(null);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <BackBtn />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          <div>
            <div className="h2 text-center text-4xl ml-10 bg-blue-400">Career</div>
            <CareerTimeline />
          </div>
          <div>
            <div className="h2 text-center text-4xl ml-10 bg-blue-400">Career</div>
            <CareerTimeline />
          </div>
        </Main>

        <BigTitlte text="WORK" top="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default CareerPage;
