import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.nav`
  background-color: #2a4765;
  color: white;
`;

const Ul = styled.ul`
  /* padding-left: 1em; */
`;

const Li = styled.li`
  list-style-type: none;
  width: 100%;

  &:hover {
    background-color: #365c81;
  }
`;

const LinkWrapper = styled(Link)`
  display: inline-block;
  width: 100%;
`;

function Navbar(props) {
  const { toggleSidebar } = props;

  return (
    <Wrapper>
      <Ul className="nav-items">
        <Li>
          <LinkWrapper to="/portfolio" onClick={toggleSidebar}>
            Portfolio
          </LinkWrapper>
        </Li>
        <Li>
          <LinkWrapper to="/about" onClick={toggleSidebar}>
            About
          </LinkWrapper>
        </Li>
        <Li>
          <LinkWrapper to="/resume" onClick={toggleSidebar}>
            Resume
          </LinkWrapper>
        </Li>
        <Li>
          <LinkWrapper to="/contact" onClick={toggleSidebar}>
            Contact
          </LinkWrapper>
        </Li>
      </Ul>
    </Wrapper>
  );
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
export default Navbar;
