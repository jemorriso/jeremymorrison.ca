import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    transform: translate(200px);
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
    transform: translate(-200px);
    transition: transform ${duration}ms;
  }
  /* Not needed because default state is display none */
  /* .animation-exit-done {
    display: none;
  } */
`;

const ContentWrapper = styled.div`
  background-color: #1e3348;
  color: white;
  height: 100%;
  position: fixed;
  width: 200px;
  z-index: 2;
  left: ${(props) => (props.windowWidth < 850 ? '-200px' : 0)};
  display: ${(props) => (props.windowWidth < 850 ? 'none' : 'block')};
`;

function Sidebar(props) {
  const { windowWidth, sidebarOpen, toggleSidebar, socials } = props;
  return (
    <Wrapper>
      <CSSTransition in={sidebarOpen} timeout={duration} classNames="animation">
        {/* transitions are applied to this div */}
        <ContentWrapper windowWidth={windowWidth}>
          {windowWidth >= 850 ? <Brand /> : null}
          <Navbar toggleSidebar={toggleSidebar} />
          <Socials socials={socials} />
        </ContentWrapper>
      </CSSTransition>
      {console.log(ContentWrapper)}
    </Wrapper>
  );
}

Sidebar.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateContentHeight: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidebar;
