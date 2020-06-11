import React from 'react';
// styled here is the local alias for the default export, while createGlobalStyle is another export from styled-components
import styled, { createGlobalStyle } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Section from './components/Section';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Landing from './components/Landing';

import './css/reset.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  height: 1px;
`;

const ContentWrapper = styled.div`
  margin-left: 200px;
  background-color: #d3d3d3;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'About',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, sapiente. Quae laudantium, asperiores aspernatur unde quo sint, sit nam ipsa cumque mollitia neque illum cum commodi dolores aliquam corrupti. Dolorum mollitia eligendi reprehenderit unde rerum quod sint earum, dolores consequatur, quia rem, adipisci perferendis soluta nam id explicabo. Cum, quos? Similique voluptatibus rem, iure at aut consequuntur fugiat alias accusamus nobis dolorum nihil illo id consequatur, molestiae assumenda sequi. Consequuntur recusandae alias ratione quo temporibus porro natus laudantium quia, incidunt cupiditate veritatis, tempore doloribus distinctio. Aperiam quam dolorum repellendus fugit repellat nisi unde. Distinctio odit rerum sunt! Et dolorem laboriosam incidunt deserunt consequuntur numquam quas tempore temporibus iusto impedit facilis eius cum voluptate ullam nesciunt nostrum minima, illo, ipsum fugit saepe blanditiis nihil similique. Quos nisi necessitatibus ut odit provident, consectetur quasi earum illo, ipsam vero dolore minima et, incidunt praesentium maxime nostrum distinctio alias minus quidem. Voluptas magnam incidunt libero! Sunt, nisi! Illum ratione sit molestias praesentium officia veritatis natus dolorum autem, sed dignissimos, incidunt error! Tempore cupiditate quasi officiis atque. Error eveniet maiores velit culpa accusantium accusamus cum possimus corrupti impedit quo molestias, doloremque illo atque facere minima ducimus porro quibusdamsapiente consectetur reiciendis vel! Neque, tenetur sint!',
        },
      ],
    };
  }

  renderSections() {
    const { sections } = this.state;
    return sections.map((sectionInfo) => (
      <Section
        title={sectionInfo.title}
        content={sectionInfo.content}
        key={uuidv4()}
      />
    ));
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Sidebar />
          <ContentWrapper>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
            <Footer />
          </ContentWrapper>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
