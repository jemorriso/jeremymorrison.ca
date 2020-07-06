import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.footer`
  /* since element is positioned absolutely, need to set width 100% of parent element instead of relying on implicit width */
  width: 100%;
  background-color: #353135;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  height: 2.5rem;
`;

const MarginTopWrapper = styled(Wrapper)`
  bottom: unset;
  top: ${(props) => props.contentHeight};
`;

function Footer(props) {
  const { contentHeight, windowHeight } = props;
  const copyMessage = '&copy; Copyright 2020 Jeremy Morrison';
  if (contentHeight <= windowHeight) {
    console.log('smaller');
  } else {
    console.log('bigger');
  }
  return contentHeight <= windowHeight ? (
    <Wrapper>{copyMessage}</Wrapper>
  ) : (
    <MarginTopWrapper contentHeight={`${contentHeight}px`}>
      {copyMessage}
    </MarginTopWrapper>
  );
}

Footer.propTypes = {
  contentHeight: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
};

export default Footer;
