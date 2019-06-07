import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyles = {
  fontWeight: 'bold',
  color: 'green',
};

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={activeStyles}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" activeStyle={activeStyles}>
          Users
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
