import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.footer`
  /* since element is positioned absolutely, need to set width 100% of parent element instead of relying on implicit width */
  width: 100%;
  background-color: var(--color-tertiary);
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
  // use unicode copyright symbol - if use html entity, need to dangerously set inner HTML (React method)
  const copyMessage = '\u00a9 Copyright 2020 Jeremy Morrison';
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
