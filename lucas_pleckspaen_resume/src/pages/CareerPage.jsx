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
import EducationTimeline from '../subComponents/EducationTimeline';

import BigTitlte from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled(motion.ul)`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  margin-top: 14rem;
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
          <div className="text-[#ccac00] text-xs mt-12 mb-4 w-[40rem]">
            <div className="h2 text-center text-white text-4xl bg-blue-400">Career</div>
            <CareerTimeline />
          </div>
          <div className="text-[#ccac00] text-xs mt-12 mb-4 w-[40rem]">
            <div className="h2 text-center text-white text-4xl bg-blue-400">
              Education
            </div>
            <EducationTimeline />
          </div>
        </Main>

        <BigTitlte text="WORK" top="5.6rem" />
      </Box>
    </ThemeProvider>
  );
};

export default CareerPage;
