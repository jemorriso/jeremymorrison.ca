import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10%;
`;

const IntroWrapper = styled.div`
  margin-top: 8%;
  font-family: var(--font-display-primary);
  font-size: 10rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.smallDeviceBreakpoint}px) {
    margin-top: 0;
    font-size: 5rem;
  }
`;

const Intro = styled.header``;

const Statement = styled.p`
  line-height: 1.7;
  font-size: 2rem;

  @media (max-width: ${(props) => props.smallDeviceBreakpoint}px) {
    line-height: initial;
    font-size: initial;
  }
`;

function Landing(props) {
  const { smallDeviceBreakpoint } = props;
  return (
    <Wrapper>
      <IntroWrapper smallDeviceBreakpoint={smallDeviceBreakpoint}>
        <Intro>Hi,</Intro>
        <Intro>I'm Jeremy.</Intro>
      </IntroWrapper>
      <Statement smallDeviceBreakpoint={smallDeviceBreakpoint}>
        I'm a UVic Computer Science graduate experienced with working as part of
        an Agile team. I discovered web development through an online bootcamp,
        and that's been my passion since. I love learning and building -
        currently I'm working on gaining experience with React, and building a
        fantasy hockey web app. I'm keenly interested in opportunities involving
        working on a robust online platform in a fun and dynamic environment.
      </Statement>
    </Wrapper>
  );
}

Landing.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default Landing;
