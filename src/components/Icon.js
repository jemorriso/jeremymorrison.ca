import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.a`
  margin: 0.5em;
  border-radius: 50%;
  min-height: 1em;
  min-width: 1em;
  font-size: ${(props) => props.fontSize};

  cursor: pointer;
`;

function Icon(props) {
  const { as = 'a', href, icon, fontSize, target } = props;
  return (
    <Wrapper
      as={as}
      href={as === 'a' ? href : undefined}
      fontSize={fontSize}
      target={target}
    >
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  );
}

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  as: PropTypes.string,
  fontSize: PropTypes.string,
  target: PropTypes.string,
};

Icon.defaultProps = {
  as: 'a',
  fontSize: 'initial',
  target: '',
};
export default Icon;
