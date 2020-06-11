import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: orange;
  text-align: center;
  min-height: 200px;
`;

const IconsWrapper = styled.div``;

function PortfolioItem(props) {
  const { title } = props;
  return (
    <Wrapper>
      <header>{title}</header>
      {/* <p>{props.summary}</p> */}
    </Wrapper>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  url: PropTypes.string,
  source: PropTypes.string.isRequired,
};

PortfolioItem.defaultProps = {
  url: '',
};

export default PortfolioItem;
