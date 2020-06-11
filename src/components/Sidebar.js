import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Brand from './Brand';
import Socials from './Socials';

const Wrapper = styled.div`
  background-color: lightblue;
  height: 100%;
  position: fixed;
  left: 0;
  width: 200px;
`;

function Sidebar(props) {
  return (
    <Wrapper>
      <Brand />
      <Navbar />
      <Socials />
    </Wrapper>
  );
}

export default Sidebar;
