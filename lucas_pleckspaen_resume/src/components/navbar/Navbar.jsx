import React from 'react';
import NavList from './components/NavList';
import Logo from '../site_id/logo/logo';

const Navbar = ({ id }) => (
  <div className="flex justify-around align-middle">
    <Logo />
    <NavList id={id} />
  </div>
);

export default Navbar;
