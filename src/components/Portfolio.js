import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

  & > div {
    display: grid;
  }

  & > div::before {
    content: '';
    /* force height to be at least as tall as it is wide */
    padding-bottom: 100%;
    display: block;
  }

  & > div::before,
  & > div > * {
    /* overlap the pseudo-element and the content */
    grid-area: 1 / 1 / 2 / 2;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
      ],
    };
  }

  renderItems() {
    const { items } = this.state;
    return items.map((item) => (
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
    return (
      <section>
        <SectionHeader title="Portfolio" />
        <Grid>{this.renderItems()}</Grid>

        <Switch>
          <Route path="/portfolio/:portfolioDetail">
            <h1>Hello world</h1>
          </Route>
        </Switch>
      </section>
    );
  }
}

export default Portfolio;
