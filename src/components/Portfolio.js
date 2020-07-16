import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  /* max-width: 1100px; */
  margin: auto;
  }

  @media (max-width: ${(props) => props.sidebarBreakpoint}px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        title: 'Deaf Fire Art',
        summary:
          'Small business website for client who needed a platform to showcase their woodburning art to friends, family, and other customers. Features an image gallery page with a lightbox display and an email contact form. Image uploading and editing accessible via authentication. Images hosted in an Amazon S3 bucket.',
        url: 'http://www.deaf-fire-art.ca',
        source: 'https://github.com/JeMorriso/deaf-fire-art',
        partial: 'deaf-fire-art',
        backgroundImage: './img/deaffireart.jpg',
      },
      {
        title: 'In It To Winnik',
        summary:
          "I created this website for my fantasy hockey league in order to give league mates access to a richer dataset than the one provided by Yahoo. This was accomplished by cross-referencing data about the league from Yahoo's API with NHL player data, from NHL.com's API. The resulting database allows for flexible and performant searches in order to visualize a wide variety of scenarios in the browser.",
        url: 'https://in-it-to-winnik.herokuapp.com',
        source: 'https://github.com/JeMorriso/yahoo-hockey-data',
        partial: 'in-it-to-winnik',
        backgroundImage: './img/inittowinnik.png',
        lightBackground: true,
      },
    ];
  }

  renderItems() {
    return this.items.map((item) => (
      <PortfolioItem
        title={item.title}
        summary={item.summary}
        url={item.url}
        source={item.source}
        partial={item.partial}
        backgroundImage={item.backgroundImage}
        lightBackground={item.lightBackground}
        key={uuidv4()}
      />
    ));
  }

  render() {
    const { sidebarBreakpoint, smallDeviceBreakpoint } = this.props;
    return (
      <section>
        <SectionHeader
          title="Portfolio"
          smallDeviceBreakpoint={smallDeviceBreakpoint}
        />
        <Grid sidebarBreakpoint={sidebarBreakpoint}>{this.renderItems()}</Grid>
        <Switch>
          <Route path="/portfolio/:portfolioDetail">
            <h1>Hello world</h1>
          </Route>
        </Switch>
      </section>
    );
  }
}

Portfolio.propTypes = {
  sidebarBreakpoint: PropTypes.number.isRequired,
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default Portfolio;
