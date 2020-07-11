import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.h1`
  font-family: var(--font-display-secondary);
  font-weight: 400;
  font-size: 4rem;
  padding-left: 1.6rem;
  margin: 1.6rem auto;
  /*letter-spacing: 0.1em;*/
  text-transform: uppercase;
  /* font-style: italic; */
`;

function Brand(props) {
  const { className } = props;
  return <Wrapper className={className}>Jeremy Morrison</Wrapper>;
}

Brand.propTypes = {
  className: PropTypes.string,
};

Brand.defaultProps = {
  className: '',
};

export default Brand;
