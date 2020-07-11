import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
  width: 100%;
  min-height: 11rem;
  background-color: var(--color-secondary);
  color: white;
  font-family: var(--font-display-primary);
  font-size: 7rem;
  font-weight: 200;
  text-transform: uppercase;
  padding-top: 0.5rem;
  padding-left: 1rem;
`;

function SectionHeader(props) {
  const { title } = props;
  return <Header>{title}</Header>;
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
