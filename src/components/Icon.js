import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.a`
  /* background-color: black; */
  color: black;
  margin: 0.5em;
  border-radius: 50%;
  min-height: 1em;
  min-width: 1em;
`;

function Icon(props) {
  const { href, icon } = props;
  return (
    <Wrapper href={href}>
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  );
}

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ).isRequired,
};

export default Icon;
