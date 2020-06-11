import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import styled from 'styled-components';

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
        {/* use Link in each li */}
        <Li>Portfolio</Li>
        <Li>About</Li>
        <Li>Resume</Li>
        <Li>Contact</Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
