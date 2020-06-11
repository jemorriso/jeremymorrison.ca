import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  background-color: darkgray;
  text-align: center;
`;

function Footer(props) {
  return <Wrapper>&copy; Copyright 2020 Jeremy Morrison</Wrapper>;
}

export default Footer;
