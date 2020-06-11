import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
  width: 100%;
  min-height: 1em;
  background-color: lightseagreen;
`;

function SectionHeader(props) {
  const { title } = props;
  return <Header>{title}</Header>;
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
