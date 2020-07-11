import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.nav`
  padding: 1.6rem 0;
`;

const Ul = styled.ul`
  /*padding-left: 1rem;*/
  line-height: 1.5;
`;

const Li = styled.li`
  list-style-type: none;
  /*width: 100%;*/
  padding-left: 1.6rem;
  background-color: ${(props) =>
    props.to === props.currentPath ? 'var(--color-primary-light)' : 'none'};

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

const LinkWrapper = styled(Link)`
  display: inline-block;
  width: 100%;

  /*text-decoration: ${(props) =>
    props.to === props.currentPath ? 'underline' : 'none'};*/
`;

function Navbar(props) {
  const { toggleSidebar, currentPath } = props;

  return (
    <Wrapper>
      <Ul className="nav-items">
        <Li to="/portfolio" currentPath={currentPath}>
          <LinkWrapper
            to="/portfolio"
            currentPath={currentPath}
            onClick={toggleSidebar}
          >
            Portfolio
          </LinkWrapper>
        </Li>
        <Li to="/about" currentPath={currentPath}>
          <LinkWrapper
            to="/about"
            currentPath={currentPath}
            onClick={toggleSidebar}
          >
            About
          </LinkWrapper>
        </Li>
        <Li to="/resume" currentPath={currentPath}>
          <LinkWrapper
            to="/resume"
            currentPath={currentPath}
            onClick={toggleSidebar}
          >
            Resume
          </LinkWrapper>
        </Li>
        <Li to="/contact" currentPath={currentPath}>
          <LinkWrapper
            to="/contact"
            currentPath={currentPath}
            onClick={toggleSidebar}
          >
            Contact
          </LinkWrapper>
        </Li>
      </Ul>
    </Wrapper>
  );
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};
export default Navbar;
