/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from '../../public/Images/blue-trianglify-8e4a0501.jpg';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import BackBtn from '../subComponents/BackButton';

import PortfolioDatas from '../data/PortfolioData';
import PortfolioComponent from '../components/PortfolioComponent';
import AnchorComponent from '../subComponents/Anchor';
import BigTitle from '../subComponents/BigTitlte';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  height: auto;
  opacity: 0.95;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: calc(10rem + 15vh);
  width: 80%;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -4rem;
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

const PortfolioPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    const num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num, 10));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}>
      <Container>
        <LogoComponent />
        <BackBtn />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {PortfolioDatas.map((data) => (
              <PortfolioComponent key={data.id} data={data} />
            ))}
          </Grid>
          <BigTitle text="Portfolio" top="5.6rem" />
        </Center>
      </Container>
    </MainContainer>
  );
};

export default PortfolioPage;
