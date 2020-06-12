import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  /* background-color: lightblue;
  height: 100%;
  position: fixed;
  left: 0;
  top
  width: 100px; */
`;

const Ul = styled.ul`
  padding-left: 1em;
`;

const Li = styled.li`
  list-style-type: none;
`;

function Navbar(props) {
  return (
    <Nav>
      <Ul className="nav-items">
        <Li>
          <Link to="/portfolio">Portfolio</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="/resume">Resume</Link>
        </Li>
        <Li>
          <Link to="/contact">Contact</Link>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
