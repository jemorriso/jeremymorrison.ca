import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
  width: 100%;
  min-height: 4em;
  background-color: #66b0b7;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 3em;
  font-weight: 200;
  text-transform: uppercase;
`;

function SectionHeader(props) {
  const { title } = props;
  return <Header>{title}</Header>;
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
