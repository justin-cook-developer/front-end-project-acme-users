import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyles = {
  fontWeight: 'bold',
  color: 'green',
};

const numbers = {};

for (let i = 1; i < 10; i++) {
  numbers[i] = true;
}

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={activeStyles}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users/1"
          isActive={(_, { pathname }) => {
            console.log(_, pathname);
            if (pathname.startsWith('/users/')) {
              return numbers[pathname[7]];
            }
          }}
          activeStyle={activeStyles}
        >
          Users
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
