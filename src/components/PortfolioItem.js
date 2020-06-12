import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: orange;
  text-align: center;
  min-height: 200px;
`;

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  toggleHover = () => {
    // see React documentation for setState
    this.setState((oldState) => ({ isHovered: !oldState.isHovered }));
  };

  render() {
    const { title, partial } = this.props;
    const { isHovered } = this.state;
    return (
      <Wrapper onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {isHovered ? (
          <Link to={`/portfolio/${partial}`}>
            <button type="button">Learn More</button>
          </Link>
        ) : (
          // <header>Hovered!</header>
          <header>{title}</header>
        )}
        {/* <p>{props.summary}</p> */}
      </Wrapper>
    );
  }
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  url: PropTypes.string,
  source: PropTypes.string,
  partial: PropTypes.string.isRequired,
};

PortfolioItem.defaultProps = {
  url: '',
  source: '',
};

export default PortfolioItem;
