import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Landing from './Landing';
import PortfolioItemDetail from './PortfolioItemDetail';
import Footer from './Footer';

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #dddddd;
  }
`;

function RouteContainer(props) {
  const { location } = props;

  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 1000, exit: 1000 }}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path="/about">
                <About />
              </Route>
              {/* TODO: clean up routing order */}
              <Route path="/portfolio/:portfolioDetail">
                <PortfolioItemDetail />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
            <Footer />
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

RouteContainer.propTypes = {
  // Easiest way to avoid ESLint forbid-prop-types
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(RouteContainer);
