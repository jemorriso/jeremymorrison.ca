import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #dc8bfc;
  min-height: 1em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  background-color: black;
  margin: 0.5em;
  border-radius: 50%;
  min-height: 1em;
  min-width: 1em;
`;

function Socials(props) {
  return (
    <Wrapper>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
    </Wrapper>
  );
}

export default Socials;
