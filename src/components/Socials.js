import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Icon from './Icon';

const Wrapper = styled.div`
  padding-bottom: 1.6rem;
  display: flex;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;
`;

function Socials(props) {
  // in order for any styled component to extend Socials, must pass className through to the rendered component
  // that the style is meant to be applied to (see docs)
  const { socials, fontSize, className } = props;
  return (
    // the rendered component that extended styles are adding style to
    <Wrapper className={className}>
      {socials.map((el) => (
        <Icon
          href={el.href}
          target="_blank"
          rel="noopener noreferrer"
          key={uuidv4()}
          icon={el.icon}
          fontSize={fontSize}
        />
      ))}
    </Wrapper>
  );
}

Socials.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  fontSize: PropTypes.string,
};

Socials.defaultProps = {
  className: '',
  fontSize: 'initial',
};

export default Socials;
