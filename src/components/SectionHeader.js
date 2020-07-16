import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  height: 11rem;
  background-color: var(--color-secondary);
  color: white;
  font-family: var(--font-display-primary);
  font-size: 7rem;
  font-weight: 200;
  text-transform: uppercase;
  padding-top: 0.5rem;
  padding-left: 1rem;

  @media (max-width: ${(props) => props.smallDeviceBreakpoint}px) {
    height: 8rem;
    font-size: 5rem;
  }
`;

function SectionHeader(props) {
  const { title, smallDeviceBreakpoint } = props;
  return (
    <Wrapper smallDeviceBreakpoint={smallDeviceBreakpoint}>{title}</Wrapper>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default SectionHeader;
