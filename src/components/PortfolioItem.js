import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: orange;
  text-align: center;
  min-height: 200px;
`;

const IconsWrapper = styled.div``;

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
    const { title } = this.props;
    const { isHovered } = this.state;
    return (
      <Wrapper onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {isHovered ? <header>Hovered!</header> : <header>{title}</header>}
        {/* <p>{props.summary}</p> */}
      </Wrapper>
    );
  }
}

// function PortfolioItem(props) {
//   const { title } = props;
//   return (
//     <Wrapper>
//       <header>{title}</header>
//       {/* <p>{props.summary}</p> */}
//     </Wrapper>
//   );
// }

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
