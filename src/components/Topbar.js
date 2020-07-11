import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  background-color: white;
  color: var(--color-secondary);
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.sidebarBreakpoint}px) {
    display: none;
  }
`;

const Icon = styled.div`
  min-height: 1em;
  min-width: 1em;
  background-color: #666;
`;

function Topbar(props) {
  const { toggleSidebar, sidebarBreakpoint } = props;
  return (
    <Wrapper id="topbar" sidebarBreakpoint={sidebarBreakpoint}>
      <Icon onClick={toggleSidebar} />
      <Brand />
    </Wrapper>
  );
}

Topbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  sidebarBreakpoint: PropTypes.number.isRequired,
};
export default Topbar;
