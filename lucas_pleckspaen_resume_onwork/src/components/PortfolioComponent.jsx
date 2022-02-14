/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: calc(16rem + 8vw);
  height: fit-content;
  margin: 2rem 2rem;
  text-decoration: none;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(40px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 185px;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Zen Kurenaido', sans-serif;
  font-weight: 700;
  font-size: 1.2em;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
  font-size: 0.9rem;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const PortfolioComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.data;
  console.log(link);
  return (
    <Container variants={Item}>
      <Box>
        <a href={link} target="_blank" rel="noreferrer">
          <Image img={imgSrc} />
          <Title>{name}</Title>
          <HashTags>
            {tags.map((t, id) => (
              <Tag key={id}>#{t}</Tag>
            ))}
          </HashTags>
          <Date>{date}</Date>
        </a>
      </Box>
    </Container>
  );
};

export default PortfolioComponent;
