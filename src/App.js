import React from 'react';
// styled here is the local alias for the default export, while createGlobalStyle is another export from styled-components
import styled, { createGlobalStyle } from 'styled-components';
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

import './css/reset.css';

library.add(
  faInstagram,
  faLinkedin,
  faGithub,
  faSpotify,
  faEnvelope,
  faExternalLinkAlt,
);

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  /* See styled components 'Referring to other components' docs  */
  /* Whenever a component is created or wrapped by the styled() factory function, it is also assigned a stable CSS class for use in targeting. */
  /* not working correctly */
  /* @media (max-width: 850px) {
    .Sidebar .Wrapper {
      top: 0;
      height: 200px;
      width: 100%;
      background-color: red;
    }
  } */
`;

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

const ContentWrapper = styled.div`
  margin-left: 200px;
  height: 100%;

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
      // not sure about initial page load
      sidebarOpen: false,
    };
  }

  // invoked immediately after component is mounted
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  // invoked immediately before component unmounted and destroyed
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  };

  toggleSidebar = () => {
    const { windowWidth } = this.state;
    // if window is bigger than 850px in width, don't want the sidebar to close ever
    if (windowWidth < 850) {
      this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
    }
  };

  render() {
    const { windowWidth, sidebarOpen } = this.state;
    return (
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Sidebar
            windowWidth={windowWidth}
            sidebarOpen={sidebarOpen}
            toggleSidebar={this.toggleSidebar}
          />
          <OverlayBackground
            sidebarOpen={sidebarOpen}
            onClick={this.toggleSidebar}
          />
          <ContentWrapper>
            <Topbar
              sidebarOpen={sidebarOpen}
              toggleSidebar={this.toggleSidebar}
            />
            <RouteContainer
              hideSidebar={this.hideSidebar}
              sidebarOpen={sidebarOpen}
            />
          </ContentWrapper>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
