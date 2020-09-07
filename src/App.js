import React from 'react';
// styled here is the local alias for the default export, while createGlobalStyle is another export from styled-components
import styled from 'styled-components';
import { HashRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faExternalLinkAlt,
  faBars,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

import Sidebar from './components/Sidebar';
import RouteContainer from './components/RouteContainer';
import Topbar from './components/Topbar';
// import Footer from './components/Footer';

import './css/reset.css';
import './css/globals.css';

library.add(
  faInstagram,
  faLinkedin,
  faGithub,
  faSpotify,
  faEnvelope,
  faExternalLinkAlt,
  faBars,
  faFile,
);

const Wrapper = styled.div`
  /*min-height: 100vh;
  height: 1px;*/
`;

const OverlayBackground = styled.div`
  display: ${(props) => (props.sidebarOpen ? 'block' : 'none')};
  background-color: black;
  opacity: 0.5;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  margin-left: var(--width-sidebar);
  height: 100vh;
  /* relative so that footer is absolutely positioned relative to the container instead of the whole document */
  position: relative;

  /* flex container for topbar and route content, so that route content can fill the rest of the container */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${(props) => props.sidebarBreakpoint}px) {
    margin-left: 0;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    // use this.* for variables that don't change - it is more readable if only variables that change are in state,
    // state causes re-render
    this.socials = [
      { href: 'mailto:contact@jeremymorrison.ca', icon: ['fas', 'envelope'] },
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
    ];
    this.sidebarBreakpoint = 850;
    this.smallDeviceBreakpoint = 520;

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      contentHeight: 0,
      // not sure about initial page load
      sidebarOpen: false,
      currentPath: window.location.pathname,
    };
  }

  // invoked immediately after component is mounted
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    // also add listener for content height change because of dynamic footer
    window.addEventListener('resize', this.updateContentHeight);
  }

  // invoked immediately before component unmounted and destroyed
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('resize', this.updateContentHeight);
  }

  updateDimensions = () => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    // const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    // this.setState({ windowWidth, windowHeight });
    this.setState({ windowWidth });
  };

  updateContentHeight = () => {
    const fadeEnterActive = document.getElementsByClassName(
      'fade-enter-active',
    )[0];

    const sectionHeight =
      fadeEnterActive === undefined
        ? document.getElementsByClassName('route-section')[0].clientHeight
        : fadeEnterActive.clientHeight;

    const contentHeight =
      sectionHeight + document.getElementById('topbar').clientHeight;
    this.setState({ contentHeight });
    // console.log(`content height: ${contentHeight}`);
  };

  toggleSidebar = () => {
    const { windowWidth } = this.state;
    // if window is bigger than sidebarBreakpoint px in width, don't want the sidebar to close ever
    if (windowWidth < this.sidebarBreakpoint) {
      this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
    }
  };

  handleRouteChange = (location) => {
    this.updateContentHeight();
    this.setState({ currentPath: location });
  };

  render() {
    const {
      windowWidth,
      // windowHeight,
      sidebarOpen,
      contentHeight,
      currentPath,
    } = this.state;
    return (
      <HashRouter basename="/">
        <Wrapper>
          <Sidebar
            windowWidth={windowWidth}
            sidebarOpen={sidebarOpen}
            toggleSidebar={this.toggleSidebar}
            socials={this.socials}
            updateContentHeight={this.updateContentHeight}
            currentPath={currentPath}
            sidebarBreakpoint={this.sidebarBreakpoint}
          />
          <OverlayBackground
            sidebarOpen={sidebarOpen}
            onClick={this.toggleSidebar}
          />
          <Container sidebarBreakpoint={this.sidebarBreakpoint}>
            <Topbar
              sidebarOpen={sidebarOpen}
              toggleSidebar={this.toggleSidebar}
              sidebarBreakpoint={this.sidebarBreakpoint}
              smallDeviceBreakpoint={this.smallDeviceBreakpoint}
            />
            <RouteContainer
              hideSidebar={this.hideSidebar}
              sidebarOpen={sidebarOpen}
              socials={this.socials}
              updateContentHeight={this.updateContentHeight}
              contentHeight={contentHeight}
              handleRouteChange={this.handleRouteChange}
              sidebarBreakpoint={this.sidebarBreakpoint}
              smallDeviceBreakpoint={this.smallDeviceBreakpoint}
            />
            {/* <Footer contentHeight={contentHeight} windowHeight={windowHeight} /> */}
          </Container>
        </Wrapper>
      </HashRouter>
    );
  }
}

export default App;
