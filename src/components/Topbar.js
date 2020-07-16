import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Brand from './Brand';
import Icon from './Icon';

const Wrapper = styled.div`
  /* flex-grow default 0; will not expand to fill rest of container */
  flex: 0 1 auto;

  width: 100%;
  background-color: white;
  color: var(--color-secondary);
  display: flex;
  justify-content: left;
  align-items: center;

  @media (min-width: ${(props) => props.sidebarBreakpoint}px) {
    display: none;
  }
`;

const TopbarBrand = styled(Brand)`
  margin: 0;

  @media (max-width: ${(props) => props.smallDeviceBreakpoint}px) {
    font-size: 3rem;
  }
`;

function Topbar(props) {
  const { toggleSidebar, sidebarBreakpoint, smallDeviceBreakpoint } = props;
  return (
    <Wrapper id="topbar" sidebarBreakpoint={sidebarBreakpoint}>
      {/* wrap icon with div because click handler not being triggered on Icon for some reason */}
      <div onClick={toggleSidebar}>
        {/* pass empty string for href because href is required prop */}
        <Icon as="button" href="" icon={['fas', 'bars']} fontSize="2em" />
      </div>
      <Link to="/">
        <TopbarBrand smallDeviceBreakpoint={smallDeviceBreakpoint} />
      </Link>
    </Wrapper>
  );
}

Topbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  sidebarBreakpoint: PropTypes.number.isRequired,
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default Topbar;
