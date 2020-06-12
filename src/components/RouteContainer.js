import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Landing from './Landing';
import PortfolioItemDetail from './PortfolioItemDetail';

function RouteContainer(props) {
  const { location } = props;

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={1000}>
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
      </CSSTransition>
    </TransitionGroup>
  );
}

RouteContainer.propTypes = {
  location: PropTypes.string.isRequired,
};

export default withRouter(RouteContainer);
