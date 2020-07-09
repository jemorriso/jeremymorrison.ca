// @format

import React from 'react';
// styled here is the local alias for the default export, while createGlobalStyle is another export from styled-components
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
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
} from '@fortawesome/free-solid-svg-icons';

import Sidebar from './components/Sidebar';
import RouteContainer from './components/RouteContainer';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

import './css/reset.css';
import './css/globals.css';

library.add(
  faInstagram,
  faLinkedin,
  faGithub,
  faSpotify,
  faEnvelope,
  faExternalLinkAlt,
);

const Wrapper = styled.div`
  min-height: 100vh;
  height: 1px;
`;

const OverlayBackground = styled.div`
  display: ${(props) => (props.sidebarOpen ? 'block' : 'none')};
  background-color: black;
  opacity: 0.5;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  margin-left: 200px;
  min-height: 100vh;
  /* relative so that footer is absolutely positioned relative to the container instead of the whole document */
  position: relative;

  @media (max-width: 850px) {
    margin-left: 0;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      contentHeight: 0,
      // not sure about initial page load
      sidebarOpen: false,
      currentPath: null,
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
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  };

  updateContentHeight = () => {
    const contentHeight =
      document.getElementsByClassName('route-section')[0].clientHeight +
      document.getElementById('topbar').clientHeight;

    this.setState({ contentHeight });
    console.log(`content height: ${contentHeight}`);
  };

  toggleSidebar = () => {
    const { windowWidth } = this.state;
    // if window is bigger than 850px in width, don't want the sidebar to close ever
    if (windowWidth < 850) {
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
      windowHeight,
      sidebarOpen,
      socials,
      contentHeight,
      currentPath,
    } = this.state;
    return (
      <Router>
        <Wrapper>
          <Sidebar
            windowWidth={windowWidth}
            sidebarOpen={sidebarOpen}
            toggleSidebar={this.toggleSidebar}
            socials={socials}
            updateContentHeight={this.updateContentHeight}
            currentPath={currentPath}
          />
          <OverlayBackground
            sidebarOpen={sidebarOpen}
            onClick={this.toggleSidebar}
          />
          <Container>
            <Topbar
              sidebarOpen={sidebarOpen}
              toggleSidebar={this.toggleSidebar}
            />
            <RouteContainer
              hideSidebar={this.hideSidebar}
              sidebarOpen={sidebarOpen}
              socials={socials}
              updateContentHeight={this.updateContentHeight}
              contentHeight={contentHeight}
              handleRouteChange={this.handleRouteChange}
            />
            <Footer contentHeight={contentHeight} windowHeight={windowHeight} />
          </Container>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
