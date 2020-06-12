import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  height: 90%;
  width: 100%;
  /* background-color: #bebebe; */
`;

const Header = styled.header`
  width: 100%;
  min-height: 1em;
  background-color: #303030;
`;

const Content = styled.div`
  background-color: #202020;
`;

function Section(props) {
  const { title, content } = props;
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Content>{content}</Content>
    </Wrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Section;
