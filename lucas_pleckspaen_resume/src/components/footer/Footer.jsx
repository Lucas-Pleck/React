import React from 'react';
import NavList from '../navbar/components/NavList';
import Copyright from './components/Copyright';

const Footer = ({ id }) => (
  <div className="container absolute bottom-0 w-full">
    <div className="flex justify-center">
      <NavList id={id} />
    </div>
    <Copyright />
  </div>
);

export default Footer;
