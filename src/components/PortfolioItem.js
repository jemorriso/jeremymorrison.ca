import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Socials from './Socials';

const Wrapper = styled.div`
  /* background-color: orange; */
  color: ${(props) => (props.lightBackground ? 'black' : 'white')};
  text-align: center;
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
`;

const PortfolioSocials = styled(Socials)`
  /*background-color: initial;*/
`;

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.socials = [
      {
        href: props.url,
        icon: 'external-link-alt',
      },
      {
        href: props.source,
        icon: ['fab', 'github'],
      },
    ];
    this.state = {
      isHovered: false,
    };
  }

  toggleHover = () => {
    // see React documentation for setState
    this.setState((oldState) => ({ isHovered: !oldState.isHovered }));
  };

  render() {
    const {
      title,
      partial,
      backgroundImage,
      lightBackground,
      summary,
    } = this.props;
    const { isHovered } = this.state;

    const imgURL = `url('${backgroundImage}')`;
    return (
      <Wrapper
        backgroundImage={imgURL}
        lightBackground={lightBackground}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {isHovered ? (
          <div>
            <p>{summary}</p>
            <PortfolioSocials socials={this.socials} />
            <Link to={`/portfolio/${partial}`}>
              <button type="button">Learn More</button>
            </Link>
          </div>
        ) : (
          <header>{title}</header>
        )}
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
  backgroundImage: PropTypes.string.isRequired,
  lightBackground: PropTypes.bool,
};

PortfolioItem.defaultProps = {
  url: '',
  source: '',
  lightBackground: false,
};

export default PortfolioItem;
