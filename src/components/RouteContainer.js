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

const fadeoutDuration = 300;
const fadeinDuration = 300;

// contains background image and content in flex item
const FlexWrapper = styled.div`
  /* flex-grow 1 vs topbar's flex-grow 0, so this element will fill the rest of the flex container*/
  flex: 1 1 auto;
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* content in foreground  */
  z-index: 1;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    /* send background image to back */
    z-index: -2;

    height: 100%;
    width: 100%;

    content: '';
    display: block;

    background-image: url('./img/lions-gate.jpg');
    background-size: cover;
    filter: grayscale(100%) brightness(75%);
  }

  /* these classes are all being applied to the section with class name 'route-section */
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity ${fadeinDuration}ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity ${fadeoutDuration}ms ease-in;
  }

  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const TransitionWrapper = styled(TransitionGroup)`
  height: 100%;
`;

function RouteContainer(props) {
  const { location, socials, handleRouteChange, sidebarBreakpoint } = props;
  const contactSocials = socials.slice(0, 2);
  return (
    <FlexWrapper>
      <Wrapper>
        <TransitionWrapper className="transition-group">
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={{ enter: fadeinDuration, exit: fadeoutDuration }}
            // the component that is entering has the pathname of the new Route
            onEntering={() => handleRouteChange(location.pathname)}
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
                  <Portfolio sidebarBreakpoint={sidebarBreakpoint} />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/contact">
                  <Contact socials={contactSocials} />
                </Route>
                <Route path="/">
                  <Landing />
                </Route>
              </Switch>
            </section>
          </CSSTransition>
        </TransitionWrapper>
      </Wrapper>
    </FlexWrapper>
  );
}

RouteContainer.propTypes = {
  // Easiest way to avoid ESLint forbid-prop-types
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRouteChange: PropTypes.func.isRequired,
  sidebarBreakpoint: PropTypes.number.isRequired,
};

export default withRouter(RouteContainer);
