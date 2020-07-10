import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 4rem;
  padding-left: 1.6rem;
  margin: 1.6rem auto;
  /*letter-spacing: 0.1em;*/
  text-transform: uppercase;
  /* font-style: italic; */
`;

function Brand(props) {
  return <Wrapper>Jeremy Morrison</Wrapper>;
}

export default Brand;
