import React from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import { Link } from '@reach/router';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: yellow;
  }
`;

const Navbar = () => {
  return (
    <nav
      css={`
        color: yellow;
        display: flex;
        justify-content: space-between;
        background: teal;
        padding: 5px;
      `}
    >
      <p
        css={`
          font-size: 1.5em;
        `}
      >
        Navbar
      </p>
      <div
        css={`
        display=flex;
      `}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/numpad">Numpad</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/todo">ToDo</NavLink>
        <NavLink to="/randomthemer">Themer</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
