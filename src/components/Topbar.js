import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  background-color: white;
  color: #66b0b7;
  display: flex;
  justify-content: center;

  @media (min-width: 850px) {
    display: none;
  }
`;

const Icon = styled.div`
  min-height: 1em;
  min-width: 1em;
  background-color: #666;
`;

function Topbar(props) {
  const { toggleSidebar } = props;
  return (
    <Wrapper id="topbar">
      <Icon onClick={toggleSidebar} />
      <Brand />
    </Wrapper>
  );
}

Topbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
export default Topbar;
