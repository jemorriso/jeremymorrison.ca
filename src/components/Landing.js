import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10%;
`;

const IntroWrapper = styled.div`
  margin-top: 8%;
`;

const Intro = styled.header`
  font-family: var(--font-display-primary);
  font-size: 10rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const Statement = styled.p`
  line-height: 1.7;
  font-size: 2rem;
`;

function Landing(props) {
  return (
    <Wrapper>
      <IntroWrapper>
        <Intro>Hi,</Intro>
        <Intro>I'm Jeremy.</Intro>
      </IntroWrapper>
      <Statement>
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

export default Landing;
