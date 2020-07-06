import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  /* font-style: italic; */
`;

function Brand(props) {
  return (
    <Wrapper>
      <Link to="/">Jeremy Morrison</Link>
    </Wrapper>
  );
}

export default Brand;
