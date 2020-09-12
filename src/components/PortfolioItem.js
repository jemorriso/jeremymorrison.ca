import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Socials from './Socials';

const Wrapper = styled.div`
  color: ${(props) => (props.lightBackground ? 'black' : 'white')};

  /* https://css-tricks.com/a-grid-of-logos-in-squares/ */
  display: grid;

  &::after {
    background-color: ${(props) => (props.lightBackground ? 'white' : 'black')};
    padding-bottom: 100%;
    content: '';
    display: block;
    z-index: -2;
  }

  &::before {
    content: '';
    /* force height to be at least as tall as it is wide - this is because padding-top and padding-bottom
     * are based on parent element's width
     * */
    /* https://css-tricks.com/aspect-ratio-boxes/ */
    padding-bottom: 100%;
    background-image: ${(props) => props.backgroundImage};
    background-size: cover;

    display: block;
    z-index: -1;
    opacity: 0.9;
  }

  &:hover::before {
    opacity: ${(props) => (props.lightBackground ? 0.2 : 0.7)};
  }

  &::before,
  &::after,
  & > * {
    /* overlap the pseudo-element and the content */
    grid-area: 1 / 1 / 2 / 2;
  }
`;

// Wrapper is styled as Grid for square grid elements hack, so use another wrapper to make
// internal contents into flexbox
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: ${(props) => (props.gridItemWidth < 540 ? '1.3' : '1.5')};
  font-size: ${(props) => (props.gridItemWidth < 540 ? '1.8rem' : '2rem')};
  margin: ${(props) => (props.gridItemWidth < 540 ? '5% 3rem' : '10% 4rem')};
`;

const PortfolioSocials = styled(Socials)`
  /*background-color: initial;*/
`;

const ProjectTitle = styled.header`
  font-size: 5rem;
  font-family: var(--font-display-3);
  margin: auto;
  margin-top: 40%;
`;

const FlexFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
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

  setTextParameters = (gridItemWidth) => {};

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
      gridItemWidth,
    } = this.props;
    const { isHovered } = this.state;

    const imgURL = `url('${backgroundImage}')`;
    return (
      <Wrapper
        backgroundImage={imgURL}
        lightBackground={lightBackground}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        className="grid-item"
      >
        {isHovered ? (
          <FlexWrapper gridItemWidth={gridItemWidth}>
            <p>{summary}</p>
            <FlexFooter>
              <PortfolioSocials socials={this.socials} fontSize="5rem" />
              <Link to={`/portfolio/${partial}`}>
                <Button type="button">Learn More</Button>
              </Link>
            </FlexFooter>
          </FlexWrapper>
        ) : (
          <ProjectTitle>{title}</ProjectTitle>
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
  gridItemWidth: PropTypes.number.isRequired,
};

PortfolioItem.defaultProps = {
  url: '',
  source: '',
  lightBackground: false,
};

export default PortfolioItem;
