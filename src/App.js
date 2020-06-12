import React from 'react';
// styled here is the local alias for the default export, while createGlobalStyle is another export from styled-components
import styled, { createGlobalStyle } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Sidebar from './components/Sidebar';
import RouteContainer from './components/RouteContainer';

import './css/reset.css';

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

const ContentWrapper = styled.div`
  margin-left: 200px;
  background-color: #d3d3d3;

  @media (max-width: 850px) {
    margin-left: 0;
    margin-top: 200px;
  }
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Sidebar />
        <ContentWrapper>
          <RouteContainer />
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
}

export default App;
