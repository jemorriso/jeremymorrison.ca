import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Brand from './Brand';
import Icon from './Icon';

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

function Topbar(props) {
  const { toggleSidebar, sidebarBreakpoint } = props;
  return (
    <Wrapper id="topbar" sidebarBreakpoint={sidebarBreakpoint}>
      {/* wrap icon with div because click handler not being triggered on Icon for some reason */}
      <div onClick={toggleSidebar}>
        {/* pass empty string for href because href is required prop */}
        <Icon as="button" href="" icon={['fas', 'bars']} />
      </div>
      <Brand />
    </Wrapper>
  );
}

Topbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  sidebarBreakpoint: PropTypes.number.isRequired,
};
export default Topbar;
