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
  background-color: lightblue;
  height: 100%;
  position: fixed;
  width: 200px;
  z-index: 2;
  left: ${(props) => (props.windowWidth < 850 ? '-200px' : 0)};
  display: ${(props) => (props.windowWidth < 850 ? 'none' : 'block')};
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: [
        { href: 'mailto:contact@jeremymorrison.ca', icon: 'envelope' },
        {
          href: 'https://www.linkedin.com/in/jwill-morrison/',
          icon: ['fab', 'linkedin'],
        },
        { href: 'https://github.com/JeMorriso', icon: ['fab', 'github'] },
        {
          href: 'https://www.instagram.com/_jeremymorrison/',
          icon: ['fab', 'instagram'],
        },
        {
          href:
            'https://open.spotify.com/user/11y8roaohv2cggx4q9u09fiiu?si=4d0c5dj1RnajQmzcwEY9Zw',
          icon: ['fab', 'spotify'],
        },
      ],
    };
  }

  render() {
    const { windowWidth, sidebarOpen, toggleSidebar } = this.props;
    const { socials } = this.state;
    return (
      <Wrapper>
        <CSSTransition
          in={sidebarOpen}
          timeout={duration}
          classNames="animation"
        >
          {/* transitions are applied to this div */}
          <ContentWrapper windowWidth={windowWidth}>
            {windowWidth >= 850 ? <Brand /> : null}
            <Navbar toggleSidebar={toggleSidebar} />
            <Socials socials={socials} />
          </ContentWrapper>
        </CSSTransition>
      </Wrapper>
    );
  }
}

Sidebar.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
