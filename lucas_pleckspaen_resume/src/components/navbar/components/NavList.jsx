import React from 'react';
import navItems from './NavItem';

const NavList = () => (
  <ul className="flex justify-between w-3/6">
    {navItems.map((u) => (
      <li key={u.id}>
        <a href={u.link}>{u.name}</a>
      </li>
    ))}
  </ul>
);

export default NavList;
