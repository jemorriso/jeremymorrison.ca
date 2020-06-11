import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: lightgrey;
`;

const Statement = styled.div`
  font-size: 3em;
`;

function Landing(props) {
  return (
    <Wrapper>
      <Statement>Jeremy Morrison</Statement>
    </Wrapper>
  );
}

export default Landing;
