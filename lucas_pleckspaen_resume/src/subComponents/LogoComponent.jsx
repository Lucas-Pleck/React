/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.color === 'dark' ? DarkTheme.text : DarkTheme.body)};
  font-family: 'Zen Kurenaido';

  position: fixed;
  left: calc(0.2rem + 2vw);
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => (
  <Logo color={props.theme}>
    Lucas
    <br />
    Pleckspaen
  </Logo>
);

export default LogoComponent;
