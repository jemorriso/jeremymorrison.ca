import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Navbar from './Navbar';
import Brand from './Brand';
import Socials from './Socials';

const duration = 1000;

const Wrapper = styled.div`
  .animation-enter {
    display: block;
  }
  .animation-enter.animation-enter-active {
    transform: translate(calc(var(--width-sidebar)));
    transition: transform ${duration}ms;
  }
  .animation-enter-done {
    display: block;
    left: 0px;
  }
  .animation-exit {
    display: block;
    left: 0px;
  }
  .animation-exit.animation-exit-active {
    transform: translate(calc(var(--width-sidebar) * -1));
    transition: transform ${duration}ms;
  }
  /* Not needed because default state is display none */
  /* .animation-exit-done {
    display: none;
  } */
`;

const ContentWrapper = styled.div`
  background-color: var(--color-primary-dark);
  height: 100%;
  position: fixed;
  width: var(--width-sidebar);
  z-index: 3;
  left: ${(props) =>
    props.windowWidth < props.sidebarBreakpoint
      ? 'calc(var(--width-sidebar) * -1)'
      : 0};
  display: ${(props) =>
    props.windowWidth < props.sidebarBreakpoint ? 'none' : 'block'};
`;

const NavWrapper = styled.div`
  background-color: var(--color-primary-medium);
`;

const Headshot = styled.div`
  width: 80%;
  height: 160px;
  margin: 20px;
  background-image: url('./img/headshot2.png');
  background-size: cover;
`;

function Sidebar(props) {
  const {
    windowWidth,
    sidebarOpen,
    toggleSidebar,
    socials,
    currentPath,
    sidebarBreakpoint,
  } = props;
  return (
    <Wrapper>
      <CSSTransition in={sidebarOpen} timeout={duration} classNames="animation">
        {/* transitions are applied to this div */}
        <ContentWrapper
          windowWidth={windowWidth}
          sidebarBreakpoint={sidebarBreakpoint}
        >
          <Link to="/" onClick={toggleSidebar}>
            <Headshot />
            {windowWidth >= sidebarBreakpoint ? <Brand /> : null}
          </Link>
          <NavWrapper>
            <Navbar toggleSidebar={toggleSidebar} currentPath={currentPath} />
            <Socials socials={socials} />
          </NavWrapper>
        </ContentWrapper>
      </CSSTransition>
    </Wrapper>
  );
}

Sidebar.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPath: PropTypes.string.isRequired,
  sidebarBreakpoint: PropTypes.number.isRequired,
};

export default Sidebar;
