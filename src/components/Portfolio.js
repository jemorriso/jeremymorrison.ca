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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores qui accusantium, fugiat non est incidunt nobis quis consequatur quidem labore, minima deleniti sed amet aut? Dolores quas ex odit temporibus nostrum, voluptatum beatae quidem nam ipsa veniam deleniti earum velit porro quis doloremque similique ducimus! Minima accusantium id quia.',
        url: 'http://www.deaf-fire-art.ca',
        source: 'https://github.com/JeMorriso/deaf-fire-art',
        partial: 'deaf-fire-art',
        backgroundImage: './img/deaffireart.jpg',
      },
      {
        title: 'In It To Winnik',
        summary:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores qui accusantium, fugiat non est incidunt nobis quis consequatur quidem labore, minima deleniti sed amet aut? Dolores quas ex odit temporibus nostrum, voluptatum beatae quidem nam ipsa veniam deleniti earum velit porro quis doloremque similique ducimus! Minima accusantium id quia.',
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
    const { sidebarBreakpoint } = this.props;
    return (
      <section>
        <SectionHeader title="Portfolio" />
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
};

export default Portfolio;
