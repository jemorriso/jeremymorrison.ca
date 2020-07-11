import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Socials from './Socials';

const Wrapper = styled.div`
  color: ${(props) => (props.lightBackground ? 'black' : 'white')};
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
`;

// Wrapper is styled as Grid for square grid elements hack, so use another wrapper to make
// internal contents into flexbox
const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem;
`;

const PortfolioSocials = styled(Socials)`
  /*background-color: initial;*/
`;

const ProjectTitle = styled.header`
  font-size: 5rem;
  font-family: var(--font-display-3);
`;

const FlexFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Button = styled.button`
  border: solid;
  border-radius: 8px;
  padding: 0.5rem;
`;

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.socials = [
      {
        href: props.url,
        icon: ['fas', 'external-link-alt'],
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

  hoverOff = () => {
    this.setState({ isHovered: false });
  };

  hoverOn = () => {
    this.setState({ isHovered: true });
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
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <FlexWrapper>
          {isHovered ? (
            <fragment>
              <p>{summary}</p>
              <FlexFooter>
                <PortfolioSocials socials={this.socials} />
                <Link to={`/portfolio/${partial}`}>
                  <Button type="button">Learn More</Button>
                </Link>
              </FlexFooter>
            </fragment>
          ) : (
            <ProjectTitle>{title}</ProjectTitle>
          )}
        </FlexWrapper>
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
